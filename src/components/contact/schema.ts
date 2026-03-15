import { z } from "zod";

export type ContactField = "name" | "email" | "project" | "message";
export type ContactErrorKey =
  | "contact.errors.email.invalid"
  | "contact.errors.email.required"
  | "contact.errors.message.max"
  | "contact.errors.message.min"
  | "contact.errors.message.required"
  | "contact.errors.name.max"
  | "contact.errors.name.min"
  | "contact.errors.name.required"
  | "contact.errors.project.max"
  | "contact.errors.project.min"
  | "contact.errors.project.required";

export type ContactFieldErrors = Partial<Record<ContactField, ContactErrorKey>>;

export type ContactFormValues = {
  email: string;
  message: string;
  name: string;
  project: string;
};

function validateName(value: string) {
  if (value.length === 0) return "contact.errors.name.required" as const;
  if (value.length < 2) return "contact.errors.name.min" as const;
  if (value.length > 80) return "contact.errors.name.max" as const;
  return null;
}

function validateEmail(value: string) {
  if (value.length === 0) return "contact.errors.email.required" as const;

  const parsed = z.string().email().safeParse(value);
  if (!parsed.success) return "contact.errors.email.invalid" as const;

  return null;
}

function validateProject(value: string) {
  if (value.length === 0) return "contact.errors.project.required" as const;
  if (value.length < 2) return "contact.errors.project.min" as const;
  if (value.length > 120) return "contact.errors.project.max" as const;
  return null;
}

function validateMessage(value: string) {
  if (value.length === 0) return "contact.errors.message.required" as const;
  if (value.length < 20) return "contact.errors.message.min" as const;
  if (value.length > 2000) return "contact.errors.message.max" as const;
  return null;
}

export const contactSchema = z
  .object({
    email: z.string().trim(),
    message: z.string().trim(),
    name: z.string().trim(),
    project: z.string().trim(),
  })
  .superRefine((value, ctx) => {
    const emailError = validateEmail(value.email);
    if (emailError) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: emailError,
        path: ["email"],
      });
    }

    const nameError = validateName(value.name);
    if (nameError) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: nameError,
        path: ["name"],
      });
    }

    const projectError = validateProject(value.project);
    if (projectError) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: projectError,
        path: ["project"],
      });
    }

    const messageError = validateMessage(value.message);
    if (messageError) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: messageError,
        path: ["message"],
      });
    }
  });

export function getContactFormValues(formData: FormData): ContactFormValues {
  return {
    email: String(formData.get("email") || "").trim(),
    message: String(formData.get("message") || "").trim(),
    name: String(formData.get("name") || "").trim(),
    project: String(formData.get("project") || "").trim(),
  };
}

export function mapContactErrors(
  fieldErrors: Record<string, string[] | undefined>,
): ContactFieldErrors {
  return {
    email: fieldErrors.email?.[0] as ContactErrorKey | undefined,
    message: fieldErrors.message?.[0] as ContactErrorKey | undefined,
    name: fieldErrors.name?.[0] as ContactErrorKey | undefined,
    project: fieldErrors.project?.[0] as ContactErrorKey | undefined,
  };
}
