import { cn } from "@/lib/utils";

import { StartForFreeButtonIsItFree } from "./affiliate-button";
import { Heading } from "./heading";
import { Subheading } from "./subheading";

export function IsItFree() {
  return (
    <>
      <div className="relative py-32">
        <div className="absolute -z-10 flex w-full items-center justify-center opacity-50">
          <div className=" inset-0 h-[250px] w-[250px] shrink-0 rounded-full bg-cyan-800 blur-3xl"></div>
          <div className=" inset-0 h-[350px] w-[350px] shrink-0 rounded-full bg-cyan-800 blur-3xl"></div>
          <div className=" inset-0 h-[250px] w-[250px] shrink-0 rounded-full bg-cyan-800 blur-3xl"></div>
        </div>
        <div className="my-10 h-full justify-center pt-10">
          <Heading as="h2">
            Is LockedIn AI <span className="text-cyan-400">Free</span>?{" "}
          </Heading>
          <Subheading className="hover-this">
            <>
              <span className="my-4 text-2xl text-lg font-bold text-cyan-500">
                Yes.
              </span>
              <br />
              <span className="my-4 text-sm">
                Enjoy 10 minutes of free service every day. While we offer
                premium plans for advanced features and enhanced meeting
                capabilities, the basic version of our AI Copilot for job
                interviews and professional meetings is free for everyone. As
                the leading community for AI-powered professional interview &
                professional meeting tools, we are also committed to advancing
                AI technology by enabling our users to contribute their
                computing power. This helps us make LockedIn AI incredibly
                effective while keeping core features free to use.{" "}
              </span>
              <br />
            </>
          </Subheading>
        </div>

        <StartForFreeButtonIsItFree />
      </div>
    </>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        `highlight relative my-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 p-3`,
        className,
      )}
    >
      {children}
    </span>
  );
};
