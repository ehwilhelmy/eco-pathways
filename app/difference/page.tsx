import Image from "next/image";
import type { Metadata } from "next";
import { img } from "@/lib/images";
import {
  Section,
  SectionHeading,
  Prose,
  Card,
  PageHero,
} from "@/components/ui";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "The Eco-Pathways Difference",
  description:
    "Eco-Pathways is committed to designing and building long-life, low-maintenance, non-toxic docks, marinas, dune walkovers, golf course bridges, and boardwalks.",
};

const partners = [
  "Shoreline Plastics — Jacksonville, FL",
  "Bedford Reinforced Plastics — Bedford, PA",
  "Owens Corning WearDeck Division — Ocala, FL",
  "Carolina Waterworks — Goose Creek, SC",
  "Marine Construction of Fernandina Beach — Yulee, FL",
  "Piling Magic — Jacksonville, FL",
];

export default function DifferencePage() {
  return (
    <>
      <PageHero
        eyebrow="The Eco-Pathways Difference"
        title="Long-life, low-maintenance, landscape-friendly."
        intro="Eco-Pathways is committed to designing and building long-life, low-maintenance, aesthetically pleasing, landscape-friendly, and non-toxic docks, marinas, dune walkovers, golf course bridges, and boardwalks."
        image={img.featuresDiagram}
        imageAlt="Composite construction detail"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Born from research, proven in the field"
            />
            <div className="mt-8">
              <Prose>
                <p>
                  Eco-Pathways combines engineering, environmental, and geologic
                  expertise to research the best materials and construction
                  techniques for the harshest outdoor environments.
                </p>
                <p>
                  The company grew out of a 2019 research initiative by a
                  Fernandina Beach city commissioner addressing the maintenance
                  costs and safety issues of wooden dune walkovers. After a year
                  of research, the findings were presented at the American Shore
                  and Beach Preservation Association&apos;s October 2020
                  conference.
                </p>
                <p>
                  From there, we developed solutions for marine, beach, and
                  freshwater facilities — most notably addressing failing
                  concrete docks at Queen&apos;s Harbour Yacht and Country Club
                  in Jacksonville through our DOCKSrx solution.
                </p>
              </Prose>
            </div>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={img.failedDock}
              alt="A failed concrete dock awaiting restoration"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <div className="bg-pine-50">
        <Section>
          <SectionHeading
            eyebrow="Our network"
            title="Material suppliers & partners"
            intro="We work with a trusted network of manufacturers and builders across the Southeast to deliver complete, durable solutions."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {partners.map((p) => (
              <Card key={p} className="flex items-center gap-3 !p-5">
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-pine-400" />
                <span className="text-ink/80">{p}</span>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      <ContactCTA />
    </>
  );
}
