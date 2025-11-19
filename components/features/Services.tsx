"use client"
import { services } from "@/constants"
import Image from "next/image"

export const Services = () => {
  return (
    <section id="services" className="section-padding">
        <div>
          <h2 className="section-title text-center" data-animate>Services</h2>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card overflow-hidden group" data-animate>
              <div className="relative h-40">
                <Image src={s.img} alt={s.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl text-white">{s.title}</h3>
                <p className="text-white/70 mt-2 text-sm">{s.desc}</p>
                <div className="mt-4">
                  <a href="#pricing" className="text-primary hover:underline">Learn more</a>
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}