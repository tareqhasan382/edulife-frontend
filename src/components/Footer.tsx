const Footer = () => {
  return (
    <footer className=" px-24 w-full h-auto  bg-gray-300 pt-20 ">
      <div className="w-full h-auto grid grid-cols-5 items-center justify-start">
        <div className="h-full w-full flex flex-col gap-3 ">
          <h1 className=" font-bold text-4xl ">Edulife</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            hic.
          </p>
        </div>
        <div className=" h-full w-full flex flex-col gap-3 pl-8 ">
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
            className="hover:text-[#00B5E2] inline-block "
          >
            +880 1989-342794
          </a>
          <a
            href="mailto:tareqhasan382@gmail.com"
            className="hover:text-[#00B5E2] "
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
