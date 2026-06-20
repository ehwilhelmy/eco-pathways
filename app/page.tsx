import Image from "next/image";
import Link from "next/link";
import { img } from "@/lib/images";
import { site } from "@/lib/site";
import {
  Button,
  Container,
  Section,
  SectionHeading,
  Card,
  CheckList,
} from "@/components/ui";

const features = [
  {
    title: "100% composite. No wood.",
    body: "Every structure is built entirely from composite and FRP — never pressure-treated lumber that rots, splinters, or leaches chemicals.",
  },
  {
    title: "Maintenance-free for decades",
    body: "Slip-resistant, ADA-compliant surfaces that never need sealing, sanding, or board replacement.",
  },
  {
    title: "316 stainless connectors",
    body: "Marine-grade 316 stainless steel hardware throughout — engineered to survive saltwater and harsh environments.",
  },
  {
    title: "Cool-touch decking",
    body: "Heat-reflective options stay comfortable underfoot, even in full summer sun.",
  },
  {
    title: "Eight earth-tone colors",
    body: "Fade-resistant finishes that blend into natural landscapes, from beaches to fairways.",
  },
  {
    title: "Built for 50+ years",
    body: "Designed and engineered for a service life that outlasts traditional timber three times over.",
  },
];

const solutions = [
  {
    title: "DOCKSrx Docks",
    body: "21st-century repair and replacement for failed or failing concrete and timber docks.",
    href: "/docks",
    image: img.hero,
  },
  {
    title: "Golf Cart Bridges",
    body: "Long-life fiberglass cart bridges and pathways at competitive pricing.",
    href: "/golf-cart-bridges",
    image: img.golfCourse,
  },
  {
    title: "Dune Walkovers & Boardwalks",
    body: "Non-toxic beach accesses and boardwalks that protect dunes and last generations.",
    href: "/difference",
    image: img.walkover,
  },
];

const stats = [
  { value: "50+", label: "Year design life" },
  { value: "100%", label: "Composite — zero wood" },
  { value: "8", label: "Earth-tone colors" },
  { value: "316", label: "Stainless connectors" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-pine-900">
        <Image
          src={img.hero}
          alt="Composite dock over calm water"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pine-900 via-pine-900/70 to-pine-800/30" />
        <Container className="relative">
          <div className="max-w-3xl py-28 sm:py-36">
            <span className="inline-flex items-center gap-2 rounded-full border border-sand-300/40 bg-pine-800/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-sand-200 backdrop-blur">
              Sustainable composite construction
            </span>
            <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.05] text-sand-50 sm:text-6xl md:text-7xl">
              Docks &amp; bridges that last half a century.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand-100/90">
              We design and supply premium composite docks, golf course bridges,
              beach accesses, and boardwalks — durable, safe, and built with a
              lifespan of over 50 years, while minimizing environmental impact.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/request-estimate" variant="primary">
                Request an Estimate
              </Button>
              <Button
                href="/difference"
                variant="ghost"
                className="border-sand-200/40 text-sand-50 hover:bg-pine-800/40"
              >
                The Eco-Pathways Difference
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <div className="border-b border-pine-100 bg-white">
        <Container>
          <dl className="grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="font-display text-3xl font-semibold text-pine-700 sm:text-4xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm text-ink/60">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>

      {/* Mission */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our mission"
              title="A smarter alternative to pressure-treated wood"
              intro="We design and supply premium composite docks, golf course bridges, beach accesses, and boardwalks — minimizing environmental impact compared to traditional pressure-treated lumber, which rots, corrodes, and leaches toxic chemicals into the water and soil."
            />
            <div className="mt-8">
              <Button href="/advantages-owners" variant="secondary">
                See the advantages
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={img.walkover}
              alt="Eco-Pathways composite walkover"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Features */}
      <div className="bg-pine-50">
        <Section>
          <SectionHeading
            eyebrow="Engineered to endure"
            title="Designed for performance, built for the planet"
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Card key={f.title}>
                <h3 className="font-display text-xl font-semibold text-pine-800">
                  {f.title}
                </h3>
                <p className="mt-3 text-ink/70">{f.body}</p>
              </Card>
            ))}
          </div>
        </Section>
      </div>

      {/* Solutions */}
      <Section>
        <SectionHeading
          eyebrow="Solutions"
          title="One material science, many pathways"
          align="center"
        />
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {solutions.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group overflow-hidden rounded-2xl border border-pine-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-pine-800">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ink/70">{s.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-pine-600">
                  Learn more
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Suppliers */}
      <div className="bg-pine-50">
        <Section>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative order-last aspect-[4/3] overflow-hidden rounded-2xl shadow-lg lg:order-first">
              <Image
                src={img.featuresDiagram}
                alt="Composite material construction detail"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Trusted materials"
                title="Built on the industry's best composites"
                intro="We partner with proven manufacturers to source FRP frames and composite decking engineered for marine and outdoor durability."
              />
              <div className="mt-8">
                <CheckList
                  items={[
                    "Bedford Reinforced Plastics — structural FRP frames",
                    "Owens Corning WearDeck — composite decking",
                    "Shoreline Plastics — marine-grade components",
                    "Carolina Waterworks — flotation & dock systems",
                  ]}
                />
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* CTA */}
      <Section className="!py-0">
        <div className="relative my-20 overflow-hidden rounded-3xl bg-pine-800 px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="relative mx-auto max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sand-300">
              Let&apos;s build something lasting
            </span>
            <h2 className="font-display mt-4 text-3xl font-semibold text-sand-50 sm:text-4xl">
              Ready to start your project?
            </h2>
            <p className="mt-5 text-lg text-sand-100/85">
              Request a conceptual design and materials estimate, or reach out to
              talk through your dock, bridge, or boardwalk.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button
                href="/request-estimate"
                variant="secondary"
                className="!text-pine-800"
              >
                Request an Estimate
              </Button>
              <Button
                href={`mailto:${site.email}`}
                external
                variant="ghost"
                className="border-sand-200/40 text-sand-50 hover:bg-pine-700"
              >
                {site.email}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
