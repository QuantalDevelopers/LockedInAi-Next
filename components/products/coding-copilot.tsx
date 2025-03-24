import Image from "next/image";
import { IconEye, IconEyeOff, IconStack } from "@tabler/icons-react";
import {
  ArrowRight,
  Code2,
  Columns,
  Database,
  Lock,
  Mic,
  MicOff,
  Network,
  NotebookTabs,
  Scale,
  TestTube,
  Timer,
} from "lucide-react";

import { constructImageURL } from "@/lib/image-hosting";

import {
  StartForFreeButtonAiCopilot,
  TryItNowButtonCTA,
} from "../affiliate-button";
import { Button } from "../button";
import { Container } from "../container";
import { FeatureCard } from "../features/feature-card";
import { Heading } from "../heading";
import { Subheading } from "../subheading";

export function CodingCopilot() {
  return (
    <Container className="md:py-30 flex h-full items-center justify-center px-2 py-20">
      <div>
        <div className="mb-4 mt-20 flex-col justify-center text-center">
          <Heading
            as="h1"
            className="text-center text-4xl font-semibold tracking-tight text-cyan-300 md:text-7xl"
          >
            {" "}
            Coding Copilot{" "}
          </Heading>
          <br />
          <Subheading className="text-sm text-neutral-400 md:text-xl">
            Professional Coding Copilot for job interviews and online meeting
            scenarios. Zero leetcode? No worries, start crushing coding
            interview with 0 preparation.
          </Subheading>
        </div>
        <p className="relative mx-auto mt-4 max-w-xl px-4 text-center text-sm text-gray-200 md:text-lg">
          <span className="font-bold text-cyan-500">395,364</span> coding
          interview aced
          <br />
          <br />
        </p>

        <div className="flex items-center justify-center">
          <iframe
            className="h-[30vh] w-[90vw] md:h-[70vh] md:w-full"
            src="https://app.supademo.com/embed/cm0eozwxk04v096sknv5sjwvo?embed_v=2"
            loading="lazy"
            title="Demo"
            allow="clipboard-write"
            allowFullScreen
          ></iframe>
        </div>
        <StartForFreeButtonAiCopilot />
        <div className="mt-20 flex flex-col gap-40">
          <div className="flex flex-col items-center">
            <div className="flex max-w-6xl flex-wrap justify-center gap-8">
              <FeatureCard
                icon={<IconEye size={48} className="text-cyan-300" />}
                title="Screen Analysis"
                description="Ability to analyze your screen and provide real-time code solutions"
              />
              <FeatureCard
                icon={<IconEyeOff size={48} className="text-cyan-300" />}
                title="Stealth Mode"
                description="Execute screen analysis without any suspicion"
              />
              <FeatureCard
                icon={<IconStack size={48} className="text-cyan-300" />}
                title="Versatile"
                description="Supports multiple languages and frameworks"
              />
            </div>
          </div>
          <AllInOneSection />
          <DetailedExplanation />
        </div>

        {/* CTA Button */}
        <TryItNowButtonCTA />
      </div>
    </Container>
  );
}

const AllInOneSection = () => {
  const features = [
    {
      icon: <NotebookTabs className="h-5 w-5 text-cyan-400" />,
      title: "Strategic Approach",
      description: "Step-by-step breakdowns of how to approach to the problem",
    },
    {
      icon: <Code2 className="h-5 w-5 text-cyan-400" />,
      title: "Code Implementation",
      description: "Clean, optimized code ready to impress",
    },
    {
      icon: <TestTube className="h-5 w-5 text-cyan-400" />,
      title: "Custom Test Cases",
      description: "Test your solutions with real-world scenarios",
    },
    {
      icon: <Timer className="h-5 w-5 text-cyan-400" />,
      title: "Time Complexity Analysis",
      description:
        "Show off your efficiency with expert-level performance insights",
    },
  ];

  const featuresNew = [
    {
      icon: <Columns className="h-5 w-5 text-cyan-400" />,
      title: "Side-by-Side Coding",
      description:
        "Open a new coding page alongside the interview for seamless problem-solving",
    },
    {
      icon: <Mic className="h-5 w-5 text-cyan-400" />,
      title: "Audio Controls",
      description:
        "Mute yourself or the interviewer as needed for better focus",
    },
    {
      icon: <Code2 className="h-5 w-5 text-cyan-400" />,
      title: "Integrated Environment",
      description:
        "Work in a fully-featured coding environment without leaving the interview",
    },
    {
      icon: <MicOff className="h-5 w-5 text-cyan-400" />,
      title: "Distraction Management",
      description: "Control your audio environment for optimal concentration",
    },
  ];

  const SystemDesignFeatures = [
    {
      icon: <Scale className="h-5 w-5 text-cyan-400" />,
      title: "High Level Design Overview",
      description: "Understand the big picture of system design questions",
    },
    {
      icon: <Database className="h-5 w-5 text-cyan-400" />,
      title: "Data Architecture",
      description: "Master database design patterns and data flow optimization",
    },
    {
      icon: <Network className="h-5 w-5 text-cyan-400" />,
      title: "System Components",
      description:
        "Understand microservices, load balancers, and caching strategies",
    },
    {
      icon: <Lock className="h-5 w-5 text-cyan-400" />,
      title: "Security Patterns",
      description: "Implement robust security measures in distributed systems",
    },
  ];

  return (
    <div className="mb-10">
      <div className="mb-72 rounded-xl py-6 backdrop-blur-sm md:p-2">
        <div className="flex flex-col gap-8 md:items-center lg:flex-row">
          <div className="flex-1 space-y-8">
            {/* New Coding interview copilot update */}
            <div className="mx-auto mb-10 space-y-4 text-center sm:mb-0 sm:text-left">
              <div className="inline-flex items-center space-x-3 rounded-full bg-cyan-500/10 px-4 py-1">
                <Columns className="h-6 w-6 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">
                  Latest Layout Update
                </span>
              </div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Enhanced Interview Experience
              </h2>
            </div>

            {/* Features Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              {featuresNew.map((feature, index) => (
                <div
                  key={index}
                  className="group rounded-xl bg-cyan-950/30 p-4 transition-all duration-300 hover:bg-cyan-900/40"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg">
                      {feature.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-cyan-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-neutral-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-700 to-violet-900 p-2">
              <video
                src={constructImageURL("/landing/features/new_coding_demo.mp4")}
                height={800}
                width={1400}
                className="h-auto w-full transform rounded-lg object-cover transition-transform duration-500 hover:scale-105"
                draggable={false}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>

      {/* System Design Section */}
      <div className="mb-72 rounded-xl py-6 backdrop-blur-sm md:p-2">
        <div className="flex flex-col gap-8 md:items-center lg:flex-row">
          <div className="order-last flex-1 lg:order-none">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-700 to-violet-900 p-2">
              <video
                src={constructImageURL(
                  "/landing/features/system_design_demo.mp4",
                )}
                height={800}
                width={1400}
                className="h-auto w-full transform rounded-lg object-cover transition-transform duration-500 hover:scale-105"
                draggable={false}
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <div className="mx-auto mb-10 space-y-4 text-center sm:mb-0 sm:text-left">
              <div className="inline-flex items-center space-x-3 rounded-full bg-cyan-500/10 px-4 py-1">
                <Network className="h-6 w-6 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">
                  System Design
                </span>
              </div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Master System Architecture
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {SystemDesignFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group rounded-xl bg-cyan-950/30 p-4 transition-all duration-300 hover:bg-cyan-900/40"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg">
                      {feature.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-cyan-300">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-neutral-400">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:items-center lg:flex-row">
        <div className="flex-1 space-y-8">
          <div className="mx-auto mb-10 space-y-4 text-center sm:mb-0 sm:text-left">
            <div className="inline-flex items-center space-x-3 rounded-full bg-cyan-500/10 px-4 py-1">
              <Code2 className="h-6 w-6 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">
                Zero Preparation
              </span>
            </div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Comprehensive Approach
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl bg-cyan-950/30 p-4 transition-all duration-300 hover:bg-cyan-900/40"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg  ">
                    {feature.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-cyan-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 self-end">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-700 to-violet-900 p-2">
            <Image
              src={constructImageURL("/landing/features/coding_ai.png")}
              alt="Coding AI Features"
              width={1400}
              height={800}
              className="h-auto w-full transform rounded-lg object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailedExplanation = () => {
  return (
    <div className="mx-auto mb-10 max-w-5xl px-6 text-neutral-300 md:mt-32 md:px-0">
      <h2 className="mb-6 text-2xl font-bold text-cyan-400 md:text-3xl">
        Interview Tips, Hacks & Insights
      </h2>
      <p className="mb-4 text-sm md:text-base">
        Cracking a coding interview isn’t just about memorizing{" "}
        <strong>LeetCode</strong> solutions—it&apos;s about having the{" "}
        <strong>right strategy</strong>. With the{" "}
        <strong>Coding Copilot</strong>, you receive real-time assistance,
        ensuring you handle curveballs with ease. Whether you&apos;re dealing
        with complex <strong>system design</strong> questions, optimizing{" "}
        <strong>SQL queries</strong>, or architecting data solutions for{" "}
        <strong>data scientist</strong> roles, we provide step-by-step guidance
        to boost your confidence.
      </p>

      <h3 className="mb-2 mt-8 text-xl font-semibold text-cyan-300 md:text-2xl">
        Why Coding Copilot Gives You the Edge:
      </h3>
      <ul className="mb-4 list-disc pl-6 text-sm md:text-base">
        <li>
          <strong>Real-time Code Analysis:</strong> We analyze your on-screen
          challenges and produce instantly optimized solutions, so you never
          miss a beat.
        </li>
        <li>
          <strong>Comprehensive System Design Templates:</strong> Master the art
          of structuring large-scale applications, from load balancing to
          microservices.
        </li>
        <li>
          <strong>SQL &amp; Data Science Support:</strong> Tackle data queries,
          modeling, and analytics tasks with built-in tips to showcase your
          ability in any data-heavy role.
        </li>
        <li>
          <strong>Stress-Free Preparation:</strong> Don&apos;t have time to go
          through 100s of practice problems? Our Copilot breaks down even the
          hardest problems into manageable steps.
        </li>
      </ul>

      <h3 className="mb-2 mt-8 text-xl font-semibold text-cyan-300 md:text-2xl">
        Practical Interview Hacks:
      </h3>
      <p className="mb-4 text-sm md:text-base">
        Experienced developers swear by “think-aloud” problem-solving during
        technical screens. Our Copilot helps you formulate clear mental models,
        so you can talk through your solution approach logically, earning bonus
        points with interviewers.
      </p>
      <p className="mb-4 text-sm md:text-base">
        For system design, consider how data flows from user request to final
        output. Visualize key components such as load balancers, caching layers,
        databases, and third-party APIs. Our Copilot provides frameworks to
        structure your explanation, so you nail those open-ended architecture
        problems with confidence.
      </p>

      <h3 className="mb-2 mt-8 text-xl font-semibold text-cyan-300 md:text-2xl">
        Common Interview Questions You’ll Ace with Coding Copilot:
      </h3>
      <ul className="mb-4 list-disc pl-6 text-sm md:text-base">
        <li>
          <strong>Data Structures &amp; Algorithms:</strong> From trees and
          graphs to dynamic programming, we give you the logic you need, plus
          time complexity insights.
        </li>
        <li>
          <strong>System Design Scenarios:</strong> Design a social media
          platform, chat application, or ride-sharing service with best-practice
          architecture guidelines.
        </li>
        <li>
          <strong>SQL &amp; NoSQL Queries:</strong> Craft efficient queries and
          understand database trade-offs—ideal for data engineering or back-end
          roles.
        </li>
        <li>
          <strong>Data Science &amp; ML:</strong> Get quick Python and R code
          snippets for modeling, data cleaning, and machine learning pipelines.
        </li>
      </ul>
      <p className="mb-4 text-sm md:text-base">
        Whether you have zero time to study or you&apos;re looking to refine
        your final edges, <strong>Coding Copilot</strong> empowers you with the
        technical knowledge, problem-solving approaches, and system design
        frameworks you need to succeed. Don’t just memorize solutions—learn how
        to strategically tackle any problem that comes your way.
      </p>
    </div>
  );
};
