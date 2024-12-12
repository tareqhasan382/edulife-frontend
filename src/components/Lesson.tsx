import { useState } from "react";
import { useLessonsQuery } from "../Redux/lesson/lessonApi";
import { Link } from "react-router-dom";
type QueryParams = {
  limit: number;
  page: number;
  filterField?: string;
};
const Lesson: React.FC = () => {
  const [limit] = useState<number>(40);
  const [page] = useState<number>(1);

  const query: QueryParams = {
    limit,
    page,
  };
  const { data } = useLessonsQuery(query);

  return (
    <div className=" lg:px-28 px-2 py-10 w-full h-full bg-white flex flex-col items-center">
      <h1 className=" lg:text-4xl text-2xl font-bold py-6 ">Lessons</h1>
      <div className=" w-full h-auto grid lg:landscape:grid-cols-5 lg:grid-cols-4 md:landscape:grid-cols-3 md:grid-cols-3 sm:landscape:grid-cols-2 sm:grid-cols-1  gap-6 items-center ">
        {data?.data &&
          data?.data.map((lesson) => (
            <Link to={`/vocabulary/${lesson.number}`} key={lesson._id}>
              <div className="bg-[#693e7f] hover:bg-[#4D2C5E] duration-500 text-white w-full h-[200px] gap-6 flex flex-col items-center justify-center rounded-md  ">
                <h3 className=" text-xl font-bold ">{lesson?.name}</h3>
                <p>Vocabulary: {lesson?.vocabularyCount}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Lesson;
