import React from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLoginButton from "../component/GoogleLoginButton";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const password2 = e.target.password2.value;
    if (password !== password2) {
      alert("Passwords do not match");
      return;
    }
    if (!email || !password || !password2) {
      alert("Please enter email and password");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
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
    <main className="w-screen min-h-screen flex flex-col bg-gradient-to-br from-blue-800 to-blue-500 mx-auto p-10 max-w-[640px] sm:max-w-full md:max-w-full">
      <form
        action=""
        className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto bg-white flex flex-col gap-4 shadow-lg rounded-lg mt-8 p-6"
        autoComplete="off"
        onSubmit={handleRegister}
      >
        <h1 className="text-4xl text-blue-800 text-center font-bold">
          Register
        </h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
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
          <label htmlFor="password2">Ulangi Password</label>
          <input
            type="password"
            id="password2"
            className="h-10 px-3 rounded-md border-[1px] border-gray-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <button
            className="w-full h-10 bg-slate-500 text-white rounded-xl"
            type="submit"
          >
            Register
          </button>
          <p className="text-center"> or</p>
          <GoogleLoginButton />

          <Link
            to="/"
            className="w-full h-10 bg-blue-500 text-white rounded-xl text-center flex justify-center items-center"
          >
            Login
          </Link>
        </div>
      </form>
    </main>
  );
}
