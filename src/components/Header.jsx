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
    handleGptSearch();
  }, []);

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
    <div className="top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-3 bg-linear-to-b from-black via-black/80 to-transparent">
      {/* Logo */}
      <img className="w-28 md:w-40" src={LOGO} alt="logo" />

      {user && (
        <div className="flex items-center gap-6">
          {/* Language */}
          {showGptSearch && (
            <select
              className=" px-4 py-2 rounded-xl bg-white/10 backdrop-blur-lg text-white border border-white/20 shadow-lg shadow-purple-900/20 hover:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 transition-all duration-300"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  value={lang.identifier}
                  className="bg-gray-900 text-white hover:bg-purple-600 focus:bg-purple-600"
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {/* GPT Search Button */}
          <button
            onClick={handleGptSearch}
            className="
            px-5 py-2.5
            rounded-xl
            font-semibold text-white
            bg-linear-to-r from-purple-600 via-indigo-600 to-blue-600
            hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500
            shadow-lg shadow-purple-900/40
            hover:shadow-purple-500/60
            transition-all duration-300
            border border-white/10
            backdrop-blur-md
          "
          >
            {showGptSearch? "Home Page": "✨ GPT Search"}
          </button>

          {/* Profile Section */}
          <div
            onClick={handleSignOut}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              className="w-9 md:w-10 rounded-md transition group-hover:opacity-80"
              src={user.photoUrl}
              alt="userIcon"
            />
            <span className="text-white text-sm md:text-base font-semibold group-hover:text-red-500 transition">
              Sign out
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
