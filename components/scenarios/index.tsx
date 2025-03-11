import { BiChair } from "react-icons/bi";

import { constructImageURL } from "@/lib/image-hosting";

import { StartForFreeButtonScenarios } from "../affiliate-button";
import { FeatureIconContainer } from "../features/feature-icon-container";
import { Heading } from "../heading";
import { ExpandableCardOnClick } from "./card";

const items = [
  {
    title: "System Design Interviews",
    description:
      "Need an unfair advantage in system design interviews? LockedIn AI Coding Copilot delivers real-time solutions on architecture and scalability.",
    src: constructImageURL("/landing/scenario/system-design.jpg"),
    alt: "System Design Interviews",
    content: (
      <div className="text-sm">
        Boost your performance with guidance on planning, trade-offs, and
        optimization, enabling you to structure complex systems and approach
        each interview with confidence.
        <br />
        <br />
        <a href="/blog/how-to-use-our-app-for-system-design" target="_blank">
          <strong>Learn more</strong>
        </a>
      </div>
    ),
  },
  {
    title: "Software Engineering Interviews",
    description:
      "Lock in your 300k job offer with Coding CoPilot’s real-time coding solutions.",
    src: constructImageURL("/landing/scenario/sde.png"),
    alt: "Software Engineering Interviews",
    content: (
      <div className="text-sm">
        Discover how LockedIn AI delivers instant answers for algorithms,
        debugging, and optimization, guiding you through complex challenges with
        clarity to ensure you stand out as the ideal candidate.
        <br />
        <br />
        <a
          href="/blog/the-ultimate-guide-for-software-engineers"
          target="_blank"
        >
          <strong>Learn more</strong>
        </a>
      </div>
    ),
  },
  {
    title: "Project Management",
    description:
      "Need to elevate your PMO interview game? Unlock your potential with LockedIn AI’s real-time insights.",
    src: constructImageURL("/landing/scenario/marketing.png"),
    alt: "LockedIn AI  insights for Project Management",
    content: (
      <div className="text-sm">
        How to tackle project management challenges with confidence, showcasing
        your leadership and problem-solving skills to impress interviewers and
        land your dream job.
        <br />
        <br />
        <a
          href="/blog/how-to-conduct-a-project-management-interview"
          target="_blank"
        >
          <strong>Learn more</strong>
        </a>
      </div>
    ),
  },
  {
    title: "Financial Interviews",
    description:
      "Nail your top finance interviews with LockedIn AI’s real-time insights on financial models, market trends, and investment strategies.",
    src: constructImageURL("/landing/scenario/finance.png"),
    alt: " LockedIn AI provides financial analysis",
    content: (
      <div className="text-sm">
        Discover how LockedIn AI provides financial analysis and real-time
        answers to help you with financial modeling, market trends, and
        investment strategies, ensuring you stand out as the ideal candidate.
        <br />
        <br />
        <a
          href="/blog/how-to-properly-conduct-a-finance-interview"
          target="_blank"
        >
          <strong>Learn more</strong>
        </a>
      </div>
    ),
  },
  {
    title: "Market Sizing Interviews",
    description:
      "Get ahead! Create a simple path to your top marketing job offer with LockedIn AI.",
    src: constructImageURL("/landing/scenario/market-sizing-2.jpg"),
    alt: "LockedIn AI insights For Market Sizing Interviews",
    content: (
      <div className="text-sm">
        Watch how LockedIn AI provides real-time answers and structured guidance
        for market sizing questions, helping you showcase your analytical skills
        and impress interviewers.
        <br />
        <br />
        <a href="/blog/how-to-ace-the-market-sizing-interview" target="_blank">
          <strong>Learn more</strong>
        </a>
      </div>
    ),
  },
  {
    title: "Case Study Interviews",
    description:
      "Get ready to impress! Master your case study interviews with LockedIn AI’s real-time feedback.",
    src: constructImageURL("/landing/scenario/case-study.jpg"),
    alt: "LockedIn AI insights For Case Study Interviews",
    content: (
      <div className="text-sm">
        Enhance your analytical skills and framework application to deliver
        impactful solutions that resonate with interviewers and effectively
        showcase your expertise.
        <br />
        <br />
        <a href="/blog/mastering-the-case-study-interview" target="_blank">
          <strong>Learn more</strong>
        </a>
      </div>
    ),
  },
  {
    title: "Sales Calls",
    description:
      "Struggling to close deals? Our AI provides real-time sales data and instant answers to client questions.",
    src: constructImageURL("/landing/scenario/sales.png"),
    alt: "AI provides real-time sales data",
    content: (
      <div className="text-sm">
        LockedIn AI offers insights that refine your communication style,
        confidence, and professionalism—helping you secure every sale.
        <br />
        <br />
        <a href="/blog/how-to-use-lockedin-ai-for-sales" target="_blank">
          <strong>Learn more</strong>
        </a>
      </div>
    ),
  },
  {
    title: "Consultation Sessions",
    description:
      "Don’t wait! Start delivering high-impact consultations with real-time insights and tailored solutions from LockedIn AI.",
    src: constructImageURL("/landing/scenario/consulting.png"),
    alt: "AI provides immediate analysis",
    content: (
      <div className="text-sm">
        Watch how LockedIn AI provides immediate analysis to clarify client
        needs and refine strategies, allowing you to tackle challenges
        confidently and ensure personalized, high-value recommendations in every
        session.
        <br />
        <br />
        <a
          href="/blog/how-to-offer-consultation-service-using-the-app"
          target="_blank"
        >
          <strong>Learn more</strong>
        </a>
      </div>
    ),
  },
  {
    title: "Deep Dive",
    description:
      "Enhance your interview games with LockedIn AI’s Co-Pilot features, including memory clearing, pausing, and autoscrolling.",
    src: constructImageURL("/landing/scenario/deep-dive.jpg"),
    alt: "Boost productivity with LockedIn AI insights",
    content: (
      <div className="text-sm">
        Boost your performance in online interviews while maintaining focus and
        clarity with LockedIn AI advanced features
        <br />
        <br />
        <a
          href="/blog/deep-dive-into-lockedin-ais-co-pilot-features"
          target="_blank"
        >
          <strong>Learn more</strong>
        </a>
      </div>
    ),
  },
];

export function Scenarios() {
  return (
    <>
      <div id="scenario" className="pb-10 pt-20">
        <div className="flex flex-col items-center px-6 text-center">
          <FeatureIconContainer className="flex items-center justify-center overflow-hidden">
            <BiChair className="h-6 w-6 text-cyan-500" />
          </FeatureIconContainer>
          <div className="mx-auto max-w-3xl px-8 pt-20">
            <Heading as="h2" className="pt-4">
              Support All Scenarios
            </Heading>
          </div>
        </div>
        <ExpandableCardOnClick items={items} />
      </div>
      <StartForFreeButtonScenarios />
    </>
  );
}
