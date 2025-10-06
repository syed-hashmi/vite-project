import { createContext, useContext, useState } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:2000/api",
  withCredentials: true, // ensures HttpOnly cookie is sent/received
});

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Login
  const login = async (username, password) => {
    const res = await api.post("/auth/login", { username, password });
    // Assume login success → set user based on your backend response
    setUser({ username }); 
    return res.data;
  };

  // ✅ Logout
  const logout = async () => {
    await api.post("/auth/logout");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
