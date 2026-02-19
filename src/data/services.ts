import type { IconType } from "react-icons";
import { FaCarSide, FaHouse, FaKey, FaShirt } from "react-icons/fa6";

export type Service = {
  id: number;
  title: string;
  description: string;
  cta: string;
  icon: IconType;
  link: string;
};

export async function getServices(): Promise<Service[]> {
  return [
    {
      id: 1,
      title: "Car Sales",
      description:
        "Curated vehicle listings, transparent pricing, and guided purchase support.",
      cta: "View Inventory",
      icon: FaCarSide,
      link: "https://wa.me/2348147229616"
    },
    {
      id: 2,
      title: "Real Estate Advisory",
      description:
        "Market insights, pricing strategy, and negotiation support for buyers and sellers.",
      cta: "Request Guidance",
      icon: FaHouse,
      link: "#"
    },
    {
      id: 3,
      title: "Apartment Leasing Support",
      description:
        "Curated listings, lease review, and move in planning for a smooth start.",
      cta: "Explore Options",
      icon: FaKey,
      link: "#"
    },
    {
      id: 4,
      title: "Wardrobe & Styling",
      description:
        "Personal styling, seasonal edits, and shopping strategy tailored to you.",
      cta: "Start Styling",
      icon: FaShirt,
      link: "https://wa.me/message/W65O5OH7OQKHF1"
    },
  ];
}
