import { Metadata } from "next";

import { AmbientColor } from "@/components/ambient-color";
import { ResumeGuru } from "@/components/products/resume-guru";
import { constructImageURL } from "@/lib/image-hosting";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "AI Resume Builder - AI-Powered ATS Optimized Resume Builder",
  description:
    "LockedIn AI Resume Builder: Create a professional resume in minutes with our most powerful AI-powered resume builder. Get past the ATS and land your dream job!",
  path: "/resume-guru",
  openGraph: {
    images: [
      {
        url: constructImageURL("/landing/products/resume.png"),
        alt: "AI Resume Builder - ATS Optimized Resume",
      },
    ],
  },
});

export default function ResumeGuruPage() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <ResumeGuru />
    </div>
  );
}
