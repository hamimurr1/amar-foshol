
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import AboutCTA from "../components/AboutCTA";

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      <Hero />
      <HowItWorks />
      <AboutCTA />
    </main>
  );
}
