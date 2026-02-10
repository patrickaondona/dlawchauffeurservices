import Hero from "../components/home/Hero";
import Fleet from "../components/home/Fleet";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CTA from "../components/home/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Chauffeur Services in Abuja",
  description:
    "Reserve luxury chauffeur-driven cars in Abuja for airport transfers, corporate travel, weddings, and special events.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Fleet />
      <Services />
      <WhyChooseUs />
      <CTA />
    </main>
  );
}
