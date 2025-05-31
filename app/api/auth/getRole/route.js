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

    const userRoles = decoded.payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] || [];

    const role = Array.isArray(userRoles) ? userRoles[0] : userRoles;

    return NextResponse.json({ role }, { status: 200 });

  } catch (error) {
    console.error('Invalid or expired token:', error);
    return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
  }
}
