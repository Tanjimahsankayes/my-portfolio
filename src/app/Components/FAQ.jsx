"use client";
import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item border-b border-white/10 py-6">
      <button 
        className="w-full flex items-center justify-between text-left group cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg lg:text-xl font-medium transition-colors ${isOpen ? 'text-blue-400' : 'text-white/90 group-hover:text-white'}`}>
          {question}
        </span>
        <span className={`text-2xl transition-transform duration-300 ${isOpen ? 'rotate-45 text-blue-400' : 'text-white/60'}`}>
          +
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <p className="text-white/50 leading-relaxed text-base">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const containerRef = useRef(null);
  const faqData = [
    { 
      question: "Who are you, and what do you do?", 
      answer: "I'm Tanjim Ahsan Kayes, a full-stack developer specialized in building scalable web applications using the MERN stack and Next.js." 
    },
    { 
      question: "What services do you provide?", 
      answer: "I offer custom web development, UI/UX design, API integration, and performance optimization services." 
    },
    { 
      question: "What technologies do you work with?", 
      answer: "My core stack includes React, Node.js, Express, MongoDB, Tailwind CSS, and Next.js." 
    },
    { 
      question: "How do you approach a new project?", 
      answer: "I start with thorough requirement analysis, followed by wireframing, development with clean code practices, and rigorous testing." 
    },
    { 
      question: "Can you redesign an existing website?", 
      answer: "Yes, I can modernize your existing site with improved performance, accessibility, and a contemporary aesthetic." 
    },
    { 
      question: "How can I collaborate with you on a project?", 
      answer: "You can reach out through the 'Let's Connect' button or email me directly to discuss your project requirements." 
    },
  ];

  useGSAP(() => {
    gsap.from(".faq-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".faq-header",
        start: "top 85%"
      }
    });

    gsap.from(".faq-item", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".faq-grid",
        start: "top 80%"
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="faq" className="py-24 px-6 lg:px-24 bg-deep-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="faq-header text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tight">
            Frequently Asked <br /> Questions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="faq-grid grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-2">
          {faqData.map((item, index) => (
            <FAQItem key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
