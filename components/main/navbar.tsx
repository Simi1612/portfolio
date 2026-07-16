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
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-4 sm:px-6 md:px-10">
      {/* Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto">
        {/* Logo + Name */}
        <Link
          href="#hero"
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={50}
            height={50}
            draggable={false}
            className="cursor-pointer w-[42px] h-[42px] md:w-[50px] md:h-[50px] object-contain"
          />
          <div className="font-bold text-gray-300 text-sm sm:text-base whitespace-nowrap">Smruti Katariya</div>
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

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none text-3xl p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014]/95 border-b border-[#2A0E61] p-6 flex flex-col items-center text-gray-300 md:hidden shadow-2xl backdrop-blur-xl animate-fadeIn">
          {/* Links */}
          <div className="flex flex-col items-center gap-5 w-full">
            {NAV_LINKS.map((link) => (
              <button
                key={link.title}
                onClick={() => {
                  scrollTo(link.link.replace("#", ""));
                  setIsMobileMenuOpen(false);
                }}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center text-base font-medium py-1 w-full"
              >
                {link.title}
              </button>
            ))}
            <Link
              href="#contact"
              className="py-2.5 px-8 text-sm font-semibold border border-[#7042f88b] bg-[#7042f820] text-white hover:bg-purple-600 rounded-full transition-all mt-2 select-none cursor-pointer text-center shadow-md w-full max-w-[220px]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-[#2A0E61]/50 w-full">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-7 w-7 text-gray-300 hover:text-white transition" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};