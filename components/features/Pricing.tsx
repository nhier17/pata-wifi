"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { plans } from "@/constants";
import { Button } from "@/components/ui/button";
import { GetConnectedForm } from "@/components/forms/GetConnectedForm";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
  const ctx = gsap.context(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section id="pricing" ref={sectionRef} className="relative section-padding overflow-hidden">
      <div className="pricing-bg absolute inset-0 -z-10 opacity-60 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_100%,rgba(0,229,255,0.22),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(29,191,115,0.22),transparent)]" />
        <div
          className="absolute inset-0 mix-blend-soft-light opacity-40"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1591132920639-1c3cbbf3f4a6?auto=format&fit=crop&w=1500&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="text-center pricing-animate">
        <h2 className="section-title">Pata Wifi Packages</h2>
      </div>
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {plans.map((p, i) => {
          const allTariffs = plans.map((pl) => pl.name);

          return (
            <div
              key={p.name}
              className="pricing-animate relative p-6 rounded-2xl border backdrop-blur-lg shadow-xl transition hover:shadow-2xl">

              <h3 className="font-heading text-2xl font-bold text-white">
                {p.name}
              </h3>

              <div className="mt-3 text-2xl font-extrabold text-cyan-300">
                {p.price}
              </div>

              <div className="mt-1 text-lg text-white/70">{p.speed}</div>

              <ul className="mt-6 space-y-2 text-white/90 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <GetConnectedForm
                  trigger={
                    <Button
                      type="button"
                      className="w-full font-semibold py-3"
                    >
                      Get Connected
                    </Button>
                  }
                  defaultTariffs={p.name}
                  allTariffs={allTariffs}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
