import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const focusAreas = [
  "Full-stack development",
  "Backend & API design",
  "Database performance",
  "System design",
];

export function About() {
  return (
    <section id="about" className="container-px mx-auto max-w-6xl py-24 md:py-32">
      <SectionHeading title="About" />

      <div className="grid gap-12 md:grid-cols-5 md:gap-16">
        <Reveal className="md:col-span-3">
          <p className="text-lg leading-relaxed text-text sm:text-xl">
            I build web applications end to end. Rrom the database schema up
            through the interface people actually use. Two internships have
            had me shipping REST APIs, designing role-based access systems,
            and tuning queries that needed to hold up under real traffic, not
            just pass a demo.
          </p>
          <p className="mt-5 text-[15px] leading-relaxed text-text-muted">
            I’m most comfortable in React and Node.js, but I spend as much
            time thinking about backend architecture as I do about interface
            polish. Indexing strategy, auth flows, and the kind of
            performance work that shows up in a Lighthouse score or a
            response-time chart. I studied Computer Science with a focus in
            Data Science, and I like problems that sit at the boundary of
            good engineering and good product sense.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-2">
          <div className="rounded-2xl border border-border-soft bg-surface p-6">
            <p className="text-xs text-text-faint">Focus areas</p>
            <ul className="mt-4 flex flex-col gap-3">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-3 text-sm text-text"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
