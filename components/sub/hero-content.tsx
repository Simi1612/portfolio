"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="flex items-center gap-2 py-1.5 px-3.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold backdrop-blur-sm self-start select-none"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for Freelance Projects</span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl font-bold text-white max-w-[650px] w-auto h-auto leading-tight"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              AI Agents &
            </span>{" "}
            Intelligent Automation for Businesses.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I help startups and businesses automate workflows, process documents with AI, and build production-ready LLM applications using Python, FastAPI, n8n, and modern web technologies.
        </motion.p>

        <div className="flex flex-row gap-4 flex-wrap z-20">
          <motion.a
            href="#projects"
            variants={slideInFromLeft(1)}
            className="py-2.5 px-6 button-primary text-center text-white cursor-pointer rounded-lg font-medium transition-all hover:scale-105 active:scale-95 select-none"
          >
            View My Work
          </motion.a>
          
          <a
            href="#contact"
            className="py-2.5 px-6 border border-[#7042f88b] bg-[#03001457] text-center text-[#b49bff] hover:text-white hover:bg-purple-600/30 cursor-pointer rounded-lg font-medium transition-all hover:scale-105 active:scale-95 backdrop-blur-sm z-20 select-none"
          >
            Start Your Project
          </a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
