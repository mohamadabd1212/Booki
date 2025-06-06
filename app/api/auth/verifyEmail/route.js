import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "";

export async function GET() {
    try {
        const cookieStore = cookies();
        const Token = cookieStore.get("token");

        if (!Token) {
            return NextResponse.json(
                { error: "No OTP token found" },
                { status: 400 }
            );
        }

        const { payload } = await jwtVerify(
            Token.value,
            new TextEncoder().encode(JWT_SECRET)
        );
        console.log(payload)
        const email = payload["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"] ||
            null;
        console.log(email)
        if (!email) {
            return NextResponse.json(
                { error: "Invalid token payload" },
                { status: 400 }
            );
        }
        console.log(email)
        // Call external API to validate reset password request
        const apiResponse = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/check/verifyEmailValidation`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            }
        );
        console.log(apiResponse)
        if (apiResponse.ok) {
            const data = await apiResponse.json();
            const token = data.token;
            // Prepare response with cookies
            console.log(token)
            const response = NextResponse.json({ message: "Token Set" }, { status: 200 });
            response.cookies.set("token", token, {
                httpOnly: true,
                sameSite: "strict",
                path: "/",
                maxAge: 60 * 2, // 2 minutes
            });
            return response;

        }
        else {
            return NextResponse.json({ error: "Token Not Set" }, { status: 400 });
        }
    } catch (error) {
        console.error("Error in API route:", error);
        return NextResponse.json(
            { error: "Invalid request" },
            { status: 500 }
        );
    }
}
