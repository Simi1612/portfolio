import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 sm:p-6 border-t border-[#2A0E61]/40 z-20">
      <div className="w-full flex flex-col items-center justify-center m-auto max-w-[1100px]">
        <div className="w-full flex flex-row items-start justify-around flex-wrap gap-8 py-6 text-center sm:text-left">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[160px] sm:min-w-[200px] h-auto flex flex-col items-center sm:items-start justify-start"
            >
              <h3 className="font-bold text-base text-purple-400 mb-3">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-2 text-gray-400 hover:text-white transition group"
                >
                  {Icon && <Icon className="text-[#b49bff] group-hover:text-cyan-400 transition" />}
                  <span className="text-sm ml-2">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-8 mb-4 text-xs sm:text-sm text-gray-500 text-center border-t border-[#2A0E61]/40 pt-6 w-full">
          &copy; Smruti Katariya {new Date().getFullYear()}. All rights reserved. Built with Next.js 14 & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};
