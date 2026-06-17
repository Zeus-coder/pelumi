"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAME = "Bamisebi Pelumi.";

export const Hero = () => {
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(NAME.slice(0, i + 1));
      i++;
      if (i === NAME.length) {
        clearInterval(timer);
        setTyping(false);
      }
    }, 72);
    return () => clearInterval(timer);
  }, []);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.5, ease: "easeOut" },
  });

  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 py-32 w-full">

        {/* Prompt line 1 */}
        <motion.p
          {...fadeUp(0)}
          className="font-mono text-sm text-zinc-400 mb-6"
        >
          ~/portfolio <span className="text-zinc-600">$</span> whoami
        </motion.p>

        {/* Name — typewriter */}
        <motion.div {...fadeUp(0.1)}>
          <h1 className="font-black text-zinc-900 leading-none tracking-tight text-[clamp(2.8rem,9vw,8rem)]">
            {text}
            <span className={`inline-block w-[0.08em] h-[0.85em] bg-zinc-900 ml-1 align-baseline ${typing ? "" : "cursor-blink"}`} />
          </h1>
        </motion.div>

        {/* Role */}
        <motion.p
          {...fadeUp(1.6)}
          className="mt-6 font-mono text-zinc-500 text-base sm:text-lg"
        >
          React Native Developer &nbsp;·&nbsp; 5 yrs exp
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(1.9)} className="mt-10 flex flex-wrap gap-4">
          <a
            href="#work"
            className="px-6 py-3 bg-zinc-900 text-white text-sm font-semibold rounded-lg hover:bg-zinc-700 transition-colors"
          >
            View Work ↓
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-zinc-300 text-zinc-900 text-sm font-semibold rounded-lg hover:border-zinc-900 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Prompt line 2 — skills */}
        <motion.div {...fadeUp(2.3)} className="mt-16">
          <p className="font-mono text-sm text-zinc-400 mb-3">
            ~/portfolio <span className="text-zinc-600">$</span> cat skills.txt
          </p>
          <div className="font-mono text-sm text-zinc-500 flex flex-wrap gap-x-8 gap-y-2 leading-relaxed">
            <span>React Native CLI</span>
            <span>Expo</span>
            <span>TypeScript</span>
            <span>Redux-Toolkit</span>
            <span>React Query</span>
            <span>Node.js</span>
            <span>RudderStack</span>
            <span>Git</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
