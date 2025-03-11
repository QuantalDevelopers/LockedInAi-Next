import { Metadata } from "next";

import { AmbientColor } from "@/components/ambient-color";
import { ContactForm } from "@/components/contact-form";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact LockedIn AI: Get Support and Assistance",
  description:
    "LockedIn AI support team is here to help you with any questions or concerns you may have. Contact us for assistance with your account, billing, or any other inquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <ContactForm />
    </div>
  );
}
