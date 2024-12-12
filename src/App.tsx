import ButtomBanner from "./components/ButtomBanner";
import Hero from "./components/Hero";
import HeroBanner from "./components/HeroBanner";
import Lesson from "./components/Lesson";
function App() {
  // flex flex-col items-center justify-center
  return (
    <div className=" w-full h-full ">
      {/* ============Hero banner============ */}
      <Hero />
      <HeroBanner />
      {/* ===============Lessson================= */}
      <div className=" w-full h-auto ">
        <Lesson />
      </div>
      {/* ============buttom banner============ */}
      <ButtomBanner />
    </div>
  );
}

export default App;
