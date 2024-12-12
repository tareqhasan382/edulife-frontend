const ButtomBanner = () => {
  return (
    <div className=" lg:px-28 px-2 py-10 w-full h-auto bg-white flex flex-col items-center ">
      <div className=" bg-[#4D2C5E] text-white w-[80%] lg:h-[277px] h-auto rounded-2xl flex flex-col items-center justify-center p-5 gap-5 ">
        <h1 className=" font-bold lg:text-4xl text-xl ">
          Subscribe to our newsletter
        </h1>
        <p className="font-light">
          Lorem Ipsum is simply dummy text of the printing.
        </p>

        <div className=" relative lg:w-[600px] w-full px-4 flex items-center justify-center  ">
          {/* <CiSearch size={40} /> */}
          <input
            type="text"
            className=" w-[600px] h-[50px] focus:outline-none p-2 text-black rounded-full px-6 "
          />
          <button className=" absolute right-5 rounded-full w-[158px] h-[40px] bg-[#4D2C5E] text-white ">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtomBanner;
