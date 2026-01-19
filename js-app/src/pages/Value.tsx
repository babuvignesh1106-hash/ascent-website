import React from "react";
import bgImg from "../assets/corevalue-bg.svg";

// ICON IMAGES
import integrityIcon from "../assets/integrityIcon.svg";
import innovationIcon from "../assets/innovationIcon.svg";
import collaborationIcon from "../assets/collaborationIcon.svg";
import sustainabilityIcon from "../assets/sustainabilityIcon.svg";
import accountabilityIcon from "../assets/accountabilityIcon.svg";
import employeeIcon from "../assets/employeeIcon.svg";

interface Value {
  iconImg: string;
  title: string;
  desc: string;
}

const values: Value[] = [
  {
    iconImg: integrityIcon,
    title: "Integrity",
    desc: "Ensuring transparency, ethics, and accountability.",
  },
  {
    iconImg: innovationIcon,
    title: "Innovation",
    desc: "Driving creativity and efficiency through cutting-edge solutions.",
  },
  {
    iconImg: collaborationIcon,
    title: "Collaboration",
    desc: "Achieving excellence through teamwork.",
  },
  {
    iconImg: sustainabilityIcon,
    title: "Sustainability",
    desc: "Promoting environmentally and socially responsible practices.",
  },
  {
    iconImg: accountabilityIcon,
    title: "Accountability",
    desc: "Taking ownership and delivering consistent results.",
  },
  {
    iconImg: employeeIcon,
    title: "Employee Centric",
    desc: "Fostering a supportive and empowering environment.",
  },
];

const Value: React.FC = () => {
  return (
    <section className="w-full lg:w-[1920px] lg:h-[1199px] bg-[#002C53] flex flex-col items-center justify-center gap-10 py-16 lg:py-0 mx-auto">
      {/* Title */}
      <h2 className="text-white text-[26px] sm:text-[32px] lg:text-[40px] font-semibold tracking-wide">
        Our Core Values
      </h2>

      {/* Main Card */}
      <div className="relative w-full max-w-[90%] lg:w-[1460px] lg:h-[780px] rounded-[36px] overflow-hidden border-[6px] border-white">
        {/* Background Image */}
        <img
          src={bgImg}
          alt="Core values background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0C4F6E]/90" />

        {/* Content */}
        <div className="relative z-10 h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-1 lg:grid-rows-2">
          {values.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-center px-6 lg:px-12 py-10 text-center text-white"
            >
              {/* Vertical Divider (Laptop only) */}
              {index % 3 !== 0 && (
                <div className="hidden lg:block absolute left-0 top-16 bottom-16 w-px bg-white/30" />
              )}

              {/* Icon */}
              <img
                src={item.iconImg}
                alt={item.title}
                className="w-[80px] sm:w-[100px] lg:w-[130px] h-auto mb-4 object-contain"
              />

              {/* Title */}
              <h3 className="text-[22px] sm:text-[28px] lg:text-[35px] font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[15px] sm:text-[17px] lg:text-[20px] text-white/80 leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Value;
