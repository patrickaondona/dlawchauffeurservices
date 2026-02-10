"use client";

export default function SearchBar() {
  const openModal = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event("open-booking-modal"));
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold">
            Quick booking
          </p>
          <p className="text-lg font-semibold text-slate-900">
            Ready to reserve your chauffeur?
          </p>
        </div>
        <button
          type="button"
          onClick={openModal}
          className="h-11 rounded-lg bg-blue-600 px-8 text-base font-semibold cursor-pointer text-white hover:bg-blue-700 transition-all duration-500"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
