'use client';
import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/app/style";
import { ComputersCanvas } from "./canvas/Computers";

export const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-white`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-zinc-900" />
          <div className="w-[2px] sm:h-80 h-40 bg-zinc-200" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I&apos;m <span className="text-zinc-900 underline decoration-zinc-200 underline-offset-4">Bamisebi Pelumi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            React Native mobile developer &mdash; building{" "}
            <br className="sm:block hidden" />
            robust apps with CLI &amp; Expo
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-zinc-900 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-zinc-900 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
