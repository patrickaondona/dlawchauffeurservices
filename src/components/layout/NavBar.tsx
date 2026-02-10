"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Fleet", href: "/#fleet" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openBookingModal = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event("open-booking-modal"));
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-2 md:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-1 lg:gap-2">
            <img
              src="/images/dlaw-logo.jpeg"
              alt="Dlaw Chauffeur Services"
              className="h-10 w-10 lg:h-12 lg:w-12 rounded-full object-cover"
            />
            <span className="text-lg text-[#0F172A] font-semibold tracking-tight">
              Dlaw Chauffeur Services
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-md font-semibold px-2 py-2 hover:text-blue-700 hover:bg-slate-100 transition-colors duration-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 transition-all duration-300 cursor-pointer lg:hidden"
            >
              {isMenuOpen ? (
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                  <path
                    d="M6 6l12 12M18 6l-12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
            <button
              type="button"
              onClick={openBookingModal}
              className="hidden md:inline-flex items-center rounded-md bg-[#0F172A] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-all duration-500 cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <nav className="flex flex-col gap-3 pb-6 pt-2 text-sm text-slate-600">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-2 py-2 hover:bg-slate-100 hover:text-blue-700 transition-all duration-500 font-dm-sans"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={openBookingModal}
              className="inline-flex md:hidden items-center rounded-md bg-[#0F172A] px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-all duration-500 font-dm-sans"
            >
              Book Now
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
