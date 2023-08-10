import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Info } from "@/components/Info";
import { Judges } from "@/components/Judges";
import { Prizes } from "@/components/Prizes";
import { Schedule } from "@/components/Schedule";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <>
      <main className="flex h-screen items-start p-6 lg:p-14 bg-[url('/images/hero-bg.png')] bg-center bg-no-repeat w-full bg-cover">
        <Hero emailCaptured />
      </main>
      <div className="bg-[#08151b] bg-[url('/images/patern.png')] bg-center bg-no-repeat w-full bg-cover">
        <Info />
        <Judges />
        <Sponsors />
        <Prizes />
        <Schedule />
        <Footer />
      </div>
    </>
  );
}
