"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { styles } from "@/app/style";
import { SectionWrapper } from "@/hoc";
import { projects } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link }: any) => (
  <motion.a
    variants={fadeIn("up", "spring", index * 0.12, 0.6)}
    href={source_code_link}
    target="_blank"
    rel="noopener noreferrer"
    className="group block border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-900 transition-all duration-300"
  >
    {/* Image */}
    <div className="relative h-52 overflow-hidden bg-zinc-50">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-zinc-900 font-bold text-[17px] leading-snug">{name}</h3>
        <span className="text-zinc-300 group-hover:text-zinc-900 transition-colors text-xl shrink-0 mt-0.5">
          ↗
        </span>
      </div>
      <p className="mt-2 text-zinc-500 text-sm leading-relaxed">{description}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {tags.map((tag: any) => (
          <span
            key={tag.name}
            className={`font-mono text-[11px] ${tag.color}`}
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  </motion.a>
);

const Works = () => (
  <>
    <motion.div variants={textVariant(1)}>
      <p className={styles.sectionSubText}>What I&apos;ve built</p>
      <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-zinc-500 text-[17px] max-w-2xl leading-relaxed"
    >
      Real-world projects that showcase my range — from mobile apps and
      healthcare platforms to agro-tech web services.
    </motion.p>

    <div className="mt-14 grid sm:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        // @ts-ignore
        <ProjectCard key={`project-${index}`} index={index} {...project} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, "");
