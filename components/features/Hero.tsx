"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Button } from "../ui/button";

gsap.registerPlugin(ScrollTrigger, SplitText)

export const Hero = () => {
  const textRef = useRef<HTMLHeadingElement | null>(null)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    if (!textRef.current || !sectionRef.current) return

    // Split text for reveal animation
    const split = new SplitText(textRef.current, { type: 'lines, words' })
    const parent = new SplitText(textRef.current, { type: 'lines' })

    gsap.from(split.words, {
      opacity: 0,
      y: 40,
      stagger: 0.04,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    })

    // Fade-ups
    gsap.utils.toArray('.hero-fade').forEach((el: any, i: number) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          delay: 0.2 + i * 0.1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        }
      )
    })
  }, [])

    return (
  <section ref={sectionRef} id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-brand-dark via-brand-night to-black opacity-90" />
        <div className="absolute inset-0 mix-blend-screen opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(0,229,255,0.25), transparent 40%), radial-gradient(circle at 80% 30%, rgba(29,191,115,0.2), transparent 40%), radial-gradient(circle at 50% 80%, rgba(0,229,255,0.15), transparent 40%)' }} />
        <div className="absolute inset-0 bg-fiber-lines opacity-20" />
        <Image
          src="https://i.pinimg.com/1200x/33/1d/b4/331db42cf749f1200c7069476ac9f36b.jpg"
          alt="Fiber optic internet in Kenya"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
      </div>

      <div className="root-container relative pt-24 pb-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="section-title text-4xl md:text-6xl font-extrabold font-heading leading-tight text-glow">
            <span className="split">Fast, Reliable & Affordable Internet for Every Kenyan Home & Business</span>
          </h1>
          <p className="mt-4 section-sub max-w-2xl">
            Pata WiFi Technologies LTD is a modern ISP bridging the digital gap with fiber-backed connectivity, daily WiFi passes, business solutions and community hotspots.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button className="btn btn-primary text-base text-white">Buy Daily Pass</Button>
            <Button className="btn btn-secondary text-base text-white">Request Installation</Button>
          </div>
        </div>

        <div className="pointer-events-none" aria-hidden>
          <div className="absolute -right-10 top-24 h-24 w-24 rounded-full bg-primary/20 blur-3xl animate-float" />
          <div className="absolute left-10 bottom-10 h-16 w-16 rounded-full bg-secondary/20 blur-2xl animate-float [animation-delay:1s]" />
        </div>
      </div>
    </section>
    );
};