import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Eco-Pathways LLC collects and uses information.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-semibold text-pine-800 sm:text-5xl">
            Privacy Policy
          </h1>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink/75">
            <p>
              Eco-Pathways LLC respects your privacy. This policy explains what
              information we collect through this website and how we use it.
            </p>
            <h2 className="font-display pt-2 text-2xl font-semibold text-pine-800">
              Information we collect
            </h2>
            <p>
              When you submit an estimate request or contact us, we collect the
              information you provide — such as your name, email address, phone
              number, project location, and project details — solely to respond
              to your inquiry.
            </p>
            <h2 className="font-display pt-2 text-2xl font-semibold text-pine-800">
              How we use information
            </h2>
            <p>
              We use the information you share to prepare estimates, answer
              questions, and communicate with you about your project. We do not
              sell your personal information.
            </p>
            <h2 className="font-display pt-2 text-2xl font-semibold text-pine-800">
              Contact
            </h2>
            <p>
              Questions about this policy? Email us at{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-pine-700 hover:underline"
              >
                {site.email}
              </a>{" "}
              or call {site.phone}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
