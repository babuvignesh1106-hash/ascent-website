import center from "../assets/asc logo.svg";

function Achieve() {
  return (
    <div className="relative w-[1920px] h-[1375px] bg-gradient-to-r from-[#002C53] to-[#0C4F6E] mx-auto flex flex-col items-center justify-center">
      {/* Title */}
      <h2 className="absolute top-[80px] text-[#38BDF8] text-[40px] font-semibold tracking-wide">
        Achievements & Recognitions
      </h2>

      {/* CENTER CIRCLE */}
      <div
        className="absolute top-[590px] w-[360px] h-[360px] rounded-full bg-[linear-gradient(to_bottom,#F01C1B_50%,#0C4F6E_50%)] flex items-center justify-center rotate-320 "
        style={{
          clipPath: "inset(0 0 50% 0)", // cuts bottom half
        }}
      ></div>

      {/* TOP */}
      <Circle
        className="top-[230px] left-[830px]"
        title="Client-Centric Focus"
        desc="We prioritize transparency, trust, and long-term relationships with every partner we serve."
      />
      <div className=" absolute top-[620px] w-[300px] h-[300px] rounded-full bg-white border-2 border-blue-500 flex items-center justify-center shadow-lg">
        <img
          src={center}
          alt="center"
          className="w-[215px] h-[215px] object-contain "
        />
      </div>
      <div
        className=" absolute top-[590px] left-[800px] w-[40px] h-[60px] bg-[#F01C1B] rotate-320"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      ></div>
      <div className=" absolute top-[600px] left-[1568px] w-[120px] h-[120px] rounded-full bg-[#D9D9D9] opacity-5"></div>
      <div className=" absolute top-[900px] left-[1705px] w-[429px] h-[429px] rounded-full bg-[#D9D9D9] opacity-3"></div>
      <div className=" absolute top-[990px] left-[-138px] w-[275px] h-[275px] rounded-full bg-[#D9D9D9] opacity-3"></div>
      <div className=" absolute top-[1270px] left-[382px] w-[76px] h-[76px] rounded-full bg-[#D9D9D9] opacity-3"></div>

      {/* TOP RIGHT */}
      <Circle
        className="top-[380px] left-[1200px]"
        title="Remote-First Culture"
        desc="Our global talent pool collaborates efficiently, ensuring delivery without boundaries.  "
      />

      {/* BOTTOM RIGHT */}
      <Circle
        className="top-[760px] left-[1236px]"
        title="Comprehensive Services"
        desc="Whether IT, Engineering, or Compliance—our multi-domain offerings serve end-to-end transformation."
      />

      {/* BOTTOM */}
      <Circle
        className="top-[1050px] left-[1009px]"
        title="People-First Philosophy"
        desc="Our culture celebrates ideas, supports growth, and ensures each team member is empowered to do their best work."
      />

      {/* BOTTOM LEFT */}
      <Circle
        className="top-[1050px] left-[645px]"
        title="Strong Track Record"
        desc="Trusted by global names like Hitachi, the European Commission, and NTT DATA."
      />
      <Circle
        className="top-[760px] left-[440px]"
        title="Innovation-Driven"
        desc="We stay ahead by integrating new-age technologies like OCR, RPA, and Big Data into practical, scalable systems."
      />

      {/* TOP LEFT */}
      <Circle
        className="top-[380px] left-[450px]"
        title="Proven Expertise"
        desc="From AI implementation to infrastructure automation, we deliver future-ready solutions tailored to industry needs."
      />
    </div>
  );
}

/* Reusable Circle */
function Circle({
  title,
  desc,
  className,
}: {
  title: string;
  desc: string;
  className: string;
}) {
  return (
    <div
      className={`absolute w-[267px] h-[267px] rounded-full bg-white shadow-xl flex flex-col items-center justify-center text-center px-6 ${className}`}
    >
      <h3 className="text-[24px] font-semibold text-sky-500 mb-2">{title}</h3>
      <p className="text-[16px] text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

export default Achieve;
