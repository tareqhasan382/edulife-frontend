import { AiOutlineClose } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
interface MenuItem {
  name: string;
  id: string;
  link: string;
}

interface SideBarProps {
  showNav: boolean;
  setShowNav: (show: boolean) => void;
}

const SideBar: React.FC<SideBarProps> = ({ showNav, setShowNav }) => {
  const menuItems: MenuItem[] = [
    { name: "Home", id: "home", link: "/" },
    { name: "Abou", id: "about", link: "/" },
    { name: "Lesson", id: "lesson", link: "/" },
    { name: "Tutorial", id: "tutorial", link: "/" },
    { name: "Contract", id: "contract", link: "/" },
  ];
  const currentYear = new Date().getFullYear();
  return (
    <div
      className={`fixed top-0 text-black ${
        showNav ? "left-0" : "-left-[105%]"
      } h-screen w-screen bg-black bg-opacity-60 z-50 pb-6 flex flex-col justify-between md:hidden`}
    >
      <div
        className={`fixed top-0 z-50 text-black ${
          showNav ? "left-0" : "-left-[100%]"
        } h-full w-[75%] overflow-y-scroll no-scrollbar bg-white z-50 transition-all duration-500 pb-6 flex flex-col justify-between md:hidden`}
      >
        <div className="w-full flex flex-col">
          {/* Close Button */}
          <div className="flex items-center justify-between text-xl font-bold p-6">
            <div></div>
            <AiOutlineClose
              color="black"
              onClick={() => setShowNav(!showNav)}
              size={30}
              className="cursor-pointer"
            />
          </div>
          <div className="w-full h-[1px] bg-slate-200"></div>

          {/* Navigation Menu */}
          <nav>
            <div className="space-y-4 pl-3 pt-4 z-30">
              {menuItems.map((menu, index) => (
                <Link key={index} to={menu.link}>
                  <div
                    className="relative group"
                    onClick={() => setShowNav(!showNav)}
                  >
                    <p>{menu?.name}</p>
                    <div className="w-full h-[1px] bg-slate-200 mt-4"></div>
                  </div>
                </Link>
              ))}
            </div>
          </nav>

          {/* Additional Links */}
        </div>

        {/* Footer */}
        <div className="px-3 py-2 ">
          <button className="flex gap-3 items-center justify-center w-full  bg-[#4D2C5E] px-5 py-2 rounded-full text-white ">
            <span>
              <CiUser size={20} />
            </span>{" "}
            Sign in
          </button>
        </div>
        <div className="w-full h-[1px] bg-slate-200"></div>
        <div className="pl-3">
          <p>www.edulife.com © {currentYear}</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
