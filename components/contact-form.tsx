import React from "react";
import { IconMailFilled } from "@tabler/icons-react";

import { Button } from "./button";
import { Container } from "./container";
import { FeatureIconContainer } from "./features/feature-icon-container";
import { Grid } from "./features/grid";
import { Heading } from "./heading";
import { Subheading } from "./subheading";

export const ContactForm = () => {
  return (
    <Container className="grid grid-cols-1 gap-10 px-6 py-40 md:grid-cols-2 md:py-60">
      <div>
        <div className="flex">
          <FeatureIconContainer className="flex items-center justify-center overflow-hidden">
            <IconMailFilled className="h-6 w-6 text-cyan-500" />
          </FeatureIconContainer>
        </div>
        <Heading as="h1" className="text-left">
          Contact us
        </Heading>
        <Subheading className="text-left text-neutral-400">
          We are always looking for ways to improve our products and services.
          Contact us and let us know how we can help you.
        </Subheading>

        <div className="mt-10 text-sm">
          <p className="text-sm text-neutral-200">Email</p>
          <p className="text-sm text-neutral-400">contact@LockedIn.ai</p>
        </div>
        <div className="mt-4 text-sm">
          <p className="text-sm text-neutral-200">Phone</p>
          <p className="text-sm text-neutral-400">+1 (800) 123 XX21</p>
        </div>
        <div className="mt-4 text-sm">
          <p className="text-sm text-neutral-200">Support</p>
          <p className="text-sm text-neutral-400">support@LockedIn.ai</p>
        </div>
      </div>
      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-neutral-900 to-neutral-950 p-10">
        <Grid size={20} />
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-neutral-300"
            htmlFor="name"
          >
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Caesar"
            className="h-10 w-full rounded-md border border-neutral-800 bg-charcoal pl-4 text-sm text-white placeholder-neutral-500 outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none"
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-neutral-300"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="contact@lockedinai.com"
            className="h-10 w-full rounded-md border border-neutral-800 bg-charcoal pl-4 text-sm text-white placeholder-neutral-500 outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none"
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-neutral-300"
            htmlFor="company"
          >
            Company
          </label>
          <input
            id="company"
            type="text"
            placeholder="contact@lockedinai.com"
            className="h-10 w-full rounded-md border border-neutral-800 bg-charcoal pl-4 text-sm text-white placeholder-neutral-500 outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none"
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className="mb-2 inline-block text-sm font-medium text-neutral-300"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Type your message here"
            className="w-full rounded-md border border-neutral-800 bg-charcoal pl-4 pt-4 text-sm text-white placeholder-neutral-500 outline-none focus:outline-none focus:ring-2 focus:ring-neutral-800 active:outline-none"
          />
        </div>
        <Button variant="muted">Submit</Button>
      </div>
    </Container>
  );
};
