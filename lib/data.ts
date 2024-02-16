import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import ecommerce from "@/public/MERN-E-commerce.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import musicplayer from "@/public/Music-player-app.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;


export const projectsData = [
  {
    title: "E-Commerce Website",
    description: "Developed a feature-rich E-commerce website using the MERN(MongoDB,Express.js, React.js, Node.js) stack",
    tags: ["React", "MongoDB", "Tailwind", "Node.js"],
    imageUrl: ecommerce,
    link: "https://mern-e-commerce-final-form.vercel.app/"
    
  },
  {
    title: "Music-Player-App",
    description:
      " Designed and built a robust music application using Next.js, Supabase, and PostgreSQL, featuring seamless user experience and functionality",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    imageUrl: musicplayer,
    link : "https://music-player-app-sage.vercel.app/"
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
  "SupaBase",
  "PostgreSQL"
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
    
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;
