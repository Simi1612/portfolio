import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
  RxEnvelopeClosed,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Python",
    image: "python.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Django",
    image: "django.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "SQL",
    image: "sql.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "n8n Automation",
    image: "n8n.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Git & GitHub",
    image: "git.svg",
    width: 75,
    height: 75,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/smruti-katariya-830904324",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Simi1612",
  },
  {
    name: "Mail",
    icon: RxEnvelopeClosed,
    link: "mailto:simikatariya93@gmail.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "Python",
    image: "python.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Django",
    image: "django.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 75,
    height: 75,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Machine Learning",
    image: "ml.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Deep Learning",
    image: "dl.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Generative AI & LLMs",
    image: "genai.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "RAG",
    image: "rag.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "LangChain",
    image: "langchain.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "LangGraph",
    image: "langgraph.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "n8n Automation",
    image: "n8n.svg",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Git & GitHub",
    image: "git.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const PROJECTS = [
  {
    title: "AI Invoice Extractor",
    description:
      "An AI-powered invoice data extraction platform that turns any invoice — PDF, PNG, or JPG — into structured, exportable data in seconds. Built end-to-end with a FastAPI backend, React frontend, Supabase database, and Google Gemini 2.0 Flash Vision as the AI engine.",
    image: "/videos/ai-invoice.mp4",
    link: "https://github.com/Simi1612/InvoXtract",
    tags: ["React", "FastAPI", "Supabase", "Gemini 2.0", "Python"],
  },
  {
    title: "Trendu Daily - n8n Automation",
    description:
      "Trendu Daily is a fully automated, production-grade AI newsletter system that scrapes live global news every morning, filters market signals, generates news-derived startup opportunities using GPT-4o-Mini, and delivers personalized HTML email digests to subscribers — all with zero manual intervention.",
    image: "/videos/n8n-automation.mp4",
    link: "#",
    tags: ["n8n", "GPT-4o-Mini", "JavaScript", "OpenAI API", "HTML Email"],
  },
  {
    title: "Blinkit App Analysis",
    description:
      "A data-driven analysis of the Blinkit app using Power BI, highlighting key metrics like delivery speed, pricing, and user experience through interactive dashboards. Explore the full interactive dashboard inside the GitHub repository.",
    image: "/blinkit-dashboard-v2.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNTJjZjcxNTEtYTQyMy00Mjg2LThmNjYtZjhmODEzYjA1MjA5IiwidCI6ImRhYTU5MmNhLWRlN2ItNGM1NC04ODM2LTkxYTY2OTBmZTE5NyJ9",
    tags: ["Power BI", "Excel", "DAX", "Data Analysis"],
  },
  {
    title: "AI Chat Platform",
    description:
      "A full-stack multi-user AI chatbot web application built with Django, LangGraph, and RAG. Supports intelligent chat sessions, context retrieval, and model orchestration.",
    image: "",
    link: "https://github.com/Simi1612/Chatbot",
    tags: ["Django", "LangGraph", "RAG", "Groq", "Gemini", "FAISS"],
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/Simi1612",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/smruti-katariya-830904324",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:simikatariya93@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Simi1612/space-portfolio",
};
