"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ProjectDetailsModal from "./ProjectDetailsModal";
import { TbListDetails } from "react-icons/tb";
import { MdReviews } from "react-icons/md";
import { VscLiveShare } from "react-icons/vsc";

const Projects = () => {
  const containerRef = useRef(null);

  const [projectList, setProjectList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/projects");

        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();

        setProjectList(data);
      } catch (error) {
        console.error("Project fetch error:", error);

        setError("Failed to load projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Open Details Modal
  const handleDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

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
    {
      scope: containerRef,
      dependencies: [projectList],
    },
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
            Here are some of the real-world projects I've built using modern web
            technologies.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  p-6
                  animate-pulse
                "
              >
                <div className="aspect-video rounded-2xl bg-white/10 mb-6" />

                <div className="h-7 w-2/3 bg-white/10 rounded mb-4" />

                <div className="h-4 w-full bg-white/10 rounded mb-2" />

                <div className="h-4 w-5/6 bg-white/10 rounded mb-6" />

                <div className="flex gap-2">
                  <div className="h-7 w-16 bg-white/10 rounded-full" />
                  <div className="h-7 w-20 bg-white/10 rounded-full" />
                  <div className="h-7 w-16 bg-white/10 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-6 text-red-400 text-center">
            {error}
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project) => (
              <div
                key={project.id}
                className="project-card gradient-border-card group"
              >
                <div className="gradient-border-content p-6 flex flex-col h-full">
                  {/* Project Image */}
                  <div className="project-image-container relative w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500"
                    />

                    {/* Hover Overlay */}
                    <div
                      className="
                      absolute
                      inset-0
                      bg-linear-to-t
                      from-black/60
                      to-transparent
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                      flex
                      items-end
                      p-6
                    "
                    >
                      <button
                        type="button"
                        onClick={() => handleDetails(project)}
                        className="
                          text-white
                          font-bold
                          text-base
                          translate-y-4
                          group-hover:translate-y-0
                          transition-transform
                          duration-500
                          cursor-pointer
                        "
                      >
                        View Project Details
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                      {project.title}{" "}
                      <span className="text-white/40 font-medium">
                        ({project.year})
                      </span>
                    </h3>

                    {/* <p className="text-white/60 leading-relaxed text-sm">
                      {project.description}
                    </p> */}

                    {/* Tags */}
                    {/* <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            px-3
                            py-1
                            bg-white/5
                            border
                            border-white/10
                            rounded-full
                            text-xs
                            font-medium
                            text-blue-400
                            group-hover:border-blue-500/30
                            transition-colors
                          "
                        >
                          {tag}
                        </span>
                      ))}
                    </div> */}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col gap-3 mt-8">
                    {/* Details */}
                    <button
                      type="button"
                      onClick={() => handleDetails(project)}
                      className="
                        w-full
                        py-3
                        px-4
                        bg-white/10
                        border
                        border-white/20
                        text-white
                        font-bold
                        rounded-2xl
                        text-center
                        flex
                        items-center
                        justify-center
                        gap-2
                        hover:bg-white/20
                        transition-colors
                        cursor-pointer
                      "
                    >
                      Details
                      <span>
                        <MdReviews size={18} />
                      </span>
                    </button>

                    {/* GitHub + Live */}
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          py-3
                          px-3
                          bg-linear-to-r
                          from-blue-500
                          to-red-500
                          text-white
                          font-bold
                          rounded-2xl
                          text-center
                          flex
                          items-center
                          justify-center
                          gap-2
                          hover:opacity-90
                          transition-opacity
                          shadow-lg
                          shadow-blue-500/10
                        "
                      >
                        GitHub
                        <span>
                          <VscLiveShare size={18} />
                        </span>
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          py-3
                          px-3
                          bg-blue-600
                          text-white
                          font-bold
                          rounded-2xl
                          text-center
                          flex
                          items-center
                          justify-center
                          gap-2
                          hover:bg-blue-700
                          transition-colors
                          shadow-lg
                          shadow-blue-600/10
                        "
                      >
                        Live
                        <span>
                          <VscLiveShare size={18} />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal
        project={selectedProject}
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
};

export default Projects;
