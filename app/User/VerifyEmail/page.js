// VerifyEmail.js or .jsx
"use client";

import { useState } from "react";
import OtpInput from "@/components/Otp"; // Assuming OtpInput is in the same directory
import { useRouter } from "next/navigation";

export default function VerifyEmail() {
  const [otpValid, setOtpValid] = useState(false);
  const router = useRouter();

  const handleOtpSubmit = async () => {
    try {
      const emaila = await fetch("/api/auth/getEmail");
      const {email} = await emaila.json();
      // API call to verify the email
      const verificationRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/check/verifyEmailValidation`,
        {
          method: "POST", // Assuming it's a GET request
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );
      const data = await verificationRes.json();
      if (verificationRes.ok) {
        const token = data.token;
        await fetch('/api/set-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });
        router.push("/User/dashboard");
      } else {
        window.alert("email already Verified");
      }
    } catch (err) {
      console.error("Error during email verification:", err);
    }
  };

  return (
    <div className="container">
      <h1>Verify Your Email</h1>
      {/* Use the OtpInput component and pass the onSubmit prop */}
      <OtpInput onSubmit={handleOtpSubmit} />
    </div>
  );
}
