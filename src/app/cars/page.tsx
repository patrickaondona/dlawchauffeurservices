import { getCars } from "@/src/data/cars";
import CarCard from "@/src/components/home/CarCard";

export default async function CarsPage() {
  const cars = await getCars();

  return (
    <main className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl text-[#0F172A] font-bold">Our Cars</h1>
          <p className="text-slate-600 mt-2">
            Browse our complete collection of premium vehicles.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </main>
  );
}
