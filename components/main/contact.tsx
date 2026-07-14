"use client";

import React, { useState } from "react";
import { EnvelopeIcon, CalendarIcon } from "@heroicons/react/24/outline";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "AI Agent Development",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xnjeqeyz", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", projectType: "AI Agent Development", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 z-[20] w-full"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 text-center">
        Let’s Build Something Intelligent
      </h1>

      <p className="text-gray-400 text-center max-w-[700px] px-6 mb-12 text-base leading-relaxed">
        I’m currently available for freelance AI development, workflow automation, and custom software projects. 
        Whether you need an AI agent, an LLM-powered application, document intelligence, or business automation with n8n, 
        I’d love to help bring your ideas to life.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-[1000px] w-full px-6 items-stretch">
        
        {/* Contact Form */}
        <div className="flex flex-col p-8 rounded-2xl border border-[#2A0E61] bg-[#03001427] backdrop-blur-md justify-between">
          <div className="flex items-center gap-3 mb-6">
            <EnvelopeIcon className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Send Me a Message</h2>
          </div>

          {status === "success" ? (
            <div className="flex-grow flex flex-col items-center justify-center text-center py-10">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center text-emerald-400 text-2xl mb-4 animate-bounce">
                ✓
              </div>
              <h3 className="text-white font-bold text-lg">Message Sent Successfully!</h3>
              <p className="text-gray-400 text-sm mt-2 max-w-[300px]">
                Thank you! I will review your project details and get back to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-[#b49bff] hover:text-white transition underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-300 text-xs font-semibold">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#03001457] border border-[#2A0E61] rounded-lg py-2.5 px-4 text-white text-sm focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-gray-300 text-xs font-semibold">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#03001457] border border-[#2A0E61] rounded-lg py-2.5 px-4 text-white text-sm focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-gray-300 text-xs font-semibold">Project Type</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="bg-[#030014] border border-[#2A0E61] rounded-lg py-2.5 px-4 text-white text-sm focus:outline-none focus:border-purple-500 transition cursor-pointer"
                >
                  <option value="AI Agent Development">AI Agent Development</option>
                  <option value="Workflow Automation (n8n)">Workflow Automation (n8n)</option>
                  <option value="Document Intelligence / OCR">Document Intelligence / OCR</option>
                  <option value="Custom AI Application">Custom AI Application</option>
                  <option value="Consulting / Custom Needs">Consulting / Custom Needs</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-gray-300 text-xs font-semibold">Project Details</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your project goals, integrations, or timelines..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#03001457] border border-[#2A0E61] rounded-lg py-2.5 px-4 text-white text-sm focus:outline-none focus:border-purple-500 transition resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="py-3 px-6 mt-2 button-primary text-center text-white cursor-pointer rounded-lg font-bold text-sm transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 select-none"
              >
                {status === "submitting" ? "Sending Details..." : "Start Your Project"}
              </button>

              {status === "error" && (
                <p className="text-red-400 text-xs text-center font-medium mt-2">
                  ⚠️ Failed to send message. Please try again or email me directly at simikatariya93@gmail.com
                </p>
              )}
            </form>
          )}
        </div>

        {/* Discovery Call Booking */}
        <div className="flex flex-col p-8 rounded-2xl border border-[#2A0E61] bg-[#03001427] backdrop-blur-md justify-between">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <CalendarIcon className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-bold text-white">Book a Discovery Call</h2>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Prefer a direct conversation? Let's skip the emails. Schedule a free, 15-minute discovery session 
              to discuss your project requirements, system architecture, and tech stack options.
            </p>

            <ul className="text-xs text-gray-400 space-y-2 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-[#b49bff]">✔</span> 15-minute video call via Google Meet
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#b49bff]">✔</span> Technical feasibility discussion
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#b49bff]">✔</span> Preliminary architecture planning
              </li>
            </ul>
          </div>

          <a
            href="https://calendly.com/simikatariya93"
            target="_blank"
            rel="noreferrer noopener"
            className="py-3.5 px-6 border border-cyan-500/50 bg-[#03001457] hover:bg-cyan-500/10 text-center text-cyan-300 hover:text-white cursor-pointer rounded-lg font-bold text-sm transition-all hover:scale-[1.02] active:scale-95 backdrop-blur-sm select-none"
          >
            Book My Free Session ↗
          </a>
        </div>

      </div>
    </section>
  );
};
