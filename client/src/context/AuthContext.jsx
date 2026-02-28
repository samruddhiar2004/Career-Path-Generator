import React, { useState } from "react";
import { authAPI } from "../services/api";
import { AuthContext } from "./auth-context";

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const token = localStorage.getItem("token");
    const userJson = localStorage.getItem("user");
    return token && userJson ? JSON.parse(userJson) : null;
  });

  const signup = async (name, email, password) => {
    try {
      const data = await authAPI.register(name, email, password);

      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: data._id,
          name: data.name,
          email: data.email,
        }),
      );

      setCurrentUser({
        id: data._id,
        name: data.name,
        email: data.email,
      });

      return { success: true, user: data };
    } catch (error) {
      const message =
        error.response?.data?.message || "An error occurred during signup.";
      return { success: false, message };
    }
  };

  const login = async (email, password) => {
    try {
      const data = await authAPI.login(email, password);

      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: data._id,
          name: data.name,
          email: data.email,
        }),
      );

      setCurrentUser({
        id: data._id,
        name: data.name,
        email: data.email,
      });

      return { success: true, user: data };
    } catch (error) {
      const message =
        error.response?.data?.message || "Invalid email or password.";
      return { success: false, message };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
