import Image from "next/image";
import GoldenState from "images/sponsors/goldenstate.png";

const GSW = () => {
  return (
    <div className="h-full px-16 flex flex-col rounded-2xl bg-[#08151B] border-grad items-center justify-center">
      <div className="h-48 lg:h-52 lg:flex-grow flex items-center justify-center">
        <div className="w-28 p-2 lg:py-0 lg:p-0">
          <Image className="" src={GoldenState} alt="sponsor" />
        </div>
      </div>
    </div>
  );
};

export default GSW;
