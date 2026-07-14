"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RxGithubLogo, RxExternalLink } from "react-icons/rx";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  tags?: readonly string[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  tags,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm");
  const isTextThumbnail = isVideo || src === "" || src === "/text-thumbnail";

  return (
    <>
      <div
        className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#03001457] flex flex-col min-h-[490px] md:min-h-[520px] w-full max-w-[380px] group transition-all duration-300 hover:border-[#7042f88b]"
      >
        {/* Card Header Media */}
        <div className="relative w-full h-[200px] overflow-hidden bg-black/40">
          {isTextThumbnail ? (
            <div
              className={`relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0c001f] via-[#1a0933] to-[#250d4b] border-b border-[#2a0e61] p-4 text-center select-none group ${
                isVideo ? "cursor-pointer" : ""
              }`}
              onClick={isVideo ? () => setIsOpen(true) : undefined}
            >
              {/* Space Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
              
              {/* Centered Project Name Card Text */}
              <span className="text-xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 uppercase z-10 px-4 leading-snug">
                {title}
              </span>
              
              {/* Play Demo Badge in Bottom Right Corner of Thumbnail */}
              {isVideo && (
                <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#7042f84a] text-purple-200 border border-[#7042f86b] text-xs font-semibold backdrop-blur-md group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-400 transition-all duration-300 shadow-md">
                  <span>Play Demo</span>
                  <span className="text-[10px]">▶</span>
                </div>
              )}
            </div>
          ) : (
            <Image
              src={src}
              alt={title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Card Body */}
        <div className="relative p-6 flex-grow flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
            <p className="mt-2 text-gray-300 text-sm leading-relaxed">{description}</p>
            
            {/* Tech Stack Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-2.5 py-1 rounded bg-[#7042f81a] text-[#b49bff] border border-[#7042f83b]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-row items-center justify-between gap-4 pt-4 border-t border-[#2A0E61]">
            {isVideo && (
              <button
                onClick={() => setIsOpen(true)}
                className="text-sm font-semibold text-[#b49bff] hover:text-[#c7b5ff] transition cursor-pointer flex items-center gap-1.5"
              >
                <span>Play Demo Video</span>
                <span className="text-xs">↗</span>
              </button>
            )}
            {link && link !== "#" && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm font-semibold text-[#b49bff] hover:text-[#c7b5ff] transition flex items-center gap-1.5"
              >
                {link.includes("github.com") ? (
                  <>
                    <RxGithubLogo className="w-4 h-4" />
                    <span>View Code</span>
                  </>
                ) : link.includes("powerbi.com") ? (
                  <>
                    <RxExternalLink className="w-4 h-4" />
                    <span>View Dashboard</span>
                  </>
                ) : (
                  <>
                    <RxExternalLink className="w-4 h-4" />
                    <span>Visit Link</span>
                  </>
                )}
                <span className="text-xs">&rarr;</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      {isOpen && isVideo && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative bg-[#030014] border border-[#2A0E61] rounded-2xl w-full max-w-[800px] overflow-hidden shadow-2xl shadow-purple-500/20">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 border border-gray-600 text-white flex items-center justify-center hover:bg-black/90 transition text-lg cursor-pointer"
            >
              ✕
            </button>
            {/* Video Player */}
            <div className="w-full aspect-video bg-black">
              <video
                src={src}
                controls
                autoPlay
                preload="none"
                playsInline
                className="w-full h-full"
              />
            </div>
            {/* Title / Info */}
            <div className="p-5 border-t border-[#2A0E61]">
              <h2 className="text-xl font-bold text-white">{title} - Demo</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
