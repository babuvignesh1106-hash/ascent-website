import Navbar from "./Navbar";
import MainContent from "./MainContent";
import About from "./About";
import Value from "./Value";
import Achieve from "./Achieve";
import Achievements from "./Achievements";
import Footer from "./Footer/Footer";
import Projects from "./Projects";

function Dashboard() {
  return (
    <div className=" flex justify-center overflow-hidden">
      {/* Scale wrapper */}
      <div className="origin-top scale-[0.4] sm:scale-[0.55] md:scale-[0.7] lg:scale-[0.85] xl:scale-100">
        <Navbar />
        <MainContent />
        <About />
        <Value />
        <Achieve />
        <Projects />
        <Achievements />
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
