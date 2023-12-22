import React, { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setUser(null);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <main className="w-screen min-h-screen flex flex-col bg-gradient-to-br from-orange-800 to-orange-500 mx-auto p-10">
      <div className="w-1/4 mx-auto bg-white flex flex-col gap-4 shadow-lg rounded-lg mt-8 p-6 items-center">
        <h1 className="text-4xl text-blue-500 text-center font-bold">
          Welcome
        </h1>
        <img
          src={user?.photoURL}
          alt=""
          className="w-20 h-20 rounded-full mx-auto object-cover"
        />
        <p className="text-2xl text-blue-500 ">{user?.displayName}</p>
        <p className="text-2xl text-blue-500 ">{user?.email}</p>
        <button
          className="w-3/4 h-10 bg-black text-white rounded-xl mt-10"
          onClick={handleLogout}
          type="button"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
