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
      className="py-20 md:py-[120px] bg-white"
      style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-20">

        {/* Section label */}
        <p
          data-animate
          data-delay="0"
          className="gradient-text text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-center"
        >
          Early Work
        </p>

        {/* Heading */}
        <h2
          data-animate
          data-delay="100"
          className="text-4xl md:text-5xl font-bold text-[#0D0D0D] leading-tight mb-5 text-center"
        >
          We&apos;re New. Here&apos;s<br />Where We&apos;re Starting.
        </h2>

        {/* Gradient accent line */}
        <div
          data-animate
          data-delay="200"
          className="gradient-line h-[1px] w-12 mb-14 mx-auto"
        />

        {/* Featured project card */}
        <div
          data-animate
          data-delay="300"
          className="bg-[#F5F5F5] border border-black/[0.07] rounded-2xl p-8 md:p-12 max-w-2xl mx-auto"
        >
          {/* Status badge */}
          <div className="flex items-center gap-2.5 mb-6">
            <span className="pulse-dot w-2 h-2 rounded-full bg-emerald-500 inline-block flex-shrink-0" />
            <span className="text-emerald-600 text-xs font-semibold tracking-[0.15em] uppercase">
              In Progress
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0D0D0D] mb-4 leading-snug">
            Workflow Overhaul &amp; Digital Foundation
          </h3>

          {/* Description */}
          <p className="text-[#555550] text-[17px] leading-relaxed mb-8">
            We&apos;re currently working with a growing brand to untangle their
            internal processes and set them up for a digital product launch.
            Early days, but already making a real difference in how their team
            operates day to day.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {["Workflow Optimization", "Digital Product"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full border border-black/[0.15] bg-black/[0.04] text-xs text-[#444440] font-medium tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Coming soon */}
        <p
          data-animate
          data-delay="400"
          className="mt-10 text-[#888880] text-[17px] text-center"
        >
          More to share soon. We&apos;re heads down doing good work and the case
          studies are coming.
        </p>

      </div>
    </section>
  );
}
