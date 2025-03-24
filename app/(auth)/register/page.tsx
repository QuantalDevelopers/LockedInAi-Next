import { AmbientColor } from "@/components/ambient-color";
import { Register } from "@/components/register";
import { SecureBrowserLayout } from "@/components/secure-browser-layout";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Register for LockedIn AI: Unlock Your Productivity Today",
  description:
    "Register with LockedIn AI to unlock advanced interview & online meeting AI tools designed to enhance your workflow and improve team productivity effortlessly.",
  path: "/register",
});

export default function RegisterPage() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <SecureBrowserLayout>
        <Register />
      </SecureBrowserLayout>
    </div>
  );
}
