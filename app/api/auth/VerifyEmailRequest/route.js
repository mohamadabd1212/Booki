import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "";

export async function GET() {
    try {
        const cookieStore = cookies();
        const Token = cookieStore.get("token");
        const { payload } = await jwtVerify(
            Token.value,
            new TextEncoder().encode(JWT_SECRET)
        );
        const email = payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"] ||
            null;
        const apiResponse = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/check/EmailVerfificationRequest`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            }
        );
        if (apiResponse.ok) {
            const response = new NextResponse(JSON.stringify("Request Sent"), { status: 200 });
            return response;

        }
        else {
            return new NextResponse(JSON.stringify("Error Sending The Request"), { status: 400 });
        }
    } catch (error) {
        return new NextResponse(JSON.stringify("Invalid Request"),
            { status: 500 }
        );
    }
}
