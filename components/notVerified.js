"use client";

import { use, useState } from "react";

import { useRouter } from "next/navigation";

export default function NotVerified() {
  const [message, setMessage] = useState("");  // For displaying status messages
  const [loading, setLoading] = useState(false);
  const router = useRouter();  // For handling loading state

  const handleSendEmail = async () => {
    setLoading(true);  // Set loading state to true when button is clicked
    setMessage("");    // Clear any previous messages

    try {
      // Step 1: Get the email from cookie
      const emailRes = await fetch("/api/auth/getEmail");
      const { email } = await emailRes.json();

      if (!emailRes.ok || !email) {
        setMessage("Failed to retrieve your email.");
        setLoading(false);
        return;
      }

      // Step 2: Send verification email
      const confirmRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/check/EmailVerfificationRequest`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),  // Send email as the body
        }
      );

      if (confirmRes.ok) {
        setMessage("Verification email sent successfully.");
        router.replace("/User/VerifyEmail");
      } else {
        const data = await confirmRes.json();
        setMessage(data?.error || "Failed to send verification email.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    } finally {
      setLoading(false);  // Reset loading state after request completes
    }
  };

  return (
    <div className="not-verified container">
      <h2>Your account is not verified.</h2>
      <p>Please check your email for a verification link, or contact support.</p>

      <button
        onClick={handleSendEmail}
        disabled={loading}
        className="btn btn-primary mt-3"
        style={{ width: "100%" }}  // Full-width button for better UX
      >
        {loading ? (
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        ) : (
          "Send Confirmation Email"
        )}
      </button>

      {message && (
        <div className="alert alert-info mt-3" role="alert">
          {message}
        </div>
      )}
    </div>
  );
}
