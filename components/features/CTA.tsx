"use client";

import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import { GetConnectedForm } from "../forms/GetConnectedForm";

gsap.registerPlugin(ScrollTrigger);

export const CTA = () => {
  useGSAP(() => {
    gsap.from(".cta-animate", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: "#cta", start: "top 80%" },
    });

    gsap.to(".cta-bg", {
      scrollTrigger: {
        trigger: "#cta",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      y: 120,
    });
  });

  return (
    <section
      id="cta"
      className="relative overflow-hidden section-padding text-center font-heading"
    >
      <div className="cta-bg absolute inset-0 -z-10 opacity-[0.7]">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_100%,rgba(0,229,255,0.30),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(29,191,115,0.25),transparent)]"></div>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <h2 className="cta-animate text-4xl md:text-5xl font-display font-bold text-white">
          Get Connected Today
        </h2>

        <p className="cta-animate text-slate-300 text-lg mt-3">
          Fast, reliable, affordable internet — built for Kenyan homes,
          businesses, and communities.
        </p>

        <div className="cta-animate mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#pricing">
            <Button className="w-full px-8 py-5 text-lg font-semibold bg-gradient-to-r from-cyan-400 to-cyan-600 text-black hover:opacity-90 cursor-pointer rounded-xl shadow-lg">
              Buy Daily Pass
            </Button>
          </Link>

          <GetConnectedForm
            trigger={
              <Button className="px-8 py-5 text-lg font-semibold bg-primary/80 hover:bg-primary/70 rounded-xl cursor-pointer shadow-lg">
                Request Installation
              </Button>
            }
          />
        </div>

        <div className="cta-animate mt-6 flex flex-wrap justify-center gap-4 text-sm font-medium text-white/80">
          <Link href="#pricing" className="hover:text-cyan-300 transition">
            Become a Reseller
          </Link>
          <span className="opacity-40">•</span>
          <Link href="#pricing" className="hover:text-cyan-300 transition">
            Business Internet
          </Link>
        </div>

        <div className="cta-animate mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://wa.me/254727717901" target="_blank">
            <Button
              variant="outline"
              className="w-full px-8 py-4 font-medium border-cyan-500/40 text-dark-100 rounded-xl cursor-pointer"
            >
              Chat on WhatsApp
            </Button>
          </Link>

          <Link href="tel:+254727717901">
            <Button
              variant="outline"
              className="w-full px-8 py-4 font-medium border-cyan-500/40 text-dark-100 rounded-xl cursor-pointer"
            >
              Call 0727 717 901
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
