"use client";

import React, { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const ProjectDetailsModal = ({ project, isOpen, onOpenChange }) => {
  const [mounted, setMounted] = useState(false);

  // SSR / Hydration Mismatch Safety Check
  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => onOpenChange(false), [onOpenChange]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") close();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, close]);

  if (!isOpen || !project || !mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 animate-[fadeIn_0.2s_ease-in-out]"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={close}
      />

      {/* Modal Container */}
      <div
        className="
          relative z-10
          w-full max-w-2xl max-h-[85vh]
          flex flex-col
          bg-[#0b1220]/95 backdrop-blur-xl
          border border-white/10
          rounded-2xl md:rounded-3xl
          shadow-2xl shadow-black/50
          overflow-hidden
          animate-[slideIn_0.25s_cubic-bezier(0.16,1,0.3,1)]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 md:py-5 shrink-0 bg-[#0b1220]/80">
          <div>
            <h2
              id="modal-title"
              className="text-xl md:text-2xl font-bold text-white tracking-tight"
            >
              {project.title}
            </h2>
            {project.year && (
              <p className="text-xs md:text-sm text-blue-400 font-medium mt-0.5">
                Project Details • {project.year}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={close}
            aria-label="Close modal"
            className="
              shrink-0 w-8 h-8 md:w-9 md:h-9
              flex items-center justify-center
              rounded-full
              bg-white/5 hover:bg-white/15
              border border-white/10
              text-white/70 hover:text-white
              transition-all duration-200 cursor-pointer
            "
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto flex-1 px-6 py-6 space-y-6 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.2)_transparent]">
          {project.image && (
            <div className="relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-white/10 shadow-lg">
              <Image
                src={project.image}
                alt={project.title || "Project preview"}
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}

          {project.details?.overview && (
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-blue-400">
                Overview
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                {project.details.overview}
              </p>
            </div>
          )}

          {project.details?.features?.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-blue-400">
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.details.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10"
                  >
                    <span className="text-blue-400 font-bold shrink-0 text-sm">
                      ✓
                    </span>
                    <span className="text-xs md:text-sm text-white/80 leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.details?.technologies?.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-blue-400">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.details.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs md:text-sm text-blue-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 px-6 py-4 flex flex-wrap items-center justify-end gap-3 shrink-0 bg-[#0b1220]/80">
          <button
            type="button"
            onClick={close}
            className="
              px-4 py-2 md:px-5 md:py-2.5 rounded-xl
              bg-white/10 hover:bg-white/15
              text-white font-medium text-xs md:text-sm
              transition-colors cursor-pointer
            "
          >
            Close
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2 md:px-5 md:py-2.5 rounded-xl
                bg-white/5 hover:bg-white/10
                border border-white/10
                text-white font-medium text-xs md:text-sm
                transition-all flex items-center gap-1.5
              "
            >
              <span>GitHub</span>
              <span className="text-xs">↗</span>
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2 md:px-5 md:py-2.5 rounded-xl
                bg-blue-600 hover:bg-blue-500
                text-white font-medium text-xs md:text-sm
                transition-all shadow-lg shadow-blue-600/25 flex items-center gap-1.5
              "
            >
              <span>Live Demo</span>
              <span className="text-xs">↗</span>
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ProjectDetailsModal;
