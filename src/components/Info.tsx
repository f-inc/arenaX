import Image from "next/image";
import InfoMain from "../../public/images/Info-main.png";
import Baron from "../../public/images/featured/baron.png";
import Zaza from "images/judges/zaza.png";
import Kirk from "../../public/images/featured/kirk.png";
import Daniel from "../../public/images/featured/daniel.png";

export const Info = () => {
  const topics = [
    "Athletic Performance/Recovery",
    "Sports Analytics",
    "Gaming",
    "Media Production and Broadcasting",
    "Fan Engagement",
  ];

  const judges = [
    {
      name: "baron davis",
      role: "Angel Investor, NBA All-Star",
      imageSrc: Baron,
    },
    {
      name: "zaza pachulia",
      role: "Executive, Golden State Warriors",
      imageSrc: Zaza,
    },
    {
      name: "kirk lacob",
      role: "EVP, Basketball Ops, Warriors",
      imageSrc: Kirk,
    },
    {
      name: "daniel Brusilovsky",
      role: "VP Tech, WARRIORS & CHASE CENTER",
      imageSrc: Daniel,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-y-8 lg:gap-y-16 items-center justify-center py-20">
      <div className="w-72 lg:w-[33rem] lg:h-20">
        <Image src={InfoMain} alt="" />
      </div>
      <div
        id="partners"
        className="w-[80%] lg:w-max flex flex-col justify-center items-center lg:mt-6 border-grad rounded-2xl"
      >
        <div className="uppercase text-white text-xl ibm-500 pt-6">
          Featured Guests
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-y-12 sm:gap-x-10 lg:gap-x-4 px-10 py-6">
          {judges.map((judge, index) => (
            <div key={index} className="flex flex-col mb-6 lg:mb-0">
              <div className="rounded-xl w-52 h-52 lg:w-40 lg:h-40 overflow-hidden">
                <Image
                  className="object-cover"
                  src={judge.imageSrc}
                  width={240}
                  height={240}
                  alt={judge.name}
                />
              </div>
              <div className="uppercase text-white max-w-[10rem] text-xl ibm-400 mt-2 lg:mt-4">
                {judge.name}
              </div>
              <div className="uppercase text-[#FFFFFF99] ibm-400 text-sm max-w-[9rem] mt-1 lg:mt-2">
                {judge.role}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="ibm-400 text-white m-5 lg:max-w-2xl text-center leading-7">
        <a
          className="underline pointer-cursor"
          target="_blank"
          rel="noreferrer"
          href="https://f.inc/"
        >
          Founders, Inc.
        </a>{" "}
        is bringing together the biggest brands in sports with the best hackers
        in the Bay Area, with the central mission of supercharging the new
        generation of sports technology ideas with the following topics:
      </div>
      <div className="flex justify-center items-center gap-3 lg:self-stretch flex-wrap mx-40">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="w-full mx-5 lg:mx-0 lg:w-max text-[#ffc700] bg-[#08151B] text-center rounded-2xl text-lg lg:text-xl ibm-400 uppercase px-10 py-6 border-grad"
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};
