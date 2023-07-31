export const Schedule = () => {
  return (
    <div id="schedule" className="w-full flex flex-col items-center justify-center px-5 lg:px-0">
      <img
        className="w-80 lg:w-[22rem] h-20"
        src="/images/schedule.png"
        alt=""
      />
      <div className="flex flex-col items-center lg:my-20">
        <div className="hero-gradient text-white text-2xl lg:text-4xl orbitron font-bold mt-12 my-8 lg:mt-0 lg:my-0">
          Day 0 - Tuesday 8/22
        </div>
        <div className="text-[#ffc700] bg-[#08151B] text-center rounded-2xl text-lg ibm-400 uppercase px-10 py-6 lg:mt-10 info-gradient">
          <span className="text-[#878787]"> 5:00 PM - 6:30 PM: </span> Hackathon
          Kickoff and Team Making
        </div>
      </div>
      <div className="flex flex-col items-center lg:my-20 text-center">
        <div className="hero-gradient text-white text-2xl lg:text-4xl orbitron font-bold mt-12 my-8 lg:mt-0 lg:my-0">
          Day 1 - Wednesday 8/23
        </div>
        <div className="flex justify-center items-center gap-3 self-stretch flex-wrap lg:mt-10 lg:mx-60 2xl:mx-80">
          <div className="text-[#ffc700] bg-[#08151B] rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 9:00 AM: </span>{" "}
            <span className="text-white">
              {" "}
              Doors Open (coffee + breakfast provided)
            </span>
          </div>
          <div className="text-[#ffc700] bg-[#08151B] rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 11:00AM - 1:00PM: </span>{" "}
            Technical Workshops
          </div>
          <div className="text-white bg-[#08151B] rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 12:30 PM: </span>Lunch
          </div>
          <div className="text-white bg-[#08151B] rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 9:00 PM:</span> Doors Close Close
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:my-20 text-center">
        <div className="hero-gradient text-white text-2xl lg:text-4xl orbitron font-bold mt-12 my-8 lg:mt-0 lg:my-0">
          Day 2 - Thursday 8/24
        </div>
        <div className="flex justify-center items-center gap-3 self-stretch flex-wrap lg:mt-10 lg:mx-28 2xl:mx-60">
          <div className="text-white bg-[#08151B] rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 9:00 AM: </span> Doors Open
          </div>
          <div className="text-white bg-[#08151B] rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 11:00 PM: </span> Midpoint
            Check-in
          </div>
          <div className="text-white bg-[#08151B] rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]">12:30 PM: </span> Lunch
          </div>
          <div className="text-[#ffc700] bg-[#08151B] rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 5:00 PM:</span> Basketball
            Challenge hosted by Warriors
          </div>
          <div className="text-white bg-[#08151B] rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 7:00 PM: </span> Doors Close
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center lg:my-20 text-center">
        <div className="hero-gradient text-white text-2xl lg:text-4xl orbitron font-bold mt-12 my-8 lg:mt-0 lg:my-0">
          Day 3 - Friday 8/25{" "}
        </div>
        <div className="flex justify-center items-center gap-3 self-stretch flex-wrap lg:mt-10 lg:mx-32 2xl:mx-60">
          <div className="text-white bg-[#08151B] rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]">9:00 AM: </span> Doors Open
          </div>
          <div className="text-white bg-[#08151B] rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 12:30 PM: </span> Lunch
          </div>
          <div className="text-[#ffc700] bg-[#08151B] rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]">3:00 PM: </span> Final Pitches Due
          </div>
          <div className="text-[#ffc700] bg-[#08151B] rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 6:00 PM: </span> Demos and Judging
          </div>
          <div className="text-[#ffc700] bg-[#08151B] rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 7:00 PM:</span> Awards and Closing
            Ceremony
          </div>
        </div>
      </div>
    </div>
  );
};
