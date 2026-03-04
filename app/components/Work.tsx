"use client";

import { useEffect, useRef } from "react";

export default function Work() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".section-hidden").forEach((child, i) => {
            (child as HTMLElement).style.transitionDelay = `${i * 100}ms`;
            child.classList.add("section-visible");
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={ref}
      className="py-24 md:py-36 bg-[#0D0D0D]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <p className="section-hidden gradient-text text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          Early Work
        </p>

        {/* Heading */}
        <h2 className="section-hidden text-4xl md:text-5xl font-bold text-[#F5F5F0] leading-tight mb-4">
          We&apos;re New. Here&apos;s<br />Where We&apos;re Starting.
        </h2>

        {/* Gradient accent line */}
        <div className="section-hidden gradient-line h-[1px] w-12 mb-14" />

        {/* Featured project card */}
        <div className="section-hidden bg-[#141414] border border-white/8 rounded-2xl p-8 md:p-10 max-w-2xl">
          {/* Status badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="pulse-dot w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">
              In Progress
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-semibold text-[#F5F5F0] mb-4 leading-snug">
            Workflow Overhaul &amp; Digital Foundation
          </h3>

          {/* Description */}
          <p className="text-[#888880] text-base leading-relaxed mb-8">
            We&apos;re currently working with a growing brand to untangle their
            internal processes and set them up for a digital product launch.
            Early days, but already making a real difference in how their team
            operates day to day.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-[#888880] font-medium">
              Workflow Optimization
            </span>
            <span className="px-3 py-1 rounded-full border border-white/10 text-xs text-[#888880] font-medium">
              Digital Product
            </span>
          </div>
        </div>

        {/* Coming soon note */}
        <p className="section-hidden mt-10 text-[#888880] text-sm md:text-base">
          More to share soon. We&apos;re heads down doing good work and the case
          studies are coming.
        </p>
      </div>
    </section>
  );
}
