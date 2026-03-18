"use client";

import { useEffect, useRef, useState } from "react";

/* ── SVG icons — accept `active` prop for draw animation ────────── */
/* Two-layer icon style: base (always visible white) + overlay (orange draw-in) */
const baseStyle = {
  stroke: "#F5F5F0",
  opacity: 0.3,
};

const overlayStyle = (active: boolean) => ({
  stroke: "#E8402A",
  strokeDasharray: 200,
  strokeDashoffset: active ? 0 : 200,
  transition: active
    ? "stroke-dashoffset 1.5s ease-out"
    : "stroke-dashoffset 0.5s ease-in",
});

const BrandIcon = ({ active }: { active: boolean }) => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 4L44 24L24 44L4 24Z" style={baseStyle} />
    <path d="M24 14L34 24L24 34L14 24Z" style={baseStyle} />
    <path d="M24 4L44 24L24 44L4 24Z" style={overlayStyle(active)} />
    <path d="M24 14L34 24L24 34L14 24Z" style={overlayStyle(active)} />
    <circle cx="24" cy="24" r="2.5" fill={active ? "#E8402A" : "rgba(245,245,240,0.3)"} stroke="none" style={{ transition: "fill 0.4s ease" }} />
  </svg>
);

const MarketingIcon = ({ active }: { active: boolean }) => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17H15L31 9V39L15 31H7V17Z" style={baseStyle} />
    <line x1="15" y1="31" x2="15" y2="43" style={baseStyle} />
    <path d="M35 16C37.5 18.5 39 21.1 39 24C39 26.9 37.5 29.5 35 32" style={baseStyle} />
    <path d="M7 17H15L31 9V39L15 31H7V17Z" style={overlayStyle(active)} />
    <line x1="15" y1="31" x2="15" y2="43" style={overlayStyle(active)} />
    <path d="M35 16C37.5 18.5 39 21.1 39 24C39 26.9 37.5 29.5 35 32" style={overlayStyle(active)} />
  </svg>
);

const ConsultingIcon = ({ active }: { active: boolean }) => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="24" r="19" style={baseStyle} />
    <path d="M24 5V12M24 36V43M5 24H12M36 24H43" style={baseStyle} />
    <path d="M31 17L27 25L19 31L23 23L31 17Z" style={baseStyle} />
    <circle cx="24" cy="24" r="19" style={overlayStyle(active)} />
    <path d="M24 5V12M24 36V43M5 24H12M36 24H43" style={overlayStyle(active)} />
    <path d="M31 17L27 25L19 31L23 23L31 17Z" style={overlayStyle(active)} />
  </svg>
);

const WorkflowIcon = ({ active }: { active: boolean }) => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="7" width="13" height="10" rx="2" style={baseStyle} />
    <rect x="31" y="7" width="13" height="10" rx="2" style={baseStyle} />
    <rect x="17" y="31" width="14" height="10" rx="2" style={baseStyle} />
    <path d="M17 12H31" style={baseStyle} />
    <path d="M10 17V27C10 29.2 11.8 31 14 31H17" style={baseStyle} />
    <path d="M38 17V27C38 29.2 36.2 31 34 31H31" style={baseStyle} />
    <rect x="4" y="7" width="13" height="10" rx="2" style={overlayStyle(active)} />
    <rect x="31" y="7" width="13" height="10" rx="2" style={overlayStyle(active)} />
    <rect x="17" y="31" width="14" height="10" rx="2" style={overlayStyle(active)} />
    <path d="M17 12H31" style={overlayStyle(active)} />
    <path d="M10 17V27C10 29.2 11.8 31 14 31H17" style={overlayStyle(active)} />
    <path d="M38 17V27C38 29.2 36.2 31 34 31H31" style={overlayStyle(active)} />
  </svg>
);

const CommunityIcon = ({ active }: { active: boolean }) => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" strokeWidth="1.5">
    <circle cx="17" cy="19" r="10" style={baseStyle} />
    <circle cx="31" cy="19" r="10" style={baseStyle} />
    <circle cx="24" cy="32" r="10" style={baseStyle} />
    <circle cx="17" cy="19" r="10" style={overlayStyle(active)} />
    <circle cx="31" cy="19" r="10" style={overlayStyle(active)} />
    <circle cx="24" cy="32" r="10" style={overlayStyle(active)} />
  </svg>
);

const PackageIcon = ({ active }: { active: boolean }) => (
  <svg width="44" height="44" viewBox="0 0 48 48" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="20" width="28" height="23" rx="2" style={baseStyle} />
    <path d="M33 20L43 14V37L33 43" style={baseStyle} />
    <path d="M5 20L15 14H43L33 20Z" style={baseStyle} />
    <line x1="10" y1="30" x2="28" y2="30" style={baseStyle} />
    <line x1="10" y1="35" x2="21" y2="35" style={baseStyle} />
    <rect x="5" y="20" width="28" height="23" rx="2" style={overlayStyle(active)} />
    <path d="M33 20L43 14V37L33 43" style={overlayStyle(active)} />
    <path d="M5 20L15 14H43L33 20Z" style={overlayStyle(active)} />
    <line x1="10" y1="30" x2="28" y2="30" style={overlayStyle(active)} />
    <line x1="10" y1="35" x2="21" y2="35" style={overlayStyle(active)} />
  </svg>
);

/* ── Service data ───────────────────────────────────────────────── */
const services = [
  {
    name: "Brand Design",
    Icon: BrandIcon,
    description:
      "Your brand is usually the first impression so we make sure it's a good one. We help you build a visual identity that feels right, looks sharp, and actually reflects who you are.",
  },
  {
    name: "Marketing",
    Icon: MarketingIcon,
    description:
      "Good marketing doesn't have to feel pushy. We help you figure out what to say, who to say it to, and how to say it in a way that actually lands.",
  },
  {
    name: "Consulting",
    Icon: ConsultingIcon,
    description:
      "Sometimes you just need someone to look at things with fresh eyes. We dig into what's working and what isn't, then help you figure out the clearest path forward.",
  },
  {
    name: "Workflow Optimization",
    Icon: WorkflowIcon,
    description:
      "If your team is spending more time managing the process than doing the work, something\u2019s off. We come in, find where things are getting stuck, and help you build something that actually\u00a0flows.",
  },
  {
    name: "Community Management",
    Icon: CommunityIcon,
    description:
      "A great community doesn't just happen. It gets nurtured. We help brands build, engage, and grow communities that people actually want to be part of through real connection, great content, and the right incentives.",
  },
  {
    name: "Package Design",
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
      className="py-24 md:py-32 bg-[#0D0D0D] border-t border-white/[0.08]"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-20">

        {/* Section label */}
        <p
          data-animate
          data-delay="0"
          className="text-[#E8402A] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
        >
          How We Help
        </p>

        {/* Heading */}
        <h2
          data-animate
          data-delay="100"
          className="text-4xl md:text-5xl font-bold text-[#F5F5F0] leading-tight mb-14 text-balance"
        >
          Here&apos;s What We Do Best
        </h2>

        {/* ── Icon grid ─────────────────────────────────────────── */}
        <div
          data-animate
          data-delay="300"
          className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-white/[0.08]"
        >
          {services.map((service) => {
            const isActive = activeService === service.name;
            return (
              <div
                key={service.name}
                className={`service-icon-card border-r border-b border-white/[0.08] bg-[#141414] p-8 flex flex-col items-center justify-center text-center gap-4 transition-colors duration-200 ${
                  isActive ? "!bg-[#1C1C1C]" : ""
                }`}
                onMouseEnter={() => handleHover(service.name)}
                onClick={() => handleHover(service.name)}
              >
                <div className="text-[#F5F5F0]">
                  <service.Icon active={isActive} />
                </div>
                <span className={`text-[14px] font-semibold leading-snug transition-colors duration-300 ${
                  isActive ? "text-[#E8402A]" : "text-[#F5F5F0]"
                }`}>
                  {service.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* ── Hover description panel ────────────────────────── */}
        <div data-animate data-delay="400" className="mt-12 min-h-[80px]">
          <p
            key={descKey}
            className="text-[17px] text-[#888880] leading-relaxed max-w-lg mx-auto"
            style={{ animation: "fadeInUp 0.4s ease forwards" }}
          >
            {activeDesc}
          </p>
        </div>

      </div>
    </section>
  );
}
