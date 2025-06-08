"use client";

import { useEffect, useState, FormEvent, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  

  const handleSubmit = async () => {
    event.preventDefault();
    
    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    try {
      const res = await fetch(`/api/password/resetPassword`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: newPassword }),
      });

      if (res.ok) {
        router.replace("/un/login");
        window.alert("password reset succefully");
      } else {
        const data = await res.json();
        setError(data.message || "Password reset failed.");
      }
    } catch {
      setError("An unexpected error occurred.");
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
                <p className="text-muted text-center mb-4">
                  Please enter a new password and confirm it to reset your account.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="newPassword">New Password</label>
                    <input
                      type="password"
                      id="newPassword"
                      className="form-control form-control-lg"
                      placeholder="Enter your new password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="confirmNewPassword">Confirm New Password</label>
                    <input
                      type="password"
                      id="confirmNewPassword"
                      className="form-control form-control-lg"
                      placeholder="Confirm your new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>

                  {error && <div className="alert alert-danger">{error}</div>}
                  {success && <div className="alert alert-success">{success}</div>}

                  <button className="btn btn-primary btn-lg w-100" type="submit">
                    Reset Password
                  </button>
                </form>

                <p className="text-center mt-3">
                  <Link href="/un/login" className="text-primary">Back to Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
