import { About, Hero } from "@/components";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Feedbacks from "@/components/Feedbacks";
import Tech from "@/components/Tech";
import Works from "@/components/Works";

export default function Homepage() {
  return (
    <main className="relative z-0 bg-primary">
      <div>
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
      </div>
    </main>
  );
}
