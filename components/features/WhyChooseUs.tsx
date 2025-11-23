"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { whyUs } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

export const WhyChooseUs = () => {
    useGSAP(() => {
        gsap.to(".why", {
            scrollTrigger: {
                trigger: ".why",
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
            y: 100,
        });
    });
    return (
    <section id="why" className="section-padding">
        <div>
          <h2 className="section-title text-center" data-animate>Why Choose Us</h2>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyUs.map((it) => {
            const Icon = it.icon
            return (
              <div key={it.title} className="card p-5 group relative overflow-hidden" data-animate>
                <div className="text-2xl text-primary"><Icon className="size-8" aria-hidden /></div>
                <h3 className="font-heading text-lg mt-2 text-white">{it.title}</h3>
                <p className="text-white/70 text-sm mt-1">{it.desc}</p>
                <div className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" aria-hidden>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.12),transparent_60%)]" />
                </div>
              </div>
            )
          })}
        </div>
    </section>
    );
};
    