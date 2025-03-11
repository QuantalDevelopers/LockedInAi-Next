"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { Button } from "./button";

// Constants
const AFFILIATE_STORAGE_KEY = "affiliateVia";
const COOKIE_EXPIRY_DAYS = 30;

// Helper to set cookie with expiration
const setCookie = (name: string, value: string, days: number): void => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

// Helper to get cookie value
const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
};

// Wrapper component that uses searchParams
const ViaParamProvider = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const [via, setVia] = React.useState("");

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const urlVia = searchParams.get("via");

    if (urlVia) {
      localStorage.setItem(AFFILIATE_STORAGE_KEY, urlVia);
      setCookie(AFFILIATE_STORAGE_KEY, urlVia, COOKIE_EXPIRY_DAYS);
      setVia(urlVia);
    } else {
      const cookieVia = getCookie(AFFILIATE_STORAGE_KEY);
      const storageVia = localStorage.getItem(AFFILIATE_STORAGE_KEY);

      if (cookieVia) {
        setVia(cookieVia);
        localStorage.setItem(AFFILIATE_STORAGE_KEY, cookieVia);
      } else if (storageVia) {
        setVia(storageVia);
        setCookie(AFFILIATE_STORAGE_KEY, storageVia, COOKIE_EXPIRY_DAYS);
      }
    }
  }, [searchParams]);

  return React.cloneElement(children as React.ReactElement, { via });
};

// HOC to wrap components with Suspense and ViaParamProvider
const withViaParam = (
  WrappedComponent: React.ComponentType<{ via: string }>,
) => {
  return function WithViaParamWrapper(
    props: Omit<React.ComponentProps<typeof WrappedComponent>, "via">,
  ) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ViaParamProvider>
          <WrappedComponent {...props} via="" />
        </ViaParamProvider>
      </Suspense>
    );
  };
};

// Base button components
const BaseStartPracticingButton = ({ via }: { via: string }) => {
  const signUpUrl = `https://app.lockedinai.com/sign-up${via ? `?via=${via}` : ""}`;
  return (
    <div className="mt-16 flex justify-center">
      <Link
        href={signUpUrl}
        className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
      >
        <span className="relative z-10">Start Practicing Now</span>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </Link>
    </div>
  );
};

const BaseStartForFreeButtonHero = ({ via }: { via: string }) => {
  const startForFreeUrl = `https://app.lockedinai.com${via ? `?via=${via}` : ""}`;
  return (
    <div className="mt-4 flex justify-center">
      <a className="button-86 mb-4 !text-lg font-bold" href={startForFreeUrl}>
        START FOR FREE _
      </a>
    </div>
  );
};

const BaseStartForFreeButtonIsItFree = ({ via }: { via: string }) => {
  const startForFreeUrl = `https://app.lockedinai.com${via ? `?via=${via}` : ""}`;
  return (
    <div className="relative z-10 my-10 flex flex-col items-center justify-center gap-2">
      <a className="button-86 mb-4 !text-lg font-bold" href={startForFreeUrl}>
        START FOR FREE _
      </a>
    </div>
  );
};

const BaseStartForFreeButtonAiCopilot = ({ via }: { via: string }) => {
  const startForFreeUrl = `https://app.lockedinai.com${via ? `?via=${via}` : ""}`;
  return (
    <div className="mt-20 flex items-center justify-center">
      <a className="button-86 mb-4 !text-lg font-bold" href={startForFreeUrl}>
        START FOR FREE _
      </a>
    </div>
  );
};

const BaseStartForFreeButtonScenarios = ({ via }: { via: string }) => {
  const startForFreeUrl = `https://app.lockedinai.com${via ? `?via=${via}` : ""}`;
  return (
    <div className="relative z-10 mb-5 flex flex-col items-center justify-center gap-2">
      <a className="button-86 mb-4 !text-lg font-bold" href={startForFreeUrl}>
        START FOR FREE _
      </a>
    </div>
  );
};

const BaseTryItFreeButton = ({ via }: { via: string }) => {
  const tryItFreeUrl = `https://app.lockedinai.com${via ? `?via=${via}` : ""}`;
  return (
    <div className="relative z-10 my-20 flex flex-col items-center justify-center gap-2">
      <a className="button-86 mb-4 !text-lg font-bold" href={tryItFreeUrl}>
        TRY IT FREE _
      </a>
    </div>
  );
};

const BaseTryItFreeButtonJourney = ({ via }: { via: string }) => {
  const tryItFreeUrl = `https://app.lockedinai.com${via ? `?via=${via}` : ""}`;
  return (
    <div className="flex justify-center pb-20">
      <a className="button-86 text-lg font-bold" href={tryItFreeUrl}>
        TRY IT FREE _
      </a>
    </div>
  );
};

const BaseTryItNowButtonAiCopilot = ({ via }: { via: string }) => {
  const tryItNowUrl = `https://app.lockedinai.com${via ? `?via=${via}` : ""}`;
  return (
    <div className="flex justify-center">
      <a href={tryItNowUrl} target="_blank" rel="noopener noreferrer">
        <Button className="group relative mt-5 overflow-hidden border-none bg-gradient-to-r from-cyan-500 to-cyan-400 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
          <span className="relative flex items-center gap-2">
            Try it now
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Button>
      </a>
    </div>
  );
};

const BaseTryItNowButtonCTA = ({ via }: { via: string }) => {
  const tryItNowUrl = `https://app.lockedinai.com${via ? `?via=${via}` : ""}`;
  return (
    <div className="flex justify-center">
      <a href={tryItNowUrl} target="_blank" rel="noopener noreferrer">
        <Button className="group relative overflow-hidden border-none bg-gradient-to-r from-cyan-500 to-cyan-400 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
          <span className="relative flex items-center gap-2">
            Try it now
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Button>
      </a>
    </div>
  );
};

// Export all wrapped components
export const StartPracticingButton = withViaParam(BaseStartPracticingButton);
export const StartForFreeButtonHero = withViaParam(BaseStartForFreeButtonHero);
export const StartForFreeButtonIsItFree = withViaParam(
  BaseStartForFreeButtonIsItFree,
);
export const StartForFreeButtonAiCopilot = withViaParam(
  BaseStartForFreeButtonAiCopilot,
);
export const StartForFreeButtonScenarios = withViaParam(
  BaseStartForFreeButtonScenarios,
);
export const TryItFreeButton = withViaParam(BaseTryItFreeButton);
export const TryItFreeButtonJourney = withViaParam(BaseTryItFreeButtonJourney);
export const TryItNowButtonAiCopilot = withViaParam(
  BaseTryItNowButtonAiCopilot,
);
export const TryItNowButtonCTA = withViaParam(BaseTryItNowButtonCTA);
