import React from "react";
import Card from "../components/Card";
import type { CollectionEntry } from "astro:content";
import { getPostColorFromCategory } from "../utils/postUtils";
import Tag from "../components/Tag";
import CutCornerButton from "../components/CutCornerButton";
import { twMerge } from "tailwind-merge";

const LatestPosts = ({
  latestPosts,
}: {
  latestPosts: CollectionEntry<"blog">[];
}) => {
  return (
    <section className="py-60">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-4xl font-black md:text-5xl lg:text-6xl">
            Your portal to everything blockchain
          </h2>
          <p className="mt-8 text-center text-xl text-zinc-400 lg:text-2xl">
            Keep up with the newest trends, updates, and insights in the
            blockchain world, update weekly
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-28 md:grid-cols-2">
          <div className="flex flex-col gap-8">
            {latestPosts.map(
              ({ data: { title, description, category } }, itemIndex) => (
                <Card
                  buttonText="Read More"
                  key={itemIndex}
                  className={twMerge(
                    (itemIndex === 1 || itemIndex === 3) && "md:hidden",
                  )}
                  color={getPostColorFromCategory(category)}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="mt-3 font-heading text-3xl font-black">
                    {title}
                  </h3>
                  <p className="mt-6 text-lg text-zinc-400">{description}</p>
                </Card>
              ),
            )}
          </div>
          <div className="hidden md:mt-16 md:flex md:flex-col md:gap-8">
            {latestPosts.map(
              ({ data: { title, description, category } }, itemIndex) => (
                <Card
                  buttonText="Read More"
                  key={itemIndex}
                  className={twMerge(
                    (itemIndex === 0 || itemIndex === 2) && "md:hidden",
                  )}
                  color={getPostColorFromCategory(category)}
                >
                  <Tag color={getPostColorFromCategory(category)}>
                    {category}
                  </Tag>
                  <h3 className="mt-3 font-heading text-3xl font-black">
                    {title}
                  </h3>
                  <p className="mt-6 text-lg text-zinc-400">{description}</p>
                </Card>
              ),
            )}
          </div>
        </div>
        <div className="mt-48 flex justify-center md:mt-32">
          <CutCornerButton>Read The Blogs</CutCornerButton>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
