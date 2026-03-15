"use client";

import { useLanguage } from "@/app/contexts/LanguageContexts";
import { Stagger, StaggerItem } from "../motion/reveal";

export const About = () => {
  const { translations } = useLanguage();

  return (
    <div
      id="about"
      className="flex w-full flex-col items-start gap-8 py-4 lg:flex-row lg:items-center lg:justify-center"
    >
      <Stagger
        className="flex w-full flex-col gap-4 lg:w-1/2"
        delayChildren={0.06}
        staggerChildren={0.1}
      >
        <StaggerItem>
          <h2 className="text-base leading-7 sm:text-lg">
            {translations("about.paragraph1")}
          </h2>
        </StaggerItem>
        <StaggerItem>
          <h2 className="text-base leading-7 sm:text-lg">
            {translations("about.paragraph2")}
          </h2>
        </StaggerItem>
        <StaggerItem>
          <h2 className="text-base leading-7 sm:text-lg">
            {translations("about.paragraph3")}
          </h2>
        </StaggerItem>
      </Stagger>
      <div className="hidden lg:block lg:w-1/2"></div>
    </div>
  );
};
