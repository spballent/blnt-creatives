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
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-x-hidden bg-[#0D0D0D] noise-overlay grid-overlay">

      {/* ── Floating geometric illustration — independent layers ── */}
      <div className="hidden md:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-[550px] h-[550px] z-[2]">

        {/* Layer 1: Tilted square — slow drift */}
        <div
          className="absolute inset-0"
          style={{ animation: "heroFloat 20s ease-in-out infinite" }}
        >
          <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
            <rect
              x="200" y="160" width="180" height="180" rx="2"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1.2"
              fill="none"
              transform="rotate(-10 290 250)"
            />
          </svg>
        </div>

        {/* Layer 2: Red diagonal — slightly faster, offset timing */}
        <div
          className="absolute inset-0"
          style={{ animation: "heroFloat 15s ease-in-out 2s infinite reverse" }}
        >
          <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
            <line x1="140" y1="120" x2="420" y2="400" stroke="#E8402A" strokeWidth="1" opacity="0.3" />
          </svg>
        </div>

        {/* Layer 3: Connected nodes — own rhythm */}
        <div
          className="absolute inset-0"
          style={{ animation: "heroFloat 18s ease-in-out 4s infinite" }}
        >
          <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
            <circle cx="240" cy="200" r="3" fill="rgba(255,255,255,0.3)" />
            <circle cx="360" cy="210" r="3" fill="rgba(255,255,255,0.25)" />
            <circle cx="310" cy="320" r="3" fill="rgba(255,255,255,0.3)" />
            <line x1="240" y1="200" x2="360" y2="210" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
            <line x1="360" y1="210" x2="310" y2="320" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
            <line x1="310" y1="320" x2="240" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8" />
          </svg>
        </div>

        {/* Layer 4: Small diamond — slow counter-rotation */}
        <div
          className="absolute inset-0"
          style={{ animation: "heroFloat 22s ease-in-out 1s infinite reverse" }}
        >
          <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
            <rect
              x="300" y="100" width="80" height="80"
              transform="rotate(45 340 140)"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>

        {/* Accent dots — static position, pulsing */}
        <svg viewBox="0 0 500 500" fill="none" className="absolute inset-0 w-full h-full">
          <circle cx="200" cy="340" r="2.5" fill="#E8402A" opacity="0.4">
            <animate attributeName="opacity" values="0.4;0.15;0.4" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="380" cy="150" r="2" fill="#E8402A" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 md:px-20 pt-28">

        {/* Headline */}
        <h1
          className="animate-fade-in-up font-medium leading-[1.05] tracking-tight text-[#F5F5F0] max-w-4xl overflow-visible"
          style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)" }}
        >
          Creative solutions that move{" "}
          <span className="whitespace-nowrap"><em className="italic text-[#E8402A]">brands</em>{" "}forward<span className="text-[#E8402A]">.</span></span>
        </h1>

        {/* Subheading */}
        <p className="animate-fade-in-up-delay-1 text-[15px] md:text-[17px] font-light text-[#888880] max-w-[480px] leading-relaxed mt-8">
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
