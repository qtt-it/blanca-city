"use client";

import { Box } from "@mui/material";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import LocationSection from "../components/LocationSection";
import OverviewSection from "../components/OverviewSection";
import HighlightsSection from "../components/HighlightsSection";
import ProductsSection from "../components/ProductsSection";
import DesignSection from "../components/DesignSection";
import SunGroupSection from "../components/SunGroupSection";
import ContactSection from "../components/ContactSection";
import { useRef } from "react";

export default function Home() {
  const locationRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  const sungroupRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    switch (section) {
      case "location":
        locationRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "overview":
        overviewRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "highlights":
        highlightsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "products":
        productsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "design":
        designRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "sungroup":
        sungroupRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <Box>
      <Header onNavigate={handleNavigate} />
      <HeroSection />
      <IntroSection />
      <Box ref={locationRef}>
        <LocationSection />
      </Box>
      <Box ref={overviewRef}>
        <OverviewSection />
      </Box>
      <Box ref={highlightsRef}>
        <HighlightsSection />
      </Box>
      <Box ref={productsRef}>
        <ProductsSection />
      </Box>
      <Box ref={designRef}>
        <DesignSection />
      </Box>
      <Box ref={sungroupRef}>
        <SunGroupSection />
      </Box>
      <ContactSection />
    </Box>
  );
}
