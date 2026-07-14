"use client";

import React from "react";
import {
  CpuChipIcon,
  CommandLineIcon,
  DocumentMagnifyingGlassIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";

const SERVICES_DATA = [
  {
    title: "AI Agents & Assistants",
    description:
      "Build intelligent, autonomous AI assistants and multi-agent systems using OpenAI, Gemini, Claude, LangChain, and LangGraph to automate customer support, lead qualification, and business workflows.",
    icon: CpuChipIcon,
  },
  {
    title: "Workflow Automation",
    description:
      "Integrate systems and eliminate repetitive work using n8n, custom APIs, Notion, Slack, Gmail, and CRM platforms for seamless backend automation.",
    icon: CommandLineIcon,
  },
  {
    title: "Document Intelligence",
    description:
      "Extract structured data and analyze PDFs, invoices, bank statements, and reports with Gemini Vision-powered OCR and smart LLM categorization pipelines.",
    icon: DocumentMagnifyingGlassIcon,
  },
  {
    title: "Custom AI Applications",
    description:
      "Develop production-ready, full-stack web applications built with Next.js, FastAPI, Python, PostgreSQL, and Docker tailored to your business needs.",
    icon: ServerIcon,
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center py-10 z-[20] w-full"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Freelance Services
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] w-full px-6">
        {SERVICES_DATA.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="flex flex-col gap-4 p-8 rounded-2xl border border-[#2A0E61] bg-[#03001457] hover:border-[#7042f88b] transition-all duration-300 backdrop-blur-md group"
            >
              <div className="p-3 bg-[#7042f815] rounded-xl w-fit border border-[#7042f83b] text-purple-400 group-hover:bg-[#7042f835] group-hover:text-white transition-all duration-300">
                <Icon className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-wide">{service.title}</h2>
              <p className="text-gray-300 leading-relaxed text-sm">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
