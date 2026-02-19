import { getCars } from "@/src/data/cars";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import CarCard from "./CarCard";

export default async function Fleet() {
  const cars = (await getCars()).slice(0, 3);

  return (
    <section id="fleet" className="flex flex-col py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <div>
            <h2 className="text-3xl text-[#0F172A] font-bold font-display">
              Our Premium Fleet
            </h2>
            <p className="text-slate-600 mt-2 font-dm-sans">
              Choose from our diverse collection of high-end vehicles maintained
              to the highest standards.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:flex-1">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>

        <Link
          href="/cars"
          aria-label="View more cars"
          className="flex items-center justify-center w-fit gap-2 mt-10 rounded-md mx-auto border-2 border-[#0F172A] bg-[#0F172A] px-5 py-3 text-sm font-bold font-dm-sans text-white hover:bg-white hover:text-[#0F172A] transition-colors duration-300 sm:px-4"
        >
          <span>View More</span>
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
}
