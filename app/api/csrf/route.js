// app/api/csrf/route.js (or /app/api/csrf/route.ts if TS)

import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function GET(request) {
  const cookieHeader = request.headers.get('cookie') || '';
  const csrfExists = /csrf_token=/.test(cookieHeader);

  const response = NextResponse.json({ message: 'CSRF token set' });

  if (!csrfExists) {
    response.cookies.set('csrf_token', uuidv4(), {
      path: '/',
      httpOnly: false,
      sameSite: 'Lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 , // 7 days, adjust as needed
    });
  }

  return response;
}
