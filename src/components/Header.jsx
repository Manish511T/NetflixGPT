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
    .then(() => {})
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
    <div className='absolute  flex justify-between items-center px-8 py-2 w-full bg-linear-to-b from-black z-10'>
      <img className='w-44' src={LOGO} alt='logo' />
      <div className='flex justify-evenly items-center gap-2'>
        {user && (
          <img
            className="w-10 rounded-sm"
            src={user.photoUrl}
            alt="userIcon"
          />
        )}

        <button onClick={handleSignOut} className='text-white font-semibold cursor-pointer hover:text-red-600'>(Sign out)</button>
      </div>
    </div>
  )
}

export default Header