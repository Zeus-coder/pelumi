'use client';

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "@/app/style";
import { services } from "../constants";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";

const ServiceCard = ({ index, title, icon }: { index: number; title: string; icon: string }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full border border-zinc-200 rounded-[20px] shadow-card"
    >
      <div
        // @ts-ignore
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <Image
          src={services[index].icon}
          alt="service-icon"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-zinc-900 text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-zinc-600 text-[17px] max-w-3xl leading-[30px]"
      >
        A React Native mobile developer with 5 years of experience, driven by
        passion and commitment to delivering robust and scalable mobile apps
        with React Native CLI and Expo. I have tackled diverse projects and
        pride myself on my ability to navigate complex challenges with agility
        and grace. Let&apos;s work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} icon="" />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
