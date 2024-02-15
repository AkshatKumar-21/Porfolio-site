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
  },
  {
    title: "Music-Player-App",
    description:
      " Designed and built a robust music application using Next.js, Supabase, and PostgreSQL, featuring seamless user experience and functionality",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    imageUrl: musicplayer,
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
