import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';
const JWT_SECRET = process.env.JWT_SECRET;
export async function GET(req) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('token');
    if (!token || !token.value) {
      return new NextResponse(JSON.stringify("Not Authenticated"), { status: 401 });
    }
    const decoded = await jwtVerify(token.value, new TextEncoder().encode(JWT_SECRET));
    const isVerified = decoded.payload['http://schemas.xmlsoap.org/ws/2009/09/identity/claims/actor'];
    if (decoded && isVerified === "True") {
      return new NextResponse(JSON.stringify("Auth,verified"), { status: 200 });
    } else if (decoded && isVerified !== "True") {
      return new NextResponse(JSON.stringify("Auth,Not verified"), { status: 201 });
    } 
  } catch (error) {
    return new NextResponse(JSON.stringify("Invalid Request"), { status: 500 });
  }
}
