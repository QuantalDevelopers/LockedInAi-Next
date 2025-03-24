import { Metadata } from "next";

import { AmbientColor } from "@/components/ambient-color";
import { CodingCopilot } from "@/components/products/coding-copilot";
import { constructImageURL } from "@/lib/image-hosting";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "LockedIn AI Coding Copilot - Boost Your Coding Efficiency",
  description:
    "Unlock coding solutions with LockedIn AI's Coding Copilot. Master system design, ace coding interviews at Google, Amazon, Netflix, AWS, & boost your career.",
  path: "/coding-copilot",
  openGraph: {
    images: [
      {
        url: constructImageURL("/landing/products/coding.png"),
        alt: "Coding Copilot - AI coding assistant for coding interviews and developers",
      },
    ],
  },
});

export default function CodingCopilotPage() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <CodingCopilot />
    </div>
  );
}
