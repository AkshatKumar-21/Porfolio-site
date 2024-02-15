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
      {/* <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
      <p>
      My name is Akshat Kumar, and I'm a <span className="font-medium">third-year student</span> pursuing a degree in <span className="font-bold">Computer Science and Engineering</span> at <span className="font-bold">NIT Hamirpur</span>. With a passion for development and all things related to websites, I've embarked on an exciting journey into the realm of web development.

      My fascination with web development began from the basics and has since evolved into a deep dive into various technologies and frameworks. From mastering the fundamentals to exploring advanced concepts, I've honed my skills in a wide array of tools and languages. I have a solid grasp of <span className="font-bold">
          React, Next.js, Node.js, and MongoDB, MERN stack
      </span> and other cutting-edge technologies, allowing me to create dynamic and innovative web solutions.

      In addition to my academic pursuits, I've also embarked on numerous personal projects and collaborative endeavors, further refining my expertise and pushing the boundaries of my creativity. Whether it's crafting intuitive user interfaces or experimenting with the latest industry trends, I'm always eager to explore new avenues and push the limits of what's possible in the digital landscape.

      </p>
    </motion.section>
  );
}
