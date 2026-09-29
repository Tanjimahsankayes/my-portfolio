"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { toast } from "react-toastify";

const Contact = () => {
  const containerRef = useRef(null);
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xyeypbga", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        toast.success("Message sent successfully!");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 3000);
      } else {
        setFormStatus("idle");
        toast.error("Something went wrong! Please try again.");
      }
    } catch (error) {
      setFormStatus("idle");
      toast.error("Network error. Please try again later.");
    }
  };

  useGSAP(
    () => {
      // Header Animation
      gsap.from(".contact-header > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 85%",
        },
      });

      // Contact info items
      gsap.from(".contact-info-item", {
        x: -40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 80%",
        },
      });

      // Form reveal
      gsap.from(".contact-form", {
        x: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-grid",
          start: "top 80%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-24 px-6 lg:px-20 bg-deep-bg text-white overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="contact-header text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
            Have a project in mind, a question, or just want to say hi? Feel
            free to reach out and let&apos;s connect.
          </p>
        </div>

        <div className="contact-grid grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="contact-info-item space-y-4">
              <h3 className="text-3xl font-bold text-slate-100">
                Contact Information
              </h3>
              <p className="text-slate-400 leading-relaxed text-base">
                I am open to freelance opportunities, full-time roles, or
                collaborating on innovative web development projects.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <a
                href="mailto:tanjimahsankayes@gmail.com"
                className="contact-info-item flex items-center gap-5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-base sm:text-lg text-slate-200 group-hover:text-white font-medium truncate transition-colors">
                    tanjimahsankayes@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+8801308638014"
                className="contact-info-item flex items-center gap-5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Phone
                  </p>
                  <p className="text-base sm:text-lg text-slate-200 group-hover:text-white font-medium transition-colors">
                    +880 1308638014
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="contact-info-item flex items-center gap-5 p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.06] transition-all duration-300 group">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shrink-0">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
                    Location
                  </p>
                  <p className="text-base sm:text-lg text-slate-200 group-hover:text-white font-medium transition-colors">
                    Purbachal, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7 contact-form">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/40">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-5 py-3.5 bg-black/30 border border-white/10 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">
                      Your Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-5 py-3.5 bg-black/30 border border-white/10 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-5 py-3.5 bg-black/30 border border-white/10 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>

                  {/* Company Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      className="w-full px-5 py-3.5 bg-black/30 border border-white/10 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">
                    Your Message <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    required
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-5 py-3.5 bg-black/30 border border-white/10 rounded-xl text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className="w-full py-4 px-8 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold rounded-xl text-base shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-[1.005] active:scale-[0.995] transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Sending Message...</span>
                    </>
                  ) : formStatus === "success" ? (
                    <span>Message Sent Successfully!</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
