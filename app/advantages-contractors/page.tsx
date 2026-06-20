import Image from "next/image";
import type { Metadata } from "next";
import { img } from "@/lib/images";
import {
  PageHero,
  Section,
  SectionHeading,
  Prose,
  CheckList,
} from "@/components/ui";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Advantages to Contractors",
  description:
    "Eco-Pathways works with builders and contractors to maximize profits and customer satisfaction with tailored designs and offsite fabrication.",
};

export default function AdvantagesContractorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Advantages to Contractors"
        title="A partner that helps you win the job."
        intro="Eco-Pathways works with builders and contractors to help them maximize their profits while achieving the highest possible customer satisfaction."
        image={img.contractors}
        imageAlt="Contractors installing composite structures"
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="How we work with you"
              title="Designed around your crew and site"
            />
            <div className="mt-8">
              <Prose>
                <p>
                  We tailor designs and material selections to best suit local
                  labor, equipment, access, and job-site restrictions — so the
                  build fits the reality of your project, not the other way
                  around.
                </p>
                <p>
                  We can maximize offsite fabrication and pre-assembly of
                  materials where appropriate, and work to accommodate your
                  equipment and manpower advantages and limitations.
                </p>
              </Prose>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={img.contractors}
              alt="Composite materials staged for assembly"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <div className="bg-pine-50">
        <Section>
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHeading
              eyebrow="Get us involved early"
              title="A no-obligation review of your plans"
              intro="Involve us early for a confidential, no-obligation review of plans to open up more effective options for the given job requirement."
            />
            <div className="lg:pt-16">
              <CheckList
                items={[
                  "Tailored designs for local labor and equipment",
                  "Maximized offsite fabrication and pre-assembly",
                  "Confidential, no-obligation plan reviews",
                  "No toxic pressure-treatment chemicals on the job site",
                ]}
              />
              <div className="mt-8 rounded-2xl border border-pine-100 bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-pine-500">
                  Contractor partnerships
                </p>
                <p className="mt-2 text-lg text-ink/80">
                  Ed Hintlian —{" "}
                  <a
                    href="tel:+16178518833"
                    className="font-semibold text-pine-700 hover:underline"
                  >
                    617-851-8833
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <ContactCTA title="Have a project in the pipeline?" />
    </>
  );
}
