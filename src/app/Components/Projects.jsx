"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Projects = () => {
  const containerRef = useRef(null);

  const projectList = [
    {
      title: "NextGen Edu",
      year: "2026",
      description:
        "NextGen Edu is a modern AI-powered learning platform where students can explore courses, track progress, and enjoy a smooth educational experience through an interactive and user-friendly interface.",
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
      image: "/images/project1.png",
      github: "https://github.com/Tanjimahsankayes/nextgen-edu",
      live: "https://nextgen-edu-ruddy.vercel.app/",
    },
    {
      title: "Keen Keeper",
      year: "2026",
      description:
        "Keen Keeper is a modern productivity and task management platform designed to help users organize daily work, track progress, and manage tasks efficiently with a clean and user-friendly experience.",
      tags: ["React", "Node.js", "Express.js", "Redux"],
      image: "/images/project2.png",
      github: "https://github.com/Tanjimahsankayes/keen-keeper",
      live: "https://keen-keeper-beta.vercel.app/",
    },
    {
      title: "GitHub Issu Tracker",
      year: "2026",
      description:
        "A clean and efficient GitHub Issue Tracker application built to manage, track, and organize project issues with a modern and user-friendly interface. Designed to improve workflow, collaboration, and productivity for developers.",
      tags: ["Next.js", "MongoDB", "Stripe", "JWT"],
      image: "/images/project3.png",
      github: "https://github.com/Tanjimahsankayes/Github-Issue-Tracker",
      live: "https://tanjimahsankayes.github.io/Github-Issue-Tracker/",
    },
    {
      title: "DigiTools Platform",
      year: "2025",
      description:
        "A powerful digital tools platform designed to simplify everyday tasks and improve productivity through modern web technologies. Built with a clean UI, responsive design, and user-friendly experience to deliver efficient and practical solutions.",
      tags: ["React", "Socket.io", "Express.js", "MongoDB"],
      image: "/images/project4.png",
      github: "https://github.com/Tanjimahsankayes/digitools-platform",
      live: "https://social-connect-app.vercel.app/",
    },
    {
      title: "TechWave",
      year: "2025",
      description:
        "A modern tech-focused web application built with a clean UI and responsive design. TechWave delivers a smooth user experience while showcasing modern frontend development practices and interactive web features.",
      tags: ["React", "API Integration", "Chart.js", "Tailwind"],
      image: "/images/project5.png",
      github: "https://github.com/Tanjimahsankayes/TechWave",
      live: "https://tanjimahsankayes.github.io/TechWave/",
    },
    {
      title: "Job Tracker",
      year: "2025",
      description:
        "A modern and responsive Job Tracker web application designed to help users manage and track their job applications efficiently. Users can organize applications, monitor progress, and stay productive with a clean and user-friendly interface.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      image: "/images/project6.png",
      github: "https://github.com/Tanjimahsankayes/Job-Tracker",
      live: "https://tanjimahsankayes.github.io/Job-Tracker/",
    },
  ];

  useGSAP(
    () => {
      // Section header reveal
      gsap.from(".projects-header > *", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-header",
          start: "top 85%",
        },
      });

      // Project cards reveal
      gsap.from(".project-card", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
      });

      // Image parallax/zoom effect
      document
        .querySelectorAll(".project-image-container")
        .forEach((container) => {
          const img = container.querySelector("img");
          gsap.to(img, {
            scale: 1.2,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="projects"
      className="py-24 px-6 lg:px-24 bg-deep-bg text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="projects-header text-center mb-16 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-bold">Recent Projects</h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg">
            Here are some of the real-world projects I've built using the MERN
            stack.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="project-card gradient-border-card group"
            >
              <div className="gradient-border-content p-8 flex flex-col h-full">
                {/* Project Image */}
                <div className="project-image-container relative w-full aspect-video rounded-2xl overflow-hidden mb-8 border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      View Project Details
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-bold group-hover:text-blue-400 transition-colors">
                    {project.title}{" "}
                    <span className="text-white/40 font-medium">
                      ({project.year})
                    </span>
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-blue-400 group-hover:border-blue-500/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-10">
                  <button
                    className="flex-1 py-3 px-4 bg-white/10 border border-white/20 text-white font-bold rounded-2xl text-center flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
                    onClick={() => {
                      // Handle details modal or navigation
                      alert(
                        `Details for ${project.title}: ${project.description}`,
                      );
                    }}
                  >
                    Details <span>ℹ️</span>
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-linear-to-r from-blue-500 to-red-500 text-white font-bold rounded-2xl text-center flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/10"
                  >
                    GitHub <span>↗</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-blue-600 text-white font-bold rounded-2xl text-center flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/10"
                  >
                    Live Demo <span>↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
