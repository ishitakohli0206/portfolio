"use client";

import { GraduationCap } from "lucide-react";
import { education, leadership } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section className="container-px mx-auto max-w-6xl py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="flex items-start gap-4">
            <div className="mt-1 rounded-lg border border-border-soft bg-surface p-2.5 text-accent">
              <GraduationCap size={18} />
            </div>
            <div>
              <p className="text-xs text-text-faint">Education</p>
              <h3 className="mt-2 font-display text-lg font-medium text-text">
                {education.degree}
              </h3>
              <p className="mt-1.5 text-[15px] text-text-muted">
                {education.school}
              </p>
              <p className="mt-1 text-sm text-text-faint">
                {education.grad} · {education.cgpa}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-xs text-text-faint">Beyond engineering</p>
          <div className="mt-4 flex flex-col gap-5">
            {leadership.map((item) => (
              <div key={item.role} className="border-l border-border-soft pl-4">
                <p className="text-[15px] text-text">
                  {item.role} <span className="text-text-muted">· {item.org}</span>
                </p>
                <p className="mt-1 text-xs text-text-faint">{item.duration}</p>
                <p className="mt-1.5 text-sm text-text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
