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
      className="py-24 md:py-32 bg-[#0D0D0D] border-t border-white/[0.08]"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-20">

        {/* Section label */}
        <p
          data-animate
          data-delay="0"
          className="text-[#E8402A] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
        >
          Early Work
        </p>

        {/* Heading */}
        <h2
          data-animate
          data-delay="100"
          className="text-4xl md:text-5xl font-bold text-[#F5F5F0] leading-tight mb-14 text-balance"
        >
          We&apos;re New. Here&apos;s<br className="hidden md:block" /> Where We&apos;re Starting.
        </h2>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Team Forman Experience */}
          <div
            data-animate
            data-delay="200"
            className="bg-[#141414] border border-white/[0.08] rounded-sm p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-4 h-[2px] bg-[#E8402A] inline-block flex-shrink-0" />
              <span className="text-[#888880] text-xs font-medium tracking-[0.15em] uppercase">
                Active
              </span>
            </div>
            <h3 className="text-2xl md:text-[28px] font-semibold text-[#F5F5F0] mb-4 leading-snug">
              Team Forman Experience
            </h3>
            <p className="text-[#888880] text-[17px] leading-relaxed mb-8">
              Building a custom CRM system and scalable digital product
              for a growing brand. From restructuring internal workflows to
              laying the technical foundation for their next phase of growth.
            </p>
            <div className="flex flex-wrap gap-3">
              {["CRM System", "Digital Product", "Workflow Optimization"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-sm border border-white/[0.1] bg-white/[0.04] text-xs text-[#888880] font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* BuildQuote.io */}
          <div
            data-animate
            data-delay="300"
            className="bg-[#141414] border border-white/[0.08] rounded-sm p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-4 h-[2px] bg-[#E8402A] inline-block flex-shrink-0" />
              <span className="text-[#888880] text-xs font-medium tracking-[0.15em] uppercase">
                Active
              </span>
            </div>
            <h3 className="text-2xl md:text-[28px] font-semibold text-[#F5F5F0] mb-4 leading-snug">
              BuildQuote.io
            </h3>
            <p className="text-[#888880] text-[17px] leading-relaxed mb-8">
              We built BuildQuote.io from the ground up — a professional
              quoting platform designed specifically for contractors. From
              brand identity to full product development, we created a
              streamlined tool that helps contractors create, manage, and
              send polished quotes faster.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Brand Design", "Digital Product", "Consulting"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-sm border border-white/[0.1] bg-white/[0.04] text-xs text-[#888880] font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>


      </div>
    </section>
  );
}
