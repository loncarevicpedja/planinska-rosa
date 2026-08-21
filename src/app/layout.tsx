import { JsonLd } from "@/components/seo/JsonLd";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { seoDescription, seoKeywords, seoOgTitle } from "@/lib/seo";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${seoOgTitle} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: seoDescription,
  keywords: [...seoKeywords],
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: {
    canonical: `${site.url}/`,
  },
  icons: {
    icon: "/golija-slike/dvoriste/logo-planinska-rosa.png",
    apple: "/golija-slike/dvoriste/logo-planinska-rosa.png",
  },
  openGraph: {
    title: seoOgTitle,
    description: seoDescription,
    url: `${site.url}/`,
    locale: "sr_RS",
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary",
    title: seoOgTitle,
    description: seoDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-primary font-sans text-white antialiased">
        <JsonLd />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
