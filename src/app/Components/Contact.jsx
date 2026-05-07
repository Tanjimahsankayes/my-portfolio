"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Contact = () => {
  const containerRef = useRef(null);

  const [formStatus, setFormStatus] = React.useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  useGSAP(() => {
    // Header
    gsap.from(".contact-header > *", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-header",
        start: "top 85%"
      }
    });

    // Contact info items
    gsap.from(".contact-info-item", {
      x: -50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".contact-grid",
        start: "top 80%"
      }
    });

    // Form reveal
    gsap.from(".contact-form", {
      x: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".contact-grid",
        start: "top 80%"
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="contact" className="py-24 px-6 lg:px-24 bg-deep-bg text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="contact-header text-center mb-20 space-y-4">
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">Contact Us</h2>
          <p className="max-w-2xl mx-auto text-white/60 text-lg">
            Have a project in mind? Let's connect and discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="contact-grid grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-10">
            <div className="contact-info-item space-y-6">
              <h3 className="text-4xl font-bold">Get in touch today</h3>
              <p className="text-white/60 leading-relaxed max-w-md text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-8">
              <div className="contact-info-item flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xl text-white/80 group-hover:text-white transition-colors"> tanjimahsankayes@gmail.com </span>
              </div>

              <div className="contact-info-item flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-xl text-white/80 group-hover:text-white transition-colors">+880 1308638014</span>
              </div>

              <div className="contact-info-item flex items-center gap-6 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-xl text-white/80 group-hover:text-white transition-colors">Purbachal, Dhaka , Bangladesh</span>
              </div>
            </div>
          </div>

          <div className="contact-form gradient-border-card">
            <form onSubmit={handleSubmit} className="gradient-border-content p-8 lg:p-12 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/70 ml-1">Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="John Carter"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-hidden focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/70 ml-1">Email</label>
                  <input 
                    type="email" 
                    required
                    placeholder="example@email.com"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-hidden focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/70 ml-1">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="(123) 456 - 789"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-hidden focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-white/70 ml-1">Company</label>
                  <input 
                    type="text" 
                    placeholder="Facebook"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-hidden focus:border-blue-500/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-white/70 ml-1">Message</label>
                <textarea 
                  rows="5"
                  required
                  placeholder="Please type your message here..."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-hidden focus:border-blue-500/50 transition-colors resize-none"
                />
              </div>

              <button 
                disabled={formStatus !== 'idle'}
                className="w-full py-5 bg-linear-to-r from-blue-500 to-red-500 text-white font-bold rounded-full text-lg shadow-lg shadow-blue-500/20 hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-50 disabled:scale-100"
              >
                {formStatus === 'idle' && 'Send message'}
                {formStatus === 'submitting' && 'Sending...'}
                {formStatus === 'success' && 'Message Sent!'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
