import Header from "./Header";

export const Hero = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full flex flex-col justify-center items-center">
        <img className="w-80 h-14 mt-40" src="/images/hero-date.png" alt="" />
        <div className="hero-gradient text-2xl text-center lg:max-w-4xl lg:text-6xl orbitron font-bold mt-14">
          The Bay Area’s premier sports tech hackathon.
        </div>
        <div className="flex items-center input-gradient border border-[#FFFFFF99] rounded-xl lg:rounded-2xl mt-12 pr-2">
          <input
            className="p-[19px] w-60 lg:p-6 lg:w-80 text-xs lg:text-base text-[#FFFFFF99] bg-transparent outline-none border-r-0 rounded-l-xl lg:rounded-l-2xl ibm-400"
            type="text"
            placeholder="Enter your email address"
            name=""
            id=""
          />
          <button className="text-black text-xs lg:text-base conthrax font-semibold bg-[#FFC700] px-1.5 py-1 lg:py-3 lg:px-4 rounded-lg">
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
};
