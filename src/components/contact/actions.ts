"use server";

import { initialContactState, type ContactActionState } from "./contact-state";
import {
  getContactFormValues,
  mapContactErrors,
  contactSchema,
} from "./schema";

export async function submitContactAction(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const values = getContactFormValues(formData);
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return {
      errors: mapContactErrors(parsed.error.flatten().fieldErrors),
      message: null,
      success: false,
      values,
    };
  }

  const endpoint = `${process.env.CONTACT_API_URL}/contact`;

  if (!endpoint) {
    return {
      errors: {},
      message: "contact.status.error",
      success: false,
      values,
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify({
        email: parsed.data.email,
        message: parsed.data.message,
        name: parsed.data.name,
        project: parsed.data.project,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        errors: {},
        message: "contact.status.error",
        success: false,
        values,
      };
    }

    return {
      errors: {},
      message: "contact.status.success",
      success: true,
      values: initialContactState.values,
    };
  } catch {
    return {
      errors: {},
      message: "contact.status.error",
      success: false,
      values,
    };
  }
}