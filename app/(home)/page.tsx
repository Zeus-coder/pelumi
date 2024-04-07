import { About, Hero } from "@/components";
import Experience from "@/components/Experience";
import Feedbacks from "@/components/Feedbacks";
import Tech from "@/components/Tech";
import Works from "@/components/Works";

export default function Homepage() {
  return (
    <main className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
      </div>
    </main>
  );
}
