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

      const confirmRes = await fetch(
        `/api/auth/VerifyEmailRequest`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }, // Send email as the body
        }
      );

      if (confirmRes.ok) {
        setMessage("Verification email sent successfully.");
        router.replace("/VerifyEmail");
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
