"use client";

import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/app/style";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";
import { testimonials } from "@/constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
}: any) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-white border border-zinc-200 shadow-card p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-zinc-300 font-black text-[48px]">&quot;</p>

    <div className="mt-1">
      <p className="text-zinc-700 tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-zinc-900 font-semibold text-[16px]">
            <span className="text-zinc-400">@</span> {name}
          </p>
          <p className="mt-1 text-zinc-400 text-[12px]">
            {designation} of {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-zinc-50 rounded-[20px]">
      <div className={`bg-zinc-100 rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant(1)}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
