import React from "react";
import Image from "next/image";
import {
  BarChart2,
  Clock,
  CreditCard,
  DollarSign,
  Share,
  Users,
} from "lucide-react";

import { constructImageURL } from "@/lib/image-hosting";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "LockedIn AI Partner Program",
  description:
    "LockedIn AI Affiliate Partner Program | Real-time AI Interview Copilot | Profession AI Meeting Copilot: Real-time answer and actionable instructions | AI Interview & Meeting Coach: Instant Feedback & Insights",
  path: "/ai-copilot",
  openGraph: {
    images: [
      {
        url: constructImageURL("/landing/affiliate/handshake.png"),
        alt: "Lockedinai affiliate partner Handshake Image, helping job seekers succeed with real-time AI-powered solutions",
      },
    ],
  },
});

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-gray-800 bg-gray-900 px-6 py-4">
        <div className="text-xl font-bold text-cyan-400">LockedIn AI</div>
        <div className="flex gap-4">
          <button className="px-4 py-2 text-gray-300 hover:text-white">
            Sign In
          </button>
          <button className="rounded-md bg-cyan-400 px-4 py-2 text-gray-900 hover:bg-cyan-300">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto flex flex-col items-center justify-between px-6 py-12 md:flex-row">
        <div className="mr-12 max-w-xl">
          <h1 className="mb-4 font-serif text-4xl text-cyan-400">
            Empower Job Seekers & Earn with LockedIn AI
          </h1>
          <p className="mb-8 text-gray-400">
            Partner with LockedIn AI and earn significant commissions while
            helping job seekers succeed with real-time AI-powered solutions.
          </p>
          <a href="https://lockedin-ai-1.getrewardful.com/signup">
            <button className="rounded-md bg-cyan-400 px-6 py-3 text-gray-900 hover:bg-cyan-300">
              Become a Growth Partner
            </button>
          </a>
        </div>
        <div className="mt-8 flex-1 md:mt-0">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-cyan-700 to-violet-900 p-2">
            <Image
              src={constructImageURL("/landing/affiliate/handshake.png")}
              alt="Lockedinai affiliate partner Handshake Image"
              width={1400}
              height={800}
              className="h-auto w-full transform rounded-lg object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Commission Section */}
      <div className="bg-gray-800 py-16 text-white">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-6xl font-bold text-cyan-400">30%</h2>
            <p className="text-xl text-gray-300">
              Commission on every referral
            </p>
          </div>

          {/* Key Benefits */}
          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gray-900 p-6">
              <div className="mb-4">
                <DollarSign className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-cyan-400">
                Generous Rewards
              </h3>
              <p className="text-gray-300">
                30% commission on every sale through your referral link
              </p>
            </div>

            <div className="rounded-lg bg-gray-900 p-6">
              <div className="mb-4">
                <Clock className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-cyan-400">
                Sustained Earnings
              </h3>
              <p className="text-gray-300">
                Earn commissions for 12 months after first transaction
              </p>
            </div>

            <div className="rounded-lg bg-gray-900 p-6">
              <div className="mb-4">
                <CreditCard className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-cyan-400">
                Easy Payouts
              </h3>
              <p className="text-gray-300">
                Quick and reliable payments once you reach $100
              </p>
            </div>

            <div className="rounded-lg bg-gray-900 p-6">
              <div className="mb-4">
                <BarChart2 className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-cyan-400">
                Accurate Tracking
              </h3>
              <p className="text-gray-300">
                Advanced tracking ensures all efforts are rewarded
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="mb-12 text-center font-serif text-3xl text-cyan-400">
          How the Program Works
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">
            <div className="mb-4 rounded-full bg-gray-800 p-3">
              <Users className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="mb-2 font-serif text-xl text-cyan-400">
              1. Sign Up
            </h3>
            <p className="text-gray-400">
              Apply to become a Growth Partner and get your custom referral
              link.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="mb-4 rounded-full bg-gray-800 p-3">
              <Share className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="mb-2 font-serif text-xl text-cyan-400">2. Share</h3>
            <p className="text-gray-400">
              Promote your link to friends, followers, and professional
              networks.
            </p>
          </div>

          <div className="flex flex-col items-start">
            <div className="mb-4 rounded-full bg-gray-800 p-3">
              <DollarSign className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="mb-2 font-serif text-xl text-cyan-400">3. Earn</h3>
            <p className="text-gray-400">
              Receive 30% of every sale driven by your referrals.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center font-serif text-3xl text-cyan-400">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                What is the LockedIn AI Growth Partner Program?
              </h3>
              <p className="text-gray-300">
                It&apos;s an opportunity to earn rewards by introducing people
                to LockedIn AI. Every successful referral earns you a 30%
                commission.
              </p>
            </div>

            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                Who can join?
              </h3>
              <p className="text-gray-300">
                Anyone with a network passionate about helping others succeed in
                their careers! Whether you&apos;re a content creator, business
                consultant, or an advocate for innovation.
              </p>
            </div>

            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                How do I track my performance?
              </h3>
              <p className="text-gray-300">
                Your personal dashboard will display all your referrals,
                commissions, and payout statuses, keeping you informed every
                step of the way.
              </p>
            </div>

            <div className="rounded-lg bg-gray-900 p-6">
              <h3 className="mb-3 text-lg font-semibold text-cyan-400">
                How are payouts handled?
              </h3>
              <p className="text-gray-300">
                Payments are made once you&apos;ve accumulated at least $100 in
                commissions, ensuring a seamless process.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300">
              Need help? Contact us at{" "}
              <span className="text-cyan-400">partners@lockedinai.com</span>
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="mb-4 font-serif text-3xl text-cyan-400">
          Join Us Today
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-400">
          Becoming a Growth Partner with LockedIn AI is quick and easy. Share
          your passion for empowering interviewees and start earning now!
        </p>
        <a href="https://lockedin-ai-1.getrewardful.com/signup">
          <button className="rounded-md bg-cyan-400 px-8 py-4 text-lg text-gray-900 hover:bg-cyan-300">
            Apply Now
          </button>
        </a>
      </div>
    </div>
  );
}
