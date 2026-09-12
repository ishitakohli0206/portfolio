import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/data";

const siteUrl = "https://ishitakohli.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — Full-Stack Engineer`,
  description: profile.intro,
  keywords: [
    "Ishita Kohli",
    "Full-Stack Engineer",
    "React Developer",
    "Node.js Developer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Full-Stack Engineer`,
    description: profile.intro,
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Full-Stack Engineer`,
    description: profile.intro,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg text-text antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
