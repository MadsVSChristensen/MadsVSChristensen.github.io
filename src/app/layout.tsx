import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { BackgroundWires } from "@/components/ui/BackgroundWires";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Mads Christensen - Professional Profile",
  description: "Professional portfolio of Mads Christensen, Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased relative min-h-screen bg-[var(--background)] text-[var(--foreground)]`}>
        <BackgroundWires />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
