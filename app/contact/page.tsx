import { ContactForm } from "@/components/contact/contact-form";
import { ContactIntro } from "@/components/contact/contact-intro";

export default function ContactPage() {
  return (
    <main>
      <ContactIntro />
      <ContactForm />
      <div aria-hidden="true" className="contact-footer-transition h-24 sm:h-32" />
    </main>
  );
}
