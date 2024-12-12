import { useTutorialQuery } from "../Redux/tutorials/tutorialApi";

const Tutorial = () => {
  const { data } = useTutorialQuery();

  return (
    <div className="lg:px-28 px-2 py-10 w-full h-auto bg-white flex flex-col items-center">
      <h1 className="lg:text-4xl text-2xl font-bold py-6">Tutorial</h1>
      <div className=" w-full h-auto grid lg:landscape:grid-cols-3 lg:grid-cols-3 md:landscape:grid-cols-2 md:grid-cols-2 sm:landscape:grid-cols-2 sm:grid-cols-1  gap-6 items-center ">
        {data?.data &&
          data?.data.map((tutorial) => (
            <div
              key={tutorial._id}
              className=" bg-[#f2f1f3] duration-500 text-[#693e7f] w-full h-auto flex flex-col items-center justify-center rounded-md  p-2"
            >
              <iframe
                src="https://www.youtube.com/embed/W0-hJ-9YG3I?si=ucWLnBHQPeYQU8wb"
                title={tutorial.title}
                className=" w-full h-[200px] "
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>

              {/* youtube vidio */}
              <div>
                <h3 className=" text-xl font-bold ">{tutorial.title}</h3>
                <p> {tutorial.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Tutorial;
