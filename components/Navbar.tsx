"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/constants";

export const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm border-b border-zinc-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-16 flex items-center justify-between h-16">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
          className="font-mono text-base font-semibold text-zinc-900 hover:text-zinc-500 transition-colors"
        >
          pelumi<span className="text-zinc-300">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex items-center gap-8">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.title)}
                className={`font-mono text-xs tracking-widest uppercase transition-colors ${
                  active === nav.title ? "text-zinc-900" : "text-zinc-400 hover:text-zinc-900"
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/Zeus-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest uppercase text-zinc-400 hover:text-zinc-900 transition-colors"
            >
              GitHub ↗
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="sm:hidden font-mono text-xs text-zinc-500 hover:text-zinc-900 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "close" : "menu"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white border-b border-zinc-100">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  onClick={() => { setActive(nav.title); setMenuOpen(false); }}
                  className="font-mono text-xs tracking-widest uppercase text-zinc-500 hover:text-zinc-900 transition-colors"
                >
                  {nav.title}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/Zeus-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest uppercase text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                GitHub ↗
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
