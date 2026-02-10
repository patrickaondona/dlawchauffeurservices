import { getServices } from "@/src/data/services";
import ServiceCard from "./ServiceCard";

export default async function Services() {
  const services = await getServices();

  return (
    <section id="services" className="bg-slate-950 text-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-400 text-xs font-semibold tracking-[0.3em] font-dm-sans">
            BEYOND CAR RENTAL
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold font-display mt-4">
            More Than Just a Ride
          </h2>
          <p className="text-slate-400 mt-4 font-dm-sans">
            From car sales to real estate to apartment leasing and wardrobe,
            explore the service cards below for tailored support in every
            category.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
