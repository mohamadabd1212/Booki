"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../public/logo.jpg";
import { useUser } from "../app/contexts/UserContext";  // Importing the UserContext
import { useEffect, useState } from "react";
import('bootstrap/dist/js/bootstrap');


export default function Navbar() {
  const router = useRouter();
  const { user, setUserContext } = useUser();  // Destructure from UserContext

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check the user status in the context
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    
  }, [user]);  // Watch for user context changes

  const handleLogout = async () => {
    try {
      await fetch(`/api/auth/logout`);
      setUserContext(null);  // Clear user context
      setIsLoggedIn(false);  // Update local state for UI
      router.push("/un/login");  // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 sticky-top">
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image src={logo} alt="Logo" width={40} height={40} className="me-2" priority />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link href="/contact" className="nav-link text-dark fw-semibold">Contact</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-dark fw-semibold">About</Link>
            </li>

            {isLoggedIn ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  id="userMenu"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Image
                    src={logo}
                    alt="Avatar"
                    width={32}
                    height={32}
                    className="rounded-circle me-2"
                    loading="eager"
                  />
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <Link href="/un/login" className="btn btn-primary px-4 py-2">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
