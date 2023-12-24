import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (result) => {
      console.log("result", result);
      console.log("auth", auth);
      if (result) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="w-screen min-h-screen flex flex-col justify-center items-center  mx-auto p-10">
        Loading...
      </div>
    );
  }

  return (
    <>
      {isLogin ? (
        <Routes>
          <Route path="*" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/api/auth/google/callback?" element={<Dashboard />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/api/auth/google/callback?" element={<Dashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Register />} />
        </Routes>
      )}
    </>
  );
}
