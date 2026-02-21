import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(store => store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => { })
      .catch((error) => {
        navigate("/error");
      });
  }

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
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 
                flex justify-between items-center 
                px-4 md:px-8 py-3
                bg-gradient-to-b from-black via-black/70 to-transparent">

      <img className="w-28 md:w-40" src={LOGO} alt="logo" />

      <div className="flex items-center gap-3">

        {user && (
          <img
            className="w-8 md:w-10 rounded-md"
            src={user.photoUrl}
            alt="userIcon"
          />
        )}

        {user && (
          <button
            onClick={handleSignOut}
            className="text-white text-sm md:text-base font-semibold 
                   hover:text-red-600 transition"
          >
            Sign out
          </button>
        )}

      </div>
    </div>
  )
}

export default Header