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

      // API call to verify the email
      const verificationRes = await fetch(`/api/auth/verifyEmail`,
        {
          method: "GET", // Assuming it's a GET request
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (verificationRes.ok) {
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
