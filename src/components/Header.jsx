import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoUrl: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

return (
  <div className="fixed top-0 left-0 w-full z-50
                  flex justify-between items-center
                  px-4 sm:px-6 md:px-10
                  py-3
                  bg-linear-to-b from-black via-black/80 to-transparent">

    {/* Logo */}
    <img
      className="w-24 sm:w-28 md:w-40"
      src={LOGO}
      alt="logo"
    />

    {user && (
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">

        {/* Language Selector */}
        {showGptSearch && (
          <select
            className="px-2 sm:px-3 py-1.5 sm:py-2
                       text-xs sm:text-sm
                       rounded-lg sm:rounded-xl
                       bg-white/10 backdrop-blur-lg
                       text-white border border-white/20
                       focus:outline-none focus:ring-2
                       focus:ring-purple-500/40 transition-all"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option
                key={lang.identifier}
                value={lang.identifier}
                className="bg-gray-900 text-white"
              >
                {lang.name}
              </option>
            ))}
          </select>
        )}

        {/* GPT Button */}
        <button
          onClick={handleGptSearch}
          className="
            px-3 sm:px-4 md:px-5
            py-1.5 sm:py-2
            text-xs sm:text-sm md:text-base
            rounded-lg sm:rounded-xl
            font-semibold text-white
            bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600
            hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500
            shadow-md sm:shadow-lg
            transition-all duration-300
            border border-white/10
          "
        >
          {showGptSearch ? "Home" : "✨ GPT"}
        </button>

        {/* Profile Section */}
        <div
          onClick={handleSignOut}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <img
            className="w-8 sm:w-9 md:w-10 rounded-md
                       transition group-hover:opacity-80"
            src={user.photoUrl}
            alt="userIcon"
          />

          {/* Hide text on very small screens */}
          <span className="hidden sm:inline
                           text-white text-sm md:text-base
                           font-semibold
                           group-hover:text-red-500 transition">
            Sign out
          </span>
        </div>
      </div>
    )}
  </div>
);
};

export default Header;
