"use client";

import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/app/style";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import { testimonials } from "@/constants";

const FeedbackCard = ({ index, testimonial, name, designation, company }: any) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.6)}
    className="border border-zinc-200 rounded-2xl p-8 flex flex-col gap-6"
  >
    <span className="font-mono text-5xl text-zinc-200 leading-none select-none">&ldquo;</span>
    <p className="text-zinc-700 text-[16px] leading-[1.75] flex-1">{testimonial}</p>
    <div>
      <p className="text-zinc-900 font-semibold text-sm">{name}</p>
      <p className="font-mono text-zinc-400 text-xs mt-0.5">
        {designation} · {company}
      </p>
    </div>
  </motion.div>
);

const Feedbacks = () => (
  <>
    <motion.div variants={textVariant(1)}>
      <p className={styles.sectionSubText}>What others say</p>
      <h2 className={styles.sectionHeadText}>Testimonials.</h2>
    </motion.div>

    <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <FeedbackCard key={t.name} index={i} {...t} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Feedbacks, "");
