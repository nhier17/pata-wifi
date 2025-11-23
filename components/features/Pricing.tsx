"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { plans } from "@/constants";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger)


export const Pricing = () => {
    useGSAP(() => {
        gsap.to(".pricing", {
            scrollTrigger: {
                trigger: ".pricing",
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
            y: 100,
        });
    });
    return (
  <section id="pricing" className="section-padding">
        <div>
          <h2 className="section-title text-center" data-animate>Pricing</h2>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p) => {
            const allTariffs = plans.map(pl => pl.name)
            return (
              <div key={p.name} className="card p-6 flex flex-col" data-animate>
                <h3 className="font-heading text-xl text-white">{p.name}</h3>
                <div className="mt-2 text-3xl font-bold text-primary">{p.price}</div>
                <div className="text-white/70">{p.speed}</div>
                <ul className="mt-4 space-y-2 text-white/80 text-sm">
                  {p.features.map((f) => (<li key={f}>• {f}</li>))}
                </ul>
                <div className="mt-6">
                <Button
                type="button"
                className="btn bg-cyan-100 hover:bg-cyan-100/80"
                >
                    Get Connected
                </Button>
                </div>
              </div>
            )
          })}
        </div>
    </section>
    );
};