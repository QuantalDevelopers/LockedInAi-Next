import { Metadata } from "next";

import { AmbientColor } from "@/components/ambient-color";
import { OnlineAssessment } from "@/components/products/online-assessment";
import { constructImageURL } from "@/lib/image-hosting";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Online Assessment Assistant - Ace any Online Assessment with Ease",
  description:
    "LockedIn AI Online Assessment Assistant: No need to prepare for online assessment such as aws certification, hankerank, codility, hackerrank, codewars, leetcode...",
  path: "/online-assessment",
  openGraph: {
    images: [
      {
        url: constructImageURL("/landing/products/OA.png"),
        alt: "Online Assessment AI -  hackerrank, codewars, leetcode, aws certification",
      },
    ],
  },
});

export default function OnlineAssessmentPage() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <OnlineAssessment />
    </div>
  );
}
