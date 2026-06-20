"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/site";
import { Button } from "./ui";
import LogoMark from "./LogoMark";

function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <LogoMark className="h-10 w-10 text-pine-700 transition-transform group-hover:scale-105" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold text-pine-800">
          Eco-Pathways
        </span>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-pine-400">
          Docks &amp; Bridges
        </span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-pine-100/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink/75 transition-colors hover:text-pine-700">
                  {item.label}
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M5.2 7.5 10 12l4.8-4.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </button>
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <div className="w-60 rounded-2xl border border-pine-100 bg-white p-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-3 py-2 text-sm text-ink/75 transition-colors hover:bg-pine-50 hover:text-pine-700"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-pine-700 ${
                  pathname === item.href ? "text-pine-700" : "text-ink/75"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href="/request-estimate" variant="primary">
            Request Estimate
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-pine-800 hover:bg-pine-50 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-pine-100 bg-paper lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
            {nav.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-pine-800 hover:bg-pine-50"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 border-l border-pine-100 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-ink/70 hover:bg-pine-50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button href="/request-estimate" variant="primary" className="mt-3">
              Request Estimate
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
