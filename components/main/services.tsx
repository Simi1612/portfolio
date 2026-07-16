"use client";

import {
  CpuChipIcon,
  BoltIcon,
  DocumentTextIcon,
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
  PuzzlePieceIcon,
  ChartBarIcon,
  CloudIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: CpuChipIcon,
    title: "AI Agents & Assistants",
    description:
      "Build intelligent AI assistants for customer support, internal tools, and business workflows using multi-agent orchestration.",
    tags: ["OpenAI", "Gemini", "Claude", "LangChain", "LangGraph"],
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: BoltIcon,
    title: "Workflow Automation",
    description:
      "Automate repetitive business processes using n8n, APIs, and cloud service integrations to eliminate manual overhead.",
    tags: ["n8n", "Gmail", "Slack", "Notion", "Selenium", "Playwright"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: DocumentTextIcon,
    title: "Document Intelligence",
    description:
      "Extract, analyze, and organize data from invoices, contracts, bank statements, and PDFs using OCR and LLM pipelines.",
    tags: ["OCR", "LLMs", "FastAPI", "Supabase"],
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Custom AI Applications",
    description:
      "Develop production-ready AI software with modern frontend and backend technologies tailored to your business needs.",
    tags: ["React", "Next.js", "FastAPI", "PostgreSQL"],
    gradient: "from-orange-500 to-amber-600",
  },
  {
    icon: MagnifyingGlassIcon,
    title: "RAG Applications",
    description:
      "Create AI chatbots that answer questions using your own documents, PDFs, or company knowledge base with high accuracy.",
    tags: ["RAG", "Embeddings", "Vector DB", "LLMs"],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: PuzzlePieceIcon,
    title: "API & AI Integrations",
    description:
      "Integrate AI services and third-party platforms into your existing applications seamlessly and reliably.",
    tags: ["OpenAI API", "Claude API", "Stripe", "Twilio", "SendGrid"],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: ChartBarIcon,
    title: "Data Science & Analytics",
    description:
      "Transform raw datasets into interactive dashboards, predictive models, and structured reports for actionable insights.",
    tags: ["Pandas", "NumPy", "Scikit-Learn", "Recharts", "Python"],
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    icon: CloudIcon,
    title: "Cloud & DevOps",
    description:
      "Deploy, scale, and manage production-ready AI applications in secure cloud environments with CI/CD pipelines.",
    tags: ["AWS", "GCP", "Docker", "Serverless", "CI/CD", "Cloudflare"],
    gradient: "from-sky-500 to-cyan-600",
  },
  {
    icon: CircleStackIcon,
    title: "Database & Vector Search",
    description:
      "Design high-performance relational databases and vector search architectures optimized for AI systems at scale.",
    tags: ["PostgreSQL", "Pinecone", "FAISS", "MongoDB", "Supabase"],
    gradient: "from-fuchsia-500 to-pink-600",
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center py-20 z-[20] w-full scroll-mt-20"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center mb-14"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          My Freelance Services
        </h1>
        <p className="text-gray-400 mt-3 text-sm max-w-[500px] text-center">
          End-to-end AI development — from idea to production-ready deployment
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1100px] w-full px-6">
        {SERVICES.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-[#2A0E61] bg-[#03001457] hover:border-[#7042f88b] transition-all duration-300 backdrop-blur-md overflow-hidden"
            >
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl bg-[#7042f808]" />

              {/* Icon + number row */}
              <div className="flex items-center justify-between">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-[11px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-500">
                  0{i + 1}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-white font-bold text-[16px] leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5 mt-1">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-[#7042f81a] border border-[#7042f830] text-[#b49bff]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
