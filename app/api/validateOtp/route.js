import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req) {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('token');
        const otp_token = cookieStore.get('otp_token');
        const tok = token ||  otp_token ||"invalid";
        

        if (tok && tok!="invalid") {
            const body = await req.json();
            const otp=body.otp;
            const date=body.date;
            const { payload } = await jwtVerify(tok.value, new TextEncoder().encode(JWT_SECRET));
            const email = payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'] || payload['email']  || null;
            const resendRes = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/otp/ValidateOtp`,
                {
                    method: "POST",
                    credentials: "include",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email,
                        otp,
                        date
                    }),
                }
            );
            debugger;
            console.log(resendRes.status)
            if (resendRes.ok)
                return new Response(JSON.stringify("Otp Send Succefully"), { status: 200 });
        }
        return new Response(JSON.stringify("No Email Found"), { status: 400 });

    } catch (error) {
        console.error('Invalid or expired token:', error);
        return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
    }
}
