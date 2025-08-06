import React, { useState } from "react";
import { Zap, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Success Stories", href: "/success" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-[#C0C0C0]">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto px-4 md:px-8" style={{ minHeight: 88 }}>
        {/* Logo */}
        
<div className="flex items-center gap-3">
  <Link to="/" className="flex items-center gap-3">
    <div
      className="rounded-[8px] shadow-lg flex items-center justify-center"
      style={{
        width: 48,
        height: 48,
        padding: 8,
        background: "linear-gradient(180deg, #008DF4 0%, #01A6FB 100%)",
        boxShadow: "0px 4px 4px 0px #0000001A",
      }}
    >
      <Zap color="#fff" size={32} strokeWidth={2.5} />
    </div>
    <span className="font-poppins font-semibold text-lg md:text-xl text-[#262626]">
      Zentrix Solutions
    </span>
  </Link>
</div>

        {/* Desktop links */}
        <ul className="hidden lg:flex flex-row items-center gap-8 ml-20">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className="font-sans font-bold text-[16px] text-[#00000099] hover:text-[#008DF4] transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <button className="hidden lg:inline ml-10 bg-[#008DF4] hover:bg-[#01A6FB] text-white font-poppins font-semibold text-base rounded-[8px] px-6 h-[44px] shadow-sm">
          Get Started
        </button>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden ml-auto"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={34} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 w-[260px] h-full bg-white shadow-lg z-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-8 px-8 gap-6 h-full">
          {/* Close Button */}
          <button
            className="self-end mb-8"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <X size={28} />
          </button>

          {/* Mobile Nav Links */}
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="font-poppins text-lg font-semibold text-[#262626] hover:text-[#008DF4] py-2 transition"
              onClick={() => setOpen(false)} // ✅ Close menu on click
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile CTA Button */}
          <button className="mt-4 w-full bg-[#009CF8] hover:bg-[#01A6FB] text-white rounded-[8px] font-sans font-bold text-[16px] py-[12px] transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
