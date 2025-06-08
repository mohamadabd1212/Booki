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

    const data = await res.json();

    if (!res.ok) {
      return new NextResponse(JSON.stringify(data), { status: 400 });
    }

    const token = data.token; // ⬅️ make sure this matches your API's response

    if (!token) {
      return new NextResponse(JSON.stringify('Missing token in response'), { status: 500 });
    }

    cookies().set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return new NextResponse(JSON.stringify('Request Sent'), { status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return new NextResponse(JSON.stringify('Internal server error'), { status: 500 });
  }
}
