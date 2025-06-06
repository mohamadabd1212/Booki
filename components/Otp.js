"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function OtpInput({ onSubmit }) {
  
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resendError, setResendError] = useState("");

  const pathname = usePathname();
  const router = useRouter();


  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (otp.includes("")) return;

    try {
      setLoading(true);

      const response = await fetch(
        `/api/validateOtp`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            otp: otp.join(""),
            date: new Date().toISOString(),
          }),
        }
      );

      if (response.ok) {
        await onSubmit();
      } else {
        const result = await response.json();
        setError(result.message || "Invalid OTP");
      }
    } catch (err) {
      setError(err.message || "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResendError("");
    try {
      const resendRes = await fetch(
        `/api/sendOtp`,
        {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!resendRes.ok) {
        const result = await resendRes.json();
        throw new Error(result.message || "Failed to resend OTP");
      }

      alert("OTP has been resent to your email.");
    } catch (err) {
      setResendError(err.message || "Failed to resend OTP");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column align-items-center gap-4"
    >
      <div className="d-flex gap-2">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onFocus={(e) => e.target.select()}
            className="form-control text-center"
            style={{
              width: "50px",
              height: "50px",
              fontSize: "1.5rem",
              borderRadius: "8px",
            }}
          />
        ))}
      </div>

      <button
        type="submit"
        className="btn btn-primary px-5"
        disabled={otp.includes("") || loading}
      >
        {loading ? "Verifying..." : "Submit"}
      </button>

      <button
        type="button"
        onClick={handleResend}
        className="btn btn-link text-decoration-none text-primary"
      >
        Resend OTP
      </button>

      {error && <div className="text-danger text-center mt-2">{error}</div>}
      {resendError && (
        <div className="text-danger text-center mt-2">{resendError}</div>
      )}
    </form>
  );
}
