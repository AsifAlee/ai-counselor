"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Feature";
import DemoSection from "./components/DemoSection";
import Testimonials from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <DemoSection />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
