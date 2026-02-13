import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taptoqr.moritzreis.dev"),
  title: {
    default: "TapToQR - QR codes for pages and custom content",
    template: "%s | TapToQR",
  },
  description:
    "TapToQR is an open-source browser extension that creates QR codes for webpages, text, contacts, Wi-Fi, and calendar events.",
  keywords: [
    "QR code generator",
    "browser extension",
    "chrome extension",
    "firefox addon",
    "edge extension",
    "QR code",
    "share link",
    "calendar QR",
    "wifi QR",
  ],
  authors: [{ name: "TapToQR Team" }],
  creator: "TapToQR",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taptoqr.moritzreis.dev",
    title: "TapToQR - QR codes for pages and custom content",
    description:
      "Create QR codes for webpages and custom content directly from your browser.",
    siteName: "TapToQR",
    images: [
      {
        url: "/store/TapToQr-InAction.png",
        width: 1200,
        height: 630,
        alt: "TapToQR in Action",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TapToQR - QR codes for pages and custom content",
    description:
      "Create QR codes for webpages and custom content directly from your browser.",
    images: ["/store/TapToQr-InAction.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/ic_TapToQR_16.png", sizes: "16x16" },
      { url: "/ic_TapToQR_32.png", sizes: "32x32" },
      { url: "/ic_TapToQR_48.png", sizes: "48x48" },
      { url: "/ic_TapToQR_64.png", sizes: "64x64" },
      { url: "/ic_TapToQR.svg", type: "image/svg+xml" },
    ],
    apple: "/ic_TapToQR_32.png",
    shortcut: "/ic_TapToQR_32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
