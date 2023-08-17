import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Info } from "@/components/Info";
import { Judges } from "@/components/Judges";
import { Prizes } from "@/components/Prizes";
import { Schedule } from "@/components/Schedule";
import Sponsors from "@/components/Sponsors";
import Registered from "@/components/Registered";

export default function Home() {
  return (
    <>
      <main className="flex h-screen justify-center items-start p-6 lg:p-14 bg-[url('/images/hero-bg.png')] bg-center bg-no-repeat w-full bg-cover">
        <Registered />
      </main>
    </>
  );
}
