"use client";

import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const ProjectDetailsModal = ({ project, isOpen, onOpenChange }) => {
  const close = useCallback(() => onOpenChange(false), [onOpenChange]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") close();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, close]);

  if (!isOpen || !project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ animation: "modalFadeIn 0.2s ease" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={close}
      />

      {/* Panel */}
      <div
        className="
          relative z-10
          w-full max-w-2xl max-h-[90vh]
          flex flex-col
          bg-[#0b1220]
          border border-white/10
          rounded-3xl
          shadow-2xl
          overflow-hidden
        "
        style={{ animation: "modalSlideIn 0.25s cubic-bezier(0.34,1.56,0.64,1)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 px-6 py-5 shrink-0">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {project.title}
            </h2>
            <p className="text-sm text-white/50 mt-1">
              Project Details • {project.year}
            </p>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={close}
            aria-label="Close modal"
            className="
              ml-4 mt-1 shrink-0
              w-8 h-8 flex items-center justify-center
              rounded-full
              bg-white/10 hover:bg-white/20
              text-white/70 hover:text-white
              transition-colors cursor-pointer
            "
          >
            ✕
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 px-6 py-6">
          {/* Project Image */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 mb-7">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Overview */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-blue-400 mb-3">Overview</h3>
            <p className="text-white/70 leading-7">{project.details.overview}</p>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-blue-400 mb-4">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.details.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <span className="text-blue-400 font-bold shrink-0">✓</span>
                  <span className="text-sm text-white/70">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-bold text-blue-400 mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.details.technologies.map((technology) => (
                <span
                  key={technology}
                  className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 px-6 py-4 flex flex-wrap gap-3 shrink-0">
          <button
            type="button"
            onClick={close}
            className="
              px-5 py-2.5 rounded-2xl
              bg-white/10 hover:bg-white/20
              text-white font-bold text-sm
              transition-colors cursor-pointer
            "
          >
            Close
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-5 py-2.5 rounded-2xl
              bg-gradient-to-r from-blue-500 to-red-500
              hover:opacity-90
              text-white font-bold text-sm
              transition-opacity
            "
          >
            GitHub ↗
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-5 py-2.5 rounded-2xl
              bg-blue-600 hover:bg-blue-700
              text-white font-bold text-sm
              transition-colors
            "
          >
            Live Demo ↗
          </a>
        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalSlideIn {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
      `}</style>
    </div>,
    document.body
  );
};

export default ProjectDetailsModal;
