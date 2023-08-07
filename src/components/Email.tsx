"use client";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { register } from "./register";

const Email = () => {
  const [email, setEmail] = useState<string>();

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const submit = () => {
    try {
      if (!email) return toast.error("Please enter a valid email address");

      register(email).then(() => toast.success("Registered Successfully"));
    } catch {
      toast.error("An Error Occured");
    }
  };

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
      <div className="w-full max-w-xl h-12 lg:h-20 flex items-center justify-between input-gradient border border-[#FFFFFF99] rounded-xl lg:rounded-2xl mt-12 p-2">
        <input
          className="w-44 lg:p-5 lg:pl-6 lg:pr-2 lg:w-80 text-xs lg:text-lg text-[#FFFFFF99] bg-transparent outline-none border-r-0 rounded-l-xl lg:rounded-l-2xl ibm-400"
          type="text"
          placeholder="Enter your email address"
          name=""
          id=""
          value={email}
          onChange={handleEmail}
        />
        <button
          className="text-black h-full text-[10px] lg:text-base conthrax font-semibold bg-[#FFC700] px-2 lg:px-8 rounded-lg"
          onClick={submit}
        >
          REGISTER NOW
        </button>
      </div>
    </>
  );
};

export default Email;
