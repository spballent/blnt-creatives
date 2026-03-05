"use client";

export default function Hero() {
  const handleContactScroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden bg-white noise-overlay">
      {/* Subtle warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 55%, rgba(232,64,42,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-20 pt-28 pb-16 flex flex-col items-center">
        {/* Headline */}
        <h1 className="animate-fade-in-up text-[52px] sm:text-[64px] md:text-[72px] lg:text-[88px] font-bold leading-[1.05] tracking-tight text-[#0D0D0D] max-w-4xl">
          We Figure Out What&apos;s Not Working.
          <br className="hidden sm:block" /> Then We Fix It.
        </h1>

        {/* Centered gradient accent line */}
        <div className="animate-fade-in-up-delay-1 gradient-line h-[2px] w-20 mt-7 mb-8" />

        {/* Subheading */}
        <p className="animate-fade-in-up-delay-1 text-[17px] md:text-[19px] text-[#555550] max-w-xl leading-relaxed">
          BLNT Creatives is a small creative agency with a big toolkit.
          We work with brands to solve real problems. Whether that&apos;s
          building their identity, fixing their workflow, or growing their
          community.
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up-delay-2 mt-10">
          <button
            onClick={handleContactScroll}
            className="gradient-btn inline-flex items-center gap-2 px-9 py-4 rounded-full text-white font-semibold text-base tracking-wide shadow-md"
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

      {/* Bottom fade to next section (dark) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.6))" }}
      />
    </section>
  );
}
