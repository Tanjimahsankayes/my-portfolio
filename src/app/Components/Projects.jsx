"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectDetailsModal from "./ProjectDetailsModal";
import { VscGithub, VscGlobe } from "react-icons/vsc";
import { HiArrowRight, HiMiniEllipsisVertical } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  "use no memo";
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

        // Sort by id descending and take the 3 most recent
        const recent = [...data].sort((a, b) => b.id - a.id).slice(0, 3);

        setProjectList(recent);
      } catch (err) {
        console.error("Project fetch error:", err);
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
      if (loading || error) return;

      // Section header animation
      gsap.from(".projects-header > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-header",
          start: "top 85%",
          once: true,
        },
      });

      // Project cards animation
      gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          once: true,
        },
      });
    },
    {
      scope: containerRef,
      dependencies: [projectList, loading, error],
    },
  );

  return (
    <section
      ref={containerRef}
      id="projects"
      className="py-24 px-6 lg:px-20 bg-[#0c121e] text-white relative overflow-hidden font-sans"
    >
      {/* Background Subtle Mesh Grid & Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="projects-header text-left mb-16 space-y-3 border-l-4 border-blue-500 pl-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Featured Works
          </h2>
          <p className="max-w-2xl text-slate-400 text-base lg:text-lg">
            A collection of modern, responsive projects built with passion and
            precision
          </p>
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-blue-500/20 bg-[#111927] p-5 animate-pulse"
              >
                <div className="aspect-[16/10] rounded-xl bg-slate-800/60 mb-5" />
                <div className="h-6 bg-slate-800/60 rounded w-2/3 mx-auto mb-4" />
                <div className="h-10 bg-slate-800/60 rounded-xl mb-4" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-11 bg-slate-800/60 rounded-xl" />
                  <div className="h-11 bg-slate-800/60 rounded-xl" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-red-400 text-center max-w-md mx-auto">
            {error}
          </div>
        )}

        {/* Projects Grid */}
        {!loading && !error && (
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project) => (
              <div
                key={project.id}
                className="project-card group bg-[#111927] border border-blue-500/20 hover:border-blue-500/50 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
              >
                {/* Top Image Showcase with Blur & Reveal Effect */}
                <div>
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-700/50 bg-[#090d16]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Dark Glass Hover Layer */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4">
                      <button
                        type="button"
                        onClick={() => handleDetails(project)}
                        className="py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-600/40 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 cursor-pointer"
                      >
                        View Details
                      </button>
                    </div>
                  </div>

                  {/* Title Section */}
                  <h3 className="text-xl font-bold text-white text-center mt-5 mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Secondary Details Button */}
                  <button
                    type="button"
                    onClick={() => handleDetails(project)}
                    className="w-full mb-5 py-2.5 px-4 bg-[#1a2436] hover:bg-[#223048] border border-blue-500/30 text-blue-400 font-medium text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Details
                    <HiMiniEllipsisVertical
                      size={18}
                      className="text-blue-400"
                    />
                  </button>
                </div>

                {/* Bottom Links (GitHub & Live Demo) */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-3 bg-[#1e293b] hover:bg-[#334155] text-white text-xs font-semibold rounded-xl border border-slate-700/60 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <VscGithub size={16} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-blue-600/30"
                  >
                    <VscGlobe size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Projects Action */}
        {!loading && !error && (
          <div className="text-center mt-16">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-rose-600 hover:from-blue-500 hover:to-rose-500 text-white font-bold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-blue-900/30 hover:scale-105"
            >
              View All Projects
              <HiArrowRight size={16} />
            </Link>
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
