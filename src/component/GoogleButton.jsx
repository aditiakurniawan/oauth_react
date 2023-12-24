import React, { useState, useEffect } from "react";
// import { redirect } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import {
//   getAuth,
//   signInWithPopup,
//   GoogleAuthProvider,
//   signInWithRedirect,
// } from "firebase/auth";

export default function GoogleButton() {
  // const navigate = useNavigate();
  const [url, setUrl] = useState("");

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const res = await fetch("https://api.goprestasi.com/api/login/google");
        const data = await res.json();
        setUrl(data.url);
        console.log("started at :", data.url);
      } catch (error) {
        console.log("error : ", error);
      }
    };

    fetchUrl();
  }, []);

  return (
    <>
      <a
        href={url}
        className="w-full h-10 bg-white text-black border-[1px] border-black rounded-xl flex justify-center items-center"
        type="button"
        target="_blank"
        rel="noreferrer"
      >
        Continue with Google
      </a>
    </>
  );
}
