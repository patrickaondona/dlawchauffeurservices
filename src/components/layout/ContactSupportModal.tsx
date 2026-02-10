"use client";

import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

export default function ContactSupportModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("open-contact-modal", handler);
    return () => window.removeEventListener("open-contact-modal", handler);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
              Contact support
            </p>
            <h3 className="text-xl font-bold text-slate-900">
              Choose how to reach us
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close contact support"
            className="rounded-md p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
          >
            <FaXmark size={18} />
          </button>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href="tel:+2349012662004"
            onClick={() => setIsOpen(false)}
            className="rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700 transition-all duration-500"
          >
            Phone Call
          </a>
          <a
            href="mailto:dlawconceptz@gmail.com"
            onClick={() => setIsOpen(false)}
            className="rounded-lg border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}
