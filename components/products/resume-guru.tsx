"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  IconClipboardList,
  IconFileText,
  IconRobot,
} from "@tabler/icons-react";
import { ArrowRight, Clock, FileText, Target, Zap } from "lucide-react";

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

export function ResumeGuru() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed
    };
    handleResize(); // Check initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container className="md:py-30 flex h-full items-center justify-center px-2 py-20">
      <div>
        <div className="mb-4 mt-20 flex-col justify-center text-center">
          <Heading
            as="h1"
            className="text-center text-4xl font-semibold tracking-tight text-cyan-300 md:text-7xl"
          >
            AI Resume Builder
          </Heading>
          <br />
          <Subheading className="text-sm text-neutral-400 md:text-xl">
            10x your chances of landing your dream company interview with our
            ATS resume hack
          </Subheading>
        </div>
        <p className="relative mx-auto mt-4 max-w-xl px-4 text-center text-sm text-gray-200 md:text-lg">
          Over <span className="font-bold text-cyan-500">1,000,000 </span>
          resumes generated
          <br />
          <br />
        </p>
        {/* Conditional Rendering Based on Screen Size */}
        {isSmallScreen ? (
          <div className="flex items-center justify-center">
            <iframe
              className="h-[30vh] w-[90vw] md:h-[70vh] md:w-full"
              src="https://app.supademo.com/embed/cm2gmz82m2w4ivm5svf0n401p?embed_v=2"
              loading="lazy"
              title="AI Resume Builder"
              allow="clipboard-write"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="mt-12 w-full overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://resume.lockedinai.com"
              loading="lazy"
              title="AI Resume Builder"
              allow="clipboard-write"
              className="h-[80vh] w-full min-w-full border-0 md:h-screen"
            />
          </div>
        )}
        <StartForFreeButtonAiCopilot />
        <div className="mt-20 flex flex-col gap-40">
          <div className="flex flex-col items-center">
            <div className="flex max-w-6xl flex-wrap justify-center gap-8">
              <FeatureCard
                icon={<IconFileText size={48} className="text-cyan-300" />}
                title="Smart AI Resume Builder"
                description="Automatically generates a professional, ATS-friendly resume with minimal effort"
              />
              <FeatureCard
                icon={<IconRobot size={48} className="text-cyan-300" />}
                title="AI-Powered Enhancements"
                description="AI reviews and suggests real-time improvements to boost your resume quality"
              />
              <FeatureCard
                icon={<IconClipboardList size={48} className="text-cyan-300" />}
                title="Personalized for You"
                description="Tailors resume content and design based on your industry, role, and preferences"
              />
            </div>
          </div>
          {/* Why AI Resume Builder Section */}
          <div className="mx-auto mt-10 max-w-3xl space-y-6 text-center md:text-left">
            <h2 className="text-xl font-bold text-cyan-300 md:text-2xl">
              Why Our AI Resume Builder?
            </h2>
            <p className="text-sm leading-relaxed text-neutral-400 md:text-base">
              At the heart of our system lies a cutting-edge AI that analyzes
              thousands of top-performing resumes across diverse industries.
              From finance and tech to creative and academic fields, our Resume
              Guru instantly identifies the optimal layout and content strategy
              to help you stand out. No more fumbling with confusing templates
              or scouring the web for best practices.
            </p>
            <p className="text-sm leading-relaxed text-neutral-400 md:text-base">
              We use advanced ATS (Applicant Tracking System) scanning
              algorithms to ensure your resume includes the right keywords,
              action verbs, and formatting elements. Our AI doesn’t just check
              spelling and grammar—it actively tailors your resume to increase
              your chances of passing recruiters’ automated filtering systems.
            </p>
          </div>

          <ProfessionalResumeSection />
        </div>
        {/* Different Industry Resume Hacks */}
        <div className="mx-auto my-12 max-w-3xl space-y-6 text-center md:text-left">
          <h2 className="text-xl font-bold md:text-2xl">
            Industry-Specific Resume Hacks
          </h2>

          <div className="space-y-3 text-sm leading-relaxed text-neutral-300 md:text-base">
            {/* Tech Industry */}
            <p>
              <strong className="text-cyan-400">Tech Roles:</strong> Whether
              you’re a front-end developer or a cloud architect, showcase
              measurable achievements like reduced load times, optimized
              codebases, or successful project launches. Highlight technical
              proficiencies (e.g., React, Node.js, AWS) in a dedicated skills
              section to help ATS scan and categorize your expertise quickly.
            </p>

            {/* Finance */}
            <p>
              <strong className="text-cyan-400">Finance & Banking:</strong>{" "}
              Emphasize data-driven results such as revenue growth, cost
              savings, or risk mitigation strategies. Numbers and percentages
              are your best friends—quantify your achievements wherever
              possible. Include relevant certifications like the CPA, CFA, or
              FINRA licenses to stand out in a competitive field.
            </p>

            {/* Sales */}
            <p>
              <strong className="text-cyan-400">
                Sales & Business Development:
              </strong>{" "}
              Focus on your track record of hitting or exceeding quotas,
              building client relationships, and developing sales funnels.
              Mention specific metrics (e.g., &quot;increased sales by 150% in
              Q1&quot;) and highlight soft skills like negotiation or CRM
              proficiency (Salesforce, HubSpot) to show you’re ready to excel.
            </p>

            {/* Marketing */}
            <p>
              <strong className="text-cyan-400">
                Marketing & Advertising:
              </strong>{" "}
              Visual appeal matters here, but keep the layout ATS-friendly.
              Showcase campaign metrics (e.g., “improved engagement by 40%”),
              highlight key software tools (Adobe CC, Google Analytics), and
              frame examples of creative campaigns with measurable outcomes.
            </p>

            {/* Project Management */}
            <p>
              <strong className="text-cyan-400">Project Management:</strong>{" "}
              Outline complex projects you’ve overseen, detailing methodologies
              (Agile, Waterfall), timelines, budgets, and team sizes. Emphasize
              leadership, communication, and risk management skills.
              Certifications like PMP, Scrum Master, or PRINCE2 can make you a
              prime candidate for top roles.
            </p>

            {/* Healthcare & Medical */}
            <p>
              <strong className="text-cyan-400">
                Healthcare & Medical Fields:
              </strong>{" "}
              Focus on patient outcomes, compliance with regulations (HIPAA,
              JCAHO), and collaborative efforts with medical staff. Show how you
              balance soft skills like empathy and communication with technical
              proficiencies (e.g., EMR software).
            </p>

            {/* Education & Academia */}
            <p>
              <strong className="text-cyan-400">Education & Academia:</strong>{" "}
              For teachers, professors, or trainers, underscore curriculum
              development, student performance improvements, and any research or
              publications. Include specialized certifications or endorsements
              (e.g., ESL, special education) to demonstrate the breadth of your
              expertise.
            </p>

            {/* Career Changers */}
            <p>
              <strong className="text-cyan-400">Career Changers:</strong> Draw
              parallels between your past and target roles. Transferable
              skills—like leadership, data analysis, or project
              management—should be front and center. Use a brief summary
              statement to quickly frame why you’re making the switch and how
              your experience adds value to your new field.
            </p>
          </div>
        </div>

        {/* "Final Tips for a Winning Resume" section */}
        <div className="mx-auto my-10 max-w-3xl space-y-6 text-center text-neutral-300 md:text-left">
          <h3 className="text-xl font-bold md:text-2xl">
            Final Tips for a Winning Resume
          </h3>
          <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed md:text-base">
            <li>
              <strong className="text-cyan-400">
                Focus on Key Achievements:
              </strong>{" "}
              Highlight measurable results, like revenue growth or project
              launches, instead of generic responsibilities.
            </li>
            <li>
              <strong className="text-cyan-400">
                Tailor to Each Application:
              </strong>{" "}
              Tweak your resume for every job you apply to, using
              industry-specific keywords.
            </li>
            <li>
              <strong className="text-cyan-400">
                Maintain a Clean Design:
              </strong>{" "}
              Avoid clutter with minimal graphics and consistent formatting for
              better ATS compatibility.
            </li>
            <li>
              <strong className="text-cyan-400">
                Showcase Your Soft Skills:
              </strong>{" "}
              Communicate team leadership, problem-solving, and adaptability
              effectively.
            </li>
          </ul>
          <p className="text-sm leading-relaxed md:text-base">
            With over a million resumes generated, our AI-driven approach
            ensures you skip common pitfalls and present a polished, compelling
            narrative to potential employers—giving you that extra edge in
            today’s competitive job market.
          </p>
        </div>
        {/* CTA Button */}
        <TryItNowButtonCTA />
      </div>
    </Container>
  );
}

const ProfessionalResumeSection = () => {
  const features = [
    {
      icon: <Clock className="h-5 w-5 text-cyan-400" />,
      title: "One-Click Revisions",
      description:
        "Instantly optimize your resume based on any job description",
    },
    {
      icon: <Zap className="h-5 w-5 text-cyan-400" />,
      title: "AI-Generated Samples",
      description:
        "Get a fully tailored resume in seconds, ready to land interviews",
    },
    {
      icon: <Target className="h-5 w-5 text-cyan-400" />,
      title: "ATS Optimized",
      description:
        "ATS Keywords embedding to ensure your resume passes the first round",
    },
  ];

  return (
    <div className="mb-10 rounded-xl  py-6 backdrop-blur-sm md:p-2">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-8">
          {/* Header */}
          <div className="mx-auto mb-10 space-y-4 text-center sm:mb-0 sm:text-left">
            <div className="inline-flex items-center gap-2">
              <FileText className="h-8 w-8 text-cyan-400" />
              <h2 className="text-xl font-bold md:text-3xl">
                Professional Resume
              </h2>
            </div>
            <div className="space-y-3 text-sm leading-relaxed text-neutral-400 md:text-base">
              <p>
                A well-structured resume can make all the difference, especially
                when it comes to matching the keywords hiring managers look for.
                Our AI Resume Builder simplifies this process by instantly
                embedding the right terms, making sure you’re always ahead of
                automated filters and competing applicants.
              </p>
              <p>
                Even if you’re new to job hunting or transitioning careers, we
                guide you through best practices like bullet-point organization,
                measurable achievements, and strategic section ordering. Our
                mission is to cut down on the guesswork and let you apply
                confidently, knowing your resume meets the gold standard.
              </p>
            </div>
          </div>

          {/* Features */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-cyan-950/30 p-4 transition-all duration-300 hover:bg-cyan-900/40"
              >
                <div className="relative z-10 flex items-start space-x-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 group-hover:bg-cyan-500/30">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-cyan-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-neutral-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 self-end">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-700 to-violet-900 p-2">
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <Image
              src={constructImageURL("/landing/features/resume.jpg")}
              alt="ATS resume hack"
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
