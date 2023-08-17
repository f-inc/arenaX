"use client";
import Hamburger from "hamburger-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScheduleImg from "../../public/images/schedule.png";
import PrizesImg from "../../public/images/prizes/prizes.png";
import SponsorsImg from "../../public/images/sponsors/sponsors.png";

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navLinks = [
    {
      href: "#sponsors",
      image: SponsorsImg,
      text: "sponsors",
    },
    { href: "#schedule", image: ScheduleImg, text: "schedule" },
    { href: "#prizes", image: PrizesImg, text: "prizes" },
  ];

  return (
    <div className="w-full flex items-center justify-between">
      <Link href="/">
        <img src="/logo.svg" alt="" />
      </Link>
      <div className="lg:hidden">
        <Hamburger toggled={isSidebarOpen} toggle={toggleSidebar} />
      </div>
      <div className="hidden lg:flex items-center gap-x-8">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <h1 className="text-white font-semibold ibm-400 text-xl tracking-wide stroke uppercase cursor-pointer">
              {link.text}
            </h1>
          </Link>
        ))}
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="fixed top-0 right-0 w-full h-screen bg-[#041117] z-50">
            <div className="flex justify-end p-6">
              <Hamburger toggled={isSidebarOpen} toggle={toggleSidebar} />
            </div>
            <div className="flex flex-col items-center gap-y-10 gap-x-8 lg:hidden mt-6 p-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div className="w-60">
                    <Image src={link.image} alt="" />
                  </div>
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
