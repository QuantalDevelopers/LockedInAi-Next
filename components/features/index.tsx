import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Brain,
  FileText,
  Globe,
  Keyboard,
  MousePointerClick,
  Trophy,
} from "lucide-react";
import { RiRobot2Fill } from "react-icons/ri";

import { constructImageURL } from "@/lib/image-hosting";

import { TryItFreeButton } from "../affiliate-button";
import { Heading } from "../heading";
import { Tabs } from "../tabs";
import { FeatureIconContainer } from "./feature-icon-container";

export function Features() {
  const tabs = [
    {
      title: "AI Copilot",
      value: "interviewmaster",
      content: (
        <>
          <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-700 to-violet-900 p-5 text-xl font-bold text-white md:text-4xl">
            <Link
              href="/ai-copilot"
              className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/10 px-2 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 md:right-8 md:top-8"
            >
              <span className="hidden md:block">See More</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <div className="mt-3 pb-10 text-center">
              <div className="mb-3 flex items-center justify-center gap-2">
                <h2 className="text-xl font-bold text-cyan-300 transition-colors duration-300 hover:text-white md:text-3xl">
                  Interview & Meeting Copilot
                </h2>
              </div>
              <div className="flex flex-col gap-2 text-xs md:text-base">
                <span className="flex items-center justify-center gap-2">
                  <Brain className="h-4 w-4 text-cyan-300" />
                  Accurate, real-time and tailored answers
                </span>
                <span className="flex items-center justify-center gap-2">
                  <Keyboard className="h-4 w-4 text-cyan-300" />
                  Tailored detailed feedbacks and correction
                </span>
                <span className="mt-2 text-cyan-200">
                  Fully customizable to fit your needs
                </span>
              </div>
            </div>
            <Link
              href="/ai-copilot"
              className="flex justify-center transition-transform duration-300 hover:scale-105 md:mt-5"
            >
              <video
                src={constructImageURL(
                  "/landing/features/mp4/ai_copilot_1k.mp4",
                )}
                height={800}
                width={1400}
                className="w-hull h-auto transform rounded-lg object-cover transition-transform duration-500 hover:scale-105 md:w-[80%]"
                draggable={false}
                autoPlay
                loop
                muted
                playsInline
              />
            </Link>
          </div>
        </>
      ),
    },
    {
      title: "Coding Copilot",
      value: "codingai",
      content: (
        <>
          <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-700 to-violet-900 p-5 text-xl font-bold text-white md:text-4xl">
            <Link
              href="/coding-copilot"
              className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/10 px-2 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 md:right-8 md:top-8"
            >
              <span className="hidden md:block">See More</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <div className="mt-3 pb-10 text-center">
              <div className="mb-3 flex items-center justify-center gap-2">
                <h2 className="text-xl font-bold text-cyan-300 transition-colors duration-300 hover:text-white md:text-3xl">
                  Coding Copilot
                </h2>
              </div>
              <div className="flex flex-col gap-2 text-xs md:text-base">
                <span className="flex items-center justify-center gap-2">
                  <Brain className="h-4 w-4 text-cyan-300" />
                  Real-time Screen Analysis
                </span>
                <span className="flex items-center justify-center gap-2">
                  <Keyboard className="h-4 w-4 text-cyan-300" />
                  Smart code completion and optimization tips
                </span>
                <span className="mt-2 text-cyan-200">
                  No more coding anxiety with AI-powered insights
                </span>
              </div>
            </div>
            <Link
              href="/coding-copilot"
              className="flex justify-center transition-transform duration-300 hover:scale-105 md:mt-5"
            >
              <video
                src={constructImageURL("/landing/features/new_coding_demo.mp4")}
                height={800}
                width={1400}
                className="h-auto w-full transform rounded-lg object-cover transition-transform duration-500 hover:scale-105 md:w-[80%]"
                draggable={false}
                autoPlay
                loop
                muted
                playsInline
              />
            </Link>
          </div>
        </>
      ),
    },
    {
      title: "AI Resume Builder",
      value: "resume",
      content: (
        <>
          <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-700 to-violet-900 p-5 text-xl font-bold text-white md:text-4xl">
            <Link
              href="/resume-guru"
              className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/10 px-2 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 md:right-8 md:top-8"
            >
              <span className="hidden md:block">See More</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <div className="mt-3 pb-10 text-center">
              <div className="mb-3 flex items-center justify-center gap-2">
                <h2 className="text-xl font-bold text-cyan-300 transition-colors duration-300 hover:text-white md:text-3xl">
                  AI Resume Builder
                </h2>
              </div>
              <div className="flex flex-col gap-2 text-xs md:text-base">
                <span className="flex items-center justify-center gap-2">
                  <Brain className="h-4 w-4 text-cyan-300" />
                  AI-powered optimization & formatting
                </span>
                <span className="flex items-center justify-center gap-2">
                  <Trophy className="h-4 w-4 text-cyan-300" />
                  ATS optimization templates & keyword
                </span>
                <span className="mt-2 text-cyan-200">
                  10x your chances to your dream role
                </span>
              </div>
            </div>
            <Link
              href="/resume-guru"
              className="flex justify-center transition-transform duration-300 hover:scale-105 md:mt-5"
            >
              <Image
                src={`${constructImageURL("/landing/features/resume.jpg")}`}
                alt="LockedIn AI Resume Builder"
                width="1400"
                height="800"
                className="w-hull mx-auto h-full rounded-xl object-cover object-left-top md:h-[90%] md:w-[80%]"
              />
            </Link>
          </div>
        </>
      ),
    },
    {
      title: "Online Assessment",
      value: "oa",
      content: (
        <>
          <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-700 to-violet-900 p-5 text-xl font-bold text-white md:text-4xl">
            <Link
              href="/online-assessment"
              className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/10 px-2 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 md:right-8 md:top-8"
            >
              <span className="hidden md:block">See More</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <div className="mt-3 pb-10 text-center">
              <div className="mb-3 flex items-center justify-center gap-2">
                <h2 className="text-xl font-bold text-cyan-300 transition-colors duration-300 hover:text-white md:text-3xl">
                  Online Assessment
                </h2>
              </div>
              <div className="flex flex-col gap-2 text-xs md:text-base">
                <span className="flex items-center justify-center gap-2">
                  <Trophy className="h-3 w-3 text-cyan-300" />
                  Support all question types and formats
                </span>
                <span className="flex items-center justify-center gap-2">
                  <MousePointerClick className="h-4 w-4 text-cyan-300" />
                  Audio input supported for real-time answers
                </span>
                <span className="mt-2 text-cyan-200">
                  AWS certification? School quizzes? Online exams? Online
                  Assessment AI got you covered
                </span>
              </div>
            </div>
            <Link
              href="/online-assessment"
              className="block transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={`${constructImageURL("/landing/features/oa.png")}`}
                alt="LockedIn AI Online Assessment"
                width="1400"
                height="800"
                className="w-hull mx-auto h-full rounded-xl object-cover object-left-top md:h-[90%] md:w-[80%]"
              />
            </Link>
          </div>
        </>
      ),
    },
    {
      title: "Multilingual",
      value: "multilingual",
      content: (
        <>
          <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-700 to-violet-900 p-5 text-xl font-bold text-white md:text-4xl">
            <Link
              href="/ai-copilot#multilingual"
              className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-white/10 px-2 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 md:right-8 md:top-8"
            >
              <span className="hidden md:block">See More</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <div className="mt-3 pb-10 text-center">
              <div className="mb-3 flex items-center justify-center gap-2">
                <h2 className="text-xl font-bold text-cyan-300 transition-colors duration-300 hover:text-white md:text-3xl">
                  Multilingual Support
                </h2>
              </div>
              <div className="flex flex-col gap-2 text-xs md:text-base">
                <span className="flex items-center justify-center gap-2">
                  <Brain className="h-4 w-4 text-cyan-300" />
                  Natural conversation in 42 languages
                </span>
                <span className="flex items-center justify-center gap-2">
                  <Globe className="h-4 w-4 text-cyan-300" />
                  Regional accent and dialect support
                </span>
                <span className="mt-2 text-cyan-200">
                  Break language barriers with AI-powered communication
                </span>
              </div>
            </div>
            <Link
              href="/ai-copilot#multilingual"
              className="flex justify-center transition-transform duration-300 hover:scale-105 md:mt-5"
            >
              <Image
                src={`${constructImageURL("/landing/features/multilingual.png")}`}
                alt="LockedIn AI Multilingual"
                width="1400"
                height="800"
                className="w-hull mx-auto h-full rounded-xl object-cover object-left-top md:h-[90%] md:w-[80%]"
              />
            </Link>
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <div id="feature" className="mx-4 py-20">
        <FeatureIconContainer className="flex items-center justify-center overflow-hidden">
          <RiRobot2Fill className="h-6 w-6 text-cyan-500" />
        </FeatureIconContainer>
        <div className="hover-this mx-auto max-w-3xl px-8 py-20">
          <Heading as="h2" className="pt-4">
            Core AI Features
          </Heading>
        </div>
        <div className="relative mx-auto flex h-[35rem] w-full max-w-5xl flex-col items-start justify-start [perspective:1000px] md:h-[50rem]">
          <Tabs tabs={tabs} tabClassName="text-white" />
        </div>
      </div>
      <TryItFreeButton />
    </>
  );
}
