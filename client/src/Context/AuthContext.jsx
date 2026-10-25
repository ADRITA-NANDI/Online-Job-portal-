import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("jobhub_user");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("jobhub_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("jobhub_user");
    }
  }, [user]);

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);
  const updateUser = (changes) => setUser((prev) => ({ ...prev, ...changes }));

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn: !!user, login, logout, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}