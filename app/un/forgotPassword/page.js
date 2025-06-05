"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
        
      });
      if (response.ok) {
        router.push("/un/otpValidatePassword");
      }
      else {
        const data = await response.json();
        setErrorMsg(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      setErrorMsg("Something went wrong. Please check your network and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f6f9" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5">

                <h3 className="mb-4 text-center">Reset Your Password</h3>
                <p className="text-muted text-center mb-4">Enter your email to receive reset instructions.</p>

                <form onSubmit={handleSubmit}>

                  {/* Email Input */}
                  <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  {/* Error Message */}
                  {errorMsg && (
                    <div className="alert alert-danger mb-3" role="alert">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    className="btn btn-primary btn-lg w-100"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>

                  {/* Back to login link */}
                  <p className="mt-4 mb-0 text-center">
                    Remember your password? <Link href="/un/login" className="text-primary">Back to Login</Link>
                  </p>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
