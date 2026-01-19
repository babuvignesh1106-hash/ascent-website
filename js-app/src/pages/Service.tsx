import bgTop from "../assets/service/background.svg";
import image from "../assets/innovationIcon.svg";

function Service() {
  return (
    <div className="relative">
      <img
        src={bgTop}
        alt="Core values background"
        className=" w-full h-full object-cover rotate-180"
      />
      <img
        src={bgTop}
        alt="Core values background"
        className=" w-full h-full object-cover"
      />
      <div className="absolute top-[240px] left-[190px] w-[1500px]">
        <div className="absolute top-[15px] left-[550px] text-[#1EB5EC] text-[40px]">
          Our Clients and Customers
        </div>

        <div
          className="bg-gradient-to-r from-[#0C4F6E] to-[#0A3E57]
                  p-[80px] rounded-tl-[70px] rounded-br-[70px]"
        >
          <div className="grid grid-cols-5 gap-8 text-center mt-15 text-white">
            {/* Item 1 */}
            <div className="flex flex-col items-center">
              <img
                src={image}
                alt=""
                className="w-[126px] h-[115px] object-contain"
              />
              <p className="mt-4">Integrity</p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center">
              <img
                src={image}
                alt=""
                className="w-[126px] h-[115px] object-contain"
              />
              <p className="mt-4">Innovation</p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center">
              <img
                src={image}
                alt=""
                className="w-[126px] h-[115px] object-contain"
              />
              <p className="mt-4">Trust</p>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center">
              <img
                src={image}
                alt=""
                className="w-[126px] h-[115px] object-contain"
              />
              <p className="mt-4">Growth</p>
            </div>

            {/* Item 5 */}
            <div className="flex flex-col items-center">
              <img
                src={image}
                alt=""
                className="w-[126px] h-[115px] object-contain"
              />
              <p className="mt-4">Excellence</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" absolute top-200 left-0 w-[2000px] h-[1000px] px-30  grid grid-cols-3 grid-rows-2 gap-4">
        <div className="bg-blue-200 ">2</div>
        <div className="bg-blue-200 ">3</div>
        <div className="bg-blue-200 p-6">4</div>
        <div className="bg-blue-200 p-6">5</div>
        <div className="bg-blue-200 p-6">6</div>
      </div>
    </div>
  );
}

export default Service;
