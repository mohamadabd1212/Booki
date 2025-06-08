import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { username,email, password } = body;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/Register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username,email, password }),
    });

    if (!res.ok) {
      const data = await res.json();
      return new NextResponse(JSON.stringify(data), { status: 400 });
    }

    return new NextResponse(JSON.stringify('Request Sent' ),{status:200});
  } catch (error) {
    return new NextResponse(JSON.stringify('Internal server error' ), { status: 500 });
  }
}
