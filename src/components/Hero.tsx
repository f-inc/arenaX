import Link from "next/link";
import Email from "./Email";
import Header from "./Header";

export const Hero = (
  { emailCaptured = false }: { emailCaptured: boolean } = {
    emailCaptured: false,
  }
) => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full flex justify-center items-center mt-10">
        <Link
          href="https://twitter.com/fdotinc/status/1684700454239039488?s=20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-max flex justify-center items-center text-center gap-x-2 px-5 py-3 hero-grad border border-[#FFFFFF99]">
            <img className="w-6 h-6 lg:w-5 lg:h-5" src="/hero.svg" alt="" />
            <div className="hero-grad-1 uppercase ibm-500 text-sm lg:text-lg">
              Founders, inc x golden state warriors
            </div>
          </div>
        </Link>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <img
          className="w-80 h-14 mt-20 lg:mt-28"
          src="/images/hero-date.png"
          alt=""
        />
        <div className="flex flex-col items-center">
          <div className="hero-gradient text-2xl text-center lg:max-w-4xl lg:text-6xl orbitron font-bold mt-14 pb-1 lg:pb-5">
            The Bay Area’s premier
          </div>
          <div className="hero-gradient text-2xl text-center lg:max-w-4xl lg:text-6xl orbitron font-bold">
            sports tech hackathon.
          </div>
        </div>
        {emailCaptured ? (
          <div className="hero-gradient text-sm text-center lg:max-w-4xl lg:text-2xl orbitron font-bold mt-14 pb-1 lg:pb-5">
            Congrats, you're on the list
          </div>
        ) : (
          <Email />
        )}
      </div>
    </div>
  );
};
