import React from "react";
import { AiFillCloseSquare } from "react-icons/ai";

import { Container } from "./container";
import { FeatureIconContainer } from "./features/feature-icon-container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";

export function NotSupportedBrowser() {
  return (
    <Container className="flex min-h-screen justify-center gap-10 px-6 py-40 md:py-60">
      <div>
        <div className="mb-5 flex justify-center">
          <FeatureIconContainer className="flex items-center justify-center overflow-hidden">
            <AiFillCloseSquare className="h-6 w-6 text-cyan-500" />
          </FeatureIconContainer>
        </div>
        <div className="text-center">
          <Heading as="h1">This Browser Is Not Supported</Heading>
        </div>
        <br />
        <div className="mt-10 text-center">
          <Subheading className="font-source-code-pro">
            Supported Browsers:
          </Subheading>
        </div>
        <div className="mt-10 text-center">
          <p>Google Chrome, Edge, Opera, or Samsung Internet</p>
        </div>
        <br />
        <div className="flex justify-center">
          <div className="relative rounded-lg bg-gray-800/75 px-8 py-4">
            <div className="mb-8 flex items-center">
              <span className="text-md inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-300/75 font-bold text-white">
                1
              </span>
              <span className="font-source-code-pro ml-4 text-xs text-white">
                Click the{" "}
                <span className="rounded bg-gray-600 px-2 py-1 text-white">
                  ···
                </span>{" "}
                button in the top right
              </span>
            </div>

            <div className="flex items-center">
              <span className="text-md inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-300/75 font-bold text-white">
                2
              </span>
              <span className="font-source-code-pro ml-4 text-xs text-white">
                Select{" "}
                <span className="rounded bg-gray-600 px-2 py-1 text-white">
                  Open in external browser
                </span>
              </span>
            </div>
          </div>
        </div>
        <br />
      </div>
    </Container>
  );
}
