import type { Metadata, Viewport } from "next";
import { Libre_Caslon_Text, Shippori_Mincho_B1, Zen_Kaku_Gothic_New } from "next/font/google";

import { site, store } from "@/data/store";

import "./globals.css";

const mincho = Shippori_Mincho_B1({
  weight: ["500"],
  subsets: ["latin"],
  variable: "--font-shippori",
  display: "swap",
  preload: false,
});

const gothic = Zen_Kaku_Gothic_New({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-zen-kaku",
  display: "swap",
  preload: false,
});

const caslon = Libre_Caslon_Text({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-libre-caslon",
  display: "swap",
});

const title = site.isDemo ? `${site.title}【非公式デモ】` : site.title;
const description = site.isDemo ? `【店舗提案用の非公式デモ】${site.description}` : site.description;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  // デモが公式サイトより先に検索結果へ出ないよう、公開まで検索対象から外す
  robots: site.isDemo ? { index: false, follow: false } : undefined,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: store.name,
    title,
    description,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${store.name}（イメージ写真）` }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
};

export const viewport: Viewport = {
  themeColor: "#292019",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={`${mincho.variable} ${gothic.variable} ${caslon.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
