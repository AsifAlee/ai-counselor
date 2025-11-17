import { ThemeProvider } from "@/context/ThemeContext";

import DemoSection from "./components/DemoSection";
import Features from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonial";
import Waitlist from "./components/WaitList";
import FeaturesSynced from "./components/FeatureSynced";
import CareerPitch from "./components/CareerPitch";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <main className="pt-20">
          <Hero />
          <HowItWorks />
          <Features />
          <FeaturesSynced />
          {/* <DemoSection /> */}
          <Testimonials />
          <CareerPitch />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
