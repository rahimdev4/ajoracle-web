type AboutNarrative = Readonly<{
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  mediaLabel: string;
  mediaDetail: string;
}>;

type AboutPageContent = Readonly<{
  intro: {
    eyebrow: string;
    title: string;
    description: string;
    status: string;
    mediaLabel: string;
    mediaDetail: string;
  };
  artistStory: AboutNarrative;
  creativePerspective: AboutNarrative;
  legacy: AboutNarrative;
  closing: {
    eyebrow: string;
    title: string;
    description: string;
    status: string;
  };
}>;

// About V1 visual-shell content only. Biography, personal history, quotations,
// and photography remain explicitly pending until reviewed material is approved.
export const aboutPageContent = {
  intro: {
    eyebrow: "AJOracle Story",
    title: "About",
    description:
      "A photographic editorial framework for AJOracle's approved story, creative perspective, and legacy.",
    status: "Approved introduction and portrait pending client review",
    mediaLabel: "AJOracle portrait",
    mediaDetail:
      "Approved artist photography will replace this portrait frame.",
  },
  artistStory: {
    eyebrow: "The Story",
    title: "Approved artist narrative pending",
    paragraphs: [
      "This position is reserved for the reviewed account of AJOracle's story and artist identity. No biographical details have been assumed for this structural pass.",
      "The final narrative will be shaped from approved source material before publication.",
    ],
    mediaLabel: "Artist story photography",
    mediaDetail:
      "Approved landscape photography will support the primary narrative.",
  },
  creativePerspective: {
    eyebrow: "Creative Life",
    title: "Approved creative perspective pending",
    paragraphs: [
      "This alternating composition is designed for approved writing about music, faith, heritage, purpose, or other reviewed themes that belong in AJOracle's story.",
      "Only client-approved perspective and source material will replace this placeholder copy.",
    ],
    mediaLabel: "Creative portrait photography",
    mediaDetail:
      "A second approved artist image will create a quieter visual movement.",
  },
  legacy: {
    eyebrow: "Legacy",
    title: "Approved personal narrative pending",
    paragraphs: [
      "This wide editorial position is reserved for approved personal, family, legacy, or tribute material if retained after content review.",
      "No names, relationships, memories, or quotations have been introduced.",
    ],
    mediaLabel: "Legacy story photography",
    mediaDetail:
      "Approved wide-format photography or archival material will be placed here.",
  },
  closing: {
    eyebrow: "Closing Note",
    title: "A final statement will follow content review",
    description:
      "This quiet closing position is reserved for an approved line that completes the page without inventing a quotation or personal claim.",
    status: "Approved About copy pending",
  },
} as const satisfies AboutPageContent;
