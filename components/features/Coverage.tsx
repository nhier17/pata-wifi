"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { coverage } from "@/constants";
import { MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const Coverage = () => {
  const { towns, estates } = coverage;

  useGSAP(() => {
    gsap.from(".coverage-animate", {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#coverage",
        start: "top 85%",
      },
    });
  });

  return (
    <section id="coverage" className="relative section-padding overflow-hidden font-heading">
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-70 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_100%,rgba(0,229,255,0.25),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(29,191,115,0.25),transparent)]" />
        <div
          className="absolute inset-0 mix-blend-overlay opacity-40"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1500&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Title */}
      <div className="coverage-animate text-center">
        <h2 className="section-title">Coverage Areas</h2>
        <p className="text-slate-300 mt-2 text-base">
          We’re expanding rapidly — here’s where Pata WiFi is currently active.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        {/* Towns */}
        <div className="coverage-animate bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <h3 className="font-heading text-xl text-white">Towns</h3>
          </div>

          <ul className="grid grid-cols-2 gap-3 mt-3">
            {towns.map((t) => (
              <li
                key={t}
                className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white/90 text-sm hover:bg-cyan-500/10 transition"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Estates */}
        <div className="coverage-animate bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <h3 className="font-heading text-xl text-white">Estates</h3>
          </div>

          <ul className="grid grid-cols-2 gap-3 mt-3">
            {estates.map((e) => (
              <li
                key={e}
                className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white/90 text-sm hover:bg-cyan-500/10 transition"
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
