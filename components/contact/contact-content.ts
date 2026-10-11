type ContactPageContent = Readonly<{
  intro: {
    eyebrow: string;
    title: string;
    description: string;
    email: string;
  };
  form: {
    title: string;
    description: string;
    submitLabel: string;
  };
}>;

export const contactPageContent = {
  intro: {
    eyebrow: "Contact",
    title: "Get in Touch",
    description:
      "Let's connect and create something meaningful together. I'm always open to new conversations, collaborations, and opportunities.",
    email: "contact@ajoracle.com",
  },
  form: {
    title: "Send a Message",
    description: "Fill out the form and I'll get back to you as soon as possible.",
    submitLabel: "Send Message",
  },
} as const satisfies ContactPageContent;
