// RootLayout.js
"use client";

import { useUser, UserProvider } from "../app/contexts/UserContext";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NotVerified from "@/components/notVerified";
import "./globals.css";

function LayoutWithLoading({ children }) {
  const { loading, user, verified } = useUser();

  if (loading) return null;

  return (
    <>
      <Navbar />
      {/* Only show NotVerified if the user is authenticated but not verified */}
      {user && verified === false && <NotVerified />}
      {children}
      <Footer />
    </>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <LayoutWithLoading>{children}</LayoutWithLoading>
        </UserProvider>
      </body>
    </html>
  );
}
