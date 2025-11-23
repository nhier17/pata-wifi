import { Hero } from "@/components/features/Hero";
import { AboutUs } from "@/components/features/AboutUs";
import { Services } from "@/components/features/Services";
import { WhyChooseUs } from "@/components/features/WhyChooseUs";


export default function Home() {
  return (
    <>
    <Hero />
    <main className="root-container">
      <AboutUs />
      <Services />
      <WhyChooseUs />
    </main>
    </>
  );
}
