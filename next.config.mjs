import rehypePrism from "@mapbox/rehype-prism";
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "unsplash.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "i.pravatar.cc" },
      { hostname: "d1n3oewcfgleny.cloudfront.net" },
    ],
  },
  pageExtensions: ["ts", "tsx", "mdx"],
  async redirects() {
    return [
      {
        source: "/blog/how-to-properly-use-the-meeting-simulator",
        destination: "/blog/meeting-simulator-to-train-yourself",
        permanent: true,
      },
      {
        source: "/not-supported-browser",
        destination: "https://www.lockedinai.com",
        permanent: true,
      },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      {
        source: "/blog/sales-meetings",
        destination: "/blog/how-to-use-lockedin-ai-for-sales",
        permanent: true,
      },
      {
        source: "/blog/consultant-success",
        destination: "/blog/how-to-use-lockedin-ai-for-consultant-success",
        permanent: true,
      },
      {
        source: "/blog/how-to-use-the-extension-for-oa",
        destination: "/blog/how-to-use-extension-for-online-assessment",
        permanent: true,
      },
      {
        source: "/blog/how-lockedin-ai-can-transform",
        destination: "/blog/how-ai-transform-your-professional-networking",
        permanent: true,
      },
      {
        source: "/blog/integrate-ai-meeting-assistant",
        destination:
          "/blog/integrating-ai-meeting-assistants-into-your-workflow",
        permanent: true,
      },
      {
        source: "/blog/improve-remote-team-collaboration-with-ai",
        destination: "/blog/improve-remote-team-collaboration",
        permanent: true,
      },
      {
        source: "/term-of-service",
        destination: "/terms-of-service",
        permanent: true,
      },
      {
        source: "/blog/recruiting-strategy",
        destination:
          "/blog/revolutionize-your-recruiting-strategy-with-lockedIn-ai",
        permanent: true,
      },
      {
        source: "/blog/screen-share",
        destination: "/blog/screen-share-strategies",
        permanent: true,
      },
      {
        source: "/blog/how-to-offer-consultation-service",
        destination: "/blog/how-to-offer-consultation-service-using-the-app",
        permanent: true,
      },
      {
        source: "/blog/land-high-paying-jobs",
        destination:
          "/blog/land-high-paying-jobs-using-these-ai-interview-strategies",
        permanent: true,
      },
      {
        source: "/blog/why-your-team-needs-ai-meeting-assistant",
        destination:
          "/blog/maximizing-team-efficiency-with-ai-meeting-assistants",
        permanent: true,
      },
      {
        source: "/blog/how-to-answer-behavioral",
        destination:
          "/blog/how-to-answer-behavioral-questions-using-lockedIn-ai",
        permanent: true,
      },
      {
        source: "/blog/how-to-use-nvidia-broadcast",
        destination:
          "/blog/how-to-use-nvidia-broadcast-eye-contact-for-interviews",
        permanent: true,
      },
      {
        source: "/policy.html",
        destination: "https://www.lockedinai.com",
        permanent: true,
      },
      {
        source: "/blog/phone-call",
        destination: "/blog/phone-interviews-on-laptop-using-lockedIn-ai",
        permanent: true,
      },
      {
        source: "/blog/integrating-ai-meeting-assistants",
        destination:
          "/blog/integrating-ai-meeting-assistants-into-your-workflow",
        permanent: true,
      },
      {
        source: "/blog/phone-interview",
        destination: "/blog/phone-interviews-on-laptop-using-lockedIn-ai",
        permanent: true,
      },
      {
        source: "/blog/sales-success",
        destination: "/blog/how-to-use-lockedin-ai-for-sales",
        permanent: true,
      },
      {
        source: "/why-we-created-lockedin-ai",
        destination: "/blog/why-we-created-lockedin-ai",
        permanent: true,
      },
      {
        source: "/blog/how-to-properly-use-extension-for-meeting",
        destination: "/blog/extension-and-app-for-online-meetings",
        permanent: true,
      },
    ];
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
