"use client";

import { useEffect, useRef, useState } from "react";

const inputClass =
  "w-full bg-[#1A1A1A] border border-white/[0.1] rounded-[2px] px-4 py-3 text-[#F5F5F0] text-[17px] placeholder:text-[#555550] focus:outline-none focus:border-white/30 transition-colors duration-200";

const labelClass = "block text-sm font-medium text-[#888880] mb-2";

const chevron =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666660' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E\")";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", service: "", message: "", source: "",
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
  ) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/mykdrord", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
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
      className="py-24 md:py-32 bg-[#0D0D0D] border-t border-white/[0.08]"
    >
      <div className="max-w-[1100px] mx-auto px-6 md:px-20">

        {/* Section label */}
        <p
          data-animate
          data-delay="0"
          className="text-[#E8402A] text-xs font-semibold tracking-[0.2em] uppercase mb-4"
        >
          Start Here
        </p>

        {/* Heading */}
        <h2
          data-animate
          data-delay="100"
          className="text-4xl md:text-5xl font-bold text-[#F5F5F0] leading-tight mb-6 text-balance"
        >
          Got Something on&nbsp;Your&nbsp;Mind?
        </h2>

        {/* Subheading */}
        <p
          data-animate
          data-delay="200"
          className="text-[#888880] text-[17px] leading-relaxed mb-12 max-w-xl"
        >
          Whether it&apos;s a specific project or just a problem you&apos;re
          not sure how to solve yet — reach out. You don&apos;t need a
          perfect brief. You just need to&nbsp;start.
        </p>

        {/* CTAs */}
        <div data-animate data-delay="300" className="flex items-center gap-10 mb-0">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-10 py-4 bg-[#E8402A] hover:bg-[#d63a25] rounded-[2px] text-white font-semibold text-base tracking-wide transition-all duration-200"
          >
            {showForm ? "Close Form" : "Let\u2019s Talk"}
          </button>
          <div className="flex flex-col gap-1">
            <span className="text-[#555550] text-xs tracking-[0.15em] uppercase">Or email directly</span>
            <a
              href="mailto:hello@blntcreatives.com"
              className="text-[#F5F5F0] hover:text-white text-[15px] font-medium transition-colors duration-200"
            >
              hello@blntcreatives.com
            </a>
          </div>
        </div>

        {/* Collapsible form */}
        <div
          className="overflow-hidden transition-all duration-500 ease-in-out"
          style={{
            maxHeight: showForm ? "1200px" : "0",
            opacity: showForm ? 1 : 0,
          }}
        >
          <div className="max-w-[600px] pt-12">

            {/* Success */}
            {status === "success" && (
              <div className="mb-8 p-5 bg-emerald-900/30 border border-emerald-500/40 text-emerald-400 text-[17px] leading-relaxed">
                Got it. We&apos;ll be in touch soon. Thanks for&nbsp;reaching&nbsp;out.
              </div>
            )}

            {/* Error */}
            {status === "error" && (
              <div className="mb-8 p-5 bg-red-900/30 border border-red-500/40 text-red-400 text-sm">
                Something went wrong. Please try&nbsp;again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name <span className="text-[#E8402A]">*</span>
                </label>
                <input
                  id="name" name="name" type="text" required
                  value={formData.name} onChange={handleChange}
                  placeholder="Your name" className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email <span className="text-[#E8402A]">*</span>
                </label>
                <input
                  id="email" name="email" type="email" required
                  value={formData.email} onChange={handleChange}
                  placeholder="you@company.com" className={inputClass}
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className={labelClass}>
                  Company or Brand Name
                </label>
                <input
                  id="company" name="company" type="text"
                  value={formData.company} onChange={handleChange}
                  placeholder="optional" className={inputClass}
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className={labelClass}>
                  What can we help you with? <span className="text-[#E8402A]">*</span>
                </label>
                <select
                  id="service" name="service" required
                  value={formData.service} onChange={handleChange}
                  className={`${inputClass} appearance-none cursor-pointer`}
                  style={{ backgroundImage: chevron, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", backgroundSize: "16px", paddingRight: "40px" }}
                >
                  <option value="" disabled>Select an option</option>
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
                  Tell us about your project or problem <span className="text-[#E8402A]">*</span>
                </label>
                <textarea
                  id="message" name="message" required rows={5}
                  value={formData.message} onChange={handleChange}
                  placeholder="Share what's on your mind"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Source */}
              <div>
                <label htmlFor="source" className={labelClass}>
                  How did you hear about us?
                </label>
                <select
                  id="source" name="source"
                  value={formData.source} onChange={handleChange}
                  className={`${inputClass} appearance-none cursor-pointer`}
                  style={{ backgroundImage: chevron, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", backgroundSize: "16px", paddingRight: "40px" }}
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
                  className="gradient-btn w-full py-4 rounded-[2px] text-white font-semibold text-[17px] tracking-wide disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending\u2026" : "Send It"}
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
