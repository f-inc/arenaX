import Image from "next/image";
import InfoMain from "../../public/images/Info-main.png";

export const Info = () => {
  const topics = [
    "Athletic Performance/Recovery",
    "Sports Analytics",
    "Gaming",
    "Media Production and Broadcasting",
    "Fan Engagement",
  ];

  return (
    <div className="w-full flex flex-col gap-y-8 lg:gap-y-16 items-center justify-center py-20">
      <div className="w-72 lg:w-[33rem] lg:h-20">
        <Image src={InfoMain} alt="" />
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
