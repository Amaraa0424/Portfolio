import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import MotoImg from "@/public/moto-project.png";
import rmtdevImg from "@/public/rmtdev.png";
import riverClubImg from "@/public/riverclub-project.png";

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
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Ehlel Academy",
    location: "Ulanbator, MN",
    description:
      "I graduated after 3 months of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Front-End Developer",
    location: "Ulanbator, MN",
    description:
      "I worked as a front-end developer for 1 years in company. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Ulanbator, MN",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Firebase. Though I usually do Front-end Development",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Moto",
    description:
      "I worked as a front-end developer on this startup project for 1 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "Data Entry", "Tailwind", "Firebase"],
    imageUrl: MotoImg,
  },
  {
    title: "River Club",
    description:
      "A public kiosk app for quick register and purchase of the plan for users. It shows the plan and schedule of the club and users can purchase the plan what they like with few move.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: riverClubImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "UI/UX"
] as const;
