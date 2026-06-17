import { About, Hero } from "@/components";
import Experience from "@/components/Experience";
import Feedbacks from "@/components/Feedbacks";
import Tech from "@/components/Tech";
import Works from "@/components/Works";
import Contact from "@/components/Contact";

export default function Homepage() {
  return (
    <main className="bg-white">
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-16 flex flex-col sm:flex-row justify-between items-center gap-3">
          <span className="font-mono text-zinc-400 text-xs">
            Bamisebi Pelumi — React Native Developer
          </span>
          <span className="font-mono text-zinc-300 text-xs">
            Built with Next.js · {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </main>
  );
}
