import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";


const footerLinks = [
  // {
  //   title: "Company",
  //   items: ["About us", "Careers", "Press", "Blog"],
  // },
  // {
  //   title: "Services",
  //   items: [
  //     "Chauffeur Service",
  //     "Airport Transfers",
  //     "Wedding Fleet",
  //     "Leasing",
  //   ],
  // },
  {
    title: "Contact",
    items: [
      {
        label: "Behind Area 1 Shopping Complex, Area 1, Garki, Abuja 900103",
        icon: FaLocationDot,
      },
      {
        label: "+2349012662004",
        icon: FaPhone,
        href: "tel:+2349012662004",
      },
      {
        label: "dlawconceptz@gmail.com",
        icon: FaEnvelope,
        href: "mailto:dlawconceptz@gmail.com",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 text-white">
              <img
                src="/images/dlaw-logo.jpeg"
                alt="Dlaw Chauffeur Services"
                className="h-10 w-10 lg:h-12 lg:w-12 rounded-full object-cover"
              />
              <span className="text-lg font-bold">
                Dlaw Chauffeur Services
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-400 max-w-sm">
              Premium mobility solutions for business travel, events, and
              everyday comfort. Reserve a car or a driver in minutes.
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
              <Link href="https://www.instagram.com/dlaw_chauffeur_services?igsh=bGszNWZqMjJmbXcz">
                <FaInstagram size={20} className="hover:text-blue-400" />
              </Link>
              <Link href="https://wa.link/jrvww3">
                <FaWhatsapp size={20} className="hover:text-blue-400" />
              </Link>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-white text-lg font-bold">{group.title}</h4>
              <ul className="mt-6 space-y-3 text-sm">
                {group.items.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <item.icon className="mt-0.5 text-blue-500" size={16} />
                    {item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-blue-400 transition"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white text-lg font-bold">Find us on the map</h4>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <div className="aspect-[16/9]">
                <iframe
                  title="Dlaw Chauffeur Services location on Google Maps"
                  src="https://www.google.com/maps?q=Behind%20Area%201%20Shopping%20Complex,%20Area%201,%20Garki,%20Abuja%20900103&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              Tap the map to open Google Maps for directions.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 py-6 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>© Copyright 2026 Dlaw Chauffeur Services.</span>
          <span className="flex items-center gap-2">
            <Link href="/privacy-policy" className="hover:text-blue-400 transition">
              Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>
            <Link href="/terms-of-service" className="hover:text-blue-400 transition">
              Terms of Service
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
