import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET;

export async function POST(req) {
    try {
        // NO await here:

        const cookieStore = cookies();


        const token = cookieStore.get('reset');

        if (!token) {
            return NextResponse.json({ error: "No valid token found" }, { status: 400 });
        }

        const { payload } = await jwtVerify(token.value, new TextEncoder().encode(JWT_SECRET));
        console.log(payload)
        const email = payload['email'] || null;
        const resToken=payload['actort']
        console.log(email)

        if (!email) {
            return NextResponse.json({ error: "Email not found in token" }, { status: 400 });
        }
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
            return NextResponse.json({ message: "Password reset Successfully" }, { status: 200 });
        } else {
            const errorText = await res.text();
            return NextResponse.json({ error: `Password reset Successfully: ${errorText}` }, { status: res.status });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
    }
}
