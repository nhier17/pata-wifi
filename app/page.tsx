import { Hero } from "@/components/features/Hero";
import { AboutUs } from "@/components/features/AboutUs";
import { Services } from "@/components/features/Services";

export default function Home() {
  return (
    <>
    <Hero />
    <main className="root-container">
      <AboutUs />
      <Services />
    </main>
    </>
  );
}
