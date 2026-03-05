"use client";

import { useEffect, useRef, useState } from "react";

/* ── SVG icons ─────────────────────────────────────────────────── */
const BrandIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 4L44 24L24 44L4 24Z" />
    <path d="M24 14L34 24L24 34L14 24Z" />
    <circle cx="24" cy="24" r="2.5" fill="currentColor" stroke="none" />
  </svg>
);

const MarketingIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17H15L31 9V39L15 31H7V17Z" />
    <line x1="15" y1="31" x2="15" y2="43" />
    <path d="M35 16C37.5 18.5 39 21.1 39 24C39 26.9 37.5 29.5 35 32" />
  </svg>
);

const ConsultingIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="19" />
    <path d="M24 5V12M24 36V43M5 24H12M36 24H43" />
    <path d="M31 17L27 25L19 31L23 23L31 17Z" />
  </svg>
);

const WorkflowIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4"  y="7"  width="13" height="10" rx="2" />
    <rect x="31" y="7"  width="13" height="10" rx="2" />
    <rect x="17" y="31" width="14" height="10" rx="2" />
    <path d="M17 12H31" />
    <path d="M10 17V27C10 29.2 11.8 31 14 31H17" />
    <path d="M38 17V27C38 29.2 36.2 31 34 31H31" />
  </svg>
);

const CommunityIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="17" cy="19" r="10" />
    <circle cx="31" cy="19" r="10" />
    <circle cx="24" cy="32" r="10" />
  </svg>
);

const PackageIcon = () => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Front face */}
    <rect x="5" y="20" width="28" height="23" rx="2" />
    {/* Right face */}
    <path d="M33 20L43 14V37L33 43" />
    {/* Top face */}
    <path d="M5 20L15 14H43L33 20Z" />
    {/* Label lines on front */}
    <line x1="10" y1="30" x2="28" y2="30" />
    <line x1="10" y1="35" x2="21" y2="35" />
  </svg>
);

/* ── Service data ───────────────────────────────────────────────── */
const services = [
  {
    name: "Brand Design",
    dotColor: "#E8402A",
    Icon: BrandIcon,
    description:
      "Your brand is usually the first impression so we make sure it's a good one. We help you build a visual identity that feels right, looks sharp, and actually reflects who you are.",
  },
  {
    name: "Marketing",
    dotColor: "#F0821A",
    Icon: MarketingIcon,
    description:
      "Good marketing doesn't have to feel pushy. We help you figure out what to say, who to say it to, and how to say it in a way that actually lands.",
  },
  {
    name: "Consulting",
    dotColor: "#E8A020",
    Icon: ConsultingIcon,
    description:
      "Sometimes you just need someone to look at things with fresh eyes. We dig into what's working and what isn't, then help you figure out the clearest path forward.",
  },
  {
    name: "Workflow Optimization",
    dotColor: "#E8402A",
    Icon: WorkflowIcon,
    description:
      "If your team is spending more time managing the process than doing the work, something's off. We come in, find where things are getting stuck, and help you build something that actually flows.",
  },
  {
    name: "Community Management",
    dotColor: "#F0821A",
    Icon: CommunityIcon,
    description:
      "A great community doesn't just happen. It gets nurtured. We help brands build, engage, and grow communities that people actually want to be part of through real connection, great content, and the right incentives.",
  },
  {
    name: "Package Design",
    dotColor: "#E8A020",
    Icon: PackageIcon,
    description:
      "Good packaging does more than protect a product — it sells it. We design packaging that gets noticed, tells your brand story at a glance, and makes people feel something the moment they see it.",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const [activeService, setActiveService] = useState("Brand Design");
  const [descKey, setDescKey] = useState(0);

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

  const handleHover = (name: string) => {
    if (name !== activeService) {
      setActiveService(name);
      setDescKey((k) => k + 1);
    }
  };

  const activeDesc = services.find((s) => s.name === activeService)?.description ?? "";

  return (
    <section
      id="services"
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
          How We Help
        </p>

        {/* Heading */}
        <h2
          data-animate
          data-delay="100"
          className="text-4xl md:text-5xl font-bold text-[#0D0D0D] leading-tight mb-5 text-center"
        >
          Here&apos;s What We Do Best
        </h2>

        {/* Gradient accent line */}
        <div
          data-animate
          data-delay="200"
          className="gradient-line h-[1px] w-12 mb-14 mx-auto"
        />

        {/* ── Icon grid: 2×3 desktop, 3×2 mobile ─────────────────
              Border trick: container gets border-t + border-l,
              each card gets border-r + border-b → perfect grid,
              no double borders, works at any column count.
        ──────────────────────────────────────────────────────── */}
        <div
          data-animate
          data-delay="300"
          className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-[#E8E8E8]"
        >
          {services.map((service) => (
            <div
              key={service.name}
              className={`service-icon-card border-r border-b border-[#E8E8E8] bg-white p-8 flex flex-col items-center justify-center text-center gap-4 transition-colors duration-200 ${
                activeService === service.name ? "bg-[#FAFAFA]" : ""
              }`}
              onMouseEnter={() => handleHover(service.name)}
              onClick={() => handleHover(service.name)}
            >
              <div className="text-[#0D0D0D]">
                <service.Icon />
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="accent-dot w-[7px] h-[7px] rounded-full flex-shrink-0"
                  style={{ backgroundColor: service.dotColor }}
                />
                <span className="text-[14px] font-semibold text-[#0D0D0D] leading-snug">
                  {service.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Hover description panel ────────────────────────── */}
        <div data-animate data-delay="400" className="mt-12 text-center min-h-[80px]">
          <p
            key={descKey}
            className="text-[17px] text-[#555550] leading-relaxed max-w-lg mx-auto"
            style={{ animation: "fadeInUp 0.4s ease forwards" }}
          >
            {activeDesc}
          </p>
        </div>

      </div>
    </section>
  );
}
