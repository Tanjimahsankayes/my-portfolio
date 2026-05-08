"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Educations = () => {
  const containerRef = useRef(null);

  const educationData = [
    {
      degree: "Diploma in Computer Engineering",
      institution: "Barguna Government Polytechnic institute",
      timeline: "2022 - PRESENT | EXPECTED GRADUATION: 2026",
    },
    {
      degree: "S.S.C",
      institution: "Amdia Krishak Sramik High School, Dhaka",
      timeline: "YEAR: 2022",
    },
    {
      degree: "J.S.C",
      institution: "Amdia Krishak Sramik High School, Dhaka",
      timeline: "YEAR: 2019",
    },
  ];

  useGSAP(
    () => {
      // Header animation - comes in first
      gsap.from(".edu-header", {
        y: -30,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".edu-header",
          start: "top 85%",
          once: true,
        },
      });

      // Education cards - staggered entrance from bottom
      gsap.from(".edu-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".edu-stack",
          start: "top 80%",
          once: true,
        },
      });

      // Add hover effects for cards
      const cards = document.querySelectorAll(".edu-card");
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
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
      id="education"
      className="py-24 px-6 lg:px-24 bg-deep-bg text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="edu-header text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold">
            <span className="title-underline">Education</span>
          </h2>
        </div>

        {/* Education Cards Stack */}
        <div className="edu-stack flex flex-col gap-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="edu-card p-10 glass-card border-white/5 cursor-default group"
            >
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold tracking-tight group-hover:text-blue-400 transition-colors">
                  {edu.degree}
                </h3>
                <h4 className="text-blue-400/80 font-semibold text-lg lg:text-xl group-hover:text-blue-300 transition-colors">
                  {edu.institution}
                </h4>
                <p className="text-white/40 font-mono text-sm tracking-wider pt-2">
                  {edu.timeline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educations;
