import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#0D0D0D]">
      {/* Gradient top line */}
      <div className="gradient-line h-[1px] w-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          {/* Logo icon */}
          <div className="flex items-center">
            <Image
              src="/BLNT_Logo_R2-02.png"
              alt="BLNT Creatives"
              height={32}
              width={32}
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Center tagline */}
          <p className="text-[#888880] text-sm text-center">
            Creative solutions for complex problems.
          </p>

          {/* Copyright */}
          <p className="text-[#555550] text-xs">
            © 2025 BLNT Creatives. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
