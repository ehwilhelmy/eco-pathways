import type { Metadata } from "next";
import { img } from "@/lib/images";
import { PageHero, Section, SectionHeading, Prose, Card } from "@/components/ui";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Advantages to Owners",
  description:
    "Eco-Pathways docks, bridges, walkovers, and boardwalks won't rot, corrode, or deteriorate — lasting 50-plus years in the harshest environments.",
};

const benefits = [
  {
    title: "Won't rot or corrode",
    body: "Pathways that will not rot, corrode, or deteriorate in any way — lasting 50-plus years even in the harshest environments.",
  },
  {
    title: "Minimal maintenance",
    body: "Structural integrity without splintering or deterioration. No annual sealing, sanding, or board replacement.",
  },
  {
    title: "Your choice of look",
    body: "Traditional wood aesthetics or modern styles, all in fade-resistant colors that hold their finish for decades.",
  },
  {
    title: "Right material for the site",
    body: "We select materials suited to your environmental conditions and recommend cost-effective alternatives when hazards can't be fully mitigated.",
  },
  {
    title: "Non-toxic by design",
    body: "No toxic pressure-treatment chemicals leaching into the water, soil, or the environment around your property.",
  },
  {
    title: "Professional installation",
    body: "Design and installation services available through qualified contractors who know the system.",
  },
];

export default function AdvantagesOwnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Advantages to Owners"
        title="Build once. Enjoy it for 50 years."
        intro="Owners of Eco-Pathways docks, golf course bridges, dune walkovers, trail bridges, and boardwalks know that their pathways will not rot, corrode, or deteriorate in any way — and will last 50-plus years in the harshest environments."
        image={img.walkover}
        imageAlt="Composite walkover in a coastal setting"
      />

      <Section>
        <SectionHeading
          eyebrow="Why owners choose us"
          title="Less upkeep, more lifespan, zero toxins"
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <Card key={b.title}>
              <h3 className="font-display text-xl font-semibold text-pine-800">
                {b.title}
              </h3>
              <p className="mt-3 text-ink/70">{b.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <div className="bg-pine-50">
        <Section>
          <div className="mx-auto max-w-3xl text-center">
            <Prose>
              <p>
                Our products maintain their structural integrity without
                splintering or deterioration, and avoid the toxic chemicals used
                in the pressure treatment of outdoor wood. Whether you prefer the
                warmth of a traditional wood look or a clean modern style, you get
                fade-resistant color and a structure engineered to outlast
                anything built from lumber.
              </p>
            </Prose>
          </div>
        </Section>
      </div>

      <ContactCTA />
    </>
  );
}
