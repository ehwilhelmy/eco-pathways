import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { img } from "@/lib/images";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore Eco-Pathways solutions: advantages for owners and contractors, product specs, DOCKSrx docks, and golf cart bridges.",
};

const items = [
  {
    title: "Advantages to Owners",
    body: "Why property owners choose maintenance-free, 50+ year composite pathways.",
    href: "/advantages-owners",
    image: img.walkover,
  },
  {
    title: "Advantages to Contractors",
    body: "How we help builders maximize profit and customer satisfaction.",
    href: "/advantages-contractors",
    image: img.contractors,
  },
  {
    title: "Product Specs",
    body: "Spans, loads, materials, warranties, and installation details.",
    href: "/product-specs",
    image: img.weardeckColors,
  },
  {
    title: "DOCKSrx Docks",
    body: "21st-century repair and replacement for failing concrete docks.",
    href: "/docks",
    image: img.hero,
  },
  {
    title: "Golf Cart Bridges",
    body: "Long-life fiberglass cart bridges and pathways at competitive pricing.",
    href: "/golf-cart-bridges",
    image: img.golfCourse,
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="One material science. Many pathways."
        intro="From docks and golf cart bridges to dune walkovers and boardwalks, every Eco-Pathways solution is built from durable, non-toxic composites engineered to last."
        image={img.featuresDiagram}
        imageAlt="Composite construction"
      />

      <Section>
        <SectionHeading
          eyebrow="Explore"
          title="Find the right solution"
          align="center"
        />
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group overflow-hidden rounded-2xl border border-pine-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-pine-800">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{s.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
