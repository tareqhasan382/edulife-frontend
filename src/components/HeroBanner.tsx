import test from "../assets/online-test 1.png";
import exam from "../assets/exam 1.png";
import certificate from "../assets/certification 1.png";

const HeroBanner = () => {
  return (
    <div className=" lg:px-28 px-2 py-10 w-full h-auto bg-white flex flex-col items-center ">
      <div className=" bg-[#4D2C5E] w-[80%] lg:h-[277px] h-auto rounded-2xl  grid lg:grid-cols-3 grid-cols-1 p-6 gap-10 text-white ">
        <div className=" w-full flex lg:flex-row md:flex-row landscape:flex-row flex-col items-center gap-3 ">
          <div className=" w-[60px] h-[60px] rounded-lg bg-[#FFFFFF33]  ">
            <img src={test} alt="test-mage" className=" w-full h-full p-2 " />
          </div>
          <div className=" w-full ">
            <h1 className=" font-bold text-xl ">Learn The Latest Skills</h1>
            <p className=" font-light ">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className=" w-full flex lg:flex-row md:flex-row landscape:flex-row flex-col items-center gap-3 ">
          <div className=" w-[60px] h-[60px] rounded-lg bg-[#FFFFFF33]">
            <img src={exam} alt="exam-mage" className=" w-full h-full p-2 " />
          </div>
          <div className=" w-full ">
            <h1 className=" font-bold text-xl ">Get Ready For a Career</h1>
            <p className=" font-light ">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
        <div className=" w-full flex lg:flex-row md:flex-row landscape:flex-row flex-col items-center gap-3 ">
          <div className=" w-[60px] h-[60px] rounded-lg bg-[#FFFFFF33]">
            <img
              src={certificate}
              alt="certificate-mage"
              className=" w-full h-full p-2 "
            />
          </div>
          <div className=" w-full ">
            <h1 className=" font-bold text-xl ">Earn a Certificate</h1>
            <p className=" font-light ">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a BC, making it over 2000 years old.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
