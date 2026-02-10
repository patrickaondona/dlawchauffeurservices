"use client";

import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

type BookingFormState = {
  pickupLocation: string;
  pickupDate: string;
  dropoffDate: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
};

const emptyForm: BookingFormState = {
  pickupLocation: "",
  pickupDate: "",
  dropoffDate: "",
  name: "",
  phone: "",
  email: "",
  notes: "",
};

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState("");
  const [lastEmailUrl, setLastEmailUrl] = useState("");
  const [form, setForm] = useState<BookingFormState>(emptyForm);

  useEffect(() => {
    const handler = () => {
      setIsOpen(true);
      setIsSubmitted(false);
    };
    window.addEventListener("open-booking-modal", handler);

    return () => window.removeEventListener("open-booking-modal", handler);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const buildMessage = () => {
    const lines = [
      "Booking request from website:",
      `Name: ${form.name || "-"}`,
      `Phone: ${form.phone || "-"}`,
      `Email: ${form.email || "-"}`,
      `Pick-up location: ${form.pickupLocation || "-"}`,
      `Pick-up date: ${form.pickupDate || "-"}`,
      `Drop-off date: ${form.dropoffDate || "-"}`,
      `Notes: ${form.notes || "-"}`,
    ];

    return lines.join("\n");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const message = encodeURIComponent(buildMessage());
    const subject = encodeURIComponent("Booking request - Dlaw Chauffeur Services");
    const whatsappUrl = `https://wa.me/2347065502606?text=${message}`;
    const emailUrl = `mailto:dlawconceptz@gmail.com?subject=${subject}&body=${message}`;

    setLastWhatsAppUrl(whatsappUrl);
    setLastEmailUrl(emailUrl);
    setIsSubmitted(true);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setForm(emptyForm);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl max-h-[85vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
              Booking request
            </p>
            <h3 className="text-xl font-bold text-slate-900">
              Request a Chauffeur
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close booking form"
            className="rounded-md p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition cursor-pointer"
          >
            <FaXmark size={18} />
          </button>
        </div>

        {isSubmitted ? (
          <div className="mt-5 grid gap-4">
            <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-slate-700">
              Thanks! Your booking request is ready. We opened WhatsApp in a new tab.
              If it didn’t open, use the buttons below.
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() =>
                  window.open(lastWhatsAppUrl, "_blank", "noopener,noreferrer")
                }
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-all duration-500 cursor-pointer"
              >
                Open WhatsApp
              </button>
              <a
                href={lastEmailUrl}
                className="rounded-lg border border-slate-200 px-4 py-2 text-center text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Send Email Instead
              </a>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
              >
                Back to Edit
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setIsSubmitted(false);
                }}
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form className="mt-5 grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col text-xs uppercase tracking-wide text-slate-700 font-semibold">
                Name
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your full name"
                />
              </label>
              <label className="flex flex-col text-xs uppercase tracking-wide text-slate-700 font-semibold">
                Phone
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+234 901 266 2004"
                />
              </label>
            </div>

            <label className="flex flex-col text-xs uppercase tracking-wide text-slate-700 font-semibold">
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@email.com"
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col text-xs uppercase tracking-wide text-slate-700 font-semibold">
                Pick-up Location
                <input
                  required
                  name="pickupLocation"
                  value={form.pickupLocation}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="City or Airport"
                />
              </label>
              <label className="flex flex-col text-xs uppercase tracking-wide text-slate-700 font-semibold">
                Pick-up Date
                <input
                  required
                  type="date"
                  name="pickupDate"
                  value={form.pickupDate}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col text-xs uppercase tracking-wide text-slate-700 font-semibold">
                Drop-off Date
                <input
                  type="date"
                  name="dropoffDate"
                  value={form.dropoffDate}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
              <label className="flex flex-col text-xs uppercase tracking-wide text-slate-700 font-semibold">
                Notes
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                  className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Vehicle preference, route, special requests"
                />
              </label>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-all duration-500 cursor-pointer"
              >
                Send Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
