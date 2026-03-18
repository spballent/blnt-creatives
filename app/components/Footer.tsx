import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/[0.08]">

      <div className="max-w-[1100px] mx-auto px-6 md:px-20 py-16">
        {/* Main grid: logo+tagline | nav columns */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-10 md:gap-16 items-start">

          {/* Left: logo + tagline */}
          <div>
            <div className="flex items-center mb-4">
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
            <p className="text-[#888880] text-sm leading-relaxed max-w-[260px]">
              Design, strategy, and systems thinking<br />
              for brands that care about the work.
            </p>
          </div>

          {/* Navigate column */}
          <div>
            <p className="text-[#555550] text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Navigate
            </p>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Work", href: "#work" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#888880] hover:text-[#F5F5F0] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div>
            <p className="text-[#555550] text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Connect
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@blntcreatives.com"
                  className="text-[#888880] hover:text-[#F5F5F0] text-sm transition-colors duration-200"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[#888880] hover:text-[#F5F5F0] text-sm transition-colors duration-200"
                >
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="md:text-right md:self-end">
            <p className="text-[#555550] text-xs">
              &copy; 2026 BLNT Creatives
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
