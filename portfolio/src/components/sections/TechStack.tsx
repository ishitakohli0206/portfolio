"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TechStack() {
  return (
    <section id="skills" className="container-px mx-auto max-w-6xl py-24 md:py-32">
      <SectionHeading
        title="Technology"
        description="The languages, frameworks, and tools I reach for most, grouped by where they show up in my work."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <Reveal key={category.title} delay={i * 0.06}>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="h-full rounded-2xl border border-border-soft bg-surface p-6 transition-colors duration-300 hover:border-accent/30"
            >
              <h3 className="text-sm font-medium text-text">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border-soft bg-surface-2 px-3 py-1.5 text-xs text-text-muted transition-colors duration-200 hover:border-accent/40 hover:text-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
