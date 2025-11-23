import { Hero } from "@/components/features/Hero";
import { AboutUs } from "@/components/features/AboutUs";
import { Services } from "@/components/features/Services";
import { WhyChooseUs } from "@/components/features/WhyChooseUs";
import { Pricing } from "@/components/features/Pricing";
import { CTA } from "@/components/features/CTA";
import { Coverage } from "@/components/features/Coverage";

export default function Home() {
  return (
    <>
    <Hero />
    <main className="root-container">
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Coverage />
      <CTA />
    </main>
    </>
  );
}
