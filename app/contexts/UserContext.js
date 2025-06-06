import { createContext, useContext, useState, useEffect, use } from 'react';
import { usePathname } from 'next/navigation';

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(null);
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    if (!pathname.includes('/un')) {  // <-- Only call verifyUser if pathname doesn't include '\un'
      verifyUser();
    }
     else {
    setLoading(false); // ← IMPORTANT: ensure loading is false so UI can render
  }
  }, [pathname]);

  const verifyUser = async () => {
    try {
      const authResponse = await fetch('/api/auth/isAuth');

      if (authResponse.status == 200) {
        setUser(authResponse);
        setVerified(true);
      }
      else if (authResponse.status == 201) {
        setUser(authResponse);
        setVerified(false);
      }
     else {
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
  verifyUser();
};

return (
  <UserContext.Provider value={{ user, setUserContext, loading, verified }}>
    {children}
  </UserContext.Provider>
);
};
