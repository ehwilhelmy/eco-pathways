import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-pine-800 text-sand-100">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <span className="font-display text-2xl font-semibold text-sand-50">
              Eco-Pathways LLC
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand-100/70">
              Durable, non-toxic composite docks, bridges, dune walkovers, and
              boardwalks engineered to last 50+ years in the harshest coastal
              and freshwater environments.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-sand-300">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav
                .flatMap((i) => (i.children ? i.children : [i]))
                .filter(
                  (i, idx, arr) =>
                    arr.findIndex((x) => x.href === i.href) === idx
                )
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sand-100/70 transition-colors hover:text-sand-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-sand-300">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sand-100/70 transition-colors hover:text-sand-50"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="text-sand-100/70 transition-colors hover:text-sand-50"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand-100/70 transition-colors hover:text-sand-50"
                >
                  YouTube
                </a>
              </li>
              <li>
                <Link
                  href="/request-estimate"
                  className="text-sand-100/70 transition-colors hover:text-sand-50"
                >
                  Request an Estimate
                </Link>
              </li>
              <li>
                <a
                  href={site.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand-100/70 transition-colors hover:text-sand-50"
                >
                  Download Brochure
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-sand-100/15 pt-6 text-xs text-sand-100/55 sm:flex-row sm:items-center">
          <p>© 2026 Eco-Pathways LLC. All rights reserved.</p>
          <Link href="/privacy" className="transition-colors hover:text-sand-50">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
