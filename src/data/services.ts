import type { IconType } from "react-icons";
import { FaCarSide, FaHouse, FaKey, FaShirt } from "react-icons/fa6";

export type Service = {
  id: number;
  title: string;
  description: string;
  cta: string;
  icon: IconType;
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
    },
    {
      id: 2,
      title: "Real Estate Advisory",
      description:
        "Market insights, pricing strategy, and negotiation support for buyers and sellers.",
      cta: "Request Guidance",
      icon: FaHouse,
    },
    {
      id: 3,
      title: "Apartment Leasing Support",
      description:
        "Curated listings, lease review, and move in planning for a smooth start.",
      cta: "Explore Options",
      icon: FaKey,
    },
    {
      id: 4,
      title: "Wardrobe & Styling",
      description:
        "Personal styling, seasonal edits, and shopping strategy tailored to you.",
      cta: "Start Styling",
      icon: FaShirt,
    },
  ];
}
