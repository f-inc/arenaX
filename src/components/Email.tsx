import { RegionUS, TrackClient } from "customerio-node";
import { redirect } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";

const Email = () => {
  async function submitEmail(data: FormData) {
    "use server";

    const cio = new TrackClient(
      process.env.CUSTOMER_IO_SITE_ID!!,
      process.env.CUSTOMER_IO_API_KEY!!,
      { region: RegionUS }
    );

    const email = data.get("email")?.valueOf();
    if (email === null || email === undefined) {
      throw new Error("Email is null");
    }

    console.log("Email = ", data.get("email"));

    cio.identify(email as string, {
      email: email,
      source: "arena-x",
    });

    redirect("/registered");
  }

  return (
    <>
      <Toaster
        toastOptions={{
          className: "font-[ibm-500]",
          style: {
            background: "#000",
            color: "#fff",
            maxWidth: "100%",
            gap: "0.2rem",
          },
        }}
      />
      <form action={submitEmail}>
        <div className="w-full max-w-xl h-12 lg:h-20 flex items-center justify-between input-gradient border border-[#FFFFFF99] rounded-xl lg:rounded-2xl mt-12 p-2">
          <input
            className="w-44 lg:p-5 lg:pl-6 lg:pr-2 lg:w-80 text-xs lg:text-lg text-[#FFFFFF99] bg-transparent outline-none border-r-0 rounded-l-xl lg:rounded-l-2xl ibm-400"
            type="email"
            placeholder="Enter your email address"
            name="email"
            id=""
            // value={email}
            // onChange={handleEmail}
          />
          <button
            className="text-black h-full text-[10px] lg:text-base conthrax font-semibold bg-[#FFC700] px-2 lg:px-8 rounded-lg"
            type="submit"
          >
            REGISTER NOW
          </button>
        </div>
      </form>
    </>
  );
};

export default Email;
