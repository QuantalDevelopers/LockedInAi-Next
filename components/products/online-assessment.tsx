import Image from "next/image";
import { IconBook, IconBrain, IconCertificate } from "@tabler/icons-react";
import {
  ArrowRight,
  Award,
  BookOpen,
  GraduationCap,
  PenTool,
} from "lucide-react";
import Balancer from "react-wrap-balancer";

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

export function OnlineAssessment() {
  return (
    <Container className="md:py-30 flex h-full items-center justify-center px-2 py-20">
      <div>
        <div>
          <div className="mb-4 mt-20 flex-col justify-center text-center">
            <Heading
              as="h1"
              className="text-center text-4xl font-semibold tracking-tight text-cyan-300 md:text-7xl"
            >
              Online Assessment AI
            </Heading>
            <br />
            <Subheading className="text-sm text-neutral-400 md:text-xl">
              AWS certification? School quizzes? Online exams? We have you
              covered with our Online Assessment AI
            </Subheading>
          </div>
          <p className="relative mx-auto mt-4 max-w-xl px-4 text-center text-sm text-gray-200 md:text-lg">
            Over <span className="font-bold text-cyan-500">513,062</span> online
            assessments aced
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
        </div>

        <div className="mt-20 flex flex-col gap-40">
          <div className="flex flex-col items-center">
            <div className="flex max-w-6xl flex-wrap justify-center gap-8">
              <FeatureCard
                icon={<IconBook size={48} className="text-cyan-300" />}
                title="Exam Preparation"
                description="Get personalized study plans and real-time feedback to ace any online exam"
              />
              <FeatureCard
                icon={<IconBrain size={48} className="text-cyan-300" />}
                title="Adaptive Learning"
                description="Tailored content that adapts to your skill level, ensuring constant progress"
              />
              <FeatureCard
                icon={<IconCertificate size={48} className="text-cyan-300" />}
                title="Certification Mastery"
                description="Ace major certifications like AWS, Google, and more with advanced practice tools"
              />
            </div>
          </div>
          <div className="mx-auto mt-10 max-w-4xl space-y-6 text-left">
            <h2 className="text-xl font-bold text-cyan-300 md:text-2xl">
              Real-Time Online Assessment Hacks & Tips
            </h2>
            <p className="text-sm leading-relaxed text-neutral-400 md:text-base">
              As soon as you begin your exam, our AI technology works tirelessly
              to analyze your browser tabs, coding environments, and even the
              smallest hints in the interface. Whether you’re tackling coding
              challenges, system design questions, or data science tasks, our
              solution parses the requirements and delivers the best possible
              answer right inside the test environment. No more second-guessing
              or spending hours sifting through forums—our product brings you
              direct solutions in real-time.
            </p>
            <p className="text-sm leading-relaxed text-neutral-400 md:text-base">
              You’ll gain access to step-by-step code breakdowns, potential
              optimizations, and even schema tables for database queries or
              system designs. This eliminates the guesswork and transforms any
              intimidating exam into a straightforward task. Whether it’s an AWS
              certification, a GCP project, or a school quiz, we’ve got you
              covered with instant insights, making sure you finish at the top
              of your class or score your dream certification.
            </p>
          </div>
          <AcademicExcellenceSection />
          <div className="mx-auto my-10 max-w-4xl space-y-6 text-left text-neutral-300 ">
            <h3 className="text-xl font-bold text-cyan-300 md:text-2xl">
              Why Choose Online Assessment AI?
            </h3>
            <p className="text-sm leading-relaxed md:text-base">
              With over 513,000 successful assessments (and counting), we’ve
              refined the art of real-time assistance for exams of every type.
              From coding competitions and certification prep (AWS, Azure, GCP,
              and more) to school quizzes and online homework, our all-in-one
              platform helps you achieve more in less time.
            </p>
            <ul className="list-inside list-disc text-sm leading-relaxed md:text-base">
              <li>
                <strong>Instant Feedback:</strong> Quickly pinpoint mistakes and
                correct them before moving on.
              </li>
              <li>
                <strong>Automated Code Solutions:</strong> Save hours of
                debugging with step-by-step solutions.
              </li>
              <li>
                <strong>Adaptive Learning Paths:</strong> Practice with custom
                quizzes designed to strengthen weak areas.
              </li>
              <li>
                <strong>Tab and Screen Analysis:</strong> Our AI monitors your
                environment to offer real-time tips and solutions.
              </li>
              <li>
                <strong>Global Community:</strong> Join thousands of students
                and professionals worldwide.
              </li>
            </ul>
            <p className="text-sm leading-relaxed md:text-base">
              Step into your next test or certification exam with confidence.
              Our AI solutions are here to ensure that every step of your
              preparation— from reviewing course materials to answering final
              exam questions— is supported by cutting-edge technology and
              expertise.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <TryItNowButtonCTA />
      </div>
    </Container>
  );
}

const AcademicExcellenceSection = () => {
  const features = [
    {
      icon: <PenTool className="h-5 w-5 text-cyan-400" />,
      title: "Online Exams",
      description:
        "Breeze through exams with instant insights and performance boosts",
    },
    {
      icon: <BookOpen className="h-5 w-5 text-cyan-400" />,
      title: "School Quizzes",
      description: "Get real-time answers and ace every test with confidence",
    },
    {
      icon: <Award className="h-5 w-5 text-cyan-400" />,
      title: "Certification Prep",
      description: "Excel in assessments like Amazon certificates and more",
    },
  ];

  return (
    <div className="mb-10 rounded-xl  py-6 backdrop-blur-sm md:p-2">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          {/* Header */}
          <div className="mx-auto mb-10 space-y-4 text-left sm:mb-0">
            <div className="inline-flex items-center space-x-3 rounded-full bg-cyan-500/10 px-4 py-1">
              <GraduationCap className="h-6 w-6 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">
                Success Guaranteed
              </span>
            </div>
            <h2 className="text-2xl font-bold md:text-3xl">
              Academic Excellence
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-neutral-400 md:text-base">
              <p>
                Looking to nail that upcoming school quiz or university-level
                final? Our Online Assessment AI doesn’t just give you the
                answer—it fosters deeper understanding through hints and
                structured approaches. You’ll be able to see exactly where your
                weaknesses lie and how to improve before the real exam day.
              </p>
              <p>
                By seamlessly integrating with your study schedule, we offer a
                personalized learning path that adapts to your performance.
                Whether you’re brushing up on SQL queries, refining coding
                solutions, or just verifying quick answers for homework, we
                provide a robust support system to help you excel academically.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-xl bg-cyan-950/30 p-5 transition-all duration-300 hover:bg-cyan-900/40"
              >
                <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-cyan-400/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-start space-x-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 transition-colors duration-300 group-hover:bg-cyan-500/30">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-cyan-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-400">
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
          <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-700 to-violet-900 p-2">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 via-cyan-500/0 to-cyan-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <Image
              src={constructImageURL("/landing/features/oa.png")}
              alt="Online Assessment AI"
              width={1400}
              height={800}
              className="h-auto w-full transform rounded-lg object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
