"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    degree: "Diploma in Computer Engineering",
    institution: "Barguna Government Polytechnic Institute",
    field: "Computer Technology",
    timeline: "2022 — PRESENT",
    expected: "Expected Graduation: 2026",
    highlights: [
      "Specialized in Software Engineering & Data Structures",
      "Focused on Modern Web Technologies & Computer Architecture",
    ],
    isPrimary: true,
  },
  {
    degree: "Secondary School Certificate (S.S.C)",
    institution: "Amdia Krishak Sramik High School, Dhaka",
    field: "Science",
    timeline: "2022",
    highlights: [
      "Science background with focus on Physics & Higher Mathematics",
    ],
    isPrimary: false,
  },
];

const Educations = () => {
  // Pure JavaScript Ref
  "use no memo";
  const containerRef = useRef(null);

  // GSAP Hook Setup
  useGSAP(
    () => {
      gsap.from(".edu-header", {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".edu-header",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".edu-item", {
        x: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".edu-timeline",
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="education"
      className="py-24 px-6 lg:px-24 bg-deep-bg text-white relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="edu-header text-center mb-16 space-y-3">
          <p className="text-blue-500 font-mono text-sm tracking-widest uppercase">
            Academic Background
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Education
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Education Timeline */}
        <div className="edu-timeline relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="edu-item relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  edu.isPrimary
                    ? "bg-blue-600 border-deep-bg group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.8)]"
                    : "bg-white/20 border-deep-bg group-hover:bg-blue-400"
                }`}
              />

              {/* Card */}
              <div
                className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
                  edu.isPrimary
                    ? "bg-white/[0.03] border-blue-500/20 hover:border-blue-500/50 hover:bg-white/[0.05] shadow-xl shadow-blue-900/10"
                    : "bg-white/[0.01] border-white/5 hover:border-white/15"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
                      {edu.field}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h3>
                  </div>

                  <div className="md:text-right">
                    <span className="text-xs font-mono text-white/50 block">
                      {edu.timeline}
                    </span>
                    {edu.expected && (
                      <span className="text-xs font-mono text-blue-400/80 block mt-0.5">
                        {edu.expected}
                      </span>
                    )}
                  </div>
                </div>

                <h4 className="text-lg font-medium text-white/80 mb-4">
                  {edu.institution}
                </h4>

                <ul className="space-y-2 border-t border-white/5 pt-4">
                  {edu.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-white/60 flex items-start gap-2"
                    >
                      <span className="text-blue-500 mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educations;
