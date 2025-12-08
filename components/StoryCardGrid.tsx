"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { impactStories } from "@/constants";
import StoryModal from "./StoryModal";

export default function StoryCardGrid() {
  const [active, setActive] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

    useGSAP(() => {
    const cards = gridRef.current?.querySelectorAll(".story-card");
    if (!cards || cards.length === 0) return;

    gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 26 },
        {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: gridRef.current, start: "top 90%" },
        }
    );
    });

  // keyboard nav for modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, active]);

  const openStory = (index: number) => {
    setActive(index);
    setOpen(true);
  };

  const closeStory = () => {
    setOpen(false);
    // leave active so user can reopen modal to same story
  };

  const prev = () => {
    if (active === null) return;
    const nextIndex = (active - 1 + impactStories.length) % impactStories.length;
    setActive(nextIndex);
  };

  const next = () => {
    if (active === null) return;
    const nextIndex = (active + 1) % impactStories.length;
    setActive(nextIndex);
  };

  return (
    <>
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {impactStories.map((s, i) => (
          <article key={s.id} className="story-card rounded-2xl overflow-hidden bg-white/5 border border-white/10" >
            <div className="relative h-48 w-full">
              <Image src={s.img} alt={s.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="p-4">
              <h3 className="font-heading text-lg text-white mb-2">{s.title}</h3>
              <p className="text-white/70 text-sm">{s.teaser}</p>

              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => openStory(i)}
                  className="text-green-100 hover:underline text-sm font-medium cursor-pointer"
                >
                  Read Story →
                </button>

                <div className="text-white/60 text-xs">{s.date}</div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <StoryModal
        open={open}
        onOpenChange={setOpen}
        story={active !== null ? impactStories[active] : null}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}
