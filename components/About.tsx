"use client";

import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/app/style";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>About me</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-14 grid md:grid-cols-3 gap-12 md:gap-16">

        {/* Bio — 2 cols */}
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="md:col-span-2 space-y-5"
        >
          <p className="text-zinc-600 text-[17px] leading-[1.85]">
            A React Native mobile developer with 5 years of experience, driven
            by passion and commitment to delivering robust and scalable mobile
            apps with React Native CLI and Expo. I have tackled diverse projects
            across fintech, healthcare, and agro-tech.
          </p>
          <p className="text-zinc-600 text-[17px] leading-[1.85]">
            I pride myself on translating complex product requirements into
            pixel-perfect, performant mobile experiences — from KYC flows and
            MFA systems to analytics pipelines and location-aware features.
          </p>
          <p className="text-zinc-600 text-[17px] leading-[1.85]">
            I collaborate closely with product and engineering teams using
            agile methodologies, and I&apos;m always pushing for cleaner code,
            better UX, and measurable impact.
          </p>
        </motion.div>

        {/* Quick facts — 1 col */}
        <motion.div
          variants={fadeIn("left", "", 0.3, 1)}
          className="space-y-7"
        >
          {[
            { label: "Location", value: "Nigeria" },
            { label: "Experience", value: "5+ years" },
            { label: "Specialization", value: "React Native" },
            { label: "Availability", value: "Open to remote" },
            { label: "Education", value: "B.Eng Computer Engineering, FUTA" },
            { label: "Email", value: "freshtunz58@gmail.com" },
          ].map(({ label, value }) => (
            <div key={label}>
              <dt className="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.2em] mb-1">
                {label}
              </dt>
              <dd className="text-zinc-900 text-[15px] font-medium">{value}</dd>
            </div>
          ))}
        </motion.div>

      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
