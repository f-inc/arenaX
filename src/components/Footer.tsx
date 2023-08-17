import Link from "next/link";
import Email from "./Email";
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
            <span className="text-white stroke text-lg ibm-400 font-semibold uppercase cursor-pointer link-shadow">
              {link.text}
            </span>
          </Link>
        ))}
      </div>
      <div className="w-full flex justify-center items-center lg:my-12">
        <Email />
      </div>
    </div>
  );
};
