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
