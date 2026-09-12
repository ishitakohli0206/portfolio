import { experience } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      className="container-px mx-auto max-w-6xl py-24 md:py-32"
    >
      <SectionHeading
        title="Experience"
        description="Two internships, both shipping production code used by real users."
      />

      <div className="flex flex-col gap-5">
        {experience.map((role, i) => (
          <Reveal key={role.company} delay={i * 0.08}>
            <div className="group grid gap-6 rounded-2xl border border-border-soft bg-surface p-7 transition-colors duration-300 hover:border-accent/30 md:grid-cols-[1fr_2fr] md:p-9">
              <div>
                <h3 className="font-display text-xl font-medium text-text">
                  {role.role}
                </h3>
                <p className="mt-1.5 text-[15px] text-accent">{role.company}</p>
                <p className="mt-3 text-sm text-text-faint">{role.duration}</p>
              </div>

              <ul className="flex flex-col gap-3.5 border-t border-border-soft pt-6 md:border-t-0 md:border-l md:pl-9 md:pt-0">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-[15px] leading-relaxed text-text-muted"
                  >
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
