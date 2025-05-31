// app/api/set-token/route.ts

import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const token = body.token;

    if (!token) {
      return NextResponse.json({ error: 'Token is required' }, { status: 400 });
    }

    // Set the JWT as a cookie
    cookies().set('otp_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 2, // 1 week
    });

    return NextResponse.json({ message: 'Token set in cookie' });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 500 });
  }
}
