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
      <form action={submitEmail} className="w-full">
        <div className="w-full lg:max-w-xl h-14 lg:h-20 flex items-center justify-between bg-[#0000004f] backdrop-blur-sm border-grad rounded-xl lg:rounded-2xl mt-12 p-2">
          <input
            className="z-50 w-full md:w-64 px-3 truncate lg:p-5 lg:pl-6 lg:pr-2 lg:w-80 text-sm lg:text-lg text-[#FFFFFF99] outline-none border-r-0 rounded-l-xl lg:rounded-l-2xl ibm-400 bg-transparent"
            type="email"
            placeholder="Enter your email address"
            name="email"
            id=""
            // value={email}
            // onChange={handleEmail}
          />
          <button
            className="z-50 flex-shrink-0 text-black h-full text-[10px] lg:text-base conthrax font-bold bg-[#FFC700] px-4 lg:px-8 rounded-lg"
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
