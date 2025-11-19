"use client";

import Image from 'next/image'

export const AboutUs = () => {
  return (
    <section id="about" className="section-padding">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1" data-animate>
          <h2 className="section-title">About Pata WiFi</h2>
          <p className="section-sub mt-3">
            Pata WiFi Technologies LTD is committed to connecting Kenyan homes, estates, SMEs and enterprises with dependable internet. 
            We provide reliable connectivity, quick support, and flexible packages for households, 
            SMEs, and resellers. Whether you’re working, streaming, gaming, or studying online, Pata WiFi 
            ensures you stay connected with minimal downtime and maximum value. 
            We are building a modern Kenyan ISP that bridges the digital gap by making high-quality 
            internet accessible, straightforward, and dependable.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/80">
            <li className="card p-4" data-animate>Reliable fiber‑backed network</li>
            <li className="card p-4" data-animate>Affordable daily & monthly plans</li>
            <li className="card p-4" data-animate>Fast local support</li>
            <li className="card p-4" data-animate>Coverage in towns and estates</li>
          </ul>
        </div>
        <div className="relative aspect-4/3 order-1 md:order-2" data-animate>
          <Image
            src="https://images.pexels.com/photos/4009627/pexels-photo-4009627.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Kenyan family using home WiFi"
            fill
            className="object-cover rounded-2xl border border-white/10"
          />
          <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-primary/20 blur-2xl" aria-hidden />
        </div>
      </div>
    </section>
  )
}
