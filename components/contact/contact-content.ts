type ContactPageContent = Readonly<{
  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };
  composition: {
    eyebrow: string;
    title: string;
    description: string;
    contentStatus: string;
  };
  form: {
    eyebrow: string;
    title: string;
    description: string;
    submitLabel: string;
    statusLabel: string;
    statusDescription: string;
  };
}>;

// Contact V1 visual-shell copy only. No contact address, social destination,
// delivery provider, or response-time promise has been assumed.
export const contactPageContent = {
  intro: {
    eyebrow: "AJOracle Correspondence",
    title: "Contact",
    description:
      "A quiet editorial space for future correspondence with AJOracle.",
  },
  composition: {
    eyebrow: "A Place to Write",
    title: "A simple way to begin",
    description:
      "This structural pass establishes a calm path for a name, email address, and message. Final contact copy will follow client review.",
    contentStatus:
      "No approved direct contact details or social destinations are available locally, so none are displayed here.",
  },
  form: {
    eyebrow: "Message Form",
    title: "Message details",
    description:
      "All three fields will connect to the approved secure delivery flow during functional integration.",
    submitLabel: "Send Message",
    statusLabel: "Structural preview",
    statusDescription:
      "Submission is currently disabled. This form does not send or store messages yet.",
  },
} as const satisfies ContactPageContent;
