'use client';

import { useUser, UserProvider } from '../app/contexts/UserContext';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import NotVerified from '@/components/notVerified';
import './globals.css';

function LayoutWithLoading({ children }) {
  const { loading, user, verified } = useUser();

  // ⛔ Don't render anything until UserContext is ready
  if (loading) return null;

  // ✅ Everything renders at the same time once loading is done
  return (
    <>
      <Navbar />
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
