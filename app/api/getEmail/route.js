// app/api/getuserid/route.js

import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(req) {
  const cookieStore = cookies();

  // Try to get token from 'otp_token' first, fallback to 'reset'
  const otpToken = cookieStore.get('otp_token');
  const resetToken = cookieStore.get('reset');
  
  const token = otpToken?.value || resetToken?.value;

  if (!token) {
    return new Response(JSON.stringify({ userId: null }), { status: 401 });
  }

  try {
    // Verify JWT token
    const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
    console.log(payload);

    if (otpToken) {
      // When 'otp_token' is used, return email only
      const email = payload['email'] || null;
      return new Response(JSON.stringify({ email }), { status: 200 });
    } else if (resetToken) {
      // When 'reset' is used, return both email and actor
      const email = payload['email'] || null;
      const actor = payload['actort'] || null;
      return new Response(JSON.stringify({ email, token: actor }), { status: 200 });
    }
  } catch (error) {
    console.error('Error verifying JWT:', error);
    return new Response(JSON.stringify({ userId: null }), { status: 401 });
  }
}
