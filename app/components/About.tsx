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

    // Delay observer so browser paints opacity:0 before it can fire
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
      className="relative py-20 md:py-[120px] bg-white overflow-hidden"
      style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* ── Left column: copy ──────────────────────────────── */}
          <div>
            <p
              data-animate
              data-delay="0"
              className="gradient-text text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            >
              What We Do
            </p>

            <h2
              data-animate
              data-delay="100"
              className="text-4xl md:text-5xl font-bold text-[#0D0D0D] leading-tight mb-5"
            >
              We&apos;re Problem<br />Solvers First
            </h2>

            <div
              data-animate
              data-delay="200"
              className="gradient-line h-[1px] w-12 mb-8"
            />

            <div className="space-y-5">
              <p
                data-animate
                data-delay="300"
                className="text-[#555550] text-[17px] leading-relaxed"
              >
                BLNT Creatives started with a simple idea. Most business
                problems have creative solutions, you just have to be willing
                to look for them. We&apos;re a small team that brings together
                strategy, design, and technology to help brands figure out
                what&apos;s holding them back and build something better.
              </p>
              <p
                data-animate
                data-delay="400"
                className="text-[#555550] text-[17px] leading-relaxed"
              >
                We work closely with the people we take on. No handoffs to a
                junior team, no cookie-cutter playbooks. Just honest work,
                clear communication, and solutions that are built around what
                you actually need.
              </p>
            </div>
          </div>

          {/* ── Right column: watermark ────────────────────────── */}
          <div
            data-animate
            data-delay="200"
            className="hidden md:flex items-center justify-center select-none"
            aria-hidden="true"
          >
            <span
              className="text-[clamp(80px,14vw,180px)] font-bold leading-none tracking-tighter"
              style={{ color: "rgba(0,0,0,0.04)", userSelect: "none" }}
            >
              BLNT
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
