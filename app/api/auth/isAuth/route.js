import { cookies } from 'next/headers';
import { jwtVerify } from 'jose'; // make sure this import is correct
import { NextResponse } from 'next/server';
const JWT_SECRET = process.env.JWT_SECRET;
export async function GET(req) {
  try {
    const cookieStore =await  cookies();
    const token = cookieStore.get('token');
    if (!token) {
      return new Response(JSON.stringify(null), { status: 401 });
    }

    const decoded = await jwtVerify(token.value, new TextEncoder().encode(JWT_SECRET));
    const isVerified = decoded.payload['http://schemas.xmlsoap.org/ws/2009/09/identity/claims/actor'];
    console.log(decoded)
    console.log(isVerified)
    if (decoded && isVerified === "True") {
      return new NextResponse(JSON.stringify("Auth,verified"), { status: 200 });
    } else if (decoded && isVerified !== "True") {
      return new NextResponse(JSON.stringify("Auth,Not verified"), { status: 201 });
    } else {
      return new NextResponse(JSON.stringify("Not Auth,Not verified"), { status: 401 });
    }
  } catch (error) {
    console.error('JWT verification failed:', error);
    return new NextResponse(JSON.stringify(null), { status: 500 });
  }
}
