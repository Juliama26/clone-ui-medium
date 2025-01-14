import React from "react";
import Links from "../elements/Links";

export default function OurStory() {
  return (
    <div className="min-h-screen bg-secondary text-primary">
      <section className="max-w-screen-md px-6 py-12 md:py-24 flex flex-col gap-y-8">
        <h2 className="text-6xl md:text-8xl leading-tight">
          Everyone has a story to tell
        </h2>
        <p className="text-lg">
          Medium is a home for human stories and ideas. Here, anyone can share
          knowledge and wisdom with the world—without having to build a mailing
          list or a following first. The internet is noisy and chaotic; Medium
          is quiet yet full of insight. It’s simple, beautiful, collaborative,
          and helps you find the right readers for whatever you have to say.
        </p>
        <p className="text-2xl text-accent">
          Ultimately, our goal is to deepen our collective understanding of the
          world through the power of writing.
        </p>
        <p className="text-lg">
          We believe that what you read and write matters. Words can divide or
          empower us, inspire or discourage us. In a world where the most
          sensational and surface-level stories often win, we’re building a
          system that rewards depth, nuance, and time well spent. A space for
          thoughtful conversation more than drive-by takes, and substance over
          packaging.
        </p>
        <p className="text-lg">
          Over 100 million people connect and share their wisdom on Medium every
          month. They’re software developers, amateur novelists, product
          designers, CEOs, and anyone burning with a story they need to get out
          into the world. They write about what they’re working on, what’s
          keeping them up at night, what they’ve lived through, and what they’ve
          learned that the rest of us might want to know too.
        </p>
        <p className="text-lg">
          Instead of selling ads or selling your data, we’re supported by a
          growing community of over a million Medium members who believe in our
          mission. If you’re new here, start reading. Dive deeper into whatever
          matters to you. Find a post that helps you learn something new, or
          reconsider something familiar—and then write your story.
        </p>
      </section>
      <Links>Start reading</Links>
      <Links>Start writing</Links>
      <Links>Become a member</Links>
    </div>
  );
}
