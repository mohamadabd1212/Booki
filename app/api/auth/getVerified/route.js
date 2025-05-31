import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(req) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) {
    return NextResponse.json({ error: 'No token found' }, { status: 401 });
  }

  try {
    const decoded = await jwtVerify(token.value, new TextEncoder().encode(JWT_SECRET));

    // Log the entire payload
    console.log('Decoded JWT payload:', decoded.payload);

    const isVerified = decoded.payload['http://schemas.xmlsoap.org/ws/2009/09/identity/claims/actor'];
    if ( isVerified === "True") {
      return NextResponse.json({ verified: true }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'User not verified' }, { status: 401 });
    }

  } catch (error) {
    console.error('Invalid or expired token:', error);
    return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
  }
}

