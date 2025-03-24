import { Metadata } from "next";
import { notFound } from "next/navigation";

import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Page Not Found | LockedIn AI",
  description:
    "We couldn't find the page you were looking for. Please check the URL or navigate back to our homepage.",
  path: "/404",
});

export default function CatchAllPage() {
  notFound();
}
