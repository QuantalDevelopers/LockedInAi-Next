import { AmbientColor } from "@/components/ambient-color";
import { TutorialContent } from "@/components/tutorials/tutorial-page";
import { constructImageURL } from "@/lib/image-hosting";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title:
    "LockedIn AI Tutorial - Learn to set up your Windows and Mac OS to use LockedIn AI",
  description:
    "LockedIn AI Tutorial: Learn how to set up your Windows and Mac OS to use LockedIn AI for real-time interview assistent, mock interview, coding interview question image analysis and more.",
  path: "/tutorials",
  openGraph: {
    images: [
      {
        url: constructImageURL("/landing/tutorial/tutorial_preview.png"),
        alt: "LockedIn AI Tutorial - Learn to set up your Windows and Mac OS to use LockedIn AI",
      },
    ],
  },
});
export default function TutorialPage() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <TutorialContent />
    </div>
  );
}
