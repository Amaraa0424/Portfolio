"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating from high school in{" "}
        <span className="font-medium">2022</span>, I decided to embark on my
        journey into the world of{" "}
        <span className="font-medium">front-end development</span>. I've been
        working with{" "}
        <span className="font-medium">
          React.js, Next.js, Tailwind CSS, and Firebase
        </span>
        . <span className="italic">My favorite part of development</span> is the
        thrill of solving complex problems. I{" "}
        <span className="underline">love</span> the satisfaction of finding the
        perfect solution. In addition to my development skills, I'm no stranger
        to <span className="font-medium">data entry</span> tasks. I'm currently
        seeking new opportunities in the field to continue my journey as a{" "}
        <span className="font-medium">front-end developer</span>. If you have
        any questions or need more information, feel free to ask!
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching animes, and playing billiard with my friend. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">martial-art and philosophy</span>. I'm also
        learning how to play piano.
      </p>
    </motion.section>
  );
}
