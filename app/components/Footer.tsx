import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#0D0D0D]">
      {/* Gradient top line */}
      <div className="gradient-line h-[1px] w-full" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-20 py-8">
        {/* Desktop: 3-column grid | Mobile: stacked centered */}
        <div className="flex flex-col items-center gap-5 md:grid md:grid-cols-3 md:items-center md:gap-0">
          {/* Left: Logo icon */}
          <div className="flex items-center md:justify-start justify-center">
            <Image
              src="/BLNT_Logo_R2-02.png"
              alt="BLNT Creatives"
              height={32}
              width={32}
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Center: Tagline */}
          <p className="text-[#888880] text-sm text-center">
            Creative solutions for complex problems.
          </p>

          {/* Right: Copyright */}
          <p className="text-[#555550] text-xs text-center md:text-right">
            © 2025 BLNT Creatives. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
