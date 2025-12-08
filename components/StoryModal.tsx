"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

type Story = {
  id: string;
  title: string;
  teaser: string;
  full: string;
  img: string;
  region?: string;
  category?: string;
  date?: string;
};

export default function StoryModal({
  open,
  onOpenChange,
  story,
  onPrev,
  onNext,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  story: Story | null;
  onPrev: () => void;
  onNext: () => void;
}) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!contentRef.current) return;
    if (open) {
      gsap.fromTo(
        contentRef.current,
        { autoAlpha: 0, scale: 0.98, y: 12 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.45, ease: "power3.out" }
      );
    }
  }, [open]);

  if (!story) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-full rounded-xl p-0 overflow-hidden">
        <DialogHeader className="sr-only">
          <DialogTitle>{story.title}</DialogTitle>
        </DialogHeader>
        <div ref={contentRef} className="relative bg-black">
        <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-white/20 transition"
          >
            <X size={18} />
          </button>

          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 p-2 rounded-full bg-green-100/60 text-white hover:bg-green-100/20 transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 p-2 rounded-full bg-green-100/60 text-white hover:bg-green-100/20 transition"
          >
            <ChevronRight size={20} />
          </button>


          <div className="relative h-56 sm:h-72 w-full">
            <Image src={story.img} alt={story.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-6 bg-black">
            <div className="flex items-center gap-3 text-sm text-white/80 mb-3">
              {story.region && <span className="px-2 py-1 bg-white/5 rounded">{story.region}</span>}
              {story.category && <span className="px-2 py-1 bg-white/5 rounded">{story.category}</span>}
              {story.date && <span className="text-white/60">{story.date}</span>}
            </div>

            <h3 className="text-2xl font-heading font-extrabold text-white mb-3">{story.title}</h3>
            <div className="prose prose-invert max-w-none text-white/80">
              <p>{story.full}</p>
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href="/?sec=pricing"
                className="btn bg-cyan-400 text-white"
              >
                Get Connected
              </Link>
              <Link href="https://wa.me/254727717901" target="_blank" rel="noreferrer" className="btn btn-primary border border-white/10">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
