import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container } from "@/components/ui";
import EstimateForm from "@/components/EstimateForm";

export const metadata: Metadata = {
  title: "Request an Estimate",
  description:
    "Request a conceptual design and materials estimate for your dock, bridge, walkover, or boardwalk project.",
};

export default function RequestEstimatePage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-pine-500">
              Request Estimate
            </span>
            <h1 className="font-display mt-3 text-4xl font-semibold leading-tight text-pine-800 sm:text-5xl">
              Need an estimate?
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/70">
              Request a conceptual design and materials estimate for your project.
              Share a few details and we&apos;ll get back to you.
            </p>

            <div className="mt-10 space-y-5 rounded-2xl border border-pine-100 bg-pine-50 p-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-pine-500">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-lg text-pine-800 hover:underline"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-pine-500">
                  Phone
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-1 block text-lg text-pine-800 hover:underline"
                >
                  {site.phone}
                </a>
              </div>
            </div>
          </div>

          <EstimateForm />
        </div>
      </Container>
    </section>
  );
}
