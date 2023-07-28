import React, { useState } from "react";
import Hamburger from "hamburger-react";

import Link from "next/link";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navLinks = [
    {
      href: "#sponsors",
      image: "/images/sponsors/sponsors.png",
      text: "sponsors",
    },
    { href: "#schedule", image: "/images/schedule.png", text: "schedule" },
    { href: "#partners", image: "/images/judges.png", text: "partners" },
    { href: "#prizes", image: "/images/prizes/prizes.png", text: "prizes" },
  ];

  return (
    <div className="w-full flex items-center justify-between">
      <Link href="/">
        <img src="/logo.svg" alt="" />
      </Link>
      <div className="lg:hidden">
        <Hamburger toggled={isSidebarOpen} toggle={toggleSidebar} />
      </div>
      {/* <div className="flex flex-col p-5 items-center gap-x-8 lg:hidden">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <span className="text-white text-lg font-semibold uppercase cursor-pointer link-shadow">
              {link.text}
            </span>
          </Link>
        ))}
      </div> */}
      <div className="hidden lg:flex items-center gap-x-8">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <span className="text-white text-lg font-semibold uppercase cursor-pointer link-shadow">
              {link.text}
            </span>
          </Link>
        ))}
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="fixed top-0 right-0 w-full h-screen bg-[#041117] z-50">
            <div className="flex justify-end p-8 pt-10">
              <Hamburger toggled={isSidebarOpen} toggle={toggleSidebar} />
            </div>
            <div className="flex flex-col items-center gap-y-10 gap-x-8 lg:hidden p-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <img className="w-60" src={link.image} alt="" />
                  {/* <span className="text-white text-xl lg:text-lg font-semibold uppercase cursor-pointer link-shadow">
                    {link.text}
                  </span> */}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
