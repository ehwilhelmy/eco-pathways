import Image from "next/image";
import type { Metadata } from "next";
import { img } from "@/lib/images";
import { PageHero, Section, SectionHeading, Card } from "@/components/ui";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Product Specs",
  description:
    "75-year lifespan non-wood pedestrian and vehicle bridge systems. Specifications for spans, loads, materials, warranties, and installation.",
};

const specs = [
  { label: "Scope", value: "75-year lifespan, non-wood pedestrian & vehicle bridge systems" },
  { label: "Span lengths", value: "8' – 20'" },
  { label: "Pedestrian load", value: "60 PSF" },
  { label: "Vehicle capacity", value: "2,000 lbs" },
  { label: "Decking warranty", value: "50 years (residential decking)" },
  { label: "Structural warranty", value: "5 years (structural FRP components)" },
];

const materialGroups = [
  {
    title: "Piles & support structure",
    body: "Qualified suppliers provide fiberglass and composite piles and FRP support framing engineered for marine and freshwater exposure.",
  },
  {
    title: "Decking",
    body: "Composite, PVC, and fiberglass decking options — slip-resistant, ADA-compliant, and available in eight fade-resistant earth tones.",
  },
  {
    title: "Connectors",
    body: "316 stainless steel hardware throughout for maximum corrosion resistance.",
  },
  {
    title: "Delivery & installation",
    body: "Pre-assembled delivery with on-site assembly instructions, minimizing field labor and construction time.",
  },
];

export default function ProductSpecsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product Specs"
        title="Engineered, documented, and warrantied."
        intro="Non-wood pedestrian and vehicle bridge systems with a 75-year design life — backed by qualified suppliers, clear load ratings, and long-term warranties."
        image={img.walkover}
        imageAlt="Composite bridge walkover"
      />

      <Section>
        <SectionHeading
          eyebrow="At a glance"
          title="Key specifications"
        />
        <div className="mt-10 overflow-hidden rounded-2xl border border-pine-100 bg-white shadow-sm">
          <dl className="divide-y divide-pine-100">
            {specs.map((s) => (
              <div
                key={s.label}
                className="grid gap-1 px-6 py-5 sm:grid-cols-[220px_1fr] sm:items-center sm:gap-6"
              >
                <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-pine-500">
                  {s.label}
                </dt>
                <dd className="text-lg text-ink/80">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <div className="bg-pine-50">
        <Section>
          <SectionHeading
            eyebrow="Materials"
            title="What goes into every structure"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {materialGroups.map((m) => (
              <Card key={m.title}>
                <h3 className="font-display text-xl font-semibold text-pine-800">
                  {m.title}
                </h3>
                <p className="mt-3 text-ink/70">{m.body}</p>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={img.weardeckColors}
              alt="WearDeck composite color options"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Finish options"
              title="Eight earth-tone colors"
              intro="WearDeck composite decking comes in fade-resistant earth tones designed to blend naturally into beaches, marinas, and fairways — with cool-touch, heat-reflective options available."
            />
          </div>
        </div>
      </Section>

      <ContactCTA title="Need specs for your engineer?" body="Contact Frank Hopf and the Eco-Pathways team for detailed specifications, drawings, and a materials estimate for your project." />
    </>
  );
}
