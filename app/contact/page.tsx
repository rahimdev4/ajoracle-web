import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { ContactIntro } from "@/components/contact/contact-intro";

export const metadata: Metadata = {
  title: "Contact AJOracle",
  description:
    "Connect with AJOracle for conversations, collaborations, and opportunities.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <ContactIntro />
      <ContactForm />
    </main>
  );
}
