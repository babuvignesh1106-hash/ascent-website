import hex from "../assets/hexagon.svg";
import trophy from "../assets/cup.svg"; // example top image

function Achievements() {
  const achievementBlocks = [
    {
      title: "Big Data and AI\nExpertise in Action",
      description:
        "Utilized Big Data frameworks and AI models to uncover patterns, predict trends, and automate business processes for improved efficiency.",
      className: "absolute top-[-160px] left-[-100px] text-center",
    },
    {
      title: "Cross-Platform\nApplication Development",
      description:
        "Expertise in architecting and building Windows, web,and mobile applications infrastructure for optimal performance and scalability.",
      className: "absolute top-[-160px] right-[-120px] text-center",
    },

    {
      title: "RPA & OCR Integration\nin HR Services",
      description:
        "Automated resume parsing, document scanning, and offer generation to shift HR focus to strategic initiatives.",
      className: "absolute bottom-[30px] left-[-200px] text-center",
    },
    {
      title: "HR Process Automation\nSmarter Hiring",
      description:
        "Automated end-to-end recruitment lifecycle, cutting manual tasks by 60% and improving hiring speed.",
      className: "absolute bottom-[30px] right-[-180px] text-center",
    },
    {
      title: "40% Increase in Offer\nto-Onboard Rate",
      description:
        "Launched the '100 Days Learning Program' that enhanced onboarding success through structured engagement.",
      className:
        "absolute bottom-[-220px] left-1/2 -translate-x-1/2 text-center",
    },
  ];

  return (
    <div className="w-[1920px] h-[978px] bg-gradient-to-r from-[#002C53] to-[#0C4F6E] flex items-center justify-center">
      {/* Wrapper */}
      <div className="relative">
        {/* Top Image + Text */}
        <div className="absolute top-[80px] left-[230px] flex flex-col items-center">
          <img src={trophy} alt="Trophy" className="w-[127px] h-[127px] mb-2" />
        </div>
        <p className=" absolute top-[210px] left-[160px] text-black text-[40px] font-semibold text-center">
          <span className="text-[#2DB7EA]">Achievements</span>
          <br /> What Makes <br />
          Us Proud
        </p>
        <div className="absolute top-[100px] left-[47px] w-[2px] h-[75px] bg-zinc-500 rotate-120"></div>
        <div className="absolute top-[-69px] left-[287px]  w-[2px] h-[75px] bg-zinc-500 "></div>
        <div className="absolute top-[95px] left-[524px] w-[2px] h-[75px] bg-zinc-500 rotate-50"></div>
        <div className="absolute top-[382px] left-[448px] w-[2px] h-[75px] bg-zinc-500  rotate-120"></div>
        <div className="absolute top-[390px] left-[132px] w-[2px] h-[75px] bg-zinc-500  rotate-45"></div>
        {achievementBlocks.map((item, index) => (
          <div key={index} className={item.className}>
            <h2 className="text-[#33B6E9] text-[20px] font-semibold mb-6 whitespace-pre-line">
              {item.title}
            </h2>

            <p className="text-white text-[18px] leading-[30px] max-w-[280px]">
              {item.description}
            </p>
          </div>
        ))}

        {/* Hexagon */}
        <img src={hex} alt="Hexagon" className="w-[577.93px] h-[444.28px]" />
      </div>
    </div>
  );
}

export default Achievements;
