"use client";

import React, { useState } from "react";

import Accordion from "./accordion";
import { Heading } from "./heading";
import { Subheading } from "./subheading";

const questions = [
  {
    id: 1,
    title: "System Requirement",
    description:
      "Windows: Can share both entire screen(check share system audio) and chrome tabs. MacOS: Can only share the chrome tabs but you can launch your video conference in the chrome tabs instead of desktop app.",
  },
  {
    id: 2,
    title: "Supported Browser",
    description: "Chrome, Edge, Chromium, Opera, Brave",
  },
  {
    id: 3,
    title: "What are the supported industries?",
    description:
      "Our services cover a wide range of industries, including Software Engineering, Finance, Consulting, Marketing, Customer Success, Sales, Product Management, IT, Cyber Security, Data Analytics and more! For more info or questions about specific domains, hit up our customer support in our discord channel!",
  },
  {
    id: 4,
    title: "How do I cancel?",
    description:
      "We’ve teamed up with Stripe, so you can manage your subscription directly via the link on our website.",
  },
  {
    id: 5,
    title: "What are some other use cases?",
    description:
      "It has but not limited to the following use cases: Work meeting, presentation, online teaching, online training, online real-time translation, online dating ... Suitable for all kinds of live video conferencing software, such as Zoom, Skype, Google Meet, Microsoft.",
  },
  {
    id: 6,
    title: "How does the credit work?",
    description:
      "Credits are used for each minute of the session and never expire. You can continue to use the AI coach and Professional Meeting Copilot services until you run out of credits.",
  },
];
export const FAQs = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id="faq" className="mx-auto max-w-3xl px-8 py-20">
      <Heading as="h2" className="pt-4">
        Frequently asked questions
      </Heading>
      <div className="grid  gap-10 pt-20">
        {questions.map((item, i) => (
          <Accordion
            key={i}
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
