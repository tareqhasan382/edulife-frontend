import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { RootState } from "../Redux/store";
import { userLoggedOut } from "../Redux/auth/authSlice";
// import logo from "../assets/Edulife.png";
const Navbar = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state: RootState) => state.auth);
  const [showNav, setShowNav] = useState<boolean>(false);
  // const [activeMenu, setActiveMenu] = useState<string>("home");
  // const location = useLocation();
  return (
    <nav className=" w-full h-[90px] bg-[#FDF8EE] text-black  ">
      <div className=" w-full h-full flex items-center justify-between lg:px-28 px-2 ">
        {/* <img
          src={logo}
          alt="Logo"
          className=" h-[80px] w-auto object-contain "
        /> */}
        <h1 className=" font-bold text-4xl ">Edulife</h1>
        <ul className="max-md:hidden flex items-center justify-center gap-6 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/lesson">Lesson</Link>
          </li>
          <li>
            <Link to="/tutorial">Tutorial</Link>
          </li>
        </ul>
        {auth?.user ? (
          <button
            onClick={() => dispatch(userLoggedOut())}
            className="max-md:hidden bg-[#4D2C5E] px-5 py-2 rounded-full text-white "
          >
            Sign Out
          </button>
        ) : (
          <Link to="/sign-in">
            <button className="max-md:hidden bg-[#4D2C5E] px-5 py-2 rounded-full text-white ">
              Sign in
            </button>
          </Link>
        )}

        <div className=" lg:hidden flex gap-4 items-center">
          {/* <ThemeToggle /> */}
          <span className="md:hidden overflow-hidden  pr-3">
            <IoMenuSharp
              size={30}
              className="cursor-pointer transition ease-in duration-150"
              onClick={() => setShowNav(!showNav)}
            />
          </span>
        </div>
      </div>

      <div className=" -top-[80px] ">
        <SideBar showNav={showNav} setShowNav={setShowNav} />
      </div>
    </nav>
  );
};

export default Navbar;
