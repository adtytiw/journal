import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { PreloadResources } from "./preload";
import { SandpackCSS } from "./blog/[slug]/sandpack";

export const metadata: Metadata = {
  metadataBase: new URL("https://journ.dev"),
  title: {
    default: "Aditya Tiwari",
    template: "%s | Aditya Tiwari",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Aditya Tiwari",
    description: "Developer, writer, and creator.",
    url: "https://journ.dev",
    siteName: "Aditya Tiwari",
    locale: "en_US",
    type: "website",
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
    icon: "/images/favicons-alt/favicon.ico",
    apple: "/images/favicons-alt/apple-touch-icon.png",
  },
  manifest: "/images/favicons-alt/site.webmanifest",
  twitter: {
    title: "Aditya Tiwari",
    card: "summary_large_image",
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <SandpackCSS />
      </head>
        <body className="antialiased max-w-2xl flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Analytics />
          <PreloadResources />
        </main>
      </body>
    </html>
  );
}
