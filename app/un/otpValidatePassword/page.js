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

        const response =await fetch('/api/password/forgot-password-validate', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (response.ok) {
          router.push("/un/resetPassword");
        }
       else {
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
