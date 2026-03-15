import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const siteUrl = "https://eduardofontana.dev";
const siteName = "Eduardo Fontana";
const siteTitle = "Eduardo Fontana | Full Stack Developer";
const siteDescription =
  "Portfolio of Eduardo Fontana, a full stack developer focused on scalable systems, microservices, cloud infrastructure, and product engineering.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Eduardo Fontana",
    "Full Stack Developer",
    "Software Engineer",
    "Backend Developer",
    "TypeScript",
    "Go",
    "Vue.js",
    "React",
    "GraphQL",
    "Scalable Systems",
    "Microservices",
    "Cloud Infrastructure",
    "Portfolio",
    "Desenvolvedor",
    "Sites",
    "Construção de Software",
    "Salvador",
    "Bahia",
    "Brazil",
    "UFBA",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "pt-BR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 1200,
        alt: "Eduardo Fontana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/profile.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-zinc-950 text-zinc-200 antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
