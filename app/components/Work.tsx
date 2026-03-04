"use client";

import { useEffect, useRef } from "react";

export default function Work() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>("[data-animate]");
    items.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(24px)";
      item.style.transition = "opacity 0.9s ease-out, transform 0.9s ease-out";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item) => {
            const delay = parseInt(item.dataset.delay ?? "0");
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, delay);
          });
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={ref}
      className="py-16 md:py-24 bg-[#0D0D0D]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        {/* Section label */}
        <p
          data-animate
          data-delay="0"
          className="gradient-text text-xs font-semibold tracking-[0.2em] uppercase mb-3"
        >
          Early Work
        </p>

        {/* Heading */}
        <h2
          data-animate
          data-delay="100"
          className="text-4xl md:text-5xl font-bold text-[#F5F5F0] leading-tight mb-4"
        >
          We&apos;re New. Here&apos;s<br />Where We&apos;re Starting.
        </h2>

        {/* Gradient accent line */}
        <div
          data-animate
          data-delay="200"
          className="gradient-line h-[1px] w-12 mb-10"
        />

        {/* Featured project card */}
        <div
          data-animate
          data-delay="300"
          className="bg-[#141414] border border-white/8 rounded-2xl p-8 md:p-10 max-w-2xl"
        >
          {/* Status badge */}
          <div className="flex items-center gap-2 mb-5">
            <span className="pulse-dot w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">
              In Progress
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-semibold text-[#F5F5F0] mb-3 leading-snug">
            Workflow Overhaul &amp; Digital Foundation
          </h3>

          {/* Description */}
          <p className="text-[#888880] text-base leading-relaxed mb-7">
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
        <p
          data-animate
          data-delay="400"
          className="mt-8 text-[#888880] text-sm md:text-base"
        >
          More to share soon. We&apos;re heads down doing good work and the case
          studies are coming.
        </p>
      </div>
    </section>
  );
}
