"use client";

import { useRef } from "react";
import { services } from "@/constants";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
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
    <section id="services" ref={sectionRef} className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_100%,rgba(0,229,255,0.25),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(29,191,115,0.25),transparent)]" />
      </div>

      <div className="service-animate text-center">
        <h2 className="section-title">Our Services</h2>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="service-animate group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg shadow-lg hover:shadow-2xl transition-all"
          >
            <div className="relative h-44 overflow-hidden">
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="font-heading text-xl text-white">{s.title}</h3>
              <p className="text-white/70 mt-2 text-sm leading-relaxed">{s.desc}</p>

              <Link
                href="#pricing"
                className="mt-4 inline-flex items-center gap-1 text-green-100 hover:text-cyan-200 transition text-sm font-medium"
              >
                Learn more
                <ArrowRightCircle className="w-4 h-4" />
              </Link>
            </div>
            <div className="absolute inset-0 border-2 border-green-100/0 group-hover:border-green-100/40 rounded-2xl transition-all pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};
