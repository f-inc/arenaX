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
        <div className="flex flex-col items-center">
          <div className="hero-gradient text-2xl text-center lg:max-w-4xl lg:text-6xl orbitron font-bold mt-14 pb-1 lg:pb-5">
            The Bay Area’s premier
          </div>
          <div className="hero-gradient text-2xl text-center lg:max-w-4xl lg:text-6xl orbitron font-bold">
            sports tech hackathon.
          </div>
        </div>
        <div className="w-full max-w-xl h-12 lg:h-20 flex items-center justify-between input-gradient border border-[#FFFFFF99] rounded-xl lg:rounded-2xl mt-12 p-2">
          <input
            className="w-44 lg:p-5 lg:pl-8 lg:pr-2 lg:w-80 text-xs lg:text-lg text-[#FFFFFF99] bg-transparent outline-none border-r-0 rounded-l-xl lg:rounded-l-2xl ibm-400"
            type="text"
            placeholder="Enter your email address"
            name=""
            id=""
          />
          <button className="text-black h-full text-[10px] lg:text-base conthrax font-semibold bg-[#FFC700] px-2 lg:px-8 rounded-lg">
            REGISTER NOW
          </button>
        </div>
        {/* <div className="flex items-center input-gradient border border-[#FFFFFF99] rounded-xl lg:rounded-2xl mt-12 pr-2">
          <input
            className="p-[19px] w-60 lg:p-5 lg:pl-8 lg:pr-2 lg:w-80 text-xs lg:text-base text-[#FFFFFF99] bg-transparent outline-none border-r-0 rounded-l-xl lg:rounded-l-2xl ibm-400"
           
          />
          <button className="text-black text-xs lg:text-base conthrax font-semibold bg-[#FFC700] px-1.5 py-1 lg:py-6 lg:px-8 rounded-lg">
            REGISTER NOW
          </button>
        </div> */}
      </div>
    </div>
  );
};
