import React from "react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import Balancer from "react-wrap-balancer";

import { BlogWithSlug } from "@/lib/blog";
import { truncate } from "@/lib/utils";

import { BlurImage } from "./blur-image";
import { Logo } from "./logo";

export const BlogCard = ({ blog }: { blog: BlogWithSlug }) => {
  return (
    <a
      className="group w-full overflow-hidden rounded-3xl border border-transparent shadow-derek transition duration-200 hover:scale-[1.02] hover:border-neutral-800 hover:bg-neutral-900"
      href={`/blog/${blog.slug}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {blog.image ? (
        <BlurImage
          src={blog.image || ""}
          alt={blog.title}
          height="800"
          width="800"
          className="h-72 w-full rounded-3xl object-cover object-top"
        />
      ) : (
        <div className="flex h-72 items-center justify-center group-hover:bg-neutral-900">
          <Logo />
        </div>
      )}
      <div className="p-4 group-hover:bg-neutral-900 md:p-8">
        <p className="mb-4 text-lg font-bold">
          <Balancer>{blog.title}</Balancer>
        </p>
        <p className="mt-2 text-left text-sm text-muted">
          {truncate(blog.description, 100)}
        </p>
        <div className="mt-6 flex items-center  space-x-2">
          <Image
            src={blog.author.src}
            alt={blog.author.name}
            width={20}
            height={20}
            className="h-5 w-5 rounded-full"
          />
          <p className="text-sm font-normal text-muted">{blog.author.name}</p>
        </div>
      </div>
    </a>
  );
};
