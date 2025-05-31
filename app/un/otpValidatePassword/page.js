"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import OtpInput from "../../../components/Otp"; // Import the OtpInput component

export default function ValidateOtBeforePassword() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleOtpSubmit = async () => {
    try {
      setLoading(true);

      // Step 1: Fetch the email after successful OTP validation
      const emailRes = await fetch("/api/getEmail");
      if (!emailRes.ok) throw new Error("Unable to fetch email");
      const { email } = await emailRes.json();

      // Step 2: Validate the password reset request with the email only
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/change/ValidateResetPasswordRequest`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );
      const data= await response.json();
      if (response.ok) {
        const token=data.token;
        await fetch('/api/set-resetToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });
        router.push("/un/resetPassword");
      } else {
        const result = await response.json();
        setError(result.message || "Something went wrong");
      }
    } catch (err) {
      setError(err.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Enter the one-time password we sent to your email</h2>
      </div>

      {/* Using the OtpInput component */}
      <OtpInput onSubmit={handleOtpSubmit} />

      {error && <div className="text-danger text-center mt-2">{error}</div>}
    </div>
  );
}
