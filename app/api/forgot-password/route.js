import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

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

      if (!token) {
        return NextResponse.json({ message: 'No token received from backend' }, { status: 400 });
      }

      cookies().set('otp_token', token, {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });

      return NextResponse.json({ message: 'Token set in cookie' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Token Not Set' }, { status: 400 });
    }

  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: 'Invalid request' }, { status: 500 });
  }
}
