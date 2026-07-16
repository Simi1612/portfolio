"use client";

import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

const STATS = [
  { value: "3+", label: "Internships" },
  { value: "10+", label: "AI Projects Built" },
  { value: "5+", label: "Tech Stacks" },
  { value: "1", label: "Mission: AI Engineer" },
];

const QUICK_SKILLS = [
  "Python", "LangChain", "LangGraph", "Generative AI",
  "RAG", "n8n Automation", "Django", "Machine Learning",
  "Deep Learning", "Docker", "SQL", "Git & GitHub",
];

const FOCUSED_ON = [
  "Building production-ready AI agent & multi-agent systems",
  "Designing intelligent n8n workflow automations",
  "Document intelligence & LLM data extraction pipelines",
  "Full-stack AI web applications with FastAPI + React",
];

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center py-16 md:py-20 px-4 sm:px-6 z-[20] w-full scroll-mt-20"
    >
      {/* Section heading */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="text-[32px] sm:text-[38px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10 sm:pb-14 text-center"
      >
        About Me
      </motion.h1>

      <div className="w-full max-w-[1100px] flex flex-col gap-8 sm:gap-10">

        {/* TOP ROW — bio left, skills right */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">

          {/* LEFT — bio card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromLeft(0.3)}
            className="flex-1 bg-[#03001457] border border-[#2A0E61] rounded-2xl p-5 sm:p-8 backdrop-blur-md flex flex-col gap-4 sm:gap-5"
          >
            {/* Name badge */}
            <div className="flex items-center gap-3 mb-1">
              <div className="w-1 h-10 rounded-full bg-gradient-to-b from-purple-500 to-cyan-500" />
              <div>
                <h2 className="text-white font-bold text-lg sm:text-xl">Smruti Katariya</h2>
                <p className="text-purple-400 text-xs sm:text-sm font-medium">AI Developer & ML Engineer</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-[15px]">
              I&apos;m an AI Developer who enjoys building intelligent software that
              solves real-world problems. My interest in AI began with exploring
              machine learning and deep learning, and evolved into developing
              production-ready applications powered by{" "}
              <span className="text-purple-400 font-medium">
                Large Language Models, automation, and modern web technologies.
              </span>
            </p>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-[15px]">
              Today, I focus on building AI-powered products, workflow automation
              systems, and full-stack applications that help businesses automate
              repetitive tasks, analyze complex data, and improve decision-making.
              I enjoy transforming ideas into practical solutions using{" "}
              <span className="text-cyan-400 font-medium">
                LLMs, AI agents, and scalable backend systems.
              </span>
            </p>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-[15px]">
              I&apos;ve built projects ranging from AI document analysis platforms
              and intelligent chatbots to workflow automation with n8n, RAG
              applications, OCR-based document processing, and business automation
              tools — working across the full lifecycle from UI design to backend
              APIs and AI model integration.
            </p>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-[15px]">
              My goal is to create reliable, efficient, and impactful AI solutions
              that deliver measurable value for businesses, while continuously
              exploring the latest advancements in artificial intelligence.
            </p>

            {/* Resume CTA */}
            <a
              href="/Katariya_Smruti_resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 flex items-center justify-center sm:justify-start gap-2 w-full sm:w-fit py-2.5 px-6 rounded-lg border border-[#7042f88b] bg-[#03001457] text-[#b49bff] hover:text-white hover:bg-purple-600/30 transition-all duration-300 hover:scale-105 active:scale-95 font-medium backdrop-blur-sm text-sm"
            >
              View Resume
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>

          {/* RIGHT — skills + focus */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromRight(0.3)}
            className="lg:w-[360px] flex flex-col gap-6"
          >
            {/* Tech skills */}
            <div className="bg-[#03001457] border border-[#2A0E61] rounded-2xl p-5 sm:p-6 backdrop-blur-md">
              <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {QUICK_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-[#7042f81a] border border-[#7042f840] text-[#b49bff] hover:bg-[#7042f835] hover:border-[#7042f88b] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently focused */}
            <div className="bg-[#03001457] border border-[#2A0E61] rounded-2xl p-5 sm:p-6 backdrop-blur-md">
              <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Currently Focused On
              </h3>
              <ul className="space-y-3">
                {FOCUSED_ON.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                    <span className="text-purple-400 shrink-0 mt-0.5">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM ROW — stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.5)}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl border border-[#2A0E61] bg-[#03001457] backdrop-blur-md hover:border-[#7042f88b] transition-all duration-300 group"
            >
              <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </span>
              <span className="text-gray-400 text-xs sm:text-sm mt-1 text-center font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
