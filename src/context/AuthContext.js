"use client";

import { createContext, useContext, useState } from "react";

// ✅ Auth Context
const AuthContext = createContext();

// ✅ Provider
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Frontend-only login/signup
  const login = (userData) => {
    if (typeof userData === "string") {
      setUser({ email: userData, name: "Chaman Lal" });
    } else if (userData && typeof userData === "object") {
      const { email, name } = userData;
      setUser({ email: email || "", name: name || "Chaman Lal" });
    } else {
      setUser({ email: "", name: "Chaman Lal" });
    }
  };
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// ✅ Hook to use auth anywhere
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
