const Footer = () => {
  return (
    <footer className=" lg:px-28 px-2 w-full h-auto bg-[#FDF8EE] pt-20 ">
      <div className="w-full h-auto grid lg:grid-cols-5 lg:landscape:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 sm:landscape:grid-cols-2 items-center justify-start">
        <div className="h-full w-full flex flex-col gap-3 ">
          <h1 className=" font-bold text-4xl ">Edulife</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            hic.
          </p>
        </div>
        <div className=" h-full w-full flex flex-col gap-3 lg:pl-8 pl-0 ">
          <h1 className=" font-bold text-2xl pb-3 ">Company</h1>
          <p>About Us</p>
          <p>How to work?</p>
          <p>Populer Course</p>
          <p>Service</p>
        </div>
        <div className=" h-full w-full flex flex-col gap-3 ">
          <h1 className=" font-bold text-2xl pb-3 ">Courses</h1>
          <p>Categories</p>
          <p>Ofline Course</p>
          <p>Vidio Course</p>
        </div>
        <div className=" h-full w-full flex flex-col gap-3 ">
          <h1 className=" font-bold text-2xl pb-3 ">Support</h1>
          <p>FAQ</p>
          <p>Help Center</p>
          <p>Career</p>
          <p>Privacy </p>
        </div>
        <div className=" h-full w-full flex flex-col gap-3 ">
          <h1 className=" font-bold text-2xl pb-3 ">Contac Info</h1>
          <a
            href="tel:+8801989342794"
            className="hover:text-[#4D2C5E] inline-block "
          >
            +880 1989-342794
          </a>
          <a
            href="mailto:tareqhasan382@gmail.com"
            className="hover:text-[#4D2C5E] "
          >
            tareqhasan382@gmail.com
          </a>
          <address>
            4808 Skinner Hollow Road <br />
            Days Creek, OR 97429
          </address>
        </div>
      </div>
      <div className=" w-full h-auto flex flex-col items-center justify-center py-5 ">
        <div className=" w-full h-[1px] bg-slate-900 " />
        <p>BookStore All Right Reserved, 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
