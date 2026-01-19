import Section from "../Aboutus/Section";
import Navbar2 from "../Navbar2";
import Memory from "../Aboutus/Memory";
import Vision from "./Vision";

function Dashboard2() {
  return (
    <div className="w-full flex justify-center overflow-hidden">
      {/* Scale wrapper */}
      <div className="origin-top scale-[0.4] sm:scale-[0.55] md:scale-[0.7] lg:scale-[0.85] xl:scale-100">
        <Navbar2 />
        <Section />
        <Memory />
        <Vision />
      </div>
    </div>
  );
}

export default Dashboard2;
