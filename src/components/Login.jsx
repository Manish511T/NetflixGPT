import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    const message = checkValidData(name.current.value,email.current.value, password.current.value);

    setError(message);
    console.log(name.current.name);
    console.log(message);


  }

  

  return (
    <div className="relative h-screen w-screen">
      <Header />

      {/* Background Image */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_small.jpg"
        alt="background"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Login Form */}
      <div className="relative z-10 flex justify-center items-center h-full ">
        <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md bg-black/75 p-10 rounded-lg shadow-xl text-white border border-gray-700 ">
          <h1 className="text-3xl font-bold mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

          {!isSignInForm && <input
            ref = {name}
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mb-4 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />}

          <input
            ref={email}
            type="email"
            placeholder="Email address"
            className="w-full p-3 mb-4 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 rounded bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          {/* error message */}
          {error && <p className="text-red-600  p-2 mb-2 font-bold">{error}*</p>}

          <button onClick={handleButtonClick} className="w-full bg-red-600 hover:bg-red-700 transition text-white font-semibold p-3 rounded">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-red-600" />
              Remember me
            </label>
            <p className="hover:underline cursor-pointer">Need help?</p>
          </div>

          <p className="text-gray-400 mt-8">
            <span onClick={toggleSignInForm} className="text-white hover:underline cursor-pointer">
              {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
