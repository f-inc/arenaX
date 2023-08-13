import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Info } from "@/components/Info";
import { Judges } from "@/components/Judges";
import { Prizes } from "@/components/Prizes";
import { Schedule } from "@/components/Schedule";
import Sponsors from "@/components/Sponsors";
import Image from "next/image";
import Pattern from "../../public/images/patern.png";

export default function Home() {
  return (
    <>
      <Hero emailCaptured={false} />
      <div className="relative">
        <div className="bg-[#08151b] w-full h-full absolute -z-10">
          <Image src={Pattern} fill={true} alt="" />
        </div>
        <div className="z-50">
          <Info />
          <Judges />
          <Sponsors />
          <Prizes />
          <Schedule />
          <Footer />
        </div>
      </div>
    </>
  );
}
