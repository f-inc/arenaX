import Image from "next/image";
import PrizesImg from "../../public/images/prizes/prizes.png";

export const Prizes = () => {
  return (
    <div
      id="prizes"
      className="w-full flex flex-col gap-y-16 justify-center items-center py-20 lg:py-20"
    >
      <div className="w-64 h-20">
        <Image src={PrizesImg} alt="" />
      </div>
      <div className="flex flex-col gap-y-10 lg:flex-row items-end gap-x-8">
        <div className="flex lg:hidden flex-col items-center px-[26px] py-8 rounded-2xl prize gap-y-16">
          <div className="text-[#FFC700] text-3xl ibm-400">1st prize</div>
          <img src="/images/prizes/first.svg" alt="" />
          <div className="uppercase text-lg text-white ibm-400 text-center">
            $150k credits + $5k Cash <br />
            signed warriors merch{" "}
          </div>
        </div>

        <div className="h-max flex flex-col items-center px-[26px] py-8 rounded-2xl prize gap-y-8">
          <div className="text-[#FFC700] text-2xl ibm-400">2nd prize</div>
          <img src="/images/prizes/second.svg" alt="" />
          <div className="uppercase text-lg text-white ibm-400 text-center">
            $25k credits + $2K Cash <br />
            access to the f.inc lab{" "}
          </div>
        </div>
        <div className="hidden lg:flex flex-col items-center px-[26px] py-8 rounded-2xl prize gap-y-16">
          <div className="text-[#FFC700] text-3xl ibm-400">1st prize</div>
          <img src="/images/prizes/first.svg" alt="" />
          <div className="uppercase text-lg text-white ibm-400 text-center">
            $150k credits + $5k Cash
            <br />
            signed warriors merch{" "}
          </div>
        </div>
        <div className="h-max flex flex-col items-center px-[26px] py-8 rounded-2xl prize gap-y-8">
          <div className="text-[#FFC700] text-2xl ibm-400">3rd prize</div>
          <img src="/images/prizes/third.svg" alt="" />
          <div className="uppercase text-lg text-white ibm-400 text-center">
            $25k credits + $1k CASH <br />
            access to the f.inc lab{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
