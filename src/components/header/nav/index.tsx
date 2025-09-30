"use client";
import { useLanguage } from "@/app/contexts/LanguageContexts";
import { NavItem } from "./item";
import { LanguageSwitch } from "./language-switch";

export const Nav = () => {
  const { translations } = useLanguage();

  return (
    <div className="flex w-full flex-1 items-center justify-end gap-16">
      <NavItem title={translations("nav.profile")} href={"#profile"} />
      <NavItem title={translations("nav.about")} href={"#about"} />
      <NavItem title={translations("nav.projects")} href={"#projects"} />
      <NavItem title={translations("nav.skills")} href={"#skills"} />
      <NavItem title={translations("nav.contact")} href={"#contact"} />
      <LanguageSwitch />
    </div>
  );
};
