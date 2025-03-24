import { Metadata } from "next";

import { AmbientColor } from "@/components/ambient-color";
import { AiCopilot } from "@/components/products/ai-copilot";
import { constructImageURL } from "@/lib/image-hosting";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "AI Interview Copilot - AI Interview Assisant for job seekers",
  description:
    "Real-time AI Interview Copilot | Profession AI Meeting Copilot: Real-time answer and actionable instructions | AI Interview & Meeting Coach: Instant Feedback & Insights",
  path: "/ai-copilot",
  openGraph: {
    images: [
      {
        url: constructImageURL("/landing/products/interview.png"),
        alt: "Interview & Meeting AI Copilot - real-time answers assistant and live coaching",
      },
    ],
  },
});

export default function AICopilotPage() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <AiCopilot />
    </div>
  );
}
