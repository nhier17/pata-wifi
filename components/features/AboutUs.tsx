"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const AboutUs = () => {
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
    <section
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-50 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_100%,rgba(0,229,255,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(29,191,115,0.22),transparent)]" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 about-animate">
          <h2 className="section-title">About Pata WiFi</h2>

          <p className="section-sub mt-4 text-slate-300 leading-relaxed about-animate">
            Pata WiFi Technologies LTD is connecting Kenyan homes, estates, SMEs 
            and enterprises with dependable, high-speed internet. We combine 
            fiber-backed infrastructure, fast customer support, affordable plans 
            and modern technology to keep Kenya online and thriving — whether 
            you're working, streaming, gaming or learning.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
            <li className="about-animate p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg shadow hover:shadow-xl transition">
              Reliable fiber-backed network
            </li>
            <li className="about-animate p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg shadow hover:shadow-xl transition">
              Affordable daily & monthly plans
            </li>
            <li className="about-animate p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg shadow hover:shadow-xl transition">
              Fast local support
            </li>
            <li className="about-animate p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg shadow hover:shadow-xl transition">
              Coverage across towns & estates
            </li>
          </ul>
        </div>

        <div
          className="relative about-image order-1 md:order-2"
          data-animate
        >
          <div className="relative h-[320px] md:h-[420px] w-full rounded-2xl overflow-hidden shadow-xl border border-white/10">
            <Image
              src="https://images.pexels.com/photos/4009627/pexels-photo-4009627.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Kenyan family enjoying fast home WiFi"
              fill
              className="object-cover"
            />
          </div>

          {/* GLOW BALLS */}
          <div
            className="absolute -right-6 -top-6 w-24 h-24 bg-cyan-300/20 blur-3xl rounded-full"
            aria-hidden
          />
          <div
            className="absolute -left-6 bottom-4 w-20 h-20 bg-primary/20 blur-2xl rounded-full"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
};
