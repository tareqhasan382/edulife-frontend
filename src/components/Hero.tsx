import bg from "../assets/bg.png";
import hero from "../assets/OBJECTS.png";
import { CiSearch } from "react-icons/ci";
const Hero = () => {
  return (
    <div className=" w-full h-full ">
      <div className="lg:px-28 px-2 w-full bg-[#FDF8EE] lg:h-[710px] md:h-[500px] flex items-center ">
        <div
          className=" w-full pt-4 lg:h-[700px] md:h-[500px]  grid lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1 items-center justify-center "
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div className=" w-full  lg:h-[443px] h-[300px] flex flex-col items-start justify-center ">
            <h1 className=" font-bold lg:text-6xl text-4xl ">
              The <span className=" text-orange-500 ">Smart</span> <br />
              Choice For <span className=" text-orange-500 ">Future</span>
            </h1>
            <p className=" py-5 ">
              Elearn is a global training provider based across the UK that
              specialises in accredited and bespoke training courses. We crush
              the...
            </p>
            <div className=" relative  w-full h-[60px] flex items-center justify-between bg-white rounded-full shadow-lg ">
              <div className=" w-full px-4 flex items-center justify-center  ">
                <CiSearch size={40} />
                <input
                  type="text"
                  className=" w-full h-[50px] focus:outline-none px-2 "
                />
                <button className=" rounded-full w-[158px] h-[50px] bg-[#4D2C5E] text-white ">
                  Continue
                </button>
              </div>
            </div>
          </div>
          <div className=" w-full lg:h-[443px] h-[300px] ">
            <img
              src={hero}
              alt="hero-image"
              className=" w-full h-full object-contain "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
