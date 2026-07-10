import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: `${siteConfig.name} | ${siteConfig.bookTitle}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.bookTitle}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.assets.bookCover,
        width: 1055,
        height: 1491,
        alt: `Обложка книги ${siteConfig.bookTitle}`
      }
    ],
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
