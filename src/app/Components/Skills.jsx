"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);

  const skillCategories = [
    {
      title: "FRONTEND",
      skills: [
        {
          name: "HTML",
          icon: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          ),
        },
        {
          name: "CSS",
          icon: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          ),
        },
        {
          name: "Tailwind CSS",
          icon: (
            <path d="M12.001 6.002c-2.012 0-3.353 1.006-4.023 3.018 1.005-1.005 2.178-1.34 3.519-.998.765.19 1.31.751 1.916 1.373.987 1.012 2.13 2.185 4.611 2.185 2.012 0 3.353-1.006 4.023-3.018-1.005 1.005-2.178 1.34-3.519.998-.765-.19-1.31-.751-1.916-1.373-.987-1.012-2.13-2.185-4.611-2.185zM6.001 12.002c-2.012 0-3.353 1.006-4.023 3.018 1.005-1.005 2.178-1.34 3.519-.998.765.19 1.31.751 1.916 1.373.987 1.012 2.13 2.185 4.611 2.185 2.012 0 3.353-1.006 4.023-3.018-1.005 1.005-2.178 1.34-3.519.998-.765-.19-1.31-.751-1.916-1.373-.987-1.012-2.13-2.185-4.611-2.185z" />
          ),
        },
        {
          name: "DaisyUI",
          icon: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          ),
        },
        {
          name: "Hero UI",
          icon: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          ),
        },
        {
          name: "JavaScript",
          icon: (
            <path d="M3 3h18v18H3V3zm11.536 14.18c.288-.173.447-.41.447-.745 0-.34-.23-.532-.564-.7-.294-.15-.717-.268-1.043-.37l-.422-.134c-.813-.263-1.638-.532-1.638-1.503 0-.768.582-1.344 1.543-1.344.627 0 1.082.16 1.363.4l-.505.864c-.2-.14-.493-.243-.787-.243-.454 0-.742.23-.742.544 0 .326.243.467.653.6l.467.153c.928.294 1.747.614 1.747 1.632 0 .973-.774 1.536-1.843 1.536-.78 0-1.33-.243-1.632-.518l.493-.89c.275.224.634.403 1.024.403.544 0 .787-.23.787-.505zM9.544 13.568h1.165v4.525c0 .947-.435 1.485-1.46 1.485-.384 0-.76-.083-1.018-.211l.243-.915c.205.083.422.14.614.14.422 0 .454-.256.454-.53v-4.494z" />
          ),
        },
        {
          name: "React",
          icon: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          ),
        },
        {
          name: "Next.js",
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
          icon: (
            <path d="M12 2L4.5 6.33v8.67L12 19.33l7.5-4.33V6.33L12 2zm-1 12.5h-1.5v-5h1.5v5zm4.5 0h-1.5v-5h1.5v5z" />
          ),
        },
        {
          name: "Express.js",
          icon: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          ),
        },
        {
          name: "MongoDB",
          icon: (
            <path d="M12 2c0 0-4 4-4 10s4 10 4 10 4-4 4-10-4-10-4-10zm0 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          ),
        },
      ],
    },
    {
      title: "AUTHENTICATION",
      skills: [
        {
          name: "NextAuth",
          icon: (
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          ),
        },
        {
          name: "JWT",
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
