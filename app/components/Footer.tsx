import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D]">
      {/* Gradient top line */}
      <div className="gradient-line h-[2px] w-full" />

      <div className="max-w-[1100px] mx-auto px-6 md:px-20 py-10">
        {/* Desktop: 3-column | Mobile: stacked centered */}
        <div className="flex flex-col items-center gap-6 md:grid md:grid-cols-3 md:items-center md:gap-0">

          {/* Left: full wordmark */}
          <div className="flex items-center md:justify-start justify-center">
            {/*
              Same crop technique: render -01 at 1.0× natural (256×168),
              clip to content region (71×40 natural px) at 32px visible height.
              Scale: 32/40 = 0.8 → rendered 205×134, crop left=74, top=52, visible 57×32
            */}
            <div style={{ width: 57, height: 32, overflow: "hidden", position: "relative", flexShrink: 0 }}>
              <div style={{ position: "absolute", width: 205, height: 134, left: -74, top: -52 }}>
                <Image
                  src="/BLNT_Logo_R2-01.png"
                  alt="BLNT Creatives"
                  width={205}
                  height={134}
                  style={{ width: 205, height: 134, display: "block", maxWidth: "none" }}
                />
              </div>
            </div>
          </div>

          {/* Center: tagline */}
          <p className="text-[#888880] text-sm text-center">
            Creative solutions for complex problems.
          </p>

          {/* Right: copyright */}
          <p className="text-[#555550] text-xs text-center md:text-right">
            © 2025 BLNT Creatives. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
