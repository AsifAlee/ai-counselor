import { ThemeProvider } from "@/app/context/ThemeContext";

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
import Impact from "./components/Impact";
import Multilingual from "./components/Multilingual";
import ScrollOnSlide from "./components/ScrollOnSlide";
import Marquee from "./components/Marquee";
import WhatItOffers from "./components/WhatOffers";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Navbar />
        <main className="">
          <Hero />
          {/* <ScrollOnSlide /> */}
          {/* <HowItWorks /> */}
          <WhatItOffers />
          <Features />
          {/* <FeaturesSynced /> */}
          {/* <DemoSection /> */}
          <Testimonials />
          <CareerPitch />

          <Impact />
          <Multilingual />
          <Marquee />
          <Waitlist />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
