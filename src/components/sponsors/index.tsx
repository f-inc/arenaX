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
          <div className="w-full grid grid-cols-2 xl:grid-cols-4 gap-4">
            {sponsors.map((image, key) => (
              <div
                key={key}
                className={`w-full h-20 lg:h-24 bg-[#08151B] border-grad flex items-center justify-center rounded-2xl
                      ${key === 1 ? "" : "p-3"}
                      `}
              >
                <Image
                  src={image}
                  alt="sponsor"
                  className={`aspect-auto ${"max-w-[70%]"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
