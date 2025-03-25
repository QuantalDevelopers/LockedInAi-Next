"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import Head from "next/head";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <>
      <Head>
        <title>404 - Page Not Found | LockedInAI</title>
        <meta name="description" content="Oops! The page you are looking for does not exist. Return to the homepage and continue browsing LockedInAI." />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:title" content="404 - Page Not Found | LockedInAI" />
        <meta property="og:description" content="Oops! The page you are looking for does not exist. Return to the homepage and continue browsing LockedInAI." />
        <meta property="og:url" content={`https://www.lockedinai.com/Not-Found`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 - Page Not Found | LockedInAI" />
        <meta name="twitter:description" content="Oops! The page you are looking for does not exist. Return to the homepage and continue browsing LockedInAI." />
      </Head>

      
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Page not found</p>
          <Link href="/" className="text-blue-500 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
