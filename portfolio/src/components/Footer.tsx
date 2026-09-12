import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border-soft">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 py-8 text-xs text-text-faint sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
