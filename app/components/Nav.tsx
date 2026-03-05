"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About",    href: "#about",    id: "about"    },
  { label: "Services", href: "#services", id: "services" },
  { label: "Work",     href: "#work",     id: "work"     },
  { label: "Contact",  href: "#contact",  id: "contact"  },
];

// Sections that have a dark (#0D0D0D) background
const DARK_SECTIONS = new Set(["about", "work"]);

export default function Nav() {
  const [isScrolled,     setIsScrolled]     = useState(false);
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [activeSection,  setActiveSection]  = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollY = window.scrollY + 100;
      const sections = navLinks.map(({ id }) => {
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

  const isDark = DARK_SECTIONS.has(activeSection);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── Main nav bar ─────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          isDark
            ? "bg-[#0D0D0D] border-b border-white/[0.06]"
            : "bg-white border-b border-black/[0.06]"
        } ${isScrolled ? "shadow-sm" : ""}`}
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-20 flex items-center justify-between h-[68px] md:h-[76px]">

          {/* Logo — crossfades between light and dark states */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center flex-shrink-0"
            aria-label="BLNT Creatives home"
          >
            {/*
              PNG has ~37% transparent padding on all sides.
              We render at 1.6× (410×269) and clip to content (114×64).
              Light nav: filter invert(1) makes white logo appear dark.
              Dark nav:  no filter, logo appears white.
            */}
            <div
              className="overflow-hidden flex-shrink-0 transition-all duration-500"
              style={{ width: 114, height: 64, position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 410,
                  height: 269,
                  left: -143,
                  top: -100,
                  transition: "filter 0.5s ease",
                  filter: isDark ? "none" : "invert(1)",
                }}
              >
                <Image
                  src="/BLNT_Logo_R2-01.png"
                  alt="BLNT Creatives"
                  width={410}
                  height={269}
                  priority
                  style={{ width: 410, height: 269, display: "block", maxWidth: "none" }}
                />
              </div>
            </div>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                      isActive
                        ? "gradient-text"
                        : isDark
                          ? "text-[#888880] hover:text-[#F5F5F0]"
                          : "text-[#888880] hover:text-[#0D0D0D]"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

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
                className={`block h-[1.5px] transition-all duration-300 ${cls} ${
                  isDark ? "bg-[#F5F5F0]" : "bg-[#0D0D0D]"
                }`}
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
        {navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => handleNavClick(link.href)}
            className={`text-3xl font-semibold transition-all duration-200 ${
              activeSection === link.id ? "gradient-text" : "text-[#F5F5F0]"
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
