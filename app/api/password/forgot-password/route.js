import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { email } = await req.json();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/change/ResetPasswordRequest`,
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      const token = data.token;
      cookies().set('otp_token', token, {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, 
        secure:process.env.NODE_ENV==="production"
      });

      return new NextResponse(JSON.stringify('Request Sent' ), { status: 200 });
    } else {
      return new NextResponse(JSON.stringify('Error Sending the Request' ), { status: 400 });
    }

  } catch (error) {
    return new NextResponse(JSON.stringify('Invalid Request' ), { status: 500 });
  }
}
