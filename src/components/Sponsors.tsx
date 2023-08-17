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
import SponsorsImg from "images/sponsors/sponsors.png";
import AthletesAndAssets from "images/sponsors/athletes-and-assets.png";
import Sapphire from "images/sponsors/sapphire.png";
import Move from "images/sponsors/move.png";
import Respell from "images/sponsors/respell.png";
import Musicfy from "images/sponsors/musicfy.png";

const Sponsors = () => {
  const sponsors = [
    Kayyo,
    Neurosity,
    AthletesAndAssets,
    Sapphire,
    Move,
    Respell,
    Musicfy,
  ];

  return (
    <>
      <div
        id="sponsors"
        className="w-full flex justify-center items-center lg:pt-20"
      >
        <div className="w-80">
          <Image src={SponsorsImg} alt="" />
        </div>
      </div>
      <div
        className="w-full flex justify-center items-center lg:mt-16 pb-24 lg:pb-40"
        id="sponsors"
      >
        <div className="w-full flex flex-col lg:flex-row items-center max-w-screen-lg mt-16 lg:mt-14">
          <div className="mb-5 lg:mb-0 w-[90%] lg:w-full flex flex-col rounded-2xl bg-[#08151B] border border-white/[.1] items-center justify-center">
            <div className="w-full flex justify-center py-1.5 hero-gradient uppercase font-medium border-b border-white/[.1]">
              Presenting Sponsor
            </div>
            <div className="h-40 lg:h-[166px] flex items-center justify-center">
              {/* <div className="hero-gradient uppercase font-medium">Presenting Sponsor</div> */}
              <div className="w-28 p-2">
                <Image className="" src={GoldenState} alt="sponsor" />
              </div>
            </div>
          </div>
          <div className="flex justify-center px-4 sm:px-5">
            <div className="w-full md:max-w-none flex flex-col md:flex-row gap-4 items-center">
              {/* <div className="w-full md:w-80 h-52 md:h-full bg-[#08151B] border border-white/[.1] rounded-2xl flex items-center justify-center md:p-12">
                <Image src={GoldenState} alt="sponsor" className="w-36" />
              </div> */}
              <div className="w-full">
                <div className="w-full grid grid-cols-2 xl:grid-cols-4 gap-4">
                  {sponsors.map((image, key) => (
                    <div
                      key={key}
                      className={`w-full h-20 lg:h-24 bg-[#08151B] border border-white/[.1] flex items-center justify-center rounded-2xl 
                      ${key === 1 ? "" : "p-3"}
                      `}
                    >
                      <Image
                        src={image}
                        alt="sponsor"
                        className={`aspect-auto ${
                          key === 6 ? "max-w-[30%]" : "max-w-[70%]"
                        }`}
                      />
                    </div>
                  ))}
                </div>
                {/* <div className="w-full grid grid-cols-2 xl:grid-cols-4 mt-4 gap-4">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
