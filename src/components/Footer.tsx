"use client";

import Link from "next/link";
export const Footer = () => {
  const navLinks = [
    { href: "#sponsors", text: "Sponsors" },
    { href: "#schedule", text: "Schedule" },
    { href: "#prizes", text: "Prizes" },
  ];

  return (
    <div className="flex flex-col items-center gap-y-1 pb-10 px-6 lg:p-0">
      <div className="w-full hidden lg:flex justify-center items-center gap-x-8 lg:mt-8">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <span className="text-white stroke text-lg font-semibold uppercase cursor-pointer link-shadow">
              {link.text}
            </span>
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-center items-center lg:my-12">
        <div className="w-full max-w-xl h-12 lg:h-20 flex items-center justify-between input-gradient border border-[#FFFFFF99] rounded-xl lg:rounded-2xl mt-12 p-2">
          <input
            className="w-44 lg:p-5 lg:pl-8 lg:pr-2 lg:w-80 text-xs lg:text-lg text-[#FFFFFF99] bg-transparent outline-none border-r-0 rounded-l-xl lg:rounded-l-2xl ibm-400"
            type="text"
            placeholder="Enter your email address"
            name=""
            id=""
          />
          <button className="text-black h-full text-[10px] lg:text-base conthrax font-semibold bg-[#FFC700] px-2 lg:px-8 rounded-lg">
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
};
