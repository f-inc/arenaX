import Link from "next/link";

export const Footer = () => {
  const navLinks = [
    { href: "#sponsors", text: "Sponsors" },
    { href: "#schedule", text: "Schedule" },
    { href: "#partners", text: "Partners" },
    { href: "#prizes", text: "Prizes" },
  ];

  return (
    <div className="flex flex-col items-center gap-y-1 pb-10 px-8 lg:p-0">
      <div className="w-full hidden lg:flex justify-center items-center gap-x-8 lg:mt-8">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <span className="text-white text-lg font-semibold uppercase cursor-pointer link-shadow">
              {link.text}
            </span>
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-center items-center lg:my-12">
        <div className="flex items-center input-gradient border border-[#FFFFFF99] rounded-xl lg:rounded-2xl mt-12 pr-2">
          <input
            className="p-[19px] w-60 lg:p-6 lg:w-80 text-xs lg:text-base text-[#FFFFFF99] bg-transparent outline-none border-r-0 rounded-l-xl lg:rounded-l-2xl ibm-400"
            type="text"
            placeholder="Enter your email address"
            name=""
            id=""
          />
          <button className="text-black text-xs lg:text-base conthrax font-semibold bg-[#FFC700] px-1.5 py-1 lg:py-3 lg:px-4 rounded-lg">
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
};
