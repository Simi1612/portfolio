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
    skill_name: "C++",
    image: "https://skillicons.dev/icons?i=cpp",
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
    skill_name: "FastAPI",
    image: "https://skillicons.dev/icons?i=fastapi",
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
    image: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/n8n.svg",
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
    skill_name: "HTML",
    image: "html.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
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
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
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
    skill_name: "TensorFlow",
    image: "https://skillicons.dev/icons?i=tensorflow",
    width: 75,
    height: 75,
  },
  {
    skill_name: "PyTorch",
    image: "https://skillicons.dev/icons?i=pytorch",
    width: 75,
    height: 75,
  },
  {
    skill_name: "OpenCV",
    image: "https://skillicons.dev/icons?i=opencv",
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
    width: 60,
    height: 60,
  },
  {
    skill_name: "Redis",
    image: "https://skillicons.dev/icons?i=redis",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Supabase",
    image: "https://skillicons.dev/icons?i=supabase",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 60,
    height: 60,
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
    skill_name: "AWS",
    image: "https://skillicons.dev/icons?i=aws",
    width: 75,
    height: 75,
  },
  {
    skill_name: "GCP",
    image: "https://skillicons.dev/icons?i=gcp",
    width: 75,
    height: 75,
  },
  {
    skill_name: "Vercel",
    image: "https://skillicons.dev/icons?i=vercel",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Netlify",
    image: "https://skillicons.dev/icons?i=netlify",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "Postman",
    image: "https://skillicons.dev/icons?i=postman",
    width: 65,
    height: 65,
  },
  {
    skill_name: "VS Code",
    image: "https://skillicons.dev/icons?i=vscode",
    width: 65,
    height: 65,
  },
] as const;

export const PROJECTS = [
  {
    title: "AI Invoice Extractor",
    description:
      "Processes invoices in under 5 seconds with 95%+ extraction accuracy, converting PDFs and image receipts into structured JSON. Reduces manual invoice data-entry overhead by up to 90% for finance teams.",
    image: "/videos/ai-invoice.mp4",
    link: "https://github.com/Simi1612/InvoXtract",
    tags: ["React", "FastAPI", "Supabase", "Gemini 2.0", "Python"],
  },
  {
    title: "Trendu Daily - n8n Automation",
    description:
      "Saves 10+ hours per week of manual industry research by scraping global news feeds, using GPT-4o-Mini to filter and extract high-value market signals, and delivering personalized HTML Digests to subscribers.",
    image: "/videos/n8n-automation.mp4",
    link: "#",
    tags: ["n8n", "GPT-4o-Mini", "JavaScript", "OpenAI API", "HTML Email"],
  },
  {
    title: "Blinkit App Analysis",
    description:
      "Optimized retail supply metrics and delivery speeds using Power BI and DAX modeling. Identified pricing clusters and key friction points to drive 15%+ improvements in delivery route efficiency insights.",
    image: "/blinkit-dashboard-v2.png",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNTJjZjcxNTEtYTQyMy00Mjg2LThmNjYtZjhmODEzYjA1MjA5IiwidCI6ImRhYTU5MmNhLWRlN2ItNGM1NC04ODM2LTkxYTY2OTBmZTE5NyJ9",
    tags: ["Power BI", "Excel", "DAX", "Data Analysis"],
  },
  {
    title: "AI Chat Platform",
    description:
      "Multi-user chat platform leveraging LangGraph and FAISS vector index RAG. Resolves up to 75% of repeating document queries instantly without human support agent intervention.",
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
    title: "About Me",
    link: "#about-me",
  },
  {
    title: "Services",
    link: "#services",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Experience",
    link: "#experience",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/Simi1612/space-portfolio",
};
