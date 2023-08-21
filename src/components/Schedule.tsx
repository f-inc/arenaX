import Image from "next/image";
import ScheduleImg from "../../public/images/schedule.png";

export const Schedule = () => {
  return (
    <div
      id="schedule"
      className="w-full flex flex-col items-center justify-center px-5 lg:px-0"
    >
      <div className="w-80 lg:w-[22rem] h-20">
        <Image src={ScheduleImg} alt="" />
      </div>
      <div className="flex flex-col items-center lg:my-20">
        <div className="hero-gradient text-white text-2xl lg:text-4xl orbitron font-bold mt-12 my-8 lg:mt-0 lg:my-0">
          Day 0 - Tuesday 8/22
        </div>
        <div className="text-[#ffc700] bg-[#08151B] border-grad text-center rounded-2xl text-lg ibm-400 uppercase px-10 py-6 lg:mt-10 info-gradient">
          <span className="text-[#878787]"> 5:00 PM - 6:30 PM: </span>
          <span>Hackathon Kickoff and Team Forming Mixer</span>
        </div>
      </div>

      <div className="flex flex-col items-center lg:my-20 text-center">
        <div className="hero-gradient text-white text-2xl lg:text-4xl orbitron font-bold mt-12 my-8 lg:mt-0 lg:my-0">
          <span>Day 1 - Wednesday 8/23</span>
        </div>
        <div className="flex justify-center items-center gap-3 self-stretch flex-wrap lg:mt-10 lg:mx-60 2xl:mx-80">
          <div className="text-[#ffc700] bg-[#08151B] border-grad rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 9:00 AM: </span>
            <span> </span>
            <span className="text-white">
              Doors Open (coffee + breakfast provided)
            </span>
          </div>
          <div className="text-[#ffc700] bg-[#08151B] border-grad rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 11:00AM - 1:00PM: </span>
            <span>
              {" "}
              Technical Workshops with Nuerosity, Kayyo, Golden State Warriors,
              Respell
            </span>
          </div>
          <div className="text-white bg-[#08151B] border-grad rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 12:30 PM: </span>
            <span>Lunch</span>
          </div>

          <div className="text-white bg-[#08151B] border-grad rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 5:00 PM: </span>
            <span>
              Fireside Chat: Baron Davis, NBA All-Star and Angel Investor
            </span>
          </div>
          <div className="text-white bg-[#08151B] border-grad rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 5:30 PM: </span>
            <span>
              Fireside Chat: Zaza Pachulia, NBA Champion, GSW Executive
            </span>
          </div>
          <div className="text-white bg-[#08151B] border-grad rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 9:00 PM:</span>{" "}
            <span>Doors Close</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:my-20 text-center">
        <div className="hero-gradient text-white text-2xl lg:text-4xl orbitron font-bold mt-12 my-8 lg:mt-0 lg:my-0">
          <span>Day 2 - Thursday 8/24</span>
        </div>
        <div className="flex justify-center items-center gap-3 self-stretch flex-wrap lg:mt-10 lg:mx-28 2xl:mx-60">
          <div className="text-white bg-[#08151B] border-grad rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 9:00 AM: </span>
            <span> Doors Open</span>
          </div>
          <div className="text-white bg-[#08151B] border-grad rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 11:00 AM: </span>
            <span> Midpoint Check-in</span>
          </div>
          <div className="text-white bg-[#08151B] border-grad rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]">12:30 PM: </span>
            <span> Lunch</span>
          </div>
          <div className="text-[#ffc700] bg-[#08151B] border-grad rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 2:00 PM:</span>
            <span> Basketball Challenge hosted by Warriors</span>
          </div>
          <div className="text-white bg-[#08151B] border-grad rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 7:00 PM: </span>
            <span>Doors Close</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center lg:my-20 text-center">
        <div className="hero-gradient text-white text-2xl lg:text-4xl orbitron font-bold mt-12 my-8 lg:mt-0 lg:my-0">
          <span>Day 3 - Friday 8/25 </span>
        </div>
        <div className="flex justify-center items-center gap-3 self-stretch flex-wrap lg:mt-10 lg:mx-32 2xl:mx-60">
          <div className="text-white bg-[#08151B] border-grad rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]">9:00 AM: </span>
            <span> Doors Open</span>
          </div>
          <div className="text-white bg-[#08151B] border-grad rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]">12:00 PM: </span>
            <span>Submissions</span>
          </div>
          <div className="text-white bg-[#08151B] border-grad rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]"> 12:30 PM: </span>
            <span> Lunch</span>
          </div>
          <div className="text-[#ffc700] bg-[#08151B] border-grad rounded-2xl text-xl ibm-400 uppercase px-10 py-6 info-gradient">
            <span className="text-[#878787]">3:00 PM: </span>
            <span>Pitches + Judging</span>
          </div>
        </div>
      </div>
    </div>
  );
};
