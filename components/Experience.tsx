"use client";

import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/app/style";
import { experiences } from "@/constants";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>Career</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <div className="mt-14">
        {experiences.map((exp, index) => (
          <motion.div
            key={`exp-${index}`}
            variants={fadeIn("up", "spring", index * 0.15, 0.6)}
            className="flex flex-col sm:flex-row gap-4 sm:gap-10 py-8 border-b border-zinc-100 last:border-0"
          >
            {/* Date column */}
            <div className="sm:w-52 shrink-0">
              <span className="font-mono text-xs text-zinc-400">{exp.date}</span>
            </div>

            {/* Content column */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                <h3 className="text-zinc-900 font-bold text-[17px]">{exp.title}</h3>
                <span className="hidden sm:block text-zinc-300">·</span>
                <span className="text-zinc-500 text-[15px]">{exp.company_name}</span>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.points.map((point: string, i: number) => (
                  <li
                    key={i}
                    className="flex gap-3 text-zinc-500 text-[14px] leading-relaxed"
                  >
                    <span className="font-mono text-zinc-300 shrink-0 mt-0.5">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
