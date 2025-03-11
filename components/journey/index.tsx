"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IconRocket } from "@tabler/icons-react";
import { ArrowRight, Lock } from "lucide-react";
import { PiPathBold } from "react-icons/pi";

import { constructImageURL } from "@/lib/image-hosting";

import { TryItFreeButtonJourney } from "../affiliate-button";
import { Button } from "../button";

interface TimelineItem {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  image: string;
  tools?: {
    name: string;
    link?: string;
    active?: boolean;
    beta?: boolean;
  }[];
}

const timelineItems: TimelineItem[] = [
  {
    title: "Before the job search",
    subtitle: "Maximize Your Academic Success",
    description:
      "Ace assignments, quizzes, exams and online assessments at your fingertips",
    image: constructImageURL("/landing/timeline3.png"),
    tools: [
      {
        name: "Online Assessment AI",
        link: "/online-assessment",
        active: true,
      },
    ],
  },
  {
    title: "During the Job Search",
    subtitle: "Ultimate AI Arsenal to Lock in Dream Offer",
    image: constructImageURL("/landing/timeline2.png"),
    description: "Master your job search with our comprehensive AI tools",
    tools: [
      { name: "Interview AI (Core)", active: true, link: "/ai-copilot" },
      { name: "AI Resume Builder", active: true, link: "/resume-guru" },
      {
        name: "Interview Simulator",
        active: true,
        link: "/ai-copilot#simulator",
      },
      { name: "Live Coaching", active: true, link: "/ai-copilot#aicoach" },
      {
        name: "Post-Interview Analysis",
        active: true,
        link: "/ai-copilot#summary_report",
      },
      { name: "Auto-Job Apply", active: false, beta: true },
    ],
  },
  {
    title: "At the Job",
    subtitle: "Continued with Intelligent AI Solutions",
    image: constructImageURL("/landing/timeline1.png"),
    description: "Enhance your professional performance",
    tools: [
      {
        name: "Professional Meeting AI",
        link: "/ai-copilot#professionalmeeting",
        active: true,
      },
      {
        name: "Meeting Simulator",
        link: "/ai-copilot#simulator",
        active: true,
      },
    ],
  },
];

export const Journey: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % timelineItems.length);
        setIsTransitioning(false);
      }, 300);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // New function to handle timeline clicks
  const handleTimelineClick = (index: number) => {
    if (index === activeIndex) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const backgrounds = ["bg-[#0a0a0a]", "bg-[#231009]", "bg-[#153a62]"];

  return (
    <div className="mx-4 my-10">
      <div
        className={`relative mx-auto h-full w-full max-w-7xl rounded-2xl pt-20 transition-colors duration-500 ${backgrounds[activeIndex]}`}
      >
        {/* Header Section */}
        <div className="mb-20 flex flex-col items-center px-6 text-center">
          <div className="flex items-center justify-center overflow-hidden rounded-full bg-neutral-900 p-4">
            <PiPathBold className="h-6 w-6 text-cyan-500" />
          </div>
          <div className="mx-auto max-w-3xl px-4 py-10 md:px-8 md:py-20">
            <h2 className="text-4xl font-bold text-white md:text-6xl">
              Lock in your career since{" "}
              <span className="text-cyan-500">DAY 1</span>
            </h2>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col gap-8 px-4 pb-20 lg:flex-row lg:gap-12 lg:px-10">
          {/* Timeline */}
          <div className="relative w-full lg:w-1/3">
            <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-neutral-700" />

            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="relative mb-12 cursor-pointer md:mb-24"
                onClick={() => handleTimelineClick(index)}
              >
                {/* Timeline Node */}
                <div
                  className={`absolute left-0 h-8 w-8 rounded-full border-2 transition-all duration-500 ${
                    index === activeIndex
                      ? "border-cyan-500 bg-cyan-500"
                      : "border-neutral-700 bg-neutral-800"
                  }`}
                />

                {/* Content */}
                <div
                  className={`ml-16 transition-all duration-500 ${
                    index === activeIndex
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-50"
                  }`}
                >
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <h4 className="mb-2 text-lg font-semibold text-cyan-500">
                    {item.subtitle}
                  </h4>

                  {/* Tools Section */}
                  {item.tools && (
                    <div className="mt-4 space-y-4">
                      {item.tools.map((tool, toolIndex) => (
                        <Button
                          key={toolIndex}
                          variant="outline"
                          className={`group relative w-fit overflow-hidden ${
                            tool.active
                              ? "border-none bg-gradient-to-r from-cyan-500 to-blue-500 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                              : "cursor-not-allowed bg-slate-100 text-slate-500"
                          }`}
                          onClick={() => {
                            if (tool.link) {
                              window.location.href = tool.link;
                            }
                          }}
                          disabled={!tool.active}
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                          <span className="relative flex items-center space-x-2">
                            <span>{tool.name}</span>
                            {tool.beta && (
                              <span className="text-xs">(Coming Soon)</span>
                            )}
                            {tool.active ? (
                              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            ) : (
                              <Lock className="h-4 w-4" />
                            )}
                          </span>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Image */}
                <div className="ml-16 mt-8 lg:hidden">
                  <div
                    className={`transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
                  >
                    {index === activeIndex && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={500}
                        height={500}
                        className="h-auto w-full rounded-lg"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Image Section */}
          <div className="hidden items-center justify-center lg:flex lg:w-2/3">
            <div
              className={`h-[500px] w-[500px] transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
            >
              <Image
                src={timelineItems[activeIndex].image}
                alt={timelineItems[activeIndex].title}
                width={500}
                height={500}
                className="h-[500px] w-[500px] rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        {activeIndex === timelineItems.length - 1 && <TryItFreeButtonJourney />}
      </div>
    </div>
  );
};
