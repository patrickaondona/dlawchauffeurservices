import { getHighlights } from "@/src/data/highlights";
import Highlights from "./Highlights";

export default async function WhyChooseUs() {
  const highlights = await getHighlights();

  return (
    <section id="locations" className="py-20 bg-white">
      <div className="container mx-auto px-6 grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Luxury interior"
            className="rounded-3xl object-cover h-full w-full shadow-xl"
          />
          <div className="absolute left-6 bottom-6 flex gap-4 font-dm-sans">
              <p className="flex items-center justify-center bg-blue-600 w-15 h-15 text-2xl font-semibold rounded-full border-[3px] border-blue-500">4.9</p>
            <div className="flex flex-col">
              <p className="text-lg text-white font-bold">
                Customer Rating
              </p>
              <p className="text-sm text-slate-300 tracking-widest font-semibold">Based on 1,000+ reviews</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-dm-sans">
            Why Dlaw Chauffeur Services
          </p>
          <h2 className="mt-4 text-3xl lg:text-4xl text-[#0F172A] font-bold font-display">
            Why Dlaw Chauffeur Services is the Preferred Choice
          </h2>
          <p className="mt-4 text-slate-600 font-dm-sans">
            We believe in transparent pricing and exceptional service. No hidden
            fees, no surprises - just the joy of driving the perfect car for
            your journey.
          </p>

          <div className="flex flex-col gap-2 mt-8 space-y-4">
            {highlights.map((highlight) => (
              <Highlights key={highlight.id} highlight={highlight} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
