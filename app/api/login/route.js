import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return new NextResponse(JSON.stringify('Error Sending the Request' ), { status: 400 });
    }

    const data = await res.json();
    const token = data.token;

    cookies().set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week,
      secure:process.env.NODE_ENV==="production"
    });

    return new NextResponse(JSON.stringify('Request Sent' ),{status:200});
  } catch (error) {
    return new NextResponse(JSON.stringify('Internal server error' ), { status: 500 });
  }
}
