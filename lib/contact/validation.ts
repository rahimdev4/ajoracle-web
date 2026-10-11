import type {
  ContactFieldErrors,
  ContactSubmission,
} from "@/lib/contact/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readText(formData: FormData, field: string) {
  const value = formData.get(field);

  return typeof value === "string" ? value : "";
}

function normalizeSingleLine(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

function normalizeMessage(value: string) {
  return value.replace(/\r\n?/g, "\n").trim();
}

type ContactValidationResult =
  | Readonly<{ success: true; data: ContactSubmission; honeypot: string }>
  | Readonly<{
      success: false;
      fieldErrors: ContactFieldErrors;
      honeypot: string;
    }>;

export function validateContactForm(formData: FormData): ContactValidationResult {
  const name = normalizeSingleLine(readText(formData, "name"));
  const email = normalizeSingleLine(readText(formData, "email")).toLowerCase();
  const message = normalizeMessage(readText(formData, "message"));
  const honeypot = readText(formData, "website").trim();
  const fieldErrors: ContactFieldErrors = {};

  if (name.length < 2) {
    fieldErrors.name = "Please enter your name.";
  } else if (name.length > 100) {
    fieldErrors.name = "Please keep your name under 100 characters.";
  }

  if (!email) {
    fieldErrors.email = "Please enter your email address.";
  } else if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (message.length < 10) {
    fieldErrors.message = "Please enter a message of at least 10 characters.";
  } else if (message.length > 5000) {
    fieldErrors.message = "Please keep your message under 5,000 characters.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { success: false, fieldErrors, honeypot };
  }

  return {
    success: true,
    data: { name, email, message },
    honeypot,
  };
}
