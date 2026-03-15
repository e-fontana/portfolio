"use client";

import { useLanguage } from "@/app/contexts/LanguageContexts";
import { Stagger, StaggerItem } from "../motion/reveal";
import { Subtitle } from "../text/subtitle";
import { Text } from "../text/text";
import { Title } from "../text/title";

const timeline = [
  {
    key: "cotabox",
  },
  {
    key: "titan",
  },
  {
    key: "42lux",
  },
  {
    key: "foxtrot",
  },
];

export const Projects = () => {
  const { translations } = useLanguage();

  return (
    <section id="projects" className="flex flex-col gap-8 py-4">
      <Stagger className="max-w-2xl" staggerChildren={0.1}>
        <StaggerItem>
          <Title className="text-2xl sm:text-3xl">
            {translations("timeline.title")}
          </Title>
        </StaggerItem>
        <StaggerItem>
          <Subtitle className="mt-3 text-zinc-400">
            {translations("timeline.subtitle")}
          </Subtitle>
        </StaggerItem>
      </Stagger>

      <Stagger className="flex flex-col" delayChildren={0.12} staggerChildren={0.1}>
        {timeline.map((entry, index) => (
          <StaggerItem key={entry.key}>
            <article className="grid grid-cols-[24px_minmax(0,1fr)] gap-x-4 gap-y-2 sm:grid-cols-[142px_24px_minmax(0,1fr)] sm:gap-x-4 sm:gap-y-0">
              <div className="col-span-2 whitespace-nowrap text-[11px] font-medium leading-5 text-green-600 sm:col-span-1 sm:col-start-1 sm:pt-1 sm:text-sm sm:leading-6">
                {translations(`timeline.items.${entry.key}.start`)} -{" "}
                {translations(`timeline.items.${entry.key}.end`)}
              </div>

              <div className="relative row-span-2 hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-zinc-800" />
                <div
                  className={`absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-2 ${
                    index === 0 || index === timeline.length - 1
                      ? "border-black bg-green-600 h-4 w-4"
                      : "border-green-600 bg-black"
                  } ${index === 0 ? "top-0" : index === timeline.length - 1 ? "bottom-0" : "top-8 -translate-y-1/2"}`}
                />
              </div>

              <div className="relative row-start-2 min-h-full sm:hidden">
                <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-zinc-800" />
                <div
                  className={`absolute left-1/2 h-4 w-4 -translate-x-1/2 rounded-full border-4 ${
                    index === 0 || index === timeline.length - 1
                      ? "border-black bg-green-600"
                      : "border-green-600 bg-black"
                  } ${index === 0 ? "top-0" : index === timeline.length - 1 ? "bottom-0" : "top-8 -translate-y-1/2"}`}
                />
              </div>

              <div className="col-start-2 rounded-2xl bg-zinc-950/40 p-5 sm:col-start-3">
                <Title className="text-lg sm:text-xl">
                  {translations(`timeline.items.${entry.key}.title`)}
                </Title>
                <Subtitle className="mt-1 text-zinc-400">
                  {translations(`timeline.items.${entry.key}.organization`)}
                </Subtitle>
                <Text className="mt-4 text-base leading-7 text-zinc-300">
                  {translations(`timeline.items.${entry.key}.description`)}
                </Text>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
};
