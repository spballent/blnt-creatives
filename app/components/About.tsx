"use client";

import { useEffect, useRef } from "react";

export default function About() {
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

    // About sits just below the hero fold — delay observer creation so the
    // browser paints the opacity:0 state before the observer can fire.
    let observer: IntersectionObserver;
    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
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
    }, 150);

    return () => {
      clearTimeout(timer);
      observer?.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden bg-[#0D0D0D]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
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

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-20">
        <div className="max-w-2xl">
          {/* Section label */}
          <p
            data-animate
            data-delay="0"
            className="gradient-text text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          >
            What We Do
          </p>

          {/* Heading */}
          <h2
            data-animate
            data-delay="100"
            className="text-4xl md:text-5xl font-bold text-[#F5F5F0] leading-tight mb-4"
          >
            We&apos;re Problem<br />Solvers First
          </h2>

          {/* Gradient accent line */}
          <div
            data-animate
            data-delay="200"
            className="gradient-line h-[1px] w-12 mb-8"
          />

          {/* Body copy */}
          <div className="space-y-5">
            <p
              data-animate
              data-delay="300"
              className="text-[#888880] text-base md:text-lg leading-relaxed"
            >
              BLNT Creatives started with a simple idea. Most business problems
              have creative solutions, you just have to be willing to look for
              them. We&apos;re a small team that brings together strategy, design,
              and technology to help brands figure out what&apos;s holding them back
              and build something better.
            </p>
            <p
              data-animate
              data-delay="400"
              className="text-[#888880] text-base md:text-lg leading-relaxed"
            >
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
