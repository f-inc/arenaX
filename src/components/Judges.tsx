import Image from "next/image";
import Zaza from "images/judges/zaza.png";
import Furqan from "images/judges/furqan.png";
import Suman from "images/judges/suman.png";
import Ivan from "images/judges/ivan.png";

const judges = [
  {
    name: "Zaza Pachulia",
    role: "NBA Champion, Director of Investments for Golden State Warriors",
    imageSrc: Zaza,
  },
  {
    name: "Furqan Rydhan",
    role: "CEO, Founders, Inc & thirdweb; Prev Founders/CTO Applovin (+$30B IPO)",
    imageSrc: Furqan,
  },
  {
    name: "Suman Talukdar",
    role: "Founder & GP, AiSprouts; Over $7B in returns",
    imageSrc: Suman,
  },
  {
    name: "Ivan Porollo",
    role: "Founder, Cerebral Valley",
    imageSrc: Ivan,
  },
];

export const Judges = () => {
  return (
    <div
      id="partners"
      className="w-full flex flex-col justify-center items-center pb-20 lg:py-20"
    >
      <img className="w-72 h-20" src="/images/judges.png" alt="" />
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-4 gap-x-10 mt-12 lg:mt-20">
        {judges.map((judge, index) => (
          <div key={index} className="flex flex-col">
            <div className="w-60 h-60">
              <Image
                className="rounded-xl"
                src={judge.imageSrc}
                width={240}
                height={240}
                alt={judge.name}
              />
            </div>
            <div className="uppercase text-white text-2xl ibm-400 mt-2 lg:mt-4">
              {judge.name}
            </div>
            <div className="uppercase text-[#FFFFFF99] ibm-400 text-sm max-w-[15rem] mt-1 lg:mt-2">
              {judge.role}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
