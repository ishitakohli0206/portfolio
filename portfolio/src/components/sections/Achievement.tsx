"use client";

// @ts-expect-error lucide-react types are not available in this project setup
import { Trophy } from "lucide-react";
import { achievement } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Achievement() {
  return (
    <section className="container-px mx-auto max-w-6xl pb-24 md:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border-soft bg-surface px-8 py-14 md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full"
            style={{
              background: "radial-gradient(closest-side, #4e7cff22, transparent 70%)",
              filter: "blur(20px)",
            }}
          />
          <div className="relative flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-6">
              <div className="font-display text-7xl font-semibold leading-none text-text sm:text-8xl">
                {achievement.place}
              </div>
              <div className="flex flex-col gap-1">
                <span className="inline-flex w-fit items-center gap-1.5 text-xs text-accent">
                  <Trophy size={13} /> {achievement.label}
                </span>
                <p className="text-lg text-text">{achievement.event}</p>
                <p className="text-sm text-text-muted">{achievement.detail}</p>
              </div>
            </div>

            <p className="max-w-xs text-sm leading-relaxed text-text-muted md:text-right">
              Awarded for {achievement.project}, an NLP-driven insurance
              recommendation engine and chatbot.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
