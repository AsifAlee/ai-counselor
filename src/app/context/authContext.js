"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { fetchUser, logout as logoutService } from "../lib/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // while checking token
  const [initialized, setInitialized] = useState(false);

  let baseURL;
  // baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  baseURL = process.env.NEXT_PUBLIC_BASE_URL_LOCAL;
  // Load user on first mount
  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await fetchUser();

        setUser(currentUser);
      } catch (err) {
        logoutService();
        setUser(null);
      } finally {
        setLoading(false);
        setInitialized(true);
      }
    };

    loadUser();
  }, []);

  const login = (user, token) => {
    setUser(user);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    logoutService();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, logout, loading, initialized, baseURL }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access auth
export const useAuth = () => useContext(AuthContext);
