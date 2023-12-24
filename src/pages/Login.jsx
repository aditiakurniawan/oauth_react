import React from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLoginButton from "../component/GoogleLoginButton";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        //   console.log(result.user);
        localStorage.setItem("user", JSON.stringify(result.user));
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <main className="w-screen min-h-screen flex flex-col bg-gradient-to-br from-blue-800 to-blue-500 mx-auto p-10 max-w-[640px] sm:max-w-full md:max-w-full">
      <form
        action=""
        className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/4 mx-auto bg-white flex flex-col gap-4 shadow-lg rounded-lg mt-8 p-6"
        autoComplete="off"
        onSubmit={handleLogin}
      >
        <h1 className="text-4xl text-blue-800 text-center font-bold">Login</h1>
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
          <button
            className="w-full h-10 bg-blue-500 text-white rounded-xl"
            type="submit"
          >
            Login
          </button>
          <p className="text-center"> or</p>
          <GoogleLoginButton />
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
