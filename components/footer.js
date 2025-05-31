"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4 mt-5">
      <div className="container text-md-left">
        <div className="row text-md-left">
          
          {/* Brand and Description */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">MyBrand</h6>
            <p>
              We deliver high-quality web solutions that empower your digital future. 
              Let's build something great together.
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Quick Links</h6>
            <p>
              <Link href="/about" className="text-light text-decoration-none">About</Link>
            </p>
            <p>
              <Link href="/contact" className="text-light text-decoration-none">Contact</Link>
            </p>
            <p>
              <Link href="/login" className="text-light text-decoration-none">Login</Link>
            </p>
            <p>
              <Link href="/privacy" className="text-light text-decoration-none">Privacy Policy</Link>
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i className="bi bi-house-door-fill me-2"></i> New York, NY 10012, US</p>
            <p><i className="bi bi-envelope-fill me-2"></i> info@mybrand.com</p>
            <p><i className="bi bi-phone-fill me-2"></i> +1 234 567 890</p>
            <p><i className="bi bi-printer-fill me-2"></i> +1 234 567 891</p>
          </div>

          {/* Social Media Links */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Follow Us</h6>
            <Link href="#" className="btn btn-outline-light btn-floating m-1" role="button">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link href="#" className="btn btn-outline-light btn-floating m-1" role="button">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link href="#" className="btn btn-outline-light btn-floating m-1" role="button">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link href="#" className="btn btn-outline-light btn-floating m-1" role="button">
              <i className="bi bi-linkedin"></i>
            </Link>
          </div>

        </div>

        {/* Horizontal line */}
        <hr className="my-4" />

        {/* Copyright */}
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-start">
              © {new Date().getFullYear()} MyBrand. All rights reserved.
            </p>
          </div>
          <div className="col-md-5 col-lg-4">
            <p className="text-center text-md-end">
              Made with ❤️ by MyBrand Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
