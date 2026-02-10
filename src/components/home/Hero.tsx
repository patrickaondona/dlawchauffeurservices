import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-neural-900 text-white">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="/images/hero-bg.avif   "
          alt="Luxury car on road"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#1e3a8a33] via-[#1e3a8a33] to-[#1e3a8a33]"></div>
      </div>

      <div className="relative container mx-auto px-6 py-24 gap-12 items-center">
        <div className="lg:w-2/3">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-200">
            Premium mobility
          </p>
          <h1 className="w-full mt-4 text-5xl lg:text-6xl font-bold leading-15">
            Premium Mobility <br />
            <span className="text-blue-400">Whenever You Need It</span>
          </h1>

          <p className="mt-6 text-slate-300 text-lg max-w-xl font-dm-sans">
            Experience the freedom of the open road with our premium fleet. From
            daily rentals to long-term leasing and chauffeured services.
          </p>

          <div className="mt-10">
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  );
}
