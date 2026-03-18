"use client";

export default function Hero() {
  const handleContactScroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleWorkScroll = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-[#0D0D0D] noise-overlay grid-overlay">

      {/* ── Floating geometric illustration ────────────────── */}
      <div
        className="hidden md:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-[550px] h-[550px] z-[2]"
        style={{ animation: "heroFloat 20s ease-in-out infinite" }}
      >
        <svg
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{ transform: "rotate(-8deg)" }}
        >
          {/* Large outer diamond */}
          <rect
            x="250" y="20" width="220" height="220"
            transform="rotate(45 360 130)"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
          {/* Inner diamond */}
          <rect
            x="280" y="55" width="150" height="150"
            transform="rotate(45 355 130)"
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="0.8"
          />

          {/* Red diagonal lines — creative energy */}
          <line x1="80" y1="100" x2="460" y2="440" stroke="#E8402A" strokeWidth="0.8" opacity="0.35" />
          <line x1="160" y1="40" x2="490" y2="340" stroke="#E8402A" strokeWidth="0.8" opacity="0.25" />
          <line x1="60" y1="250" x2="380" y2="490" stroke="#E8402A" strokeWidth="0.6" opacity="0.2" />

          {/* Central geometric form — overlapping shapes */}
          {/* Large tilted square */}
          <rect
            x="190" y="160" width="200" height="200" rx="4"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            fill="rgba(255,255,255,0.015)"
            transform="rotate(-12 290 260)"
          />
          {/* Overlapping circle */}
          <circle
            cx="330" cy="240" r="90"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="0.8"
            fill="none"
          />
          {/* Smaller offset square */}
          <rect
            x="260" y="200" width="130" height="130" rx="3"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.8"
            fill="rgba(13,13,13,0.6)"
            transform="rotate(8 325 265)"
          />

          {/* Triangle accent */}
          <polygon
            points="350,150 420,290 280,290"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="0.8"
            fill="none"
          />

          {/* Connection nodes */}
          <circle cx="230" cy="200" r="3.5" fill="rgba(255,255,255,0.25)" />
          <circle cx="380" cy="180" r="3" fill="rgba(255,255,255,0.2)" />
          <circle cx="310" cy="330" r="3.5" fill="rgba(255,255,255,0.25)" />
          <circle cx="400" cy="310" r="2.5" fill="rgba(255,255,255,0.15)" />

          {/* Connection lines between nodes */}
          <line x1="230" y1="200" x2="380" y2="180" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
          <line x1="380" y1="180" x2="400" y2="310" stroke="rgba(255,255,255,0.05)" strokeWidth="0.6" />
          <line x1="400" y1="310" x2="310" y2="330" stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
          <line x1="310" y1="330" x2="230" y2="200" stroke="rgba(255,255,255,0.05)" strokeWidth="0.6" />

          {/* Orange accent bar */}
          <rect x="275" y="270" width="50" height="4" rx="2" fill="#E8402A" opacity="0.5" transform="rotate(8 300 272)" />

          {/* EST. 2026 */}
          <text
            x="300" y="420"
            fill="rgba(255,255,255,0.12)"
            fontSize="11"
            fontFamily="monospace"
            letterSpacing="2"
          >
            EST. 2026
          </text>

          {/* Pulsing accent dots */}
          <circle cx="180" cy="340" r="3" fill="#E8402A" opacity="0.6">
            <animate attributeName="opacity" values="0.6;0.2;0.6" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="440" cy="400" r="2.5" fill="#E8402A" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.15;0.4" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="130" r="2" fill="#E8402A" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 md:px-20 pt-28">

        {/* Headline */}
        <h1
          className="animate-fade-in-up font-bold leading-[1.08] tracking-tight text-[#F5F5F0] max-w-4xl"
          style={{ fontSize: "clamp(2.5rem, 7vw, 4.5rem)" }}
        >
          Creative solutions that move{" "}
          <span className="text-[#E8402A]">brands&nbsp;forward.</span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up-delay-1 text-[17px] md:text-[19px] text-[#888880] max-w-xl leading-relaxed mt-8">
          A small studio with a big toolkit. We partner with brands
          to solve problems with thoughtful solutions that
          help them&nbsp;grow.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up-delay-2 mt-10 flex items-center gap-8">
          <button
            onClick={handleContactScroll}
            className="inline-flex items-center gap-2 px-9 py-4 bg-[#E8402A] hover:bg-[#d63a25] rounded-[2px] text-white font-semibold text-base tracking-wide transition-all duration-200 shadow-md"
          >
            Let&apos;s Talk
          </button>
          <button
            onClick={handleWorkScroll}
            className="text-[#888880] hover:text-[#F5F5F0] text-[15px] font-medium tracking-wide transition-colors duration-200 flex items-center gap-2"
          >
            See how we work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

      </div>

      {/* Bottom bar — pinned to bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-[1100px] mx-auto px-6 md:px-20 pb-8">
          <div className="animate-fade-in-up-delay-3 flex items-center justify-between pt-6 border-t border-white/[0.08]">
            <div className="flex items-center gap-2 text-[#888880] text-xs tracking-wide">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              Scroll to explore
            </div>
            <div className="hidden md:flex items-center gap-3 text-[#888880] text-xs tracking-[0.15em] uppercase">
              <span>Design</span>
              <span className="text-[#555550]">&middot;</span>
              <span>Strategy</span>
              <span className="text-[#555550]">&middot;</span>
              <span>Systems</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
