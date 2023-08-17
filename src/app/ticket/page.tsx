import Link from "next/link";

export default function Home() {
  const tweetUrl =
    "https://twitter.com/intent/tweet?text=see%20you%20at%20ArenaX%20next%20week%21%0A%0ADM%20me%20if%20you%27re%20looking%20for%20a%20team";

  return (
    <>
      <main className="flex h-screen justify-center items-start p-6 lg:p-14 bg-[url('/images/hero-bg.png')] bg-center bg-no-repeat w-full bg-cover">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="hero-gradient text-5xl text-center lg:max-w-4xl lg:text-6xl orbitron font-bold pb-16 lg:pb-16">
            Registration Confirmed.
          </h1>
          <div className="flex flex-col gap-y-4 lg:flex-row gap-x-16">
            <Link href={tweetUrl}>
              <button className="px-12 py-5 lg:text-lg text-[#ffc700] conthrax rounded-lg border-2 border-[#FFC700] uppercase">
                make a tweet
              </button>
            </Link>
            <Link href={"/"}>
              <button className="px-12 py-5 lg:text-lg text-black conthrax rounded-lg border-2 bg-[#ffc700] border-[#FFC700] uppercase">
                continue to site
              </button>
            </Link>
          </div>
        </div>{" "}
      </main>
    </>
  );
}
