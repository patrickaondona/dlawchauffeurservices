import type { Service } from "@/src/data/services";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div className="rounded-2xl border border-white bg-slate-900/70 p-8 shadow-lg hover:bg-slate-900 hover:border-blue-400 transition group">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-700 text-sm font-semibold group-hover:bg-blue-600 transition">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
      <p className="text-slate-400 text-sm mb-6 font-dm-sans">
        {service.description}
      </p>
      <Link
        href={service.link}
        className="text-white font-medium text-sm cursor-pointer group-hover:text-blue-400 transition flex items-center font-dm-sans"
      >
        {service.cta} <FaArrowRight className="inline-block ml-2" />
      </Link>
    </div>
  );
}
