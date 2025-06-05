"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../../contexts/UserContext";
import Link from "next/link";

export default function Login() {
  const { setUserContext } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage("");

    if (!email || !password) {
      setResponseMessage("Please fill in both fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`/api/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push('/User/dashboard');
        await setUserContext({});
    }
       else {
        setResponseMessage(data.message || "Invalid email or password.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f6f9" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5">
                <h3 className="mb-4 text-center">Login to Your Account</h3>
                {responseMessage && <p className="text-danger text-center">{responseMessage}</p>}
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                    />
                  </div>
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
                      autoComplete="current-password"
                    />
                  </div>
                  <div className="d-flex justify-content-end mb-4">
                    <Link href="/un/forgotPassword" className="small text-muted">Forgot password?</Link>
                  </div>
                  <button className="btn btn-primary btn-lg w-100" type="submit" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </button>
                  <p className="mt-4 mb-0 text-center">
                    Don't have an account? <Link href="/un/register" className="text-primary">Sign Up</Link>
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
