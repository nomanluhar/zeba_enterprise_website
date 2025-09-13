import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import "./custom.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  generateSEOMetadata,
  generateBusinessSchema,
  StructuredData,
} from "@/components/ui/SEOHead";
import EnquiryModalClient from "@/components/ui/EnquiryModalClient";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = generateSEOMetadata({
  title: "Zeba Enterprise - Leading Import Export Company in India",
  description:
    "Zeba Enterprise is a leading import-export company specializing in connecting global markets with premium Indian products. We provide comprehensive international trade solutions including export services, import agent services, sourcing, and trade consultation.",
  keywords:
    "import export company, international trade, export services India, import agent, global sourcing, trade consultation, Indian products export, international business, import export Gujarat, Ahmedabad import export",
  canonical: "https://zeba-enterprise.com",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = generateBusinessSchema();

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <StructuredData data={businessSchema} />
      </head>
      <body
        className={`${inter.variable} ${roboto.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <EnquiryModalClient />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
