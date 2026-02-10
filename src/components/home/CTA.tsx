"use client";

import Link from "next/link";

export default function CTA() {
  const openContactModal = () => {
    window.dispatchEvent(new Event("open-contact-modal"));
  };

  return (
    <section className="bg-blue-600 text-white py-24">
      <div className="container mx-auto px-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-100 font-dm-sans">
            Ready for your next adventure?
          </p>
          <h2 className="mt-4 text-4xl font-semibold font-display">
            Drive in comfort, arrive in style.
          </h2>
        </div>
        <div className="flex gap-3">
          <Link href="https://wa.link/jrvww3">
          <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:scale-105 transition-all duration-500 cursor-pointer">
            Book a Ride
          </button>
          </Link>
          <button
            type="button"
            onClick={openContactModal}
            className="rounded-full bg-blue-700 border border-[#3b82f6] px-6 py-3 text-sm font-semibold text-white cursor-pointer hover:bg-blue-800 transition-all duration-500"
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
