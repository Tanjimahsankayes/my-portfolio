"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Projects = () => {
  const containerRef = useRef(null);

  const projectList = [
    {
      title: "MERN Todo App",
      year: "2025",
      description: "A fully functional Todo application with authentication, CRUD operations, and a clean, responsive UI.",
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
      image: "/images/project1.png",
      github: "#",
      live: "#"
    },
    {
      title: "E-Commerce Demo",
      year: "2025",
      description: "A demo e-commerce platform featuring product listing, cart system, and checkout flow.",
      tags: ["React", "Node.js", "Express.js", "Redux"],
      image: "/images/project2.png",
      github: "#",
      live: "#"
    }
  ];

  useGSAP(() => {
    // Section header reveal
    gsap.from(".projects-header > *", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".projects-header",
        start: "top 85%"
      }
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
        start: "top 80%"
      }
    });

    // Image parallax/zoom effect
    document.querySelectorAll('.project-image-container').forEach((container) => {
      const img = container.querySelector('img');
      gsap.to(img, {
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="projects" className="py-24 px-6 lg:px-24 bg-deep-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="projects-header text-center mb-16 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-bold">Recent Projects</h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg">
            Here are some of the real-world projects I've built using the MERN stack.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectList.map((project, index) => (
            <div key={index} className="project-card gradient-border-card group">
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
                     <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Project Details</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-bold group-hover:text-blue-400 transition-colors">
                    {project.title} <span className="text-white/40 font-medium">({project.year})</span>
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
                <div className="flex gap-4 mt-10">
                  <a 
                    href={project.github}
                    className="flex-1 py-4 bg-linear-to-r from-blue-500 to-red-500 text-white font-bold rounded-2xl text-center flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/10"
                  >
                    GitHub <span>↗</span>
                  </a>
                  <a 
                    href={project.live}
                    className="flex-1 py-4 bg-blue-600 text-white font-bold rounded-2xl text-center flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/10"
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