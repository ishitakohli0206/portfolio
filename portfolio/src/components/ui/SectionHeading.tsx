import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  title,
  description,
  align = "left",
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`mb-12 md:mb-16 ${align === "center" ? "mx-auto max-w-2xl text-center" : ""}`}
    >
      <h2 className="font-display text-3xl font-medium tracking-tight text-balance md:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15px] leading-relaxed text-text-muted ${
            align === "center" ? "mx-auto max-w-lg" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
