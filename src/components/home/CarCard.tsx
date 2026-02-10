import { FaGears } from "react-icons/fa6";
import { FaChair } from "react-icons/fa";
import Link from "next/link";
import type { Car } from "@/src/data/cars";

// import {PetrolIcon, SeatIcon} from "@/src/components/icons";

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg transition overflow-hidden">
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          className="h-48 w-full object-fill"
        />
        <span className="absolute top-3 right-3 bg-white/90 text-xs text-[#0F172A] font-bold px-3 py-1 rounded-full uppercase font-dm-sans">
          {car.category}
        </span>
      </div>

      <div className="p-6 text-[#0F172A]">
        <h3 className="font-bold text-lg">{car.name}</h3>
        <div className="flex items-center justify-between gap-3 mt-3">
          <div className="flex flex-col w-full mt-4">
            <div className="w-full mb-6 flex justify-between font-dm-sans">
              <p className="font-semibold">Daily Rental</p>
              <p className="relative text-blue-600 text-lg font-bold">
                ₦{car.price1} <br />
                <span className="absolute right-0 text-sm text-slate-400">/day</span>
              </p>
            </div>
            <div className="w-full flex justify-between font-dm-sans">
              <p className="font-semibold">Airport Drop-Off/Pick-Up</p>
              <p className="relative text-blue-600 text-lg font-bold">
                ₦{car.price2} <br />
                <span className="absolute right-0 text-sm text-slate-400">/day</span>
              </p>
            </div>
          </div>
        </div>
        <hr className="custom-line" />
        <div className="flex items-center gap-6 text-xs text-slate-600 font-dm-sans">
          <span className="flex gap-2 items-center rounded-full text-base">
            <FaChair size={15} /> {car.seats} seats
          </span>
          <span className="flex gap-2 rounded-full text-sm">
            <FaGears size={17} />
            {car.fuel}
          </span>
        </div>

        <Link href="https://wa.link/jrvww3">
          <button className="mt-6 w-full rounded-md border-2 border-[#0F172A] py-3 text-base font-bold font-dm-sans text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all duration-500 cursor-pointer">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}
