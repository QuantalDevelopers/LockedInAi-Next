import "@/styles/globals.css";
import { AuthProvider } from "@/providers/AuthProvider";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";

import Banner from "@/components/banner";
import { Cursor } from "@/components/cursor";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { constructImageURL } from "@/lib/image-hosting";
import { cn } from "@/lib/utils";
import { headers } from "next/headers";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#06b6d4" },
    { media: "(prefers-color-scheme: dark)", color: "#06b6d4" },
  ],
};

export const metadata: Metadata = {
  title: "LockedIn AI - Professional AI Interview & Meeting Copilot",
  description:
    "LockedIn AI Co-Pilot is your AI interview & professional meeting assistant that provides real-time answers, insights, code solutions and live coaching",
  icons: {
    icon: "/favicon.ico",
    apple: constructImageURL("/landing/link-sharing/icon.png"),
  },
  alternates: {
    canonical: "https://www.lockedinai.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.lockedinai.com/",
    title: "LockedIn AI - Professional AI Interview & Meeting Copilot",
    description:
      "LockedIn AI Co-Pilot is your AI interview & professional meeting assistant that provides real-time answers, insights, code solutions and live coaching",
    siteName: "LockedIn AI",
    locale: "en_US",
    images: [
      {
        url: constructImageURL(
          "/landing/link-sharing/cyber-preview-1280x720.png",
        ),
        width: 1200,
        height: 600,
        alt: "LockedIn AI - Interview Hack Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lockedin_ai",
    creator: "@lockedin_ai",
    title: "LockedIn AI - Professional AI Interview & Meeting Copilot",
    description:
      "LockedIn AI Co-Pilot is your AI interview & professional meeting assistant that provides real-time answers, insights, code solutions and live coaching",
    images: {
      url: constructImageURL(
        "/landing/link-sharing/cyber-preview-1280x720.png",
      ),
      alt: "LockedIn AI - Twitter Preview",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get pathname from referer
  const headersList = headers();
  const referer = headersList.get("referer") || "";

  let pathname = "/";
  try {
    if (referer) {
      const url = new URL(referer);
      pathname = url.pathname;
    }
  } catch (error) {
    console.error("Invalid referer URL:", error);
  }

  console.log("Extracted Pathname:", pathname);

  // Check if the current path is an auth page
  const isAuthPage =
    pathname.startsWith("/Auth") || pathname === "/login" || pathname === "/signup" ||
    pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up");
    
  return (
    <ClerkProvider 
      appearance={{
        variables: { colorPrimary: "#06b6d4" }
      }}
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
    >
      <html lang="en">
        <body
          className={cn(inter.className, "h-full w-full bg-charcoal antialiased")}
        >
          <Toaster />
          <Sonner />
          <AuthProvider>
            <ViewTransitions>
              <Cursor />
              {!isAuthPage && <NavBar />} {/* Hide Navbar on auth pages */}
              <div className="min-h-screen">
                {children}
              </div>
              {!isAuthPage && <Footer />} {/* Hide Footer on auth pages */}
            </ViewTransitions>
          </AuthProvider>
          
          {/* Add error handling script for Clerk auth issues */}
          <script dangerouslySetInnerHTML={{
            __html: `
              // Function to handle Clerk authentication errors
              function handleClerkAuthIssues() {
                console.log('Setting up Clerk auth error handling...');
                
                // Add global error event listener
                window.addEventListener('error', function(e) {
                  // Check if error is related to Clerk authentication
                  if (e.message && (
                      e.message.includes('Clerk') || 
                      e.message.includes('authentication') ||
                      e.message.includes('Unable to authenticate')
                    )) {
                    console.log('Caught Clerk auth error, attempting recovery...');
                    clearClerkCookiesAndReload();
                  }
                });
                
                // Also listen for unhandled promise rejections
                window.addEventListener('unhandledrejection', function(e) {
                  if (e.reason && (
                      (typeof e.reason.message === 'string' && 
                        (e.reason.message.includes('Clerk') || 
                         e.reason.message.includes('authentication') ||
                         e.reason.message.includes('Unable to authenticate'))) ||
                      (e.reason.stack && e.reason.stack.includes('clerk'))
                    )) {
                    console.log('Caught Clerk promise rejection, attempting recovery...');
                    clearClerkCookiesAndReload();
                  }
                });
                
                // Check for common Clerk error elements in the DOM
                setTimeout(() => {
                  const errorElements = document.querySelectorAll('[data-clerk-error], .cl-errorText');
                  if (errorElements && errorElements.length > 0) {
                    console.log('Found Clerk error elements in DOM, attempting recovery...');
                    clearClerkCookiesAndReload();
                  }
                }, 2000);
              }
              
              // Function to clear Clerk cookies and reload the page
              function clearClerkCookiesAndReload() {
                // Clear all Clerk-related cookies
                const allCookies = document.cookie.split(';');
                for (let i = 0; i < allCookies.length; i++) {
                  const cookie = allCookies[i];
                  const eqPos = cookie.indexOf('=');
                  const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
                  if (name.startsWith('__clerk')) {
                    // Clear cookie for both localhost and specific ports
                    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
                    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=localhost;';
                  }
                }
                
                // Store a flag in sessionStorage to prevent infinite reload loops
                if (!sessionStorage.getItem('clerk_recovery_attempt')) {
                  sessionStorage.setItem('clerk_recovery_attempt', '1');
                  console.log('Reloading page to recover from Clerk auth issue...');
                  // After a short delay, reload the page
                  setTimeout(() => {
                    window.location.reload();
                  }, 500);
                } else {
                  const attempts = parseInt(sessionStorage.getItem('clerk_recovery_attempt') || '0');
                  if (attempts < 3) {
                    sessionStorage.setItem('clerk_recovery_attempt', (attempts + 1).toString());
                    console.log('Retrying Clerk auth recovery (attempt ' + (attempts + 1) + ')...');
                    setTimeout(() => {
                      window.location.reload();
                    }, 500);
                  } else {
                    console.log('Multiple recovery attempts failed. Redirecting to sign-in...');
                    sessionStorage.removeItem('clerk_recovery_attempt');
                    window.location.href = '/sign-in';
                  }
                }
              }
              
              // Initialize the error handling
              handleClerkAuthIssues();
              
              // Clear recovery attempt counter when page loads successfully
              if (sessionStorage.getItem('clerk_recovery_attempt')) {
                console.log('Page loaded successfully after recovery attempt');
                sessionStorage.removeItem('clerk_recovery_attempt');
              }
            `
          }} />
        </body>
      </html>
    </ClerkProvider>
  );
}
