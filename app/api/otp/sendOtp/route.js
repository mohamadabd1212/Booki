import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(req) {
    try {
        const cookieStore = cookies();
        const tokenCookie = cookieStore.get('token');
        const otpCookie = cookieStore.get('otp_token');
        const tok = otpCookie?.value || tokenCookie?.value;
        const { payload } = await jwtVerify(tok, new TextEncoder().encode(JWT_SECRET));
        const email = payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'] || payload['email'] || null;
        const resendRes = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/otp/resendOtp`,
            {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            }
        );
        if (resendRes.ok) {
            return new NextResponse(JSON.stringify("Request Sent" ), { status: 200 });
        } else {
            const data= await resendRes.json();
            return new NextResponse(JSON.stringify(data ), { status: 400 });
        }
    } catch (error) {
        return new NextResponse(JSON.stringify('Invalid Request' ), { status: 500 });
    }
}
