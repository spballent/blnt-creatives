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

            // Animate pull quote: border draws down (500ms), pause 200ms, then text fades in (600ms)
            const border = el.querySelector<HTMLElement>("[data-quote-border]");
            const texts = el.querySelectorAll<HTMLElement>("[data-quote-text]");
            if (border) {
              setTimeout(() => {
                border.style.transform = "scaleY(1)";
              }, 200);
            }
            texts.forEach((t) => {
              setTimeout(() => {
                t.style.opacity = "1";
                t.style.transform = "translateX(0)";
              }, 700); // 200ms initial + 500ms border draw
            });

            observer.disconnect();
          }
        },
        { threshold: 0.5 }
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
              className="text-4xl md:text-5xl font-bold text-[#0D0D0D] leading-tight mb-5 text-balance"
            >
              We&apos;re Problem<br className="hidden md:block" /> Solvers First
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

          {/* ── Right column: pull quote ────────────────────────── */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative pl-7">
              {/* Gradient left border */}
              <div
                data-quote-border
                className="absolute left-0 top-0 w-[3px] h-full origin-top"
                style={{
                  background: "linear-gradient(180deg, #E8402A, #F0821A, #E8A020)",
                  transform: "scaleY(0)",
                  transition: "transform 0.5s ease-out",
                }}
              />
              {/* Quote text */}
              <p
                data-quote-text
                className="text-[32px] lg:text-[38px] italic leading-snug text-[#0D0D0D]"
                style={{
                  fontFamily: "var(--font-dm-serif), serif",
                  fontWeight: 400,
                  opacity: 0,
                  transform: "translateX(-16px)",
                  transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
                }}
              >
                &ldquo;No templates. No handoffs. Just real work.&rdquo;
              </p>
              {/* Attribution */}
              <p
                data-quote-text
                className="mt-4 text-[13px] font-normal text-[#888880]"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  opacity: 0,
                  transform: "translateX(-16px)",
                  transition: "opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
                }}
              >
                How we work at BLNT Creatives
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
