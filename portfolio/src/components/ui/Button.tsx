import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  external?: boolean;
  download?: boolean | string;
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  icon,
  external,
  download,
  className,
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2";

  const variants = {
    primary:
      "bg-text text-bg hover:bg-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_24px_-8px_rgba(78,124,255,0.5)]",
    secondary:
      "border border-border text-text hover:border-accent/50 hover:bg-surface",
  };

  const props = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  if (download) {
    return (
      <a
        href={href}
        download={download}
        className={cn(base, variants[variant], className)}
      >
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </Link>
  );
}
