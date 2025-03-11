import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

import { constructImageURL } from "@/lib/image-hosting";

import { GuideSection, GuideStep } from "./guide";
import { ScrollSpy } from "./scrollbar";
import { Sidebar } from "./sidebar";

interface Section {
  id: string;
  title: string;
}

export function WindowsTutorial(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string>("getting-started");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const sections: Section[] = [
    { id: "getting-started", title: "Getting Started" },
    { id: "audio-permission", title: "How to Enable Audio Permission" },
    { id: "extension-permission", title: "How to Enable Extension" },
    { id: "use-copilot", title: "How to Start Copilot" },
    { id: "copilot-settings", title: "Copilot Settings & Preferences" },
    { id: "customize-session", title: "How to Customize Your Session" },
    { id: "tailor-response", title: "How to Tailor Your AI Responses" },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="relative flex-1 lg:ml-64">
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black bg-opacity-90 lg:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
        <div className="max-w-full px-4 sm:px-6 md:px-8 lg:mx-auto lg:max-w-5xl">
          <ScrollSpy sections={sections} onSectionChange={setActiveSection} />
          <div className="mb-8 flex items-center pt-4">
            <button className="sm:hidden" onClick={toggleSidebar}>
              <Menu className="h-6 w-6 text-white" />
            </button>
            <h1 className="ml-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-left text-3xl font-extrabold text-transparent md:ml-0 md:text-4xl">
              Windows OS Setup Guide
            </h1>
          </div>

          <GuideSection id="getting-started" title="Getting Started">
            <GuideStep
              number="1"
              title="Create an Account"
              description="Sign up for a LockedIn AI account on our website."
            />
            <GuideStep
              number="2"
              title="Download the Extension"
              description="Install our browser extension from the Chrome Web Store."
            />
          </GuideSection>

          <GuideSection
            id="audio-permission"
            title="Setting Up Audio Permissions"
          >
            <GuideStep
              number="1"
              title="Step 1"
              description="Click the Start button on the taskbar."
              image={constructImageURL(
                "/landing/tutorial/windows-system-step1.jpg",
              )}
            />
            <GuideStep
              number="2"
              title="Step 2"
              description="Navigate to “Settings"
              image={constructImageURL(
                "/landing/tutorial/windows-system-step2.jpg",
              )}
            />
            <GuideStep
              number="3"
              title="Step 3"
              description="Select 'Privacy & security' on the lower left corner, then choose 'Microphone' under 'App permissions'"
              image={constructImageURL(
                "/landing/tutorial/windows-system-step3.jpg",
              )}
            />
            <GuideStep
              number="4"
              title="Step 4"
              description="Find Google Chrome and toggle the switch to enable it"
              image={constructImageURL(
                "/landing/tutorial/windows-system-step4.jpg",
              )}
            />
            <GuideStep
              number="5"
              title="Step 5"
              description="Go to System -> Sound and select Output devices"
              image={constructImageURL(
                "/landing/tutorial/windows-system-step5.jpg",
              )}
            />
            <GuideStep
              number="6"
              title="Step 6"
              description="Pick your current speaker"
              image={constructImageURL(
                "/landing/tutorial/windows-system-step6.jpg",
              )}
            />
            <GuideStep
              number="7"
              title="Step 7"
              description="Click Yes Open Audio Enhancements"
              image={constructImageURL(
                "/landing/tutorial/windows-system-step7.jpg",
              )}
            />
            <GuideStep
              number="8"
              title="Step 8"
              description="If the above steps do not work, try uninstalling and reinstalling your Realtek Audio driver in the Device Manager."
              image={constructImageURL(
                "/landing/tutorial/windows-system-step8.jpg",
              )}
            />
            <GuideStep
              number="9"
              title="Enable Stereo Mix"
              description="Turn on the Stereo Mix option if available."
            />
          </GuideSection>

          <GuideSection
            id="extension-permission"
            title="Enabling Extension Permissions"
          >
            <GuideStep
              number="1"
              title="Install the Extension"
              description="Visit the LockedIn AI page on the Chrome Web Store and click Add to Chrome."
              image={[
                constructImageURL(
                  "/landing/tutorial/extension-usage-step1.jpg",
                ),
                constructImageURL(
                  "/landing/tutorial/extension-usage-step1.1.jpg",
                ),
              ]}
            />
            <GuideStep
              number="2"
              title="Locate Extension"
              description="Open Google Chrome, click the menu icon (three vertical dots) in the top-right corner, and select Extensions > Manage Extensions."
              image={constructImageURL(
                "/landing/tutorial/extension-usage-step2.jpg",
              )}
            />
            <GuideStep
              number="3"
              title="Activate the Extension"
              description="Locate LockedIn AI under 'All Extensions' and toggle the switch to Enable. Ensure the shortcut is configured correctly. The default shortcut is: macOS: Command + Shift + U Windows: Ctrl + Shift + U"
              image={constructImageURL(
                "/landing/tutorial/extension-usage-step3.jpg",
              )}
            />
            <GuideStep
              number="4"
              title="Verify Extension Hotkey"
              description="Go to chrome://extensions/shortcuts"
            />
          </GuideSection>

          <GuideSection id="use-copilot" title="How to Use the Copilot">
            <GuideStep
              number="1"
              title="Capture Tab Audio"
              description="Once you start your session, click the capture audio button on the top-right corner to capture your interview audio."
              image={constructImageURL(
                "/landing/tutorial/sharing-system-audio-step1.jpg",
              )}
            />
            <GuideStep
              number="2"
              title="Choose Sharing Option"
              description="You can share either the Chrome tab with tab audio enabled or the entire screen with system audio enabled"
              image={constructImageURL(
                "/landing/tutorial/sharing-system-audio-step2.jpg",
              )}
            />
            <GuideStep
              number="3"
              title="Hide Notification"
              description="For Windows users, if you wish to hide the notification bar while presenting to your interviewer: Share your 'Entire Screen' and enable 'System Audio'. Hide the notification bar at the bottom of your screen."
              image={[
                constructImageURL(
                  "/landing/tutorial/windows-hide-notification.jpg",
                ),
                constructImageURL(
                  "/landing/tutorial/windows-hide-notification-2.jpg",
                ),
              ]}
            />
          </GuideSection>

          <GuideSection id="copilot-settings" title="Settings & Preferences">
            <GuideStep
              number="1"
              title="Access Settings"
              description="Click on the gear icon in the LockedIn AI interface."
              image={constructImageURL(
                "/landing/tutorial/configure-copilot-step1.jpg",
              )}
            />
            <GuideStep
              number="2"
              title="Adjust the Preferences"
              description={
                <ul>
                  <li>
                    • Response Length: Customize the desired length of the
                    responses.
                  </li>
                  <li>
                    • Language and Accent: Choose your preferred language and
                    accent.
                  </li>
                  <li>
                    • Processing Time: Set the time required for processing.
                  </li>
                  <li>
                    • Filter Words: Apply filters to exclude specific words from
                    responses.
                  </li>
                </ul>
              }
              image={constructImageURL(
                "/landing/tutorial/configure-copilot-step2.jpg",
              )}
            />
          </GuideSection>

          <GuideSection id="customize-session" title="Customizing Your Session">
            <GuideStep
              number="1"
              title="Locate Setting Button"
              description="Locate and click the gear icon in the top-right corner."
              image={constructImageURL(
                "/landing/tutorial/customize-session-1.jpg",
              )}
            />
            <GuideStep
              number="2"
              title="Customize Your Session"
              description={
                <ul>
                  <li>
                    • Auto Scroll: Enable or disable automatic scrolling to new
                    messages.
                  </li>
                  <li>
                    • Coach Panel: Toggle the visibility of the coach panel.
                  </li>
                  <li>
                    • Manual Mode: Activate manual control for response
                    generation.
                  </li>
                  <li>
                    • Message Order: Choose to display the newest messages at
                    the top or bottom.
                  </li>
                  <li>
                    • Font Size: Adjust the text size using the slider (e.g.,
                    set to 14px).
                  </li>
                </ul>
              }
              image={constructImageURL(
                "/landing/tutorial/customize-session-2.jpg",
              )}
            />
          </GuideSection>

          <GuideSection
            id="tailor-response"
            title="Setting Up Audio Permissions"
          >
            <GuideStep
              number="1"
              title="Upload Documents"
              description="Click on the cloud upload icon labeled 'Upload Documents'."
              image={constructImageURL("/landing/tutorial/fine-tune-ai-1.jpg")}
            />
            <GuideStep
              number="2"
              title="Select Document Type"
              // description="Locate the document type dropdown menu and choose the appropriate category."
              description={
                <ul>
                  <li>
                    Locate the document type dropdown menu and choose the
                    appropriate category.
                  </li>
                  <li>• Resume</li>
                  <li>• Job Description</li>
                  <li>• Supporting Material</li>
                  <li>• Sales Pitch</li>
                  <li>• Knowledge Bank</li>
                  <li>• Training Material</li>
                </ul>
              }
              image={constructImageURL("/landing/tutorial/fine-tune-ai-2.jpg")}
            />
            <GuideStep
              number="3"
              title="Add Your Files:"
              description={
                <ul>
                  <li>
                    • Drag and drop your documents into the upload area or click
                    Add to select files manually. Supported formats include PDF,
                    DOCX, and TXT (up to 10MB).
                  </li>
                  <li>
                    • Once the file is added, click Confirm to save and finalize
                    the document upload.
                  </li>
                </ul>
              }
              image={constructImageURL("/landing/tutorial/fine-tune-ai-3.jpg")}
            />
          </GuideSection>

          <div className="mb-8 mt-8 text-center">
            <a
              href="https://app.lockedinai.com/sign-up"
              className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              <span className="relative flex items-center">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
