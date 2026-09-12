"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile, stats } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <HeroBackground />

      <div className="container-px relative mx-auto w-full max-w-6xl py-20 md:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="mb-5 text-sm text-text-muted"
          >
            {profile.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[13vw] font-medium leading-[0.98] tracking-tight text-balance sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 font-display text-xl text-text-muted sm:text-2xl"
          >
            {profile.positioning}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-text-muted"
          >
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#projects" icon={<ArrowRight size={16} />}>
              View my work
            </Button>
            <Button
              href={profile.resumeFile}
              variant="secondary"
              download="Ishita_Kohli_Resume.pdf"
              icon={<Download size={16} />}
            >
              Download resume
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-text-muted"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-text"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-text"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-text"
            >
              <Mail size={16} /> {profile.email}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border-soft bg-border-soft sm:grid-cols-4 md:mt-24"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-bg/80 px-5 py-6 backdrop-blur-sm transition-colors hover:bg-surface"
            >
              <div className="font-display text-2xl font-medium text-text sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs leading-snug text-text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
