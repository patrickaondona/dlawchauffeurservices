import type { IconType } from "react-icons";
import { GoClockFill } from "react-icons/go";
import { FaTag } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

export type Highlight = {
  id: number;
  title: string;
  description: string;
  icon: IconType;
};

export async function getHighlights(): Promise<Highlight[]> {
  return [
    {
      id: 1,
      title: "24/7 Reliable Assistance",
      description: "Instant support for changes, delays, or urgent requests.",
      icon: GoClockFill,
    },
    {
      id: 2,
      title: "Best Price Guarantee",
      description:
        "Transparent pricing with no hidden charges or surprise fees.",
      icon: FaTag,
    },
    {
      id: 3,
      title: "Free Cancellation",
      description: "Change your plans up to 24 hours before pickup.",
      icon: TiTick,
    },
  ];
}
