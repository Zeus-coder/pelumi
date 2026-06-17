"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "@/app/style";
import { SectionWrapper } from "@/hoc";
import { fadeIn, textVariant } from "@/utils/motion";

const socialLinks = [
  { label: "Email", value: "freshtunz58@gmail.com", href: "mailto:freshtunz58@gmail.com" },
  { label: "LinkedIn", value: "bamisebi-pelumi", href: "https://linkedin.com/in/bamisebi-pelumi5729b6177/" },
  { label: "GitHub", value: "Zeus-coder", href: "https://github.com/Zeus-coder" },
];

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          to_name: "Bamisebi Pelumi",
          from_email: form.email,
          to_email: "freshtunz58@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <div className="mt-14 grid md:grid-cols-2 gap-12 md:gap-20">

        {/* Left — links */}
        <motion.div variants={fadeIn("", "", 0.1, 1)} className="space-y-8">
          <p className="text-zinc-600 text-[17px] leading-relaxed">
            Available for freelance contracts and remote work. Reach out
            through any of the channels below, or use the form.
          </p>

          <div className="space-y-5">
            {socialLinks.map(({ label, value, href }) => (
              <div key={label}>
                <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.2em] mb-1">
                  {label}
                </p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 text-[15px] font-medium hover:text-zinc-400 transition-colors"
                >
                  {value} ↗
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div variants={fadeIn("left", "", 0.2, 1)}>
          {sent ? (
            <div className="flex items-center justify-center h-full min-h-[280px] border border-zinc-200 rounded-2xl">
              <div className="text-center">
                <p className="font-mono text-zinc-400 text-sm mb-2">// message sent</p>
                <p className="text-zinc-900 font-semibold">Thank you! I&apos;ll be in touch soon.</p>
              </div>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <label key={field.name} className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.2em]">
                    {field.label}
                  </span>
                  <input
                    type={field.type}
                    name={field.name}
                    value={(form as any)[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 text-sm placeholder:text-zinc-400 outline-none focus:border-zinc-900 transition-colors"
                  />
                </label>
              ))}

              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-[0.2em]">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to work on?"
                  required
                  className="bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 text-sm placeholder:text-zinc-400 outline-none focus:border-zinc-900 transition-colors resize-none"
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3 bg-zinc-900 text-white text-sm font-semibold rounded-lg hover:bg-zinc-700 transition-colors disabled:opacity-50"
              >
                {loading ? "Sending…" : "Send Message →"}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
