import { IconReceiptFilled } from "@tabler/icons-react";

import { CTA } from "@/components/cta";
import CyberBackground from "@/components/cyber-background";
import { FAQs } from "@/components/faqs";
import { Features } from "@/components/features";
import { FeatureIconContainer } from "@/components/features/feature-icon-container";
import { Hero } from "@/components/hero";
import { IsItFree } from "@/components/is-it-free";
import { Journey } from "@/components/journey";
import { MeetingClouds } from "@/components/meeting-clouds";
import { Scenarios } from "@/components/scenarios";
import { Testimonials } from "@/components/testimonials";
import { WhyUs } from "@/components/whyus";
import { constructImageURL } from "@/lib/image-hosting";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "LockedIn AI - Professional AI Interview & Meeting Copilot",
  description:
    "LockedIn AI Co-Pilot is your AI interview & professional meeting assistant that provides real-time answers, insights, code solutions and live coaching",
  path: "/",
  openGraph: {
    images: [
      {
        url: constructImageURL(
          "/landing/link-sharing/cyber-preview-1280x720.png",
        ),
        alt: "LockedIn AI - Interview Hack Preview",
      },
    ],
  },
});

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <CyberBackground />
      <Hero />
      <Features />
      <WhyUs />
      <Scenarios />
      <Journey />
      <MeetingClouds />
      <Testimonials />
      <IsItFree />
      <div className="py-20 sm:py-40">
        <FeatureIconContainer className="flex items-center justify-center overflow-hidden">
          <IconReceiptFilled className="h-6 w-6 text-cyan-500" />
        </FeatureIconContainer>
        <FAQs />
      </div>
      <CTA />
    </div>
  );
}
