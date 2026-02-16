import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  console.log(user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");

    }).catch((error) => {
      navigate("/error");
    });
  }
  return (
    <div className='absolute  flex justify-between items-center px-8 py-2 w-full bg-linear-to-b from-black z-10'>
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
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