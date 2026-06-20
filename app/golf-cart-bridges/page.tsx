import type { Metadata } from "next";
import { img } from "@/lib/images";
import {
  PageHero,
  Section,
  SectionHeading,
  Prose,
  CheckList,
  Card,
} from "@/components/ui";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Golf Cart Bridges",
  description:
    "Long-lasting fiberglass golf cart bridges and pathways from Eco-Pathways & Bedford Reinforced Plastics — 50+ year life at competitive pricing.",
};

const eliminated = [
  "Continuous and costly maintenance",
  "Splinters, trip hazards, and rough rides",
  "Slippery or overheated surfaces",
  "Annual board placement and recoating",
  "10–15 year replacement cycles",
  "Deteriorating appearance",
  "Extended repair shutdowns",
  "Long construction timelines",
  "Environmental concerns from wood preservatives",
];

export default function GolfCartBridgesPage() {
  return (
    <>
      <PageHero
        eyebrow="Golf Cart Bridges"
        title="Golf cart bridges for the 3rd millennium."
        intro="Eco-Pathways introduces long-lasting fiberglass golf cart bridges and pathways at competitive pricing — engineered to last 50+ years, available with Bedford Reinforced Plastics."
        image={img.golfCourse}
        imageAlt="Golf course with an elevated cart pathway"
      />

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Did you know?"
            title="The best golf cart bridges, reimagined"
            align="center"
          />
          <div className="mt-8">
            <Prose>
              <p>
                Innovators like Old Tom Morris shaped the modern game by embracing
                better methods and materials. Today, that same spirit means
                trading rot-prone timber for composite and fiberglass — bridges
                that look the part, ride smooth, and last for generations.
              </p>
            </Prose>
          </div>
        </div>
      </Section>

      <div className="bg-pine-50">
        <Section>
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Problems eliminated"
              title="Everything wood gets wrong, solved"
              intro="A single fiberglass bridge system removes the recurring costs, hazards, and headaches of traditional timber construction."
            />
            <div className="lg:pt-4">
              <CheckList items={eliminated} />
            </div>
          </div>
        </Section>
      </div>

      <Section>
        <div className="grid gap-6 sm:grid-cols-3">
          <Card>
            <span className="font-display text-4xl font-semibold text-pine-600">
              50+
            </span>
            <p className="mt-2 font-semibold text-pine-800">Year service life</p>
            <p className="mt-1 text-sm text-ink/65">
              Three to five times longer than treated timber bridges.
            </p>
          </Card>
          <Card>
            <span className="font-display text-4xl font-semibold text-pine-600">
              $0
            </span>
            <p className="mt-2 font-semibold text-pine-800">Annual recoating</p>
            <p className="mt-1 text-sm text-ink/65">
              No yearly board placement, sealing, or sanding required.
            </p>
          </Card>
          <Card>
            <span className="font-display text-4xl font-semibold text-pine-600">
              Fast
            </span>
            <p className="mt-2 font-semibold text-pine-800">Installation</p>
            <p className="mt-1 text-sm text-ink/65">
              Pre-fabricated components mean shorter shutdowns on the course.
            </p>
          </Card>
        </div>
      </Section>

      <ContactCTA title="Upgrading your course?" body="Let's talk through your cart-path bridges and crossings — request a competitive estimate today." />
    </>
  );
}
