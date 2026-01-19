import backgroundImg2 from "../assets/bg2.svg";
import ab from "../assets/ab img.svg";
import offcircle from "../assets/offcircle.svg";
import round from "../assets/round.svg";
import logo from "../assets/asc logo.svg";

function About() {
  return (
    <div className="relative w-full max-w-[1920px] mx-auto overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 flex z-0">
        <img
          src={backgroundImg2}
          alt="Left Background"
          className="w-1/2 h-full object-cover -scale-x-100"
        />
        <img
          src={backgroundImg2}
          alt="Right Background"
          className="w-1/2 h-full object-cover"
        />
      </div>

      {/* ================= FOREGROUND CONTENT ================= */}
      <div className="relative z-10 flex items-center justify-center min-h-[738px] px-4 md:px-10">
        <div className="w-full max-w-[1300px] flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* LEFT IMAGE SECTION */}
          <div className="relative">
            <img
              src={ab}
              alt="About Visual"
              className="w-[280px] sm:w-[360px] md:w-auto object-cover rounded-tl-[48px] rounded-br-[48px]"
            />

            <img
              src={offcircle}
              alt="Decoration"
              className="absolute top-[90px] sm:top-[120px] md:top-[130px] w-[140px] sm:w-[170px] md:w-[195px]"
            />

            <img
              src={round}
              alt="Circle"
              className="absolute top-[105px] sm:top-[135px] md:top-[150px] left-[35px] sm:left-[45px] w-[90px] sm:w-[110px] md:w-[131px]"
            />

            <img
              src={logo}
              alt="Logo"
              className="absolute top-[125px] sm:top-[165px] md:top-[180px] left-[55px] sm:left-[70px] md:left-[75px] w-[50px] sm:w-[65px] md:w-[75px]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-[650px] text-center md:text-left">
            <h1 className="text-[28px] sm:text-[36px] md:text-[50px] font-bold text-[#0B2B4B] leading-tight">
              Empowering Your <br />
              Digital Journey with Expert <br />
              IT Solutions
            </h1>

            <h3 className="text-[#2BB0FF] text-[22px] sm:text-[30px] md:text-[40px] font-semibold mt-4">
              About Us
            </h3>

            <p className="text-gray-600 text-[16px] sm:text-[18px] md:text-[20px] mt-4 leading-relaxed">
              Ascentware is a dynamic technology partner specializing in
              delivering top-tier IT talent, end-to-end IT services,
              comprehensive support, in-depth training, and customized
              technology solutions tailored to client needs.
            </p>

            <button className="mt-6 bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition">
              Read More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
