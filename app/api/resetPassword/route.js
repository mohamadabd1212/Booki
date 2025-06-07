import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req) {
    try {
        const cookieStore = cookies();
        const token = cookieStore.get('reset');
        const { payload } = await jwtVerify(token.value, new TextEncoder().encode(JWT_SECRET));
        const email = payload['email'] || null;
        const resToken=payload['actort']
        const body = await req.json();
        const password = body.password;
        console.log(password)
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/change/ResetPassword`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email,token:resToken,password:password }),
        });
        if (res.ok) {
            return new NextResponse(JSON.stringify("Request Sent" ), { status: 200 });
        } else {
            return new NextResponse(JSON.stringify("Error Sending the Request"), { status: 400 });
        }
    } catch (error) {
        return new NextResponse(JSON.stringify('Invalid Request' ), { status: 500 });
    }
}
