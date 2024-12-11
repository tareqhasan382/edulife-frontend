import { Link } from "react-router-dom";
// import logo from "../assets/Edulife.png";
const Navbar = () => {
  return (
    <nav className=" w-full h-[90px] bg-[#FDF8EE] text-black  ">
      <div className=" w-full h-full flex items-center justify-between px-28 ">
        {/* <img
          src={logo}
          alt="Logo"
          className=" h-[80px] w-auto object-contain "
        /> */}
        <h1 className=" font-bold text-4xl ">Edulife</h1>
        <ul className=" flex items-center justify-center gap-6 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Lesson</Link>
          </li>
        </ul>
        <button className=" bg-[#4D2C5E] px-5 py-2 rounded-full text-white ">
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
