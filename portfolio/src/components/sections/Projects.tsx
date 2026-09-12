"use client";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectPreview } from "@/components/ui/ProjectPreview";
import { GithubIcon } from "@/components/ui/BrandIcons";

function ExternalLinkIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="container-px mx-auto max-w-6xl py-24 md:py-32"
    >
      <SectionHeading
        title="Selected projects"
        description="Two projects I keep coming back to — one built in production at an internship, one built to win."
      />

      <div className="flex flex-col gap-8">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.1}>
            <article className="group grid gap-8 rounded-2xl border border-border-soft bg-surface p-6 transition-colors duration-500 hover:border-accent/30 md:grid-cols-2 md:p-8 lg:gap-12">
              <div
                className={`order-1 aspect-[4/3] ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <ProjectPreview
                  variant={i === 0 ? "dashboard" : "advisor"}
                  accent={project.accent}
                />
              </div>

              <div
                className={`order-2 flex flex-col justify-center ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <h3 className="font-display text-2xl font-medium text-text sm:text-[28px]">
                  {project.name}
                </h3>
                <p className="mt-2 text-[15px] text-text-muted">
                  {project.tagline}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border-soft bg-surface-2 px-3 py-1 text-xs text-text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="mt-6 flex flex-col gap-3">
                  {project.description.map((line) => (
                    <li
                      key={line}
                      className="flex gap-3 text-[14px] leading-relaxed text-text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border-soft px-4 py-2 text-sm text-text transition-colors duration-300 hover:border-accent/50 hover:bg-surface-2"
                    >
                      <GithubIcon size={15} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-text px-4 py-2 text-sm text-bg transition-all duration-300 hover:bg-white"
                    >
                      <ExternalLinkIcon size={15} /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
