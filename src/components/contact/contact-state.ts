import { ContactErrorKey, ContactFieldErrors } from "./schema";

export type ContactActionState = {
  errors: ContactFieldErrors;
  message: ContactErrorKey | "contact.status.error" | "contact.status.success" | null;
  success: boolean;
  values: {
    email: string;
    message: string;
    name: string;
    project: string;
  };
};

export const initialContactState: ContactActionState = {
  errors: {},
  message: null,
  success: false,
  values: {
    email: "",
    message: "",
    name: "",
    project: "",
  },
};