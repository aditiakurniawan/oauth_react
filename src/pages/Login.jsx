import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        localStorage.setItem("user", JSON.stringify(result.user));
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <main className="w-screen min-h-screen flex flex-col bg-gradient-to-br from-blue-800 to-blue-500 mx-auto p-10">
      <form
        action=""
        className="w-1/4 mx-auto bg-white flex flex-col gap-4 shadow-lg rounded-lg mt-8 p-6"
      >
        <h1 className="text-4xl text-blue-500 text-center font-bold">Login</h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" autoComplete="off">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="h-10 px-3 rounded-md border-[1px] border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="h-10 px-3 rounded-md border-[1px] border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <button className="w-full h-10 bg-blue-500 text-white rounded-xl">
            Login
          </button>
          <p className="text-center"> or</p>
          <button
            className="w-full h-10 bg-white text-black border-[1px] border-black rounded-xl"
            onClick={handleGoogleLogin}
            type="button"
          >
            Continue with Google
          </button>
          <Link
            to="/register"
            className="w-full h-10 bg-slate-500 text-white text-center rounded-xl flex justify-center items-center"
          >
            Register
          </Link>
        </div>
      </form>
    </main>
  );
}
