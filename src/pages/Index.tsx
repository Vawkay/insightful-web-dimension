
import React, { useEffect } from "react";
import HeroBanner from "@/components/home/HeroBanner";
import AboutSection from "@/components/home/AboutSection";
import ProjectCarousel from "@/components/home/ProjectCarousel";
import CTASection from "@/components/home/CTASection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "InsightfulData | Business Intelligence & Data Analytics";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner />
      <AboutSection />
      <ProjectCarousel />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
