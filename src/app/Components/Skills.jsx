"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCcStripe, FaCss3Alt, FaHtml5, FaNode } from "react-icons/fa";
import { SiBetterauth, SiDaisyui, SiExpress, SiHeroui, SiMongodb, SiTailwindcss } from "react-icons/si";
import { BsJavascript } from "react-icons/bs";
import { IoLogoReact } from "react-icons/io5";
import { RiNextjsLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);

  const skillCategories = [
    {
      title: "FRONTEND",
      skills: [
        {
          name: "HTML",
          icon: <FaHtml5 size={25} />,
        },
        {
          name: "CSS",
          icon: <FaCss3Alt size={25} />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss size={25} />,
        },
        {
          name: "DaisyUI",
          icon: <SiDaisyui size={25} />,
        },
        {
          name: "Hero UI",
          icon: <SiHeroui size={25} />,
        },
        {
          name: "JavaScript",
          icon: <BsJavascript size={25} />,
        },
        {
          name: "React",
          icon: <IoLogoReact size={25} />,
        },
        {
          name: "Next.js",
          icon: <RiNextjsLine size={25} />,
        },
        {
          name: "DOM & BOM",
          icon: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          ),
        },
        {
          name: "Problem Solving",
          icon: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          ),
        },
      ],
    },
    {
      title: "BACKEND",
      skills: [
        {
          name: "Node.js",
          icon: <FaNode size={25} />,
        },
        {
          name: "Express.js",
          icon: <SiExpress size={25} />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb size={25} />,
        },
        {
          name: "Stripe",
          icon: <FaCcStripe size={25} />,
        },
        {
          name: "SSLCommerz",
          icon: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          ),
        },
        {
          name: "REST API / API Integration",
          icon: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          ),
        },
        {
          name: "Modular Pattern",
          icon: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          ),
        },
        {
          name: "Mongose",
          icon: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          ),
        },
      ],
    },
    {
      title: "AUTHENTICATION",
      skills: [
        {
          name: "BetterAuth",
          icon: <SiBetterauth size={25} />,
        },
        {
          name: "JWT",
          icon: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          ),
        },
        {
          name: "AI Integration",
          icon: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          ),
        },
        {
          name: "Role-Based Access Control (RBAC)",
          icon: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          ),
        },
        {
          name: "Authentication & Authorization",
          icon: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          ),
        },
      ],
    },
  ];

  useGSAP(
    () => {
      // Section Header - comes in first
      gsap.from(".skills-header > *", {
        y: -30,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".skills-header",
          start: "top 85%",
          once: true,
        },
      });

      // Categories - come after header
      gsap.from(".skill-category", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
          once: true,
        },
      });

      // Skill boxes - stagger within each category
      const categories = document.querySelectorAll(".skill-category");
      categories.forEach((category, index) => {
        const boxes = category.querySelectorAll(".skill-box");
        gsap.from(boxes, {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: category,
            start: "top 85%",
            once: true,
          },
        });
      });

      // Add hover effects for skill boxes
      const skillBoxes = document.querySelectorAll(".skill-box");
      skillBoxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
          gsap.to(box, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        box.addEventListener("mouseleave", () => {
          gsap.to(box, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="skills"
      className="py-24 px-6 lg:px-24 bg-deep-bg text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="skills-header text-center mb-20 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-bold">
            <span className="title-underline">Skills</span>
          </h2>
          <p className="text-white/40 text-lg italic pt-4">
            My Tech Stack & Capabilities By Categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="skills-grid grid grid-cols-1 lg:grid-cols-3 gap-16">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="skill-category space-y-8">
              <h3 className="text-blue-500 font-bold tracking-widest text-center lg:text-left">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`skill-box p-6 glass-card border-white/5 flex flex-col items-center justify-center gap-4 cursor-default group ${skill.wide ? "col-span-2" : ""}`}
                  >
                    <div className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {skill.icon}
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-white/90 text-center group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
