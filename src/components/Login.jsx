import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constant";


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const dispatch = useDispatch();


  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }
  const handleButtonClick = () => {
    const nameValue = isSignInForm ? null : name.current?.value;

    const message = checkValidData(
      nameValue,
      email.current?.value,
      password.current?.value
    );

    setError(message);
    if (message) return;

    if (isSignInForm) {
      // 🔐 SIGN IN
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setError(error.code);
        });

    } else {
      // 🆕 SIGN UP
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR
          })

            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoUrl: photoURL,
                })
              )
              

            }).catch((error) => {
              setError(error.message)
            });



        })
        .catch((error) => {
          setError(error.code);
        });
    }
  };





  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Header />

      {/* Background */}
      <img
        className="absolute inset-0 h-full w-full object-cover scale-110"
        src="https://netmirror.gg/img/home-bg.jpg"
        alt="background"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/0 to-black/60 backdrop-blur-sm"></div>

      {/* Form Container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-2xl text-white transition-all duration-300"
        >
          <h1 className="text-3xl font-bold text-center mb-8 tracking-wide">
            {isSignInForm ? "Welcome Back" : "Create Account"}
          </h1>

          {/* Name Field */}
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
            />
          )}

          {/* Email */}
          <input
            ref={email}
            type="email"
            placeholder="Email address"
            className="w-full p-3 mb-4 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          />

          {/* Password */}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          />

          {/* Error Message */}
          {error && (
            <p className="text-red-400 text-sm mb-4 font-medium animate-pulse">
              {error}
            </p>
          )}

          {/* Button */}
          <button
            onClick={handleButtonClick}
            className="w-full bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-200 text-white font-semibold p-3 rounded-lg shadow-lg"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {/* Footer */}
          <div className="flex justify-between items-center text-sm text-gray-300 mt-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-red-600" />
              Remember me
            </label>
            <p className="hover:underline cursor-pointer">
              Need help?
            </p>
          </div>

          <p className="text-center text-gray-300 mt-8">
            <span
              onClick={toggleSignInForm}
              className="hover:underline cursor-pointer text-white font-medium"
            >
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already registered? Sign In now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );

};

export default Login;
