"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "@/app/style";
import { experiences } from "@/constants";
import { SectionWrapper } from "@/hoc";
import Image from "next/image";

interface Props {
  experience: {
    date: string;
    icon: string;
    iconBg: string;
    title: string;
    company_name: string;
    points: string[];
  };
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <VerticalTimelineElement
      visible={true}
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#ffffff",
        color: "#18181b",
        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        border: "1px solid #e4e4e7",
      }}
      contentArrowStyle={{ borderRight: "7px solid #e4e4e7" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, border: "2px solid #e4e4e7" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-zinc-900 text-[24px] font-bold">{experience.title}</h3>
        <p className="text-zinc-500 text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point: string, index: number) => (
          <li
            key={`experience-point-${index}`}
            className="text-zinc-700 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#e4e4e7">
          {experiences.map((experience: any, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
