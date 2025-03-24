// components/whyus/index.tsx

import Link from "next/link";
import {
  IconBolt,
  IconBrain,
  IconBuildingStore,
  IconClock,
  IconCoin,
  IconDeviceMobile,
  IconInfinity,
} from "@tabler/icons-react";

import { StartPracticingButton } from "@/components/affiliate-button";
import { AudioWave } from "@/components/audio-wave";
import { FeatureIconContainer } from "@/components/features/feature-icon-container";

export const WhyUs = () => {
  const features = [
    {
      badge: "Speech Recognition",
      title: "Real-Time Audio Intelligence",
      description:
        "Experience unmatched speed with our industry-leading 116ms response time, ensuring seamless and natural interview interactions.",
      showWave: true,
      bottomTag: {
        icon: <IconBolt className="h-4 w-4" />,
        text: "Speed-optimized",
      },
    },
    {
      badge: "Premium AI",
      title: "Advanced AI Models",
      description: (
        <>
          Powered by fine-tuned Deepseek V3 & R1(Rivaling GPT O1), GPT-4o, Azure
          GPT-4o, Google Gemini 2.0, and Claude 3.5 Sonnet(Beta) offering
          superior reasoning and accuracy compared to the GPT-4o Mini models
          used by 99% of similar platforms.
        </>
      ),
      bottomTag: {
        icon: <IconBrain className="h-4 w-4" />,
        text: "AI-driven evaluation",
      },
    },
    {
      badge: "Guaranteed Results",
      title: "Proven Success Rate",
      description:
        "80% of our subscribers secure their dream jobs within 3 months, with 40% landing $100K+ offers. Your success is our guarantee.",
      bottomTag: {
        icon: <IconCoin className="h-4 w-4" />,
        text: "High success rate",
      },
    },
    {
      badge: "Full Coverage",
      title: "Complete Career Ecosystem",
      description:
        "Access comprehensive interview prep, resume building, mock interviews, and join the largest community of tech professionals on Discord.",
      bottomTag: {
        icon: <IconBuildingStore className="h-4 w-4" />,
        text: "Full ecosystem",
      },
    },
    {
      badge: "Mobile Optimized",
      title: "Practice Anywhere",
      description: (
        <>
          No app download needed - get real-time answers in your live interview
          and conduct mock interviews anywhere, anytime with our
          mobile-optimized platform. start practicing interviews instantly from
          your phone&apos;s browser.{" "}
          <Link href="#faq" className="hover text-cyan-500 underline">
            Supported Browsers
          </Link>
        </>
      ),
      bottomTag: {
        icon: <IconDeviceMobile className="h-4 w-4" />,
        text: "Mobile-first design",
      },
    },
    {
      badge: "Cutting-Edge Technology",
      title: "Dual-Layer AI Platform",
      description:
        "The only dual-layer platform offering both an AI Copilot and an AI Coach running simultaneously, delivering real-time insights and instant corrections.",
      bottomTag: {
        icon: <IconClock className="h-4 w-4" />,
        text: "Next-Gen Solution",
      },
    },
  ];

  return (
    <div id="whyus" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-black" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 text-center">
          <FeatureIconContainer className="mx-auto flex items-center justify-center overflow-hidden">
            <IconBrain className="h-6 w-6 text-cyan-500" />
          </FeatureIconContainer>
          <h2 className="mt-8 text-4xl font-bold text-white sm:text-5xl">
            Why use <span className="text-cyan-500">LockedIn AI</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">
            The most advanced interview preparation platform, backed by
            cutting-edge AI technology
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex h-full flex-col rounded-2xl bg-neutral-900/50 p-8 transition-all duration-300 hover:bg-neutral-800/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              <div className="mb-4 flex items-center gap-x-2">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-500">
                  {feature.badge}
                </span>
              </div>

              <h3 className="mb-4 text-xl font-bold text-white">
                {feature.title}
              </h3>
              <p className="flex-grow text-neutral-400">
                {feature.description}
              </p>

              {feature.showWave && (
                <div className="mt-6">
                  <AudioWave />
                </div>
              )}

              {feature.bottomTag && !feature.showWave && (
                <div className="mt-6 flex items-center gap-x-2 text-base">
                  <span className="flex items-center gap-x-1 text-cyan-500">
                    {feature.bottomTag.icon}
                    <span>{feature.bottomTag.text}</span>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <StartPracticingButton />

        <div className="mt-8 text-center text-sm text-neutral-500">
          * Start practicing with the most advanced career preparation platform
          available
        </div>
      </div>
    </div>
  );
};
