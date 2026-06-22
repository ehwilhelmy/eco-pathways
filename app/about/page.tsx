import Image from "next/image";
import type { Metadata } from "next";
import { img } from "@/lib/images";
import { PageHero, Section, SectionHeading } from "@/components/ui";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind Eco-Pathways, led by co-founder and chief engineer Frank Hopf, Ph.D., P.E.",
};

const team = [
  {
    name: "Frank Hopf, Ph.D., P.E.",
    role: "Co-Founder, Chief Engineer",
    image: img.frankHopf,
    bio: [
      "Dr. Hopf holds a Ph.D. in Coastal Geomorphology (Texas A&M, 2011), along with Civil Engineering and MBA degrees, and has been a licensed Professional Engineer in Texas since 1987. After a 35-year career in the petroleum industry, he earned his doctorate and taught geology and geography at Texas A&M.",
      "His research focuses on fluvial and coastal flooding, dune and beach processes, and natural and nature-based restoration, along with the related policy. He serves in professional organizations including ASBPA, ASCE, and the Association of State Floodplain Managers.",
      "As a founding director of Conserve Nassau, a 501(c) nonprofit, he helped establish the Dune Science Group in 2020 to advance coastal restoration methods. His work revealed that pressure-treated wooden dune walkovers pose environmental risks through toxic chemical leaching — prompting the development of non-toxic alternatives offering 50–75 year walkovers, boardwalks, docks, bridges, and elevated pathways.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Engineers and advocates for lasting coastlines."
        intro="Eco-Pathways was founded by a coastal engineer on a single mission: build outdoor structures that endure for generations without harming the environment."
        image={img.aboutHeader}
        imageAlt="Coastal landscape"
      />

      <Section>
        <SectionHeading eyebrow="Leadership" title="Meet the team" />
        <div className="mt-14 space-y-16">
          {team.map((member, i) => (
            <div
              key={member.name}
              className="grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12"
            >
              <div
                className={`relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl shadow-lg ${
                  i % 2 === 1 ? "lg:order-last" : ""
                }`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-pine-800">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-pine-500">
                  {member.role}
                </p>
                <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink/75">
                  {member.bio.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <ContactCTA />
    </>
  );
}
