import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "";

export async function GET() {
  try {
    const cookieStore = cookies();
    const otpToken = cookieStore.get("otp_token");
    const { payload } = await jwtVerify(
      otpToken.value,
      new TextEncoder().encode(JWT_SECRET)
    );
    const email =payload["email"] ||
      null;
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
      return new NextResponse(JSON.stringify("Error Sending the Request" ), { status: 400 });
    }

    const data = await apiResponse.json();
    const token = data.token;


    const response = new NextResponse(JSON.stringify("Request Sent" ),
      { status: 200 }
    );

    response.cookies.delete("otp_token", { path: "/" });

    response.cookies.set("reset", token, {
      httpOnly: true,
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 2, // 2 minutes
      secure: process.env.NODE_ENV === "production",
    });

    return response;
  } catch (error) {
    return new NextResponse(JSON.stringify("Invalid Request" ),
      { status: 500 }
    );
  }
}
