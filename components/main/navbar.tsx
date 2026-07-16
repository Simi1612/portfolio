'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link
          href="#hero"
          className="flex items-center"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer"
          />
          <div className="hidden md:flex md:selffont-bold ml-[10px] text-gray-300">Smruti Katariya</div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[580px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[24px] py-[10px] rounded-full text-gray-200 gap-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.title}
                onClick={() => scrollTo(link.link.replace("#", ""))}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition whitespace-nowrap text-sm"
              >
                {link.title}
              </button>
            ))}
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row items-center gap-5">
          <div className="flex flex-row gap-5 mr-1">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-6 w-6 text-white" />
              </Link>
            ))}
          </div>
          <Link
            href="#contact"
            className="py-1.5 px-4 text-sm font-semibold border border-[#7042f88b] bg-[#03001457] text-[#b49bff] hover:text-white hover:bg-purple-600/30 rounded-full transition-all hover:scale-105 active:scale-95 select-none cursor-pointer z-50"
          >
            Hire Me
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
          {/* Links */}
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.title}
                onClick={() => {
                  scrollTo(link.link.replace("#", ""));
                  setIsMobileMenuOpen(false);
                }}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center text-sm"
              >
                {link.title}
              </button>
            ))}
            <Link
              href="#contact"
              className="py-2 px-6 text-sm font-semibold border border-[#7042f88b] bg-[#03001457] text-[#b49bff] hover:text-white hover:bg-purple-600/30 rounded-full transition-all mt-2 select-none cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};