import "@/styles/globals.css";
import { AuthProvider } from "@/providers/AuthProvider";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";

import Banner from "@/components/banner";
import { Cursor } from "@/components/cursor";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { constructImageURL } from "@/lib/image-hosting";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#06b6d4" },
    { media: "(prefers-color-scheme: dark)", color: "#06b6d4" },
  ],
};

export const metadata: Metadata = {
  title: "LockedIn AI - Professional AI Interview & Meeting Copilot",
  description:
    "LockedIn AI Co-Pilot is your AI interview & professional meeting assistant that provides real-time answers, insights, code solutions and live coaching",
  icons: {
    icon: "/favicon.ico",
    apple: constructImageURL("/landing/link-sharing/icon.png"),
  },
  // Set the canonical URL via alternates
  alternates: {
    canonical: "https://www.lockedinai.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.lockedinai.com/",
    title: "LockedIn AI - Professional AI Interview & Meeting Copilot",
    description:
      "LockedIn AI Co-Pilot is your AI interview & professional meeting assistant that provides real-time answers, insights, code solutions and live coaching",
    siteName: "LockedIn AI",
    locale: "en_US",
    images: [
      {
        url: constructImageURL(
          "/landing/link-sharing/cyber-preview-1280x720.png",
        ),
        width: 1200,
        height: 600,
        alt: "LockedIn AI - Interview Hack Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lockedin_ai",
    creator: "@lockedin_ai",
    title: "LockedIn AI - Professional AI Interview & Meeting Copilot",
    description:
      "LockedIn AI Co-Pilot is your AI interview & professional meeting assistant that provides real-time answers, insights, code solutions and live coaching",
    images: {
      url: constructImageURL(
        "/landing/link-sharing/cyber-preview-1280x720.png",
      ),
      alt: "LockedIn AI - Twitter Preview",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "h-full w-full bg-charcoal antialiased")}
      >
        <AuthProvider>
          <ViewTransitions>
            {/* <Banner /> */}
            <Cursor />
            <NavBar />
            {children}
            <Footer />
          </ViewTransitions>
        </AuthProvider>
      </body>
    </html>
  );
}
