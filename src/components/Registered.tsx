import Link from "next/link";

const Registered = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="hero-gradient text-5xl text-center lg:max-w-4xl lg:text-6xl orbitron font-bold pb-16 lg:pb-16">
        Registration Confirmed.
      </h1>
      <div className="flex flex-col gap-y-4 lg:flex-row gap-x-16">
        <button className="px-12 py-5 lg:text-lg text-[#ffc700] conthrax rounded-lg border-2 border-[#FFC700] uppercase">
          make a tweet
        </button>
        <Link href={"/"}>
          <button className="px-12 py-5 lg:text-lg text-black conthrax rounded-lg border-2 bg-[#ffc700] border-[#FFC700] uppercase">
            continue to site
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Registered;
