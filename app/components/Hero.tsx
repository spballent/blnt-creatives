"use client";

export default function Hero() {
  const handleContactScroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#0D0D0D] noise-overlay">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(255,107,53,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-20 pt-32 pb-10">
        <h1 className="animate-fade-in-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight text-[#F5F5F0] max-w-4xl">
          Design That<br />Moves Brands<br />Forward
        </h1>

        {/* Gradient accent line — sits directly under the headline */}
        <div className="animate-fade-in-up-delay-1 gradient-line h-[2px] w-20 mt-6 mb-8" />

        <p className="animate-fade-in-up-delay-1 text-lg md:text-xl text-[#888880] max-w-2xl leading-relaxed">
          BLNT Creatives is a small creative studio with a big toolkit. We
          partner with brands to solve problems with thoughtful, creative
          solutions that help them grow. From identity and design to systems
          and strategy, we help good ideas move forward.
        </p>

        <div className="animate-fade-in-up-delay-2 mt-8">
          <button
            onClick={handleContactScroll}
            className="gradient-btn inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-base tracking-wide"
          >
            Let&apos;s Talk
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0D0D0D)" }}
      />
    </section>
  );
}
