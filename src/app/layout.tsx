import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { Providers } from "@/components/providers/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "AI Marketing Agency | Growth, Web Development & Automation",
  description: "We help companies grow through performance marketing, high-converting websites and AI automation systems.",
  keywords: ["marketing agency", "performance marketing", "AI marketing", "growth", "data-driven"],
  openGraph: {
    title: "AI Marketing Agency | Growth, Web Development & Automation",
    description: "We help companies grow through performance marketing, high-converting websites and AI automation systems.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-[#0b0f19] text-white min-h-screen flex flex-col`}>
        <Providers>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
