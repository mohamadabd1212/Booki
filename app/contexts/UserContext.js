import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(null);
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    verifyUser();
  }, [pathname]);

  const verifyUser = async () => {
  try {
    const authResponse = await fetch('/api/auth/isAuth');
    const authData = await authResponse.json();

    if (authResponse.ok && authData === 'verified') {
      setUser(authData);

      // Only check verified status if on /User path
      if (pathname.includes('/User')) {
        const verifiedResponse = await fetch('/api/auth/getVerified');
        setVerified(verifiedResponse.ok);
      }
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
  const updateUserVerificationStatus = async () => {
    try {
      const verifiedResponse = await fetch('/api/auth/getVerified');
      if (verifiedResponse.ok) {
        setVerified(true);
      } else {
        setVerified(false);
      }
    } catch (error) {
      console.error('Failed to update verification status', error);
    }
  };

  const setUserContext = (userData) => {
    setUser(userData);
    verifyUser();
  };

  return (
    <UserContext.Provider value={{ user, setUserContext, loading, verified, updateUserVerificationStatus }}>
      {children}
    </UserContext.Provider>
  );
};
