import React from "react";
import { Link } from "react-router-dom";
import GoogleLoginButton from "../component/GoogleLoginButton";

export default function Register() {
  return (
    <main className="w-screen min-h-screen flex flex-col bg-gradient-to-br from-blue-800 to-blue-500 mx-auto p-10">
      <form
        action=""
        className="w-1/4 mx-auto bg-white flex flex-col gap-4 shadow-lg rounded-lg mt-8 p-6"
        autoComplete="off"
      >
        <h1 className="text-4xl text-blue-500 text-center font-bold">
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
          <button className="w-full h-10 bg-slate-500 text-white rounded-xl">
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
