"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCss3Alt, FaHtml5, FaNode, FaGitAlt } from "react-icons/fa";
import {
  SiBetterauth,
  SiDaisyui,
  SiExpress,
  SiHeroui,
  SiMongodb,
  SiTailwindcss,
  SiVercel,
  SiMongoose,
} from "react-icons/si";
import { BsJavascript } from "react-icons/bs";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";
import { TbKey, TbPlugConnected, TbCreditCard } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "FRONTEND DEVELOPMENT",
    skills: [
      { name: "Next.js", icon: <RiNextjsLine size={28} />, isFeatured: true },
      { name: "React.js", icon: <IoLogoReact size={28} />, isFeatured: true },
      {
        name: "JavaScript",
        icon: <BsJavascript size={28} />,
        isFeatured: true,
      },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
      { name: "Hero UI", icon: <SiHeroui size={28} /> },
      { name: "DaisyUI", icon: <SiDaisyui size={28} /> },
      { name: "HTML5", icon: <FaHtml5 size={28} /> },
      { name: "CSS3", icon: <FaCss3Alt size={28} /> },
    ],
  },
  {
    title: "BACKEND & DATABASE",
    skills: [
      { name: "Node.js", icon: <FaNode size={28} />, isFeatured: true },
      { name: "Express.js", icon: <SiExpress size={28} />, isFeatured: true },
      { name: "MongoDB", icon: <SiMongodb size={28} />, isFeatured: true },
      { name: "Mongoose", icon: <SiMongoose size={28} /> },
      { name: "REST API", icon: <TbPlugConnected size={28} /> },
      { name: "Payment (Stripe/SSL)", icon: <TbCreditCard size={28} /> },
    ],
  },
  {
    title: "AUTH & TOOLS",
    skills: [
      {
        name: "BetterAuth",
        icon: <SiBetterauth size={28} />,
        isFeatured: true,
      },
      { name: "JWT & OAuth", icon: <TbKey size={28} /> },
      { name: "Git & GitHub", icon: <FaGitAlt size={28} /> },
      { name: "Vercel", icon: <SiVercel size={28} /> },
    ],
  },
];

const Skills = () => {
  "use no memo";
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Header animation
      gsap.from(".skills-header", {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-header",
          start: "top 85%",
          once: true,
        },
      });

      // Skill categories entrance
      gsap.from(".skill-category-card", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-grid",
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
      id="skills"
      className="py-24 px-6 lg:px-24 bg-deep-bg text-white relative overflow-hidden"
    >
      {/* Background Subtle Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="skills-header text-center mb-16 space-y-3">
          <p className="text-blue-500 font-mono text-sm tracking-widest uppercase">
            Technical Expertise
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
            Skills & Capabilities
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Categories Grid */}
        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="skill-category-card p-6 lg:p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl flex flex-col justify-between hover:border-blue-500/30 transition-colors duration-300"
            >
              <div>
                {/* Category Header */}
                <h3 className="text-sm font-mono font-bold text-blue-400 tracking-wider uppercase mb-6 pb-3 border-b border-white/5">
                  {category.title}
                </h3>

                {/* Skill Pills Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`group p-3.5 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                        skill.isFeatured
                          ? "bg-white/[0.04] border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-600/10 hover:shadow-[0_0_15px_rgba(37,99,235,0.25)]"
                          : "bg-white/[0.01] border-white/5 hover:border-white/20 hover:bg-white/[0.05]"
                      } hover:-translate-y-1`}
                    >
                      <div className="text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-xs font-medium text-white/80 text-center group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
