import { About, Hero } from "@/components";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Feedbacks from "@/components/Feedbacks";
import Tech from "@/components/Tech";
import Works from "@/components/Works";
import { StarsCanvas } from "@/components/canvas/Stars";

export default function Homepage() {
  return (
    <main className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
    </main>
  );
}
