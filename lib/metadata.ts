import type { Metadata } from "next";

export function constructURL(path: string) {
  const root = "https://www.lockedinai.com";
  return `${root}${path}`;
}

interface OpenGraphData {
  images?: (
    | string
    | { url: string; alt?: string; width?: number; height?: number }
  )[];
  [key: string]: any;
}

export function createMetadata({
  title,
  description,
  path,
  siteName = "lockedin-ai",
  locale = "en_US",
  type = "website",
  openGraph = {},
}: {
  title: string;
  description: string;
  path: string;
  siteName?: string;
  locale?: string;
  type?: string;
  openGraph?: any;
}): Metadata {
  // Extract first Open Graph image if available
  let ogImages = openGraph.images || [];
  let firstOGImage = ogImages[0];

  // Determine Twitter image in a generic way
  let twitterImage;
  if (typeof firstOGImage === "string") {
    twitterImage = firstOGImage;
  } else if (
    firstOGImage &&
    typeof firstOGImage === "object" &&
    firstOGImage.url
  ) {
    twitterImage = { url: firstOGImage.url, alt: firstOGImage.alt };
  }

  return {
    title,
    description,
    alternates: {
      canonical: constructURL(path),
    },
    openGraph: {
      siteName,
      locale,
      type,
      url: constructURL(path),
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: twitterImage,
    },
  };
}
