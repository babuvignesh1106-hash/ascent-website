import backgroundImg2 from "../../assets/bg2.svg";
import memory from "../../assets/memory.svg";

function Memory() {
  return (
    <section className="relative w-full max-w-[1920px] h-[585px] mx-auto overflow-hidden">
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
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="flex items-center gap-16 px-16">
          {/* LEFT IMAGE */}
          <div className="flex-shrink-0">
            <img
              src={memory}
              alt="About Visual"
              className="w-[666px] h-[476px] object-cover rounded-tl-[48px] rounded-br-[48px] shadow-lg"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="max-w-[650px]">
            <h2 className="text-[30px] font-bold text-[#0B2B4B] leading-snug">
              “Every Great Company Starts with a Dream.”
            </h2>

            <p className="mt-6 text-[20px] leading-relaxed text-gray-700">
              From a spark in the minds of passionate young technologists to a
              thriving remote-first IT firm, Ascentware was born to challenge
              the norms of the corporate world. We are not just a company —
              we’re a community. A place where personal space is respected,
              ideas are heard, and success is shared. Dive into our journey and
              discover how we’re building more than software — we’re building
              futures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Memory;
