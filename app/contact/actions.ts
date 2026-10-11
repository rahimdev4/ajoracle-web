"use server";

import { createHash } from "node:crypto";

import { headers } from "next/headers";

import { deliverContactMessage } from "@/lib/contact/delivery";
import { consumeContactRateLimit } from "@/lib/contact/rate-limit";
import type { ContactActionState } from "@/lib/contact/types";
import { validateContactForm } from "@/lib/contact/validation";

function createRequestKey(forwardedFor: string | null, userAgent: string | null) {
  const clientAddress = forwardedFor?.split(",")[0]?.trim() || "unknown";

  return createHash("sha256")
    .update(`${clientAddress}:${userAgent ?? "unknown"}`)
    .digest("hex");
}

export async function submitContactForm(
  _previousState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const requestHeaders = await headers();
  const requestKey = createRequestKey(
    requestHeaders.get("x-forwarded-for"),
    requestHeaders.get("user-agent"),
  );

  if (!consumeContactRateLimit(requestKey)) {
    return {
      status: "error",
      message: "Too many messages were submitted. Please try again later.",
    };
  }

  const validation = validateContactForm(formData);

  if (validation.honeypot) {
    return {
      status: "error",
      message: "We could not submit your message. Please try again.",
    };
  }

  if (!validation.success) {
    return {
      status: "error",
      message: "Please review the highlighted fields and try again.",
      fieldErrors: validation.fieldErrors,
    };
  }

  const delivery = await deliverContactMessage(validation.data);

  if (!delivery.accepted) {
    return {
      status: "error",
      message:
        delivery.reason === "configuration"
          ? "Message delivery is not configured yet. Please email contact@ajoracle.com directly."
          : "We could not send your message right now. Please try again or email contact@ajoracle.com.",
    };
  }

  return {
    status: "success",
    message: "Thank you. Your message has been sent successfully.",
  };
}
