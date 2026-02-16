import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { cookies } from "next/headers";
import { LanguageProvider, TLanguage } from "./contexts/LanguageContexts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hi, there!",
  description: "FullStack Developer",
};

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

async function getTranslations(locale: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/locales/${locale}/common.json`);
  return res.json();
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const cookieLocale =
    (cookieStore.get("NEXT_LOCALE")?.value as TLanguage) || "en";

  const translations = await getTranslations(cookieLocale);
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-zinc-950 text-zinc-200 antialiased`}
      >
        <LanguageProvider
          initialLocale={cookieLocale}
          initialTranslations={translations}
        >
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
