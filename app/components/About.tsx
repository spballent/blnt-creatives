"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".section-hidden").forEach((child) => {
            child.classList.add("section-visible");
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-36 overflow-hidden bg-[#0D0D0D]">
      {/* Large watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="text-[20vw] font-bold text-white/[0.025] leading-none tracking-tighter"
          style={{ userSelect: "none" }}
        >
          BLNT
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          {/* Section label */}
          <p className="section-hidden gradient-text text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            What We Do
          </p>

          {/* Heading */}
          <h2 className="section-hidden text-4xl md:text-5xl font-bold text-[#F5F5F0] leading-tight mb-8">
            We&apos;re Problem<br />Solvers First
          </h2>

          {/* Gradient accent line */}
          <div className="section-hidden gradient-line h-[1px] w-12 mb-10" />

          {/* Body copy */}
          <div className="space-y-6">
            <p className="section-hidden text-[#888880] text-base md:text-lg leading-relaxed">
              BLNT Creatives started with a simple idea. Most business problems
              have creative solutions, you just have to be willing to look for
              them. We&apos;re a small team that brings together strategy, design,
              and technology to help brands figure out what&apos;s holding them back
              and build something better.
            </p>
            <p className="section-hidden text-[#888880] text-base md:text-lg leading-relaxed">
              We work closely with the people we take on. No handoffs to a
              junior team, no cookie-cutter playbooks. Just honest work, clear
              communication, and solutions that are built around what you
              actually need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
