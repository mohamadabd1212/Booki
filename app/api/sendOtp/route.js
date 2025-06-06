import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(req) {
    try {
        // NO await here:
        const cookieStore = cookies();

        const tokenCookie = cookieStore.get('token');
        const otpCookie = cookieStore.get('otp_token');

        // Choose token (otp_token preferred):
        const tok = otpCookie?.value || tokenCookie?.value;

        if (!tok) {
            return NextResponse.json({ error: "No valid token found" }, { status: 400 });
        }

        const { payload } = await jwtVerify(tok, new TextEncoder().encode(JWT_SECRET));
        const email = payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'] || payload['email'] || null;
        console.log(email)

        if (!email) {
            return NextResponse.json({ error: "Email not found in token" }, { status: 400 });
        }

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
            return NextResponse.json({ message: "Otp Sent Successfully" }, { status: 200 });
        } else {
            const errorText = await resendRes.text();
            return NextResponse.json({ error: `Failed to resend OTP: ${errorText}` }, { status: resendRes.status });
        }
    } catch (error) {
        console.error('Invalid or expired token:', error);
        return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
    }
}
