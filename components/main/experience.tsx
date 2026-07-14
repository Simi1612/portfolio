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
            <h2 className="text-2xl font-bold text-white">AI/ML Developer & Consultant</h2>
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
            Consulting Experience & Core Contributions
          </h3>
          <ul className="list-disc list-outside text-gray-300 space-y-3 pl-4">
            <li>
              <strong>AI & Automation Architect</strong>: Developed end-to-end AI applications, customized automation models, and custom business software integrations.
            </li>
            <li>
              <strong>Predictive Engine Design</strong>: Engineered the core forecasting engine for <strong>FlyFi</strong> (flight delay prediction) using custom feature engineering, model tuning, and cloud API deployment.
            </li>
            <li>
              <strong>Document Intelligence</strong>: Built high-accuracy OCR data extraction pipelines using Gemini Vision and GPT-4o to analyze financial docs, soil reports, and invoices automatically.
            </li>
            <li>
              <strong>Backend AI Systems</strong>: Built robust, scalable backend architectures and API interfaces using Python, Django, and FastAPI.
            </li>
            <li>
              <strong>Intelligent Workflow Automation</strong>: Optimized operational overhead by creating custom n8n orchestrations that integrate LLaMA3, Gmail, Slack, and Notion databases.
            </li>
            <li>
              <strong>Outbound Lead Automation</strong>: Engineered an <strong>AI Sales Agent</strong> automating outbound lead discovery, personalization vectors, email outreach, and response tracking.
            </li>
            <li>
              <strong>AI Agent Curation</strong>: Built <strong>Trendu Daily</strong>, an autonomous market-scraping n8n pipeline summarizing global tech news and startup opportunities via automated HTML mail.
            </li>
            <li>
              <strong>RAG Development</strong>: Designed multi-user chatbot architectures implementing vector databases (FAISS, Supabase pgvector) and RAG using LangChain and LangGraph.
            </li>
            <li>
              <strong>DevOps & Containerization</strong>: Managed production deployments using Docker, version control (Git & GitHub), SQL databases, and secure API auth protocols.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
