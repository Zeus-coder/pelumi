'use client';

import React from "react";
import { BallCanvas } from "@/components/canvas/Ball";
import { SectionWrapper } from "@/hoc";
import { technologies } from "@/constants";
import { styles } from "@/app/style";

const Tech = () => {
  return (
    <>
      <div className="mb-12">
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
