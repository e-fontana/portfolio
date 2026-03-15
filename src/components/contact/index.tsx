"use client";

import { useLanguage } from "@/app/contexts/LanguageContexts";
import { useActionState, useEffect, useRef } from "react";
import { PiCoffeeFill } from "react-icons/pi";
import { useFormStatus } from "react-dom";
import { submitContactAction } from "./actions";
import { Subtitle } from "../text/subtitle";
import { Text } from "../text/text";
import { Title } from "../text/title";
import { initialContactState } from "./contact-state";
import { toast } from "sonner";

type ContactField = "name" | "email" | "project" | "message";

const SubmitButton = ({
  label,
  pendingLabel,
}: {
  label: string;
  pendingLabel: string;
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 items-center justify-center rounded-xl bg-green-600 px-6 font-semibold text-black transition hover:bg-green-500 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-green-600"
    >
      {pending ? pendingLabel : label}
    </button>
  );
};

export const Contact = () => {
  const { translations } = useLanguage();

  const [state, formAction] = useActionState(
    submitContactAction,
    initialContactState
  );

  const formRef = useRef<HTMLFormElement>(null);

  const currentState = {
    success: state?.success ?? false,
    message: state?.message ?? null,
    errors: state?.errors ?? {},
    values: {
      name: state?.values?.name ?? "",
      email: state?.values?.email ?? "",
      project: state?.values?.project ?? "",
      message: state?.values?.message ?? "",
    },
  };

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(translations("contact.status.success"));
      formRef.current?.reset();
    }

    if (state.message === "contact.status.error") {
      toast.error(translations("contact.status.error"));
    }
  }, [state, translations]);

  const getFieldClassName = (field: ContactField) =>
    `h-12 rounded-xl border bg-black/30 px-4 text-zinc-100 outline-none transition ${
      currentState.errors?.[field]
        ? "border-red-500 focus:border-red-400"
        : "border-zinc-800 focus:border-green-600"
    }`;

  const messageFieldClassName = `rounded-xl border bg-black/30 px-4 py-3 text-zinc-100 outline-none transition ${
    currentState.errors?.message
      ? "border-red-500 focus:border-red-400"
      : "border-zinc-800 focus:border-green-600"
  }`;

  return (
    <section id="contact" className="w-full py-10 sm:py-16">
      <div className="grid gap-8 rounded-3xl bg-zinc-950/50 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="flex flex-col gap-4">
          <Title className="text-2xl sm:text-3xl">
            {translations("contact.title")}
          </Title>

          <Subtitle className="flex items-center gap-2 text-zinc-400">
            {translations("contact.subtitle")}
            <PiCoffeeFill className="w-6 text-orange-500 sm:w-8" />
          </Subtitle>

          <Text className="max-w-md text-base leading-7 text-zinc-400">
            {translations("contact.description")}
          </Text>
        </div>

        <form ref={formRef} className="grid gap-4" action={formAction}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-zinc-300">
                {translations("contact.fields.name")}
              </span>

              <input
                name="name"
                type="text"
                defaultValue={currentState.values.name}
                placeholder={translations("contact.fields.namePlaceholder")}
                className={getFieldClassName("name")}
              />

              {currentState.errors.name && (
                <span className="text-sm text-red-400">
                  {translations(currentState.errors.name)}
                </span>
              )}
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-zinc-300">
                {translations("contact.fields.email")}
              </span>

              <input
                name="email"
                type="email"
                defaultValue={currentState.values.email}
                placeholder={translations("contact.fields.emailPlaceholder")}
                className={getFieldClassName("email")}
              />

              {currentState.errors.email && (
                <span className="text-sm text-red-400">
                  {translations(currentState.errors.email)}
                </span>
              )}
            </label>
          </div>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-zinc-300">
              {translations("contact.fields.project")}
            </span>

            <input
              name="project"
              type="text"
              defaultValue={currentState.values.project}
              placeholder={translations("contact.fields.projectPlaceholder")}
              className={getFieldClassName("project")}
            />

            {currentState.errors.project && (
              <span className="text-sm text-red-400">
                {translations(currentState.errors.project)}
              </span>
            )}
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-zinc-300">
              {translations("contact.fields.message")}
            </span>

            <textarea
              name="message"
              rows={6}
              defaultValue={currentState.values.message}
              placeholder={translations("contact.fields.messagePlaceholder")}
              className={messageFieldClassName}
            />

            {currentState.errors?.message && (
              <span className="text-sm text-red-400">
                {translations(currentState.errors?.message)}
              </span>
            )}
          </label>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-end">
            <SubmitButton
              label={translations("contact.submit")}
              pendingLabel={translations("contact.submitting")}
            />
          </div>
        </form>
      </div>
    </section>
  );
};
