import { getCars } from "@/src/data/cars";
import { FaArrowRight } from "react-icons/fa6";
import CarCard from "./CarCard";

export default async function Fleet() {
  const cars = (await getCars()).slice(0, 3);

  return (
    <section id="fleet" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div>
            <h2 className="text-3xl text-[#0F172A] font-bold font-display">
              Our Premium Fleet
            </h2>
            <p className="text-slate-600 mt-2 font-dm-sans">
              Choose from our diverse collection of high-end vehicles maintained to the highest standards.
            </p>
          </div>

          <a href="/cars" className="text-blue-600 font-medium hover:text-blue-800 animate-bounce font-dm-sans">
            View All Cars <FaArrowRight className="inline-block ml-1.5"/>
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
}
