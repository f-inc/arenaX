import Image from "next/image";
import Link from "next/link";
import BiFrost from "images/sponsors/bifrost.png";
import Leap from "images/sponsors/leap.png";
import Kayyo from "images/sponsors/kayyo.png";
import BetterBrain from "images/sponsors/betterbrain.png";
import Banana from "images/sponsors/banana.png";
import Neurosity from "images/sponsors/neurosity.png";
import Scenario from "images/sponsors/scenario.png";
import CircleLabs from "images/sponsors/circle-labs.png";
import Lexica from "images/sponsors/lexica.png";
import GoldenState from "images/sponsors/goldenstate.png";
import Orangewood from "images/sponsors/orangewood.png";
const Sponsors = () => {
  const sponsors = [BiFrost, Orangewood, Leap, Banana, Neurosity, Scenario];

  return (
    <>
      <div id="sponsors" className="w-full flex justify-center items-center lg:pt-20">
        <img className="w-80" src="/images/sponsors/sponsors.png" alt="" />
      </div>
      <div
        className="w-full flex justify-center items-center lg:mt-16 lg:pb-20"
        id="sponsors"
      >
        <div className="w-full max-w-screen-xl">
          <div className=" flex justify-center mt-16 lg:mt-20 px-4 sm:px-5">
            <div className="w-full md:max-w-none flex flex-col md:flex-row gap-4 items-center">
              <div className="w-full md:w-80 h-52 md:h-full bg-[#08151B] border border-white/[.1] rounded-2xl flex items-center justify-center md:p-12">
                <Image src={GoldenState} alt="sponsor" className="w-36" />
              </div>
              <div className="w-full">
                <div className="w-full grid grid-cols-2 xl:grid-cols-3 gap-4">
                  {sponsors.map((image, key) => (
                    <div
                      key={key}
                      className="w-full h-20 lg:h-24 rounded-2xl bg-[#08151B] border border-white/[.1] flex items-center justify-center"
                    >
                      <Image
                        src={image}
                        alt="sponsor"
                        className="p-3 md:p-0 w-28"
                      />
                    </div>
                  ))}
                </div>
                <div className="w-full grid grid-cols-2 xl:grid-cols-4 mt-4 gap-4">
                  <div className="w-full h-20 lg:w-full lg:h-24 rounded-2xl bg-[#08151B] border border-white/[.1] flex items-center justify-center px-5">
                    <Image src={Kayyo} alt="sponsor" className="p-3 md:p-0" />
                  </div>
                  <div className="w-full h-20 lg:w-full lg:h-24 rounded-2xl bg-[#08151B] border border-white/[.1] flex items-center justify-center px-5">
                    <Image
                      src={BetterBrain}
                      alt="sponsor"
                      className="p-3 md:p-0"
                    />
                  </div>
                  <div className="w-full h-20 lg:w-full lg:h-24 rounded-2xl bg-[#08151B] border border-white/[.1] flex items-center justify-center px-5">
                    <Image
                      src={CircleLabs}
                      alt="sponsor"
                      className="p-3 md:p-0"
                    />
                  </div>
                  <div className="w-full h-20 lg:w-full lg:h-24 rounded-2xl bg-[#08151B] border border-white/[.1] flex items-center justify-center px-5">
                    <Image src={Lexica} alt="sponsor" className="p-3 md:p-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
