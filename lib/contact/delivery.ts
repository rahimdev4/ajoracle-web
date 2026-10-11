import type { ContactSubmission } from "@/lib/contact/types";

const RESEND_ENDPOINT = "https://api.resend.com/emails";

type DeliveryResult =
  | Readonly<{ accepted: true }>
  | Readonly<{ accepted: false; reason: "configuration" | "provider" }>;

function getDeliveryConfiguration() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();

  if (!apiKey || !from || !to) {
    return null;
  }

  return { apiKey, from, to };
}

export async function deliverContactMessage(
  submission: ContactSubmission,
): Promise<DeliveryResult> {
  const configuration = getDeliveryConfiguration();

  if (!configuration) {
    return { accepted: false, reason: "configuration" };
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${configuration.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: configuration.from,
        to: [configuration.to],
        reply_to: submission.email,
        subject: `New AJOracle website message from ${submission.name}`,
        text: [
          `Name: ${submission.name}`,
          `Email: ${submission.email}`,
          "",
          submission.message,
        ].join("\n"),
      }),
      cache: "no-store",
    });

    return response.ok
      ? { accepted: true }
      : { accepted: false, reason: "provider" };
  } catch {
    return { accepted: false, reason: "provider" };
  }
}
