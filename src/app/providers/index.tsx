import { cookies } from "next/dist/server/request/cookies";
import { Toaster } from "sonner";
import { LanguageProvider, TLanguage } from "../contexts/LanguageContexts";
import { GoogleAnalytics } from "@next/third-parties/google"

async function getTranslations(locale: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/locales/${locale}/common.json`);
  return res.json();
}

export async function Providers({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies();
    const cookieLocale =
        (cookieStore.get("NEXT_LOCALE")?.value as TLanguage) || "en";

    const translations = await getTranslations(cookieLocale);
    
    return (
        <LanguageProvider
            initialLocale={cookieLocale}
            initialTranslations={translations}
        >
            {children}
            <Toaster />
            <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID as string} />
        </LanguageProvider>
    );
}