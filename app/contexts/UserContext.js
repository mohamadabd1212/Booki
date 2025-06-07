'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const shouldVerify = !pathname.startsWith('/un');

    // ✅ Only verify once when app loads (not on every navigation)
    // We guard with a flag so we don't re-run unnecessarily
    let didRun = false;

    if (!didRun && shouldVerify) {
      didRun = true;
      verifyUser();
    } else {
      setLoading(false);
    }
  }, []); // ✅ empty dependency array

  const verifyUser = async () => {
    try {
      const authResponse = await fetch('/api/auth/isAuth');
      const data = await authResponse.json();

      if (authResponse.status === 200) {
        setUser(data);
        setVerified(true);
      } else if (authResponse.status === 201) {
        setUser(data);
        setVerified(false);
      } else {
        setUser(null);
        setVerified(null);
      }
    } catch (error) {
      setUser(null);
      setVerified(null);
    } finally {
      setLoading(false);
    }
  };

  const setUserContext = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider value={{ user, setUserContext, loading, verified }}>
      {children}
    </UserContext.Provider>
  );
};
