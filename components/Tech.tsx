"use client";

import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/app/style";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";

const skillGroups = [
  {
    category: "Frameworks & Libraries",
    skills: [
      "React Native CLI",
      "Expo",
      "React.js",
      "Next.js",
      "Redux-Toolkit",
      "React Query",
      "React Navigation",
    ],
  },
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript"],
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Node.js",
      "RESTful APIs",
      "Git",
      "RudderStack",
      "Xcode",
      "Android Studio",
      "Firebase",
    ],
  },
];

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>What I use</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="mt-14 space-y-10">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            variants={fadeIn("up", "spring", gi * 0.15, 0.6)}
          >
            <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.2em] mb-4">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-zinc-200 rounded-full font-mono text-sm text-zinc-700 hover:border-zinc-900 hover:text-zinc-900 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub Stats */}
      <motion.div
        variants={fadeIn("up", "", 0.5, 1)}
        className="mt-16 pt-10 border-t border-zinc-100"
      >
        <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.2em] mb-6">
          GitHub Activity
        </p>
        <div className="flex flex-wrap gap-4 items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://github-readme-stats-smoky-pi-88.vercel.app/api?username=Zeus-coder&show_icons=true&bg_color=ffffff&title_color=18181b&text_color=71717a&icon_color=18181b&border_color=e4e4e7&count_private=true&hide_rank=false"
            alt="GitHub Stats"
            className="h-[160px] w-auto"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://github-readme-stats-smoky-pi-88.vercel.app/api/top-langs/?username=Zeus-coder&layout=compact&bg_color=ffffff&title_color=18181b&text_color=71717a&border_color=e4e4e7&langs_count=6"
            alt="Top Languages"
            className="h-[160px] w-auto"
          />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://ghchart.rshah.org/39d353/Zeus-coder"
          alt="GitHub Contribution Calendar"
          className="mt-4 w-full"
        />
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
