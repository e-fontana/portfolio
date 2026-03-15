"use client";

import { useLanguage } from "@/app/contexts/LanguageContexts";
import { Subtitle } from "@/components/text/subtitle";
import { Text } from "@/components/text/text";
import { Title } from "@/components/text/title";

export const ProfileText = () => {
  const { translations } = useLanguage();

  return (
    <div className="flex flex-col gap-1 text-lg sm:text-xl">
      <Subtitle>{translations("profile.greeting")}</Subtitle>
      <Title id="profile-title" className="text-3xl sm:text-4xl lg:text-5xl">
        EDUARDO FONTANA
      </Title>
      <Subtitle className="text-base font-medium text-green-600 sm:text-lg">
        {translations("profile.title")}
      </Subtitle>
    </div>
  );
};

export const ProfileBody = () => {
  const { translations } = useLanguage();

  return (
    <div className="w-full max-w-[600px] text-balance">
      <Text className="text-base leading-7 sm:text-lg">
        {translations("profile.body")}
      </Text>
    </div>
  );
};
