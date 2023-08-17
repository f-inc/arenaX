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

const Mobile = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 lg:hidden">
        <div className="flex justify-between">
          <div className="w-3/12 h-20 bg-[#08151B] border-grad flex items-center justify-center rounded-2xl">
            <Image
              src={Kayyo}
              alt="sponsor"
              className="aspect-auto max-w-[70%]"
            />
          </div>
          <div className="w-5/12 h-20 bg-[#08151B] border-grad flex items-center justify-center rounded-2xl">
            <Image
              src={Respell}
              alt="sponsor"
              className="aspect-auto max-w-[70%]"
            />
          </div>
          <div className="w-3/12 h-20 bg-[#08151B] border-grad flex items-center justify-center rounded-2xl">
            <Image
              src={Move}
              alt="sponsor"
              className="aspect-auto max-w-[70%]"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[49%] h-20 bg-[#08151B] border-grad flex items-center justify-center rounded-2xl">
            <Image
              src={AthletesAndAssets}
              alt="sponsor"
              className="aspect-auto max-w-[70%]"
            />
          </div>
          <div className="w-[49%] h-20 bg-[#08151B] border-grad flex items-center justify-center rounded-2xl">
            <Image
              src={Musicfy}
              alt="sponsor"
              className="aspect-auto max-w-[70%]"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[49%] h-20 bg-[#08151B] border-grad flex items-center justify-center rounded-2xl">
            <Image
              src={Neurosity}
              alt="sponsor"
              className="aspect-auto max-w-[70%]"
            />
          </div>
          <div className="w-[49%] h-20 bg-[#08151B] border-grad flex items-center justify-center rounded-2xl">
            <Image
              src={Sapphire}
              alt="sponsor"
              className="aspect-auto max-w-[70%]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
