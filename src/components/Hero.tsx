import Header from "./Header";

export const Hero = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-max flex justify-center items-center text-center gap-x-2 px-5 py-3 hero-grad border border-[#FFFFFF99]">
          <img className="w-6 h-6 lg:w-5 lg:h-5" src="/hero.svg" alt="" />
          <div className="hero-grad-1 uppercase ibm-500 text-sm lg:text-lg">
            Founders, inc x golden state warriors
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <img
          className="w-80 h-14 mt-20 lg:mt-28"
          src="/images/hero-date.png"
          alt=""
        />
        <div className="h-max hero-gradient text-2xl text-center lg:max-w-5xl lg:text-7xl orbitron font-bold mt-14">
          The Bay Area’s premier sports tech hackathon.
        </div>
        <div className="flex items-center input-gradient border border-neutral-600 border-opacity-90 rounded-xl lg:rounded-2xl mt-12 pr-2">
          <input
            className="p-[19px] w-60 lg:p-6 lg:w-80 text-xs lg:text-base text-[#FFFFFF99] bg-transparent outline-none border-r-0 rounded-l-xl lg:rounded-l-2xl ibm-400"
            type="text"
            placeholder="Enter your email address"
            name=""
            id=""
          />
          <button className="text-black text-xs lg:text-base conthrax font-semibold bg-[#FFC700] px-1.5 py-1 lg:py-4 lg:px-6 rounded-lg">
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
};
