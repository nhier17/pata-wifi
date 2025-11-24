"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { whyUs } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export const WhyChooseUs = () => {
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
    <section id="why" ref={sectionRef} className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_100%,rgba(0,229,255,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(29,191,115,0.18),transparent)]" />
      </div>

      <div className="why-animate text-center">
        <h2 className="section-title">Why Choose Us</h2>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {whyUs.map((it) => {
          const Icon = it.icon;
          return (
            <div
              key={it.title}
              className="why-animate p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg relative group transition-all hover:shadow-2xl"
            >
              <div className="absolute inset-0 rounded-2xl bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-all duration-300" />

              <div className="mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/20 group-hover:border-cyan-400/40 transition-all">
                <Icon className="w-8 h-8 text-green-100" />
              </div>

              <h3 className="font-heading text-xl text-white">{it.title}</h3>

              <p className="text-white/70 mt-2 leading-relaxed text-sm">
                {it.desc}
              </p>

              <div
                className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition duration-500"
                aria-hidden
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.12),transparent_60%)]" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
