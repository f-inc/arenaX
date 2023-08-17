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
import Orangewood from "images/sponsors/orangewood.png";
import SponsorsImg from "images/sponsors/sponsors.png";
import AthletesAndAssets from "images/sponsors/athletes-and-assets.png";
import Sapphire from "images/sponsors/sapphire.png";
import Move from "images/sponsors/move.png";
import Respell from "images/sponsors/respell.png";
import Musicfy from "images/sponsors/musicfy.png";
import GSW from "./GSW";
import Mobile from "./Mobile";

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
        <div className="w-full h-max flex flex-col lg:flex-row gap-y-4 gap-x-4 max-w-screen-lg mt-16 lg:mt-14 px-4 sm:px-5">
          <GSW />
          <div className="hidden lg:flex flex-col gap-y-4">
            <div className="w-full flex gap-x-4">
              <div className="lg:w-60 xl:w-72 lg:h-24 bg-[#08151B] border-grad flex items-center justify-center rounded-2xl">
                <Image
                  src={Neurosity}
                  alt="sponsor"
                  className="aspect-auto max-w-[70%]"
                />
              </div>
              <div className="lg:w-56 xl:w-64 lg:h-24 bg-[#08151B] border-grad flex items-center justify-center rounded-2xl">
                <Image
                  src={AthletesAndAssets}
                  alt="sponsor"
                  className="aspect-auto max-w-[70%]"
                />
              </div>
              <div className="lg:w-52 xl:w-64 lg:h-24 bg-[#08151B] border-grad flex items-center justify-center rounded-2xl">
                <Image
                  src={Sapphire}
                  alt="sponsor"
                  className="aspect-auto max-w-[70%]"
                />
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="lg:w-56 xl:w-64 lg:h-24 bg-[#08151B] border-grad flex items-center justify-center rounded-2xl">
                <Image
                  src={Musicfy}
                  alt="sponsor"
                  className="aspect-auto max-w-[70%]"
                />
              </div>
              <div className="lg:w-36 xl:w-40 lg:h-24 bg-[#08151B] border-grad flex items-center justify-center rounded-2xl">
                <Image
                  src={Move}
                  alt="sponsor"
                  className="aspect-auto max-w-[70%]"
                />
              </div>
              <div className="lg:w-40 xl:w-44 lg:h-24 bg-[#08151B] border-grad flex items-center justify-center rounded-2xl">
                <Image
                  src={Respell}
                  alt="sponsor"
                  className="aspect-auto max-w-[70%]"
                />
              </div>
              <div className="lg:w-36 xl:w-44 lg:h-24 bg-[#08151B] border-grad flex items-center justify-center rounded-2xl">
                <Image
                  src={Kayyo}
                  alt="sponsor"
                  className="aspect-auto max-w-[70%]"
                />
              </div>
            </div>
          </div>
          <Mobile />
        </div>
      </div>
    </>
  );
};

export default Sponsors;
