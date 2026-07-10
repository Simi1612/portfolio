import React from "react";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 z-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Work Experience
      </h1>
      <div className="w-[90%] md:w-[70%] max-w-[1000px] flex flex-col gap-8">
        {/* Experience Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#03001457] border border-[#2A0E61] p-6 rounded-lg backdrop-blur-md">
          <div>
            <h2 className="text-2xl font-bold text-white">AI/ML Intern</h2>
            <p className="text-lg text-purple-400 font-semibold mt-1">
              Biraj Tech Services
            </p>
            <p className="text-sm text-gray-400 mt-1">Ahmedabad, Gujarat</p>
          </div>
          <div className="mt-4 md:mt-0 bg-[#7042f82c] border border-[#7042f88b] text-[#b49bff] text-xs font-semibold px-4 py-2 rounded-full">
            February 2026 – Present
          </div>
        </div>

        {/* Responsibilities & Achievements */}
        <div className="bg-[#03001427] border border-[#2A0E61] p-6 rounded-lg backdrop-blur-md">
          <h3 className="text-xl font-bold text-white mb-4">
            Key Responsibilities & Achievements
          </h3>
          <ul className="list-disc list-outside text-gray-300 space-y-3 pl-4">
            <li>
              Developed AI-powered applications and intelligent business automation systems.
            </li>
            <li>
              Built Machine Learning and Deep Learning models for real-world business use cases.
            </li>
            <li>
              Worked on <strong>FlyFi</strong> flight delay forecasting platform using predictive analytics, feature engineering, model evaluation, and deployment workflows.
            </li>
            <li>
              Built backend APIs and AI services using Python and Django.
            </li>
            <li>
              Developed Generative AI, RAG, Prompt Engineering, and LLM-powered applications.
            </li>
            <li>
              Designed OCR-based document processing and intelligent data extraction pipelines.
            </li>
            <li>
              Created n8n workflow automations integrating AI models with business processes.
            </li>
            <li>
              Built <strong>AI Sales Agent</strong> platform automating lead discovery, email campaigns, personalized outreach, intelligent follow-ups, response tracking, and sales workflow management.
            </li>
            <li>
              Developed <strong>Trendu Daily</strong>, an AI-powered n8n automation bot delivering curated startup, AI, technology, and business news with daily growth opportunities through automated email reports.
            </li>
            <li>
              Collaborated on production-ready AI deployments, workflow optimization, and scalable AI solutions.
            </li>
            <li>
              Worked extensively with Git, GitHub, Docker, LangChain, LangGraph, Python, SQL, and modern AI frameworks.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
