import { useParams } from "react-router-dom";
import {
  useVocabularyQuery,
  VocabularyResponse,
} from "../Redux/vocabulary/vocabularyApi";
import { toast } from "react-toastify";

const Vocabulary: React.FC = () => {
  const { lessonNo } = useParams<{ lessonNo: string }>();
  const { data } = useVocabularyQuery(lessonNo);

  const playPronunciation = (vocabulary: VocabularyResponse) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance();
      utterance.text = vocabulary.word;

      const voices = speechSynthesis.getVoices();
      const japaneseVoice = voices.find((voice) => voice.lang === "ja-JP");

      if (japaneseVoice) {
        utterance.voice = japaneseVoice;
      } else {
        utterance.lang = "en-US";
        toast.warning("Japanese voice not available. Fallback to English.");
      }

      utterance.rate = 0.9;

      // Start speech
      speechSynthesis.speak(utterance);

      utterance.onstart = () => console.log("Speech started");
      utterance.onend = () => console.log("Speech ended");

      utterance.onerror = (event) => {
        console.error("Speech error:", event.error);
        toast.error("An error occurred while trying to speak the word.");
      };
    } else {
      toast.warning("Your browser does not support text-to-speech!");
    }
  };
  return (
    <div className=" lg:px-28 px-2 py-10 w-full h-full bg-white flex flex-col items-center">
      <h1 className=" lg:text-4xl text-2xl font-bold py-6 ">Vocabulary</h1>
      <div className=" w-full h-auto grid lg:grid-cols-5 lg:landscape:grid-cols-5 md:grid-cols-3 sm:landscape:grid-cols-2 sm:grid-cols-1  gap-6 items-center ">
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
              <button
                className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-[#d2c7d7] transition"
                onClick={() => playPronunciation(vocabulary)}
              >
                Play Pronunciation
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Vocabulary;
