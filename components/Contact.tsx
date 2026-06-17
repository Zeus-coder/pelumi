"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "@/app/style";
import { EarthCanvas } from "@/components/canvas/Earth";
import { SectionWrapper } from "@/hoc";
import { slideIn } from "@/utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        // @ts-ignore
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Bamisebi Pelumi",
          from_email: form.email,
          to_email: "freshtunz58@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-white border border-zinc-200 shadow-card p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          //@ts-ignore
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-zinc-700 font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-zinc-50 border border-zinc-200 py-4 px-6 placeholder:text-zinc-400 text-zinc-900 rounded-lg outline-none focus:border-zinc-900 transition-colors font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-zinc-700 font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-zinc-50 border border-zinc-200 py-4 px-6 placeholder:text-zinc-400 text-zinc-900 rounded-lg outline-none focus:border-zinc-900 transition-colors font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-zinc-700 font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to say?"
              className="bg-zinc-50 border border-zinc-200 py-4 px-6 placeholder:text-zinc-400 text-zinc-900 rounded-lg outline-none focus:border-zinc-900 transition-colors font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-zinc-900 hover:bg-zinc-700 transition-colors py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-sm"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
