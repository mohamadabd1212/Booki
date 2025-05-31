// app/api/getuserid/route.js

import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;

// Export GET handler
export async function GET(req) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token) {
    return new Response(JSON.stringify({ userId: null }), { status: 401 });
  }

  try {
    // Verify the JWT token
    const { payload } = await jwtVerify(token.value, new TextEncoder().encode(JWT_SECRET));
    const userId = payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'] || null;
    return new Response(JSON.stringify({ userId }), { status: 200 });
  } catch (error) {
    console.error('Error verifying JWT:', error);
    return new Response(JSON.stringify({ userId: null }), { status: 401 });
  }
}
