"use client";

export default function Hero() {
  const handleContactScroll = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0D0D0D] noise-overlay">

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-20 pt-28 pb-16 flex flex-col items-start">
        {/* Headline */}
        <h1
          className="animate-fade-in-up font-bold leading-[1.1] tracking-tight text-[#F5F5F0] max-w-3xl text-balance"
          style={{ fontSize: "clamp(1.8rem, 5.5vw, 3.875rem)" }}
        >
          Creative solutions that move{" "}
          <span className="gradient-text">brands forward</span>
        </h1>

        {/* Centered gradient accent line */}
        <div className="animate-fade-in-up-delay-1 gradient-line h-[2px] w-20 mt-7 mb-8" />

        {/* Subheading */}
        <p className="animate-fade-in-up-delay-1 text-[17px] md:text-[19px] text-[#888880] max-w-xl leading-relaxed">
          BLNT Creatives is a small creative studio with a big toolkit.
          We partner with brands to solve problems with thoughtful, creative
          solutions that help them grow. From identity and design to systems
          and strategy, we help good ideas move forward.
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

    </section>
  );
}
