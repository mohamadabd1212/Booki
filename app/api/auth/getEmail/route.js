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
   const { payload } = await jwtVerify(token.value, new TextEncoder().encode(JWT_SECRET));
   console.log(payload);
       const email = payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'] || null;
       return new Response(JSON.stringify({ email }), { status: 200 });


  } catch (error) {
    console.error('Invalid or expired token:', error);
    return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
  }
}
