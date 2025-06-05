import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "";

export async function GET() {
  try {
    const cookieStore = cookies();
    const otpToken = cookieStore.get("otp_token");

    if (!otpToken) {
      return NextResponse.json(
        { error: "No OTP token found" },
        { status: 400 }
      );
    }

    const { payload } = await jwtVerify(
      otpToken.value,
      new TextEncoder().encode(JWT_SECRET)
    );
    console.log(payload)
    const email =payload["email"] ||
      null;
console.log(email)
    if (!email) {
      return NextResponse.json(
        { error: "Invalid token payload" },
        { status: 400 }
      );
    }

    // Call external API to validate reset password request
    const apiResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/change/ValidateResetPasswordRequest`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (!apiResponse.ok) {
      return NextResponse.json({ error: "Token Not Set" }, { status: 400 });
    }

    const data = await apiResponse.json();
    const token = data.token;

    // Prepare response with cookies
    const response = NextResponse.json(
      { message: "Token set in cookie" },
      { status: 200 }
    );

    // Delete old otp_token cookie
    response.cookies.delete("otp_token", { path: "/" });

    // Set new reset token cookie, httpOnly, secure if production, etc.
    response.cookies.set("reset", token, {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 2, // 2 minutes
      secure: process.env.NODE_ENV === "production",
    });

    return response;
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 500 }
    );
  }
}
