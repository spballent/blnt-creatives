"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about", id: "about" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollY = window.scrollY + 120;
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

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-20 flex items-center justify-between h-[72px] md:h-[80px]">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center flex-shrink-0"
            aria-label="BLNT Creatives home"
          >
            {/*
              The PNG has ~37% transparent padding on all sides.
              Content bounds: x=[93,164], y=[65,105] within 256×168.
              We render at 1.6x scale (410×269) and clip to the content area (114×64).
            */}
            <div
              className="overflow-hidden flex-shrink-0"
              style={{ width: 126, height: 72, position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 410,
                  height: 269,
                  left: -143,
                  top: -100,
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

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`text-sm font-medium tracking-wide transition-all duration-200 ${
                      isActive
                        ? "gradient-text"
                        : "text-[#888880] hover:text-[#F5F5F0]"
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
            <span
              className={`block h-[1.5px] bg-[#F5F5F0] transition-all duration-300 ${
                menuOpen ? "w-5 rotate-45 translate-y-[6.5px]" : "w-6"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-[#F5F5F0] transition-all duration-300 ${
                menuOpen ? "w-0 opacity-0" : "w-6"
              }`}
            />
            <span
              className={`block h-[1.5px] bg-[#F5F5F0] transition-all duration-300 ${
                menuOpen ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-6"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0D0D0D] flex flex-col justify-center items-center gap-10 transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-3xl font-semibold transition-all duration-200 ${
                isActive ? "gradient-text" : "text-[#F5F5F0]"
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              {link.label}
            </button>
          );
        })}
      </div>
    </>
  );
}
