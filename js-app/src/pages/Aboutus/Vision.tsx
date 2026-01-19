import goal from "../../assets/Goal.svg";

function Vision() {
  return (
    <div className="relative w-[1920px] h-[474px] bg-gradient-to-r from-[#0C4F6E] to-[#002C53] flex items-center justify-center ">
      {/* ===== LEFT : MISSION ===== */}
      <div className="relative w-[900px] h-full">
        {/* Triangle */}
        <div
          className="absolute top-[60px] left-[500px]
          border-t-[60px] border-t-transparent
          border-b-[60px] border-b-transparent
          border-l-[70px] border-l-blue-500
        "
        />

        <div className="absolute top-[90px] left-[350px] w-[160px] h-[58px] bg-blue-500" />

        <div className="absolute top-[88px] left-[285px] w-[165px] h-[165px] rounded-full bg-blue-500" />
        <div className="absolute top-[93px] left-[290px] w-[155px] h-[155px] rounded-full bg-white" />

        <img src={goal} className="absolute top-[120px] left-[320px]" />

        <div className="absolute top-[90px] left-[590px] max-w-[520px] text-white">
          <h2 className="text-[40px] font-semibold text-[#4FD1FF] mb-6">
            Our Mission
          </h2>
          <p className="text-[18px] leading-[38px] tracking-wide text-gray-200">
            To build and scale impactful technology solutions through a
            passionate team, delivering exceptional value to clients worldwide.
          </p>
        </div>
      </div>

      {/* ===== RIGHT : VISION (SAME DESIGN) ===== */}
      <div className="relative w-[900px] h-full">
        <div
          className="absolute top-[60px] left-[500px]
          border-t-[60px] border-t-transparent
          border-b-[60px] border-b-transparent
          border-l-[70px] border-l-blue-500
        "
        />

        <div className="absolute top-[90px] left-[350px] w-[160px] h-[58px] bg-blue-500" />

        <div className="absolute top-[88px] left-[285px] w-[165px] h-[165px] rounded-full bg-blue-500" />
        <div className="absolute top-[93px] left-[290px] w-[155px] h-[155px] rounded-full bg-white" />

        <img src={goal} className="absolute top-[120px] left-[320px]" />

        <div className="absolute top-[90px] left-[590px] max-w-[520px] text-white">
          <h2 className="text-[40px] font-semibold text-[#4FD1FF] mb-6">
            Our Vision
          </h2>
          <p className="text-[18px] leading-[38px] tracking-wide text-gray-200">
            To become a globally respected IT firm known for excellence,
            innovation, and leadership driven by a strong, skilled team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vision;
