import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-pine-500">
      {children}
    </span>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pine-400 focus-visible:ring-offset-2";
  const variants = {
    primary:
      "bg-pine-700 text-sand-50 shadow-sm hover:bg-pine-800 hover:shadow-md hover:-translate-y-0.5",
    secondary:
      "bg-sand-200 text-pine-800 hover:bg-sand-300 hover:-translate-y-0.5",
    ghost:
      "border border-pine-200 text-pine-700 hover:border-pine-400 hover:bg-pine-50",
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display mt-3 text-3xl font-semibold leading-tight text-pine-800 sm:text-4xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-lg leading-relaxed text-ink/70">{intro}</p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-pine-800">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-900 via-pine-800/70 to-pine-800/40" />
        </>
      )}
      <Container className="relative">
        <div className="max-w-3xl py-20 sm:py-28">
          {eyebrow && (
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sand-300">
              {eyebrow}
            </span>
          )}
          <h1 className="font-display mt-4 text-4xl font-semibold leading-[1.1] text-sand-50 sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sand-100/90">
              {intro}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-pine-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <svg
            className="mt-1 h-5 w-5 flex-shrink-0 text-pine-500"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 0 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="text-ink/80">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-5 text-lg leading-relaxed text-ink/80">
      {children}
    </div>
  );
}
