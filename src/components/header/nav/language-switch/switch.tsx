"use client";
import { useLanguage } from "@/app/contexts/LanguageContexts";
import { BrazilFlag } from "@/assets/nav/brazil";
import { USFlag } from "@/assets/nav/us";
import { Switch } from "@components/ui/switch";

export const SwitchComponent = () => {
  const { locale, setLocale } = useLanguage();

  const handleChange = async () => {
    setLocale(locale === "en" ? "pt-br" : "en");
  };

  return (
    <div className="flex items-center space-x-2">
      <USFlag width={24} height={24} />
      <Switch
        id="language-switch"
        className="data-[state=checked]:bg-green-600 data-[state=unchecked]:bg-pink-900"
        checked={locale === "pt-br"}
        onCheckedChange={handleChange}
      />
      <BrazilFlag width={24} height={24} />
    </div>
  );
};
