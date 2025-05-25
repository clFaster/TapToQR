import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TapToQR - Generate and share QR codes instantly",
  description:
    "Generate customizable QR codes from any webpage with TapToQR - instantly share links, text, or calendar events using a clean, intuitive browser extension with quick actions and personalization options.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/ic_TapToQR_16.png", sizes: "16x16" },
      { url: "/ic_TapToQR_32.png", sizes: "32x32" },
      { url: "/ic_TapToQR_48.png", sizes: "48x48" },
      { url: "/ic_TapToQR_64.png", sizes: "64x64" },
      { url: "/ic_TapToQR.svg", type: "image/svg+xml" }
    ],
    apple: "/ic_TapToQR_32.png",
    shortcut: "/ic_TapToQR_32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
