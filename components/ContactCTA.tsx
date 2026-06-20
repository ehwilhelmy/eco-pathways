import { site } from "@/lib/site";
import { Button, Container } from "./ui";

export default function ContactCTA({
  title = "Tell us about your project",
  body = "Request a conceptual design and materials estimate, or reach out directly — we're happy to talk through the details.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-pine-100 bg-pine-50">
      <Container>
        <div className="flex flex-col items-center gap-6 py-16 text-center sm:py-20">
          <h2 className="font-display max-w-2xl text-3xl font-semibold text-pine-800 sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-xl text-lg text-ink/70">{body}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/request-estimate" variant="primary">
              Request an Estimate
            </Button>
            <Button href={`mailto:${site.email}`} external variant="ghost">
              {site.email}
            </Button>
            <Button href={site.phoneHref} external variant="ghost">
              {site.phone}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
