import { useParams } from "react-router-dom";
import { useVocabularyQuery } from "../Redux/vocabulary/vocabularyApi";

const Vocabulary = () => {
  const { lessonNo } = useParams<{ lessonNo: string }>();
  const { data } = useVocabularyQuery(lessonNo);
  console.log("data:", data?.data);
  return (
    <div className=" lg:px-28 px-2 py-10 w-full h-full bg-white flex flex-col items-center">
      <h1 className=" lg:text-4xl text-2xl font-bold py-6 ">Vocabulary</h1>
      <div className=" w-full h-auto grid grid-cols-5  gap-6 items-center ">
        {data?.data &&
          data?.data.map((vocabulary) => (
            <div
              key={vocabulary._id}
              className="bg-[#693e7f] hover:bg-[#4D2C5E] duration-500 text-white w-full h-[200px] flex flex-col items-center justify-center rounded-md p-2 "
            >
              <h3 className=" text-xl font-bold ">Word {vocabulary?.word}</h3>
              <h3 className=" text-sm font-bold ">
                Meaning : {vocabulary?.meaning}
              </h3>
              <p>pronunciation: {vocabulary?.pronunciation}</p>
              <p className=" text-sm ">When To Say : {vocabulary?.whenToSay}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Vocabulary;
