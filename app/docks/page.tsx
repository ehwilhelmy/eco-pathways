import Image from "next/image";
import type { Metadata } from "next";
import { img } from "@/lib/images";
import {
  PageHero,
  Section,
  SectionHeading,
  Prose,
  Card,
  CheckList,
} from "@/components/ui";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "DOCKSrx Docks",
  description:
    "DOCKSrx by Eco-Pathways: innovative 21st-century solutions for long-lasting, low-maintenance concrete dock repairs and replacement.",
};

const process = [
  {
    step: "01",
    title: "Assess",
    body: "Free on-site assessments in Duval, Nassau, and St. John's counties — phone consultations available elsewhere.",
  },
  {
    step: "02",
    title: "Engineer",
    body: "We design a composite repair or replacement using 21st-century FRP and composite materials matched to your dock.",
  },
  {
    step: "03",
    title: "Fabricate",
    body: "FRP frames and composite decking are pre-fabricated and delivered dockside, ready for assembly.",
  },
  {
    step: "04",
    title: "Install",
    body: "Complete turnkey installation, or field support for your existing contractor — your choice.",
  },
];

export default function DocksPage() {
  return (
    <>
      <PageHero
        eyebrow="DOCKSrx Docks"
        title="Sustainable dock restoration for the 21st century."
        intro="DOCKSrx repairs failed or failing concrete docks using 21st-century materials built to last — with minimal maintenance — through the rest of the century."
        image={img.hero}
        imageAlt="Restored composite dock over the water"
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="The problem"
              title="Concrete and timber docks fail"
            />
            <div className="mt-8">
              <Prose>
                <p>
                  Aging concrete docks crack, spall, and fail; timber docks rot
                  and splinter. DOCKSrx is Eco-Pathways&apos; innovative solution
                  for long-lasting, low-maintenance concrete dock repairs —
                  restoring structural integrity with composite materials
                  designed to outlast the original.
                </p>
                <p>
                  We can handle complete turnkey projects, or provide field
                  support to your existing contractor.
                </p>
              </Prose>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={img.failedDock}
              alt="A failed concrete dock before restoration"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <div className="bg-pine-800 text-sand-50">
        <Section>
          <SectionHeading
            eyebrow="How it works"
            title={<span className="text-sand-50">From assessment to installation</span>}
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div
                key={p.step}
                className="rounded-2xl border border-sand-100/15 bg-pine-700/40 p-6"
              >
                <span className="font-display text-3xl font-semibold text-sand-300">
                  {p.step}
                </span>
                <h3 className="font-display mt-3 text-xl font-semibold text-sand-50">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-sand-100/80">{p.body}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading
            eyebrow="Service area"
            title="Free assessments across Northeast Florida"
            intro="On-site assessments are available at no cost in Duval, Nassau, and St. John's counties. Outside those areas, we offer phone consultations to scope your project."
          />
          <div className="lg:pt-14">
            <CheckList
              items={[
                "Free on-site assessment in Duval, Nassau & St. John's counties",
                "Phone consultations available elsewhere",
                "Complete turnkey project delivery",
                "Field support for existing contractors",
              ]}
            />
          </div>
        </div>
      </Section>

      <ContactCTA title="Have a failing dock?" body="Request a free assessment or a conceptual estimate and we'll show you what DOCKSrx can do." />
    </>
  );
}
