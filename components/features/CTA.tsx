"use client";

import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export const CTA = () => {
  useGSAP(() => {
    gsap.from(".cta-animate", {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#cta",
        start: "top 80%",
      },
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
      <div
        className="cta-bg absolute inset-0 -z-10 opacity-[0.7]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_100%,rgba(0,229,255,0.30),transparent)]"></div>

        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(29,191,115,0.25),transparent)]"></div>

        <div className="absolute inset-0 mix-blend-soft-light opacity-40"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1500&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <h2 className="cta-animate text-4xl md:text-5xl font-display font-bold text-white">
          Get Connected Today
        </h2>

        <p className="cta-animate text-slate-300 text-lg mt-3">
          Fast, reliable, affordable internet — built for Kenyan homes,
          businesses, and communities.
        </p>

        <div className="cta-animate mt-10 flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
          <Link href="#pricing">
            <Button className="px-6 py-3 text-base font-semibold bg-gradient-to-r from-cyan-400 to-cyan-600 text-black hover:opacity-90 cursor-pointer">
              Buy Daily Pass
            </Button>
          </Link>

          <Button variant="secondary" className="px-6 py-3 text-base font-semibold cursor-pointer">
            Request Installation
          </Button>

          <Button variant="outline" className="px-6 py-3 text-base cursor-pointer">
            Become a Reseller
          </Button>

          <Button variant="outline" className="px-6 py-3 text-base cursor-pointer">
            Get Business Internet
          </Button>
        </div>

        <div className="cta-animate mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="https://wa.me/254727717901" target="_blank">
            <Button
              variant="outline"
              className="px-6 py-3 font-medium border-cyan-500/40 text-cyan-300 cursor-pointer"
            >
              WhatsApp Us
            </Button>
          </Link>

          <Link href="tel:+254727717901">
            <Button
              variant="outline"
              className="px-6 py-3 font-medium border-cyan-500/40 text-cyan-300 cursor-pointer"
            >
              Call 0727 717 901
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
