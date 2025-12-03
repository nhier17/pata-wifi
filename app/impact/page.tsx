"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { impactStats } from "@/constants";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ImpactPage() {
  const [animatedStats, setAnimatedStats] = useState<number[]>(impactStats.map(() => 0));
   const statsRef = useRef<HTMLDivElement>(null);
   const animationRef = useRef<{ [key: number]: number }>({});

useGSAP(() => {
  gsap.utils.toArray(".impact-animate").forEach((el: any, i: number) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      }
    );
  });

  // Optimized stat counters
  ScrollTrigger.create({
    trigger: statsRef.current,
    start: "top 80%",
    onEnter: () => {
      document.querySelectorAll(".stat-value").forEach((el: any, index) => {
        const targetValue = impactStats[index].value;
        const counter = { val: 0 };

        gsap.to(counter, {
          val: targetValue,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.floor(counter.val).toLocaleString();
          },
        });
      });
    },
  });
});


  return (
    <main className="min-h-screen text-white root-container">
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="https://i.pinimg.com/736x/80/02/06/800206c592ffe136236234af04f1773c.jpg"
          alt="Community impact"
          fill
          className="object-cover object-[50%_30%] opacity-40"
        />
     <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30" />

        <div className="relative root-container text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold impact-animate">
            Our Impact
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto impact-animate">
            Connecting communities, empowering businesses, and expanding access
            to fast, reliable internet across Kenya.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <h2 className="section-title text-center impact-animate">
          How We Create Impact
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <ImpactCard
            title="Connecting Homes & Estates"
            desc="We deliver reliable, affordable home internet to estates such as Ngong Road, Embakasi, Kasarani, Rongai, Ruaka, Donholm, Huruma, and more — transforming how families work, learn, and stay entertained."
            img="https://i.pinimg.com/1200x/2b/72/20/2b7220a2b3d81f3dd7e2dfd7b285ae49.jpg"
          />

          <ImpactCard
            title="Empowering SMEs & Businesses"
            desc="From cyber cafés to mini offices and shops, our stable connectivity enables businesses to accept online payments, run operations smoothly, and grow their digital presence."
            img="https://i.pinimg.com/736x/d1/24/37/d124377275763f1644c8f97efd8fdb89.jpg"
          />

          <ImpactCard
            title="Infrastructure Expansion"
            desc="We bring internet to underserved regions, deploy new towers, and improve connectivity where no affordable or reliable network existed before."
            img="https://i.pinimg.com/736x/96/d1/cc/96d1cc416bfc7a2a0a16feb235f1defa.jpg"
          />
        </div>
      </section>

      <section className="section-padding text-center">
        <h2 className="section-title impact-animate">Impact At a Glance</h2>

      <div ref={statsRef} className="grid md:grid-cols-4 gap-6 mt-10">
        {impactStats.map((impact, i) => (
          <StatCard
            key={i}
            number={animatedStats[i]}
            suffix={impact.suffix}
            label={impact.label}
          />
        ))}
      </div>
      </section>

       <section className="section-padding bg-black/10">
        <h2 className="section-title text-center impact-animate">Before & After — Real Change</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="impact-animate p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-heading text-xl text-white mb-2">Before Pata WiFi</h3>
            <ul className="text-white/70 list-disc list-inside space-y-2">
              <li>Poor/unreliable speeds</li>
              <li>High data costs</li>
              <li>Limited business digitization</li>
              <li>No local support</li>
            </ul>
          </div>

          <div className="impact-animate p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="font-heading text-xl text-white mb-2">After Pata WiFi</h3>
            <ul className="text-white/70 list-disc list-inside space-y-2">
              <li>Stable fiber-backed connectivity</li>
              <li>Affordable Kadogo & home plans</li>
              <li>SMEs accepting digital payments</li>
              <li>Local installation & support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black/20">
        <h2 className="section-title text-center impact-animate">
          Stories From the Community
        </h2>

        <div className="mt-12 space-y-16">
          <StoryBlock
            title="Kasarani: Faster internet for students and families"
            story="We connected multiple estates across Kasarani and Lumumba Drive where speeds were previously poor. Students now join online classes without interruption and families stream and work from home reliably."
            img="https://i.pinimg.com/1200x/66/6f/a8/666fa8a278708251f1043093ef2a1512.jpg"
          />

          <StoryBlock
            title="Embakasi SMEs grow with reliable connectivity"
            story="Cyber cafés and mini shops in Embakasi now accept payments and provide consistent services thanks to our stable internet — helping business owners increase daily revenue."
            img="https://i.pinimg.com/1200x/f3/44/52/f34452302add40865a91bac9efba0d74.jpg"
          />

          <StoryBlock
            title="Kariobangi & Mathare: Closing the connectivity gap"
            story="By deploying last-mile links and partnering with local leaders, we expanded low-cost access in Kariobangi and Mathare — enabling more digital inclusion across communities."
            img="https://i.pinimg.com/736x/8a/de/da/8adedae325b6a59791bf9b347594f95d.jpg"
          />
        </div>
      </section>

        <section className="section-padding bg-black/10">
        <h2 className="section-title text-center impact-animate">Looking Ahead</h2>
        <p className="max-w-3xl mx-auto text-white/80 mt-3 text-center">
          We’re scaling rapidly — expanding to more estates, strengthening reseller capacity,
          and improving community hotspots to bring affordable internet to more Kenyans.
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center gap-6 justify-center">
          <RoadmapItem title="New towns" desc="Expanding beyond Nairobi into Kajiado and Kisumu" />
          <RoadmapItem title="Reseller backbone" desc="More affordable wholesale capacity for WISPs" />
          <RoadmapItem title="Hotspots" desc="Increasing community Kadogo hotspots & school access" />
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="section-padding text-center">
        <blockquote className="text-xl md:text-2xl text-white/80 italic max-w-3xl mx-auto impact-animate">
          “Reliable internet isn’t a luxury — it’s a bridge to opportunity.  
          We’re committed to ensuring every household, estate, and business  
          gets the connectivity they deserve.”
        </blockquote>

        <p className="mt-4 font-heading text-cyan-400 impact-animate">
          — Pata WiFi Technologies LTD
        </p>
      </section>

      <section className="section-padding text-center">
        <Link href="/?sec=pricing" scroll={false} className="bg-green-100 px-10 py-4 rounded-lg  text-lg font-bold">
          Join Our Connected Community
        </Link>
      </section>
    </main>
  );
}

/* COMPONENTS */
const StatCard = ({ label, suffix }: any) => (
  <div className="card p-6 text-center impact-animate">
    <p className="text-3xl font-bold text-primary">
      <span className="stat-value" />{suffix}
    </p>
    <p className="mt-1 text-white/70">{label}</p>
  </div>
);

const ImpactCard = ({ title, desc, img }: any) => (
  <div className="card overflow-hidden impact-animate">
    <div className="relative w-full h-48">
      <Image src={img} fill alt={title} className="object-cover opacity-70" />
    </div>
    <div className="p-5">
      <h3 className="font-heading text-xl text-white">{title}</h3>
      <p className="text-white/70 mt-2 text-sm">{desc}</p>
    </div>
  </div>
);

const StoryBlock = ({ title, story, img }: any) => (
  <div className="grid md:grid-cols-2 gap-6 items-center impact-animate">
    <div>
      <h3 className="font-heading text-2xl text-white">{title}</h3>
      <p className="mt-3 text-white/70">{story}</p>
    </div>

    <div className="relative h-64 rounded-xl overflow-hidden">
      <Image src={img} fill alt={title} className="object-cover" />
    </div>
  </div>
);

function RoadmapItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="impact-animate p-4 rounded-xl bg-white/5 border border-white/10 text-center max-w-xs">
      <h4 className="font-heading text-white font-semibold">{title}</h4>
      <p className="text-white/70 mt-2 text-sm">{desc}</p>
    </div>
  );
}