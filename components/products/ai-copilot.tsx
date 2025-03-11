import Image from "next/image";
import {
  IconAdjustments,
  IconBriefcase,
  IconFileCheck,
  IconMessageCircle,
  IconPresentationAnalytics,
  IconRobot,
  IconStar,
  IconThumbUp,
} from "@tabler/icons-react";
import { ArrowRight, FileText, Globe2 } from "lucide-react";
import Balancer from "react-wrap-balancer";

import { constructImageURL } from "@/lib/image-hosting";

import {
  StartForFreeButtonAiCopilot,
  TryItNowButtonAiCopilot,
} from "../affiliate-button";
import { Button } from "../button";
import { Container } from "../container";
import { FeatureCard } from "../features/feature-card";
import { Heading } from "../heading";
import { Subheading } from "../subheading";

export function AiCopilot() {
  return (
    <Container className="md:py-30 flex h-full items-center justify-center px-2 py-20">
      <div>
        {/* Hero Section */}
        <div className="hover-this mb-4 mt-20 flex-col justify-center text-center">
          <Heading
            as="h1"
            className="text-center text-4xl font-semibold tracking-tight text-cyan-300 md:text-7xl"
          >
            Interview & Meeting AI Copilot
          </Heading>
          <br />
          <Subheading className="text-sm text-neutral-400 md:text-xl">
            Innovative dual-layer AI Copilot system that provides AI Copilot and
            AI Coach running in parallel
          </Subheading>
        </div>
        <p className="hover-this relative mx-auto mt-4 max-w-xl px-4 text-center text-sm text-gray-200 md:text-lg">
          Trusted and Preferred by{" "}
          <span className="font-bold text-cyan-500">869,852</span> Users
          <br />
          <br />
        </p>
        <div className="flex items-center justify-center">
          <iframe
            className="h-[30vh] w-[90vw] md:h-[70vh] md:w-full"
            src="https://app.supademo.com/embed/cm3qx3ity0f2g3vukv3aun3ls?embed_v=2"
            loading="lazy"
            title="Demo"
            allow="clipboard-write"
            allowFullScreen
          ></iframe>
        </div>

        <StartForFreeButtonAiCopilot />
        <h2 className="hover-this mt-[100px] flex items-center justify-center gap-2 text-center text-2xl font-semibold text-cyan-300 md:mt-[200px] md:text-6xl">
          #1 AI Copilot for Interviews
        </h2>
        <div className="mt-[100px] flex flex-col gap-40 md:mt-[200px]">
          <div className="flex flex-col items-center">
            <div className="hover-this flex max-w-6xl flex-wrap justify-center gap-8">
              <FeatureCard
                icon={<IconMessageCircle size={48} className="text-cyan-300" />}
                title="Real-Time Answers"
                description="Generate responses instantly during your live interviews."
              />
              <FeatureCard
                icon={<IconThumbUp size={48} className="text-cyan-300" />}
                title="Personalized Feedback"
                description="Get live corrections and improvements on your answers."
              />
              <FeatureCard
                icon={<IconAdjustments size={48} className="text-cyan-300" />}
                title="Tailored Responses"
                description="Answers are customized to your resume and job description."
              />
              <FeatureCard
                icon={<IconBriefcase size={48} className="text-cyan-300" />}
                title="Multi-Industry"
                description="Perfect for roles in tech, consulting, finance, marketing, product management, and more."
              />
            </div>
          </div>
          <div className="w-full py-12 md:mt-[50px]">
            {/* Features */}
            <div className="container mx-auto px-4">
              <div className="space-y-40 md:space-y-80 ">
                {/* Professional Meeting Copilot Section */}
                <div
                  id="professionalmeeting"
                  className="rounded-xl bg-opacity-10 p-6 backdrop-blur-sm md:p-2"
                >
                  <div className="flex flex-col gap-8 md:flex-row md:items-center">
                    <div className="hover-this flex-1 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <IconPresentationAnalytics className="h-8 w-8 text-cyan-400" />
                          <h2 className="font-bold sm:text-xl md:text-3xl">
                            Real-time Assist
                          </h2>
                        </div>
                        <p className="text-neutral-400 md:text-lg">
                          Nervous about what to say during the job interviews or
                          work meeting? Our AI copilot will generate responses
                          instantly during your live interviews and work
                          meetings. Get real-time insights, action items, and
                          follow-ups to make your meetings more effective.
                        </p>

                        <ul className="space-y-6">
                          {[
                            {
                              title: "Real-Time Responses",
                              description:
                                "Receive instant suggestions for tricky questions",
                            },
                            {
                              title: "Actionable Insights",
                              description:
                                "Identify follow-up tasks and next steps on the spot",
                            },
                            {
                              title: "Adaptive Feedback",
                              description:
                                "Overcome uncertainty with live corrections and tips",
                            },
                            {
                              title: "Multi-Industry Support",
                              description:
                                "Fine-tuned AI Models for roles in tech, consulting, finance, marketing, product management, and more",
                            },
                          ].map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-3"
                            >
                              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/20">
                                <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-cyan-300">
                                  {feature.title}
                                </h3>
                                <p className="text-neutral-400">
                                  {feature.description}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <TryItNowButtonAiCopilot />
                    </div>

                    <div className="flex-1">
                      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-700 to-violet-900 p-2">
                        <video
                          height={800}
                          width={1400}
                          className="h-auto w-full transform rounded-lg object-cover transition-transform duration-500 hover:scale-105"
                          draggable={false}
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source
                            media="(max-width: 768px)"
                            src={constructImageURL(
                              "/landing/features/mp4/meeting_copilot_demo.mp4",
                            )}
                            type="video/mp4"
                          />
                          <source
                            src={constructImageURL(
                              "/landing/features/meeting_copilot_demo.webm",
                            )}
                            type="video/webm"
                          />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Multilingual Support Section */}
                <div
                  id="multilingual"
                  className="rounded-xl  bg-opacity-10 py-6 backdrop-blur-sm md:p-2"
                >
                  <div className="flex flex-col gap-8 md:items-center lg:flex-row">
                    <div className="order-last flex-1 lg:order-none">
                      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-700 to-violet-900 p-2">
                        <video
                          height={800}
                          width={1400}
                          className="h-auto w-full transform rounded-lg object-cover transition-transform duration-500 hover:scale-105"
                          draggable={false}
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source
                            media="(max-width: 768px)"
                            src={constructImageURL(
                              "/landing/features/mp4/multi_language.mp4",
                            )}
                            type="video/mp4"
                          />
                          <source
                            src={constructImageURL(
                              "/landing/features/multi_language.webm",
                            )}
                            type="video/webm"
                          />
                        </video>
                      </div>
                    </div>
                    <div className="hover-this flex-1 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Globe2 className="h-8 w-8 text-cyan-400" />
                          <h2 className="font-bold sm:text-xl md:text-3xl ">
                            Multilingual Support
                          </h2>
                        </div>
                        <p className="text-neutral-400 md:text-lg">
                          Truly global with our Multi-Language and even
                          bilingual support
                        </p>
                      </div>

                      <ul className="space-y-6">
                        {[
                          {
                            title: "42 Languages",
                            description:
                              "Communicate effortlessly with global users in their native tongue",
                          },
                          {
                            title: "Bilingual Support",
                            description:
                              "Seamlessly switch between English and Spanish with mixed-language support",
                          },
                        ].map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/20">
                              <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-cyan-300">
                                {feature.title}
                              </h3>
                              <p className="text-neutral-400">
                                {feature.description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>

                      <TryItNowButtonAiCopilot />
                    </div>
                  </div>
                </div>

                {/* AI Coach Section */}
                <div
                  id="aicoach"
                  className="rounded-xl bg-opacity-10 p-6 backdrop-blur-sm md:p-2"
                >
                  <div className="flex flex-col gap-8 md:flex-row md:items-center">
                    <div className="hover-this flex-1 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <IconPresentationAnalytics className="h-8 w-8 text-cyan-400" />
                          <h2 className="font-bold sm:text-xl md:text-3xl">
                            Live Coaching
                          </h2>
                        </div>
                        <p className="text-neutral-400 md:text-lg">
                          While you&apos;re talking, our dual-layered AI Coach
                          will provide you instant feedback and corrections to
                          elevate your performance to the next level.
                        </p>
                      </div>
                      <TryItNowButtonAiCopilot />
                    </div>
                    <div className="flex-1">
                      <div className="relative w-[70%] overflow-hidden rounded-xl bg-gradient-to-br from-cyan-700 to-violet-900 p-2">
                        <video
                          src={constructImageURL(
                            "/landing/features/ai_coach.webm",
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
                  </div>
                </div>

                {/* Mock Interview Section */}
                <div
                  id="simulator"
                  className="rounded-xl bg-opacity-10 p-6 backdrop-blur-sm md:p-2"
                >
                  <div className="flex flex-col gap-8 md:flex-row md:items-center">
                    <div className="order-last flex-1 lg:order-none">
                      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-700 to-violet-900 p-2">
                        <video
                          height={800}
                          width={1400}
                          className="h-auto w-full transform rounded-lg object-cover transition-transform duration-500 hover:scale-105"
                          draggable={false}
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source
                            media="(max-width: 768px)"
                            src={constructImageURL(
                              "/landing/features/mp4/simulator_demo.mp4",
                            )}
                            type="video/mp4"
                          />
                          <source
                            src={constructImageURL(
                              "/landing/features/simulator_demo.webm",
                            )}
                            type="video/webm"
                          />
                        </video>
                      </div>
                    </div>
                    <div className="hover-this flex-1 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <IconRobot className="h-8 w-8 text-cyan-400" />
                          <h2 className="font-bold sm:text-xl md:text-3xl">
                            Simulation
                          </h2>
                        </div>
                        <p className="text-neutral-400 md:text-lg">
                          Simulate any online professional meeting or interview
                          scenario with our Simulation feature to get real-time
                          feedback, personalized scores, and actionable tips
                        </p>
                      </div>
                      <TryItNowButtonAiCopilot />
                    </div>
                  </div>
                </div>

                {/* Summary & Report Section */}
                <div
                  id="summary_report"
                  className="rounded-xl  bg-opacity-10 p-6 backdrop-blur-sm md:p-2"
                >
                  <div className="flex flex-col gap-8 md:flex-row md:items-center">
                    <div className="hover-this flex-1 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <FileText className="h-8 w-8 text-cyan-400" />
                          <h2 className="font-bold sm:text-xl md:text-3xl">
                            Summary & Report
                          </h2>
                        </div>
                        <p className="text-neutral-400 md:text-lg">
                          Unlock your interview success with LockedIn AI&apos;s
                          Summary & Report! Get instant feedback, personalized
                          scores, and actionable tips to crush your next
                          interview and lock in the offer!
                        </p>
                      </div>

                      <TryItNowButtonAiCopilot />
                    </div>

                    <div className="flex-1">
                      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-700 to-violet-900 p-2">
                        <Image
                          src={constructImageURL(
                            "/landing/features/summary_report.png",
                          )}
                          alt="Session Summary & Report"
                          width={1400}
                          height={800}
                          className="h-auto w-full transform rounded-lg object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 px-4 text-left leading-relaxed text-neutral-300 md:text-lg">
            <h2 className="mb-2 text-xl font-bold text-cyan-300">
              Elevate Your Interview Game
            </h2>
            <p className="mb-4">
              Interviews can be daunting. From technical grilling to behavioral
              assessments, the pressure is on. LockedIn AI’s
              <strong className="text-cyan-300">
                {" "}
                dual-layered AI Copilot{" "}
              </strong>
              ensures you stay calm and confident by delivering real-time
              feedback and personalized suggestions during any interview
              scenario. Leverage the <em>interview hacks and tips</em>{" "}
              integrated into our platform to sharpen your responses, impress
              your interviewer, and land your dream job.
            </p>

            <h3 className="mb-2 text-lg font-semibold text-cyan-300">
              Comprehensive Interview Scenarios
            </h3>
            <p className="mb-4">
              Unlock your potential with our AI Copilot, designed to support a
              wide range of interview scenarios across multiple industries.
              Whether you&apos;re preparing for a software engineering role,
              system design interview, consulting position, finance role,
              product management opportunity, sales call, marketing position, or
              more, our AI Copilot personalizes your preparation based on your
              unique background and career goals, offering:
            </p>
            <ul className="list-disc pl-4">
              <li>
                <strong>Role-Specific Prompts:</strong> Receive tailored
                questions relevant to the position you’re applying for, ensuring
                you focus on what truly matters.
              </li>
              <li>
                <strong>Real-Time Score Analysis:</strong> Instantly assess your
                performance and receive actionable suggestions to refine your
                answers.
              </li>
              <li>
                <strong>Soft Skill Enhancement:</strong> Improve your
                leadership, teamwork, and communication skills, whether you’re
                interviewing in-person or virtually.
              </li>
            </ul>

            <h3 className="mb-2 mt-4 mt-8 text-lg font-semibold text-cyan-300">
              Top Interview Tips for Success
            </h3>
            <p className="mb-4">
              Preparing for an interview involves more than just rehearsing
              answers. Here are some expert tips to help you excel:
            </p>
            <ul className="list-disc pl-4">
              <li>
                <strong>Understand the Role:</strong> Research the job
                description thoroughly to align your skills and experiences with
                the role&apos;s requirements.
              </li>
              <li>
                <strong>Practice Common Questions:</strong> Familiarize yourself
                with frequently asked interview questions in your industry to
                respond confidently.
              </li>
              <li>
                <strong>Showcase Soft Skills:</strong> Demonstrate your ability
                to communicate effectively, work in a team, and lead when
                necessary.
              </li>
              <li>
                <strong>Prepare Your Own Questions:</strong> Prepare thoughtful
                questions to ask the interviewer, showcasing your genuine
                interest in the role and company.
              </li>
              <li>
                <strong>Follow Up:</strong> Send a personalized thank-you note
                after the interview to reiterate your interest and appreciation.
              </li>
            </ul>

            <h3 className="mb-2 mt-4 mt-8 text-lg font-semibold text-cyan-300">
              How to Leverage AI Copilot During Your Live Interviews
            </h3>
            <p className="mb-4">
              Our AI Copilot is more than just a real-time assistant — it’s your
              end to end preparation toolfor interview success. Here’s how you
              can make the most of it during live interviews:
            </p>
            <ul className="list-disc pl-4">
              <li>
                <strong>Real-Time Answer Generation:</strong> As the interviewer
                asks questions, our AI Copilot listens and instantly generates
                thoughtful, well-structured responses tailored to your unique
                profile and the job role.
              </li>
              <li>
                <strong>Instant Feedback and Refinement:</strong> Receive
                immediate suggestions to refine your answers on the spot,
                ensuring clarity and impact in your responses.
              </li>
              <li>
                <strong>Adaptive Question Handling:</strong> Our AI adapts to
                the flow of the conversation, helping you navigate unexpected or
                challenging questions with ease and confidence.
              </li>
              <li>
                <strong>Seamless Integration with Virtual Interviews:</strong>{" "}
                Whether it’s a video call or a phone interview, the AI Copilot
                seamlessly integrates to provide support without disrupting the
                natural flow of the conversation.
              </li>
              <li>
                <strong>Enhance Your Confidence:</strong> With real-time
                assistance, reduce anxiety and focus on showcasing your skills
                and experiences effectively, making a lasting impression on your
                interviewer.
              </li>
            </ul>

            <h3 className="mb-2 mt-4 mt-8 text-lg font-semibold text-cyan-300">
              Proven Interview Hacks
            </h3>
            <p className="mb-4">
              Our AI Coach taps into best practices gleaned from thousands of
              successful candidates. Master strategies such as the STAR method,
              pitch your unique value-add, and handle tricky behavioral
              questions with ease. Whether you’re a first-time job seeker or a
              seasoned pro, <strong>LockedIn AI Copilot</strong> helps you
              optimize every response.
            </p>

            <h3 className="mb-2 text-lg font-semibold text-cyan-300">
              Real-World Insights
            </h3>
            <p className="mb-4">
              We don’t just simulate standard interviews. Our platform can
              replicate <strong>real corporate environments</strong>, from
              boardroom Q&amp;As to client-facing presentations. Gain the
              confidence and communication finesse needed to excel in
              fast-paced, high-pressure environments.
            </p>

            <p className="mb-4">
              By incorporating these industry-tested techniques and leveraging
              our cutting-edge AI, you’ll be able to transform nerves into
              excitement and uncertainty into competence. With{" "}
              <strong>LockedIn AI Copilot</strong>, you’re not just
              prepared—you’re a step ahead.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
