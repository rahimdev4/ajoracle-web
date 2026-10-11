export type ContactField = "name" | "email" | "message";

export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export type ContactActionState = Readonly<{
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: ContactFieldErrors;
}>;

export type ContactSubmission = Readonly<{
  name: string;
  email: string;
  message: string;
}>;
