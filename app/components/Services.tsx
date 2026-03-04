"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    number: "01",
    name: "Brand Design",
    description:
      "Your brand is usually the first impression so we make sure it's a good one. We help you build a visual identity that feels right, looks sharp, and actually reflects who you are.",
  },
  {
    number: "02",
    name: "Marketing",
    description:
      "Good marketing doesn't have to feel pushy. We help you figure out what to say, who to say it to, and how to say it in a way that actually lands.",
  },
  {
    number: "03",
    name: "Consulting",
    description:
      "Sometimes you just need someone to look at things with fresh eyes. We dig into what's working and what isn't, then help you figure out the clearest path forward.",
  },
  {
    number: "04",
    name: "Workflow Optimization",
    description:
      "If your team is spending more time managing the process than doing the work, something's off. We come in, find where things are getting stuck, and help you build something that actually flows.",
  },
  {
    number: "05",
    name: "Community Management",
    description:
      "A great community doesn't just happen. It gets nurtured. We help brands build, engage, and grow communities that people actually want to be part of through real connection, great content, and the right incentives.",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".section-hidden").forEach((child, i) => {
            (child as HTMLElement).style.transitionDelay = `${i * 80}ms`;
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
      id="services"
      ref={ref}
      className="py-24 md:py-36 bg-[#0D0D0D]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <p className="section-hidden gradient-text text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          How We Help
        </p>

        {/* Heading */}
        <h2 className="section-hidden text-4xl md:text-5xl font-bold text-[#F5F5F0] leading-tight mb-4">
          Here&apos;s What We Do Best
        </h2>

        {/* Gradient accent line */}
        <div className="section-hidden gradient-line h-[1px] w-12 mb-14" />

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="section-hidden service-card bg-[#141414] border border-white/8 rounded-2xl p-8"
            >
              {/* Number */}
              <span className="gradient-text text-xs font-bold tracking-widest uppercase mb-4 block">
                {service.number}
              </span>

              {/* Name */}
              <h3 className="text-xl font-semibold text-[#F5F5F0] mb-3">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-[#888880] text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
