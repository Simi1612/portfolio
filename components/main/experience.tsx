"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EXPERIENCES = [
  {
    company: "Biraj Tech Services",
    role: "AI/ML Intern",
    period: "Feb 2026 – Present",
    location: "Ahmedabad, Gujarat",
    description: [
      "Developed FlyFi's Vayu & Seer flight delay forecasting system using machine learning, feature engineering, preprocessing, and model evaluation.",
      "Built an AI-powered Sales Automation Platform with automated outreach, AI replies, follow-ups, and analytics dashboards.",
      "Continuously learned and applied LLMs, GenAI, LangChain, LangGraph, AI Agents, and modern AI tools while delivering production-grade solutions.",
      "Worked on data processing pipelines using historical and live operational data across multiple routes.",
      "Collaborated on production-ready AI deployments, prompt engineering workflows, and scalable backend services using Python and FastAPI.",
    ],
    skills: ["Python", "FastAPI", "Machine Learning", "LangChain", "LangGraph", "GenAI", "Prompt Engineering"],
  },
  {
    company: "Tech Elecon",
    role: "Data Science Intern",
    period: "May 2025 – Jun 2025",
    location: "Anand, Gujarat",
    description: [
      "Built machine learning models for stock market trend analysis and price forecasting using historical market data.",
      "Developed analytical dashboards and visual reports to clearly communicate forecasting insights and model performance.",
      "Performed data preprocessing, feature selection, and statistical evaluation using Python, Pandas, NumPy, and Scikit-Learn.",
      "Evaluated predictive algorithms to drive actionable data insights and improve accuracy metrics.",
    ],
    skills: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Time-Series Forecasting", "Data Analysis"],
  },
  {
    company: "Mirror Institute",
    role: "Data Entry & Records Management Associate",
    period: "Nov 2022 – Dec 2025",
    location: "Nadiad, Gujarat",
    description: [
      "Managed and maintained institutional datasets and academic records alongside undergraduate engineering studies.",
      "Learned effective time management by organizing, task scheduling, and prioritizing daily responsibilities to meet deadlines efficiently.",
      "Collaborated across teams, supporting peers and staff to streamline daily operational workflows and record accuracy.",
      "Contributed to institutional growth through event organization and process improvements.",
    ],
    skills: ["Data Management", "Task Scheduling", "Excel / Sheets", "Time Management", "Operations"],
  },
];

export const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-16 md:py-20 px-4 sm:px-6 z-20 w-full scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-10 sm:mb-14 text-center"
      >
        <h1 className="text-[32px] sm:text-[38px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Where I&apos;ve Worked
        </h1>
        <p className="text-gray-400 mt-3 text-xs sm:text-sm max-w-[500px] text-center px-2">
          My professional journey across AI, Machine Learning, and Data Science
        </p>
      </motion.div>

      <div className="w-full max-w-[1050px] flex flex-col md:flex-row gap-6 md:gap-8 items-start bg-[#03001457] border border-[#2A0E61] p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-md">
        {/* Sidebar Tabs */}
        <div className="flex md:flex-col flex-row overflow-x-auto md:overflow-visible w-full md:w-[240px] shrink-0 border-b md:border-b-0 md:border-l border-[#2A0E61]/60 md:py-2 gap-1.5 pb-3 md:pb-0 no-scrollbar">
          {EXPERIENCES.map((exp, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`relative px-4 py-2.5 sm:px-5 sm:py-3.5 text-left transition-all duration-300 whitespace-nowrap md:whitespace-normal rounded-r-lg group flex items-center justify-between shrink-0 ${
                  isActive
                    ? "bg-[#7042f820] text-white font-semibold"
                    : "text-gray-400 hover:text-gray-200 hover:bg-[#7042f80a]"
                }`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 bottom-0 md:top-0 w-full md:w-1 h-1 md:h-full bg-gradient-to-b md:from-purple-500 md:to-cyan-500 from-purple-500 to-cyan-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="text-xs sm:text-sm tracking-wide z-10">{exp.company}</span>
                {isActive && (
                  <span className="hidden md:inline-block text-purple-400 text-xs ml-2 animate-pulse">
                    ●
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 min-h-[380px] w-full pt-2 md:pt-0 md:pl-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-4 sm:gap-5"
            >
              {/* Header: Role & Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#2A0E61]/60">
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold text-white tracking-wide leading-snug">
                    {EXPERIENCES[activeTab].role}{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 block sm:inline">
                      @ {EXPERIENCES[activeTab].company}
                    </span>
                  </h2>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1.5 flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {EXPERIENCES[activeTab].location}
                  </p>
                </div>
                <div className="w-fit px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#7042f82c] border border-[#7042f88b] text-[#b49bff] text-[11px] sm:text-xs font-semibold self-start sm:self-auto">
                  {EXPERIENCES[activeTab].period}
                </div>
              </div>

              {/* Responsibilities List */}
              <ul className="space-y-3 mt-1">
                {EXPERIENCES[activeTab].description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                    <span className="text-purple-400 shrink-0 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="mt-6 pt-4 border-t border-[#2A0E61]/40 flex flex-wrap gap-2">
                {EXPERIENCES[activeTab].skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full bg-[#7042f815] border border-[#7042f835] text-cyan-300/90 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
