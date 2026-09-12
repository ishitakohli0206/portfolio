"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export function Contact() {
  return (
    <section id="contact" className="container-px mx-auto max-w-6xl pb-24 md:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border-soft bg-surface px-8 py-16 text-center md:px-16 md:py-24">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, #4e7cff1a, transparent 70%)",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-3xl font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
              Let’s build something useful.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-text-muted">
              I’m looking for software engineering internship opportunities —
              if you’re hiring or just want to talk about a project, reach
              out.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-medium text-bg transition-all duration-300 hover:bg-white hover:shadow-[0_8px_24px_-8px_rgba(78,124,255,0.5)]"
              >
                <Mail size={16} /> {profile.email}
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-text-muted">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-text"
              >
                <LinkedinIcon size={15} /> {profile.linkedinLabel}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-text"
              >
                <GithubIcon size={15} /> {profile.githubLabel}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
