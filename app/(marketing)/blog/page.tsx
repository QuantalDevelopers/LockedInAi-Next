import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconClipboardText } from "@tabler/icons-react";
import { format } from "date-fns";

import { BlogCard } from "@/components/blog-card";
import { Container } from "@/components/container";
import { FeatureIconContainer } from "@/components/features/feature-icon-container";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { getAllBlogs } from "@/lib/blog";
import { constructImageURL } from "@/lib/image-hosting";
import { createMetadata } from "@/lib/metadata";
import { truncate } from "@/lib/utils";

export const metadata = createMetadata({
  title:
    "LockedIn AI Blog - Strategies and insights for job seekers and professionals",
  description:
    "Explore the LockedIn AI Blog for insights, hacks, tips, and the latest news on leveraging AI to improve your interview skills, productivity and workflow efficiency.",
  path: "/blog",
  openGraph: {
    images: [
      {
        url: constructImageURL("/landing/blog/main_blog_preview.png"),
        alt: "LockedIn AI - Interview Strategy & Hack Preview",
      },
    ],
  },
});

export default async function ArticlesIndex() {
  let blogs = await getAllBlogs();
  const featuredBlogs = blogs.filter((blog) => blog.featured);
  const leftOverBlogs = blogs.filter((blog) => !blog.featured);
  return (
    <div className="relative overflow-hidden py-20 md:py-0">
      <Container className="flex flex-col items-center justify-between pb-20 ">
        <div className="relative z-20 py-10 md:pt-40">
          <FeatureIconContainer className="flex items-center justify-center overflow-hidden">
            <IconClipboardText className="h-6 w-6 text-cyan-500" />
          </FeatureIconContainer>
          <Heading as="h1" className="mt-4">
            LockedIn AI Blogs
          </Heading>
          <Subheading className="text-center">
            Learn how to ace your next interview with our expert tips like a
            pro!
          </Subheading>
        </div>

        <div className="relative z-20 grid w-full  grid-cols-1 gap-10 px-4 md:grid-cols-3">
          {featuredBlogs.map((blog, index) => (
            <BlogCard blog={blog} key={blog.title + index} />
          ))}
        </div>

        <div className="w-full px-4 py-20">
          <p className="mb-10 text-2xl font-bold text-white">More Posts</p>

          <div className="divide-y divide-neutral-800">
            {leftOverBlogs.map((blog, index) => (
              <a
                href={`/blog/${blog.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                key={blog.slug + index}
                className="group flex flex-col items-start justify-between py-4 md:flex-row md:items-center"
              >
                <div>
                  <p className="text-lg font-medium text-neutral-300 transition duration-200 group-hover:text-white">
                    {blog.title}
                  </p>
                  <p className="mt-2 max-w-xl text-sm text-neutral-300 transition duration-200 group-hover:text-white">
                    {truncate(blog.description, 80)}
                  </p>

                  <p className="mt-2 max-w-xl text-sm text-neutral-300 transition duration-200 group-hover:text-white">
                    {format(new Date(blog.date), "MMMM dd, yyyy")}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-2 ">
                  <Image
                    src={blog.author.src}
                    alt={blog.author.name}
                    width={40}
                    height={40}
                    className="h-6 w-6 rounded-full object-cover md:mt-0 md:h-10 md:w-10"
                  />
                  <p className="max-w-xl text-sm text-neutral-300 transition duration-200 group-hover:text-white">
                    {blog.author.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
