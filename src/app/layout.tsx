import type { Metadata, Viewport } from "next";
import { Chakra_Petch, Sora, JetBrains_Mono } from "next/font/google";
import { profile } from "@/lib/content";
import "./globals.css";

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-chakra",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://madsvschristensen.github.io";
const description = `${profile.role} based in ${profile.location}. ${profile.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description,
  authors: [{ name: profile.name }],
  keywords: [
    "Mads Christensen",
    "Cloud Engineer",
    "Software Developer",
    "Azure",
    "Google Cloud",
    "Terraform",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — ${profile.role}`,
    description,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: "#03100c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${chakra.variable} ${sora.variable} ${jetbrains.variable} antialiased`}
      >
        <div className="grove-bg" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
