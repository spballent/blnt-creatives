"use client";

import { useEffect, useRef, useState } from "react";

const inputClass =
  "w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3 text-[#F5F5F0] text-sm placeholder:text-[#555550] focus:outline-none focus:border-white/25 transition-colors duration-200";

const labelClass = "block text-sm font-medium text-[#888880] mb-2";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    source: "",
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>("[data-animate]");
    items.forEach((item) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(24px)";
      item.style.transition = "opacity 0.9s ease-out, transform 0.9s ease-out";
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item) => {
            const delay = parseInt(item.dataset.delay ?? "0");
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "translateY(0)";
            }, delay);
          });
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("https://formspree.io/f/mykdrord", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,
          source: formData.source,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", service: "", message: "", source: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 md:py-24 bg-[#0D0D0D]"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        <div className="max-w-2xl">
          {/* Section label */}
          <p
            data-animate
            data-delay="0"
            className="gradient-text text-xs font-semibold tracking-[0.2em] uppercase mb-3"
          >
            Let&apos;s Talk
          </p>

          {/* Heading */}
          <h2
            data-animate
            data-delay="100"
            className="text-4xl md:text-5xl font-bold text-[#F5F5F0] leading-tight mb-4"
          >
            Got Something on<br />Your Mind?
          </h2>

          {/* Gradient accent line */}
          <div
            data-animate
            data-delay="200"
            className="gradient-line h-[1px] w-12 mb-6"
          />

          {/* Subheading */}
          <p
            data-animate
            data-delay="300"
            className="text-[#888880] text-base md:text-lg leading-relaxed mb-10"
          >
            Whether you have a specific project in mind or just a problem
            you&apos;re not sure how to solve yet, reach out. We&apos;re pretty good at
            figuring things out together.
          </p>

          {/* Success message */}
          {status === "success" && (
            <div className="mb-8 p-5 rounded-xl bg-emerald-900/20 border border-emerald-500/20 text-emerald-400 text-sm leading-relaxed">
              Got it. We&apos;ll be in touch soon. Thanks for reaching out.
            </div>
          )}

          {/* Error message */}
          {status === "error" && (
            <div className="mb-8 p-5 rounded-xl bg-red-900/20 border border-red-500/20 text-red-400 text-sm">
              Something went wrong. Please try again or email us directly.
            </div>
          )}

          {/* Form */}
          <form
            data-animate
            data-delay="400"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className={labelClass}>
                Name <span className="text-[#FF6B35]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClass}>
                Email <span className="text-[#FF6B35]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className={inputClass}
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className={labelClass}>
                Company or Brand Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="optional"
                className={inputClass}
              />
            </div>

            {/* Service dropdown */}
            <div>
              <label htmlFor="service" className={labelClass}>
                What can we help you with? <span className="text-[#FF6B35]">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className={`${inputClass} appearance-none cursor-pointer`}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23888880' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 14px center",
                  backgroundSize: "16px",
                  paddingRight: "40px",
                }}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Brand Design">Brand Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Consulting">Consulting</option>
                <option value="Workflow Optimization">Workflow Optimization</option>
                <option value="Community Management">Community Management</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={labelClass}>
                Tell us about your project or problem{" "}
                <span className="text-[#FF6B35]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share what's on your mind..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Source dropdown */}
            <div>
              <label htmlFor="source" className={labelClass}>
                How did you hear about us?
              </label>
              <select
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
                className={`${inputClass} appearance-none cursor-pointer`}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23888880' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 14px center",
                  backgroundSize: "16px",
                  paddingRight: "40px",
                }}
              >
                <option value="">Select an option (optional)</option>
                <option value="Instagram or Social Media">Instagram or Social Media</option>
                <option value="Referral">Referral</option>
                <option value="Google">Google</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="gradient-btn w-full py-4 rounded-xl text-white font-semibold text-base tracking-wide disabled:opacity-60"
              >
                {status === "submitting" ? "Sending..." : "Send It"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
