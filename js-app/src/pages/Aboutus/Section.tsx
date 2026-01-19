import mount from "../../assets/mount.svg";

function Section() {
  return (
    <div className="relative w-[1920px] h-[185px]">
      <img
        src={mount}
        alt="Section Image"
        className="w-full h-full object-cover"
      />

      {/* Centered Text */}
      <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">
        About Us
      </h1>
    </div>
  );
}

export default Section;
