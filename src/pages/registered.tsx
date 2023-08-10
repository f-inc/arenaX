import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Info } from "@/components/Info";
import { Judges } from "@/components/Judges";
import Sponsors from "@/components/Sponsors";
import { Prizes } from "@/components/Prizes";
import { Schedule } from "@/components/Schedule";
import { Footer } from "@/components/Footer";
import { Confirmation } from "@/components/Confirmation";

export default function Home() {
  return (
    <>
      <main className="flex h-screen items-start p-6 lg:p-14 bg-[url('/images/hero-bg.png')] bg-center bg-no-repeat w-full bg-cover">
        <Hero />
      </main>
      <div className="bg-[#08151b] bg-[url('/images/patern.png')] bg-center bg-no-repeat w-full bg-cover">
        <Confirmation />
      </div>
    </>
  );
}
