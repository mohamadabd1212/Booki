"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Validate password length and presence of symbol
  

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    // Clear previous error
    setError("");
  
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
  
    // Check if password is valid (at least 8 characters with 1 symbol)
   
  
    // Proceed with the API request if validation is successful
    try {
      const response = await fetch(`/api/un/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Handle successful registration
        router.replace("/un/login")
      } else {
        // Handle error response from the server
        setError(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };
  

  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f6f9" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5">

                <h3 className="mb-4 text-center">Create an Account</h3>
                <p className="text-muted text-center mb-4">Fill in the details to register.</p>

                {error && <p className="text-danger text-center">{error}</p>}

                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input 
                      type="text" 
                      id="username" 
                      className="form-control form-control-lg" 
                      placeholder="Enter your username" 
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  {/* Email */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="form-control form-control-lg" 
                      placeholder="Enter your email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  {/* Password */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input 
                      type="password" 
                      id="password" 
                      className="form-control form-control-lg" 
                      placeholder="Enter your password" 
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  {/* Confirm Password */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="confirm-password">Confirm Password</label>
                    <input 
                      type="password" 
                      id="confirm-password" 
                      className="form-control form-control-lg" 
                      placeholder="Confirm your password" 
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>

                  {/* Submit Button */}
                  <button className="btn btn-primary btn-lg w-100" type="submit">
                    Register
                  </button>

                  {/* Login link */}
                  <p className="mt-4 mb-0 text-center">
                    Already have an account? <Link href="/un/login" className="text-primary">Login here</Link>
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
