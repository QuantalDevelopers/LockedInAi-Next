// BlogLayout.tsx
import Image from "next/image";
import Link from "next/link";
import { IconArrowLeft } from "@tabler/icons-react";
import { format } from "date-fns";

import { BlogWithSlug } from "@/lib/blog";

import { Container } from "./container";
import { Heading } from "./heading";
import { Logo } from "./logo";
import { TableOfContentsWrapper } from "./TableOfContentsWrapper";

interface BlogLayoutProps {
  blog: BlogWithSlug;
  children: React.ReactNode;
}

export function BlogLayout({ blog, children }: BlogLayoutProps) {
  const date = new Date(`${blog.date}T00:00:00Z`);
  // Format the date to YYYY-MM-DD
  const formattedDate = date.toISOString().split("T")[0];

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="flex items-center justify-between px-2 py-8">
        <Link href="/blog" className="flex items-center space-x-2">
          <IconArrowLeft className="h-4 w-4 text-muted" />
          <span className="text-sm text-muted">Back</span>
        </Link>
      </div>

      <div className="prose prose-xl prose-invert mx-auto">
        {blog.image ? (
          <Image
            src={blog.image}
            height={800}
            width={800}
            className="aspect-square h-40 w-full rounded-3xl object-cover md:h-96"
            alt={blog.alt || blog.title}
          />
        ) : (
          <div className="aspect-squace flex h-40 w-full items-center justify-center rounded-3xl bg-neutral-900 shadow-derek md:h-96">
            <Logo />
          </div>
        )}
      </div>

      <div className="xl:relative">
        <TableOfContentsWrapper />

        <div className="w-full">
          <article className="pb-8">
            <header className="flex flex-col">
              <Heading
                as="h1"
                className="mt-8 text-xl font-bold tracking-tight text-neutral-200 sm:text-5xl md:text-4xl"
              >
                {blog.title}
              </Heading>
            </header>
            <div
              className="prose-md prose prose-invert mx-auto mt-8 max-w-4xl"
              data-mdx-content
            >
              {children}
            </div>
            <div className="mt-12 flex items-center space-x-2 border-t border-neutral-800 pt-12">
              <div className="flex items-center space-x-2">
                <Image
                  src={blog.author.src}
                  alt={blog.author.name}
                  width={20}
                  height={20}
                  className="h-5 w-5 rounded-full"
                />
                <p className="text-sm font-normal text-muted">
                  {blog.author.name}
                </p>
              </div>
              <div className="h-5 w-0.5 rounded-lg bg-neutral-700" />
              <time
                dateTime={formattedDate}
                className="flex items-center text-base"
              >
                <span className="text-sm text-muted">
                  {format(new Date(blog.date), "MMMM dd, yyyy")}
                </span>
              </time>
            </div>
          </article>
        </div>
      </div>
    </Container>
  );
}
