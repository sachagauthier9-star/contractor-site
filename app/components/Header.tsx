"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [showContact, setShowContact] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-200 text-slate-900 border-b border-slate-300 w-full font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center relative gap-2">
        {/* Logo + Brand Name */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img
            src="/1logo.png"
            alt="White Pine Construction Ottawa Logo"
            className="h-10 sm:h-12 w-auto shrink-0"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-sm sm:text-xl font-bold tracking-tight">
              White Pine
            </span>
            <span className="text-xs sm:text-lg font-semibold text-slate-700">
              Construction Ottawa
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-slate-700 text-sm">
          <Link href="/" className="hover:text-slate-950 transition">
            Home
          </Link>
          <Link href="/#services" className="hover:text-slate-950 transition">
            Services
          </Link>
          <Link href="/#about" className="hover:text-slate-950 transition">
            About Us
          </Link>
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Header Contact Dropdown Button */}
          <div className="relative">
            <button
              onClick={() => {
                setShowContact(!showContact);
                setMobileMenuOpen(false);
              }}
              className="bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>📞 Contact Us</span>
              <span className="text-[10px] sm:text-xs">
                {showContact ? "▲" : "▼"}
              </span>
            </button>

            {/* Dropdown Menu */}
            {showContact && (
              <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-slate-200 rounded-xl shadow-xl p-4 text-slate-800 flex flex-col gap-3 text-sm z-50">
                <span className="font-bold border-b border-slate-100 pb-2 text-slate-900">
                  Direct Contact
                </span>

                <a
                  href="tel:+16130000000"
                  className="flex items-center gap-2 font-medium hover:text-[#15933a] transition"
                >
                  <span>📞</span> (613) 000-0000
                </a>

                <a
                  href="mailto:info@whitepineconstruction.ca"
                  className="flex items-center gap-2 font-medium hover:text-[#15933a] transition break-all"
                >
                  <span>✉️</span> info@whitepineconstruction.ca
                </a>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setShowContact(false);
            }}
            aria-label="Toggle Menu"
            className="md:hidden p-2 text-slate-800 hover:bg-slate-300 rounded-lg transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Tray */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-100 border-t border-slate-300 px-6 py-4 flex flex-col gap-3 text-sm font-semibold text-slate-800">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#15933a] transition"
          >
            Home
          </Link>
          <Link
            href="/#services"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#15933a] transition"
          >
            Services
          </Link>
          <Link
            href="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 hover:text-[#15933a] transition"
          >
            About Us
          </Link>
        </div>
      )}
    </header>
  );
}