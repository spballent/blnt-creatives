"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About",    href: "#about",    id: "about"    },
  { label: "Services", href: "#services", id: "services" },
  { label: "Work",     href: "#work",     id: "work"     },
];

export default function Nav() {
  const [isScrolled,    setIsScrolled]    = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollY = window.scrollY + 100;
      const sections = [...navLinks, { id: "contact", label: "Contact", href: "#contact" }].map(({ id }) => {
        const el = document.getElementById(id);
        return { id, top: el ? el.offsetTop : Infinity };
      });

      let current = "";
      for (const s of sections) {
        if (scrollY >= s.top) current = s.id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Main nav bar ─────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 bg-[#0D0D0D] border-b border-white/[0.06] ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-20 flex items-center justify-between h-[72px] md:h-[82px]">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center flex-shrink-0"
            aria-label="BLNT Creatives home"
          >
            <span className="text-[20px] font-bold text-[#F5F5F0] tracking-tight">
              BLNT<span className="text-[#E8402A]">.</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-mono text-sm font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-[#F5F5F0]"
                      : "text-[#888880] hover:text-[#F5F5F0]"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick("#contact")}
              className="ml-2 px-6 py-2.5 bg-[#E8402A] hover:bg-[#d63a25] rounded-[2px] text-white text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              Let&apos;s Talk
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[
              menuOpen ? "w-5 rotate-45 translate-y-[6.5px]" : "w-6",
              menuOpen ? "w-0 opacity-0" : "w-6",
              menuOpen ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-6",
            ].map((cls, i) => (
              <span
                key={i}
                className={`block h-[1.5px] transition-all duration-300 ${cls} bg-[#F5F5F0]`}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay ────────────────────────── */}
      <div
        className={`fixed inset-0 z-[999] bg-[#0D0D0D] flex flex-col justify-center items-center gap-10 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {[...navLinks, { label: "Contact", href: "#contact", id: "contact" }].map((link, i) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className={`text-3xl font-semibold transition-all duration-200 ${
              activeSection === link.id ? "text-[#E8402A]" : "text-[#F5F5F0]"
            }`}
            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  );
}
