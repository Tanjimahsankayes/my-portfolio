"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Skills = () => {
  const containerRef = useRef(null);

  const skillCategories = [
    {
      title: "FRONTEND",
      skills: [
        { name: "Tailwind CSS", icon: <path d="M12.001 6.002c-2.012 0-3.353 1.006-4.023 3.018 1.005-1.005 2.178-1.34 3.519-.998.765.19 1.31.751 1.916 1.373.987 1.012 2.13 2.185 4.611 2.185 2.012 0 3.353-1.006 4.023-3.018-1.005 1.005-2.178 1.34-3.519.998-.765-.19-1.31-.751-1.916-1.373-.987-1.012-2.13-2.185-4.611-2.185zM6.001 12.002c-2.012 0-3.353 1.006-4.023 3.018 1.005-1.005 2.178-1.34 3.519-.998.765.19 1.31.751 1.916 1.373.987 1.012 2.13 2.185 4.611 2.185 2.012 0 3.353-1.006 4.023-3.018-1.005 1.005-2.178 1.34-3.519.998-.765-.19-1.31-.751-1.916-1.373-.987-1.012-2.13-2.185-4.611-2.185z" /> },
        { name: "JavaScript", icon: <path d="M3 3h18v18H3V3zm11.536 14.18c.288-.173.447-.41.447-.745 0-.34-.23-.532-.564-.7-.294-.15-.717-.268-1.043-.37l-.422-.134c-.813-.263-1.638-.532-1.638-1.503 0-.768.582-1.344 1.543-1.344.627 0 1.082.16 1.363.4l-.505.864c-.2-.14-.493-.243-.787-.243-.454 0-.742.23-.742.544 0 .326.243.467.653.6l.467.153c.928.294 1.747.614 1.747 1.632 0 .973-.774 1.536-1.843 1.536-.78 0-1.33-.243-1.632-.518l.493-.89c.275.224.634.403 1.024.403.544 0 .787-.23.787-.505zM9.544 13.568h1.165v4.525c0 .947-.435 1.485-1.46 1.485-.384 0-.76-.083-1.018-.211l.243-.915c.205.083.422.14.614.14.422 0 .454-.256.454-.53v-4.494z" /> },
        { name: "React", icon: <path d="M12 21.5c4.7 0 8.5-4.3 8.5-9.5S16.7 2.5 12 2.5 3.5 6.8 3.5 12s3.8 9.5 8.5 9.5zM12 21.5c4.7 0 8.5-4.3 8.5-9.5S16.7 2.5 12 2.5 3.5 6.8 3.5 12s3.8 9.5 8.5 9.5z" /> },
        { name: "Next.js", icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /> },
      ]
    },
    {
      title: "BACKEND",
      skills: [
        { name: "Node.js", icon: <path d="M12 2L4.5 6.33v8.67L12 19.33l7.5-4.33V6.33L12 2zm-1 12.5h-1.5v-5h1.5v5zm4.5 0h-1.5v-5h1.5v5z" /> },
        { name: "Express.js", icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /> },
        { name: "MongoDB", icon: <path d="M12 2c0 0-4 4-4 10s4 10 4 10 4-4 4-10-4-10-4-10zm0 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />, wide: true },
      ]
    },
    {
      title: "AUTH & TOOLS",
      skills: [
        { name: "Firebase Auth", icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /> },
        { name: "Better Auth", icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /> },
        { name: "GitHub", icon: <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /> },
        { name: "VS Code", icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /> },
      ]
    },
  ];

  useGSAP(() => {
    // Section Header
    gsap.from(".skills-header > *", {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skills-header",
        start: "top 85%"
      }
    });

    // Categories
    gsap.from(".skill-category", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 80%"
      }
    });

    // Skill boxes stagger within category
    document.querySelectorAll('.skill-category').forEach((category) => {
      const boxes = category.querySelectorAll('.skill-box');
      gsap.from(boxes, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: category,
          start: "top 85%"
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="skills" className="py-24 px-6 lg:px-24 bg-deep-bg text-white overflow-hidden">
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
                    className={`skill-box p-6 glass-card border-white/5 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all hover:scale-110 cursor-default group ${skill.wide ? 'col-span-2' : ''}`}
                  >
                    <div className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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