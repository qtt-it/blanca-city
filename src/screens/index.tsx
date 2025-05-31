"use client";

import ContactSection from "@/components/ContactSection";
import { ContactWidget } from "@/components/ContactWidget";
import DesignSection from "@/components/DesignSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import { IFrameMap } from "@/components/IFrameMap";
import IntroSection from "@/components/IntroSection";
import LocationSection from "@/components/LocationSection";
import OverviewSection from "@/components/OverviewSection";
import ProductsSection from "@/components/ProductsSection";
import SunGroupSection from "@/components/SunGroupSection";
import { Box, Grid } from "@mui/material";
import React, { useRef } from "react";
import { ReceiveInformationSection } from "./ReceiveInformationSection";
import { TotalAreaSection } from "./TotalAreaSection";
import { MapAddressSection } from "./MapAddressSection";
import { ConsultingSection } from "./ConsultingSection";

export const MainPage: React.FC = () => {
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
    <React.Fragment>
      <Grid
        container
        columnGap={12}
        // marginBottom={{
        //   lg: 64,
        //   xs: 24,
        // }}
      >
        <Grid size={{ xs: 12 }}>
          <Header onNavigate={handleNavigate} />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <HeroSection />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <IntroSection />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box ref={locationRef}>
            <LocationSection />
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box ref={overviewRef}>
            <OverviewSection />
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box ref={highlightsRef}>
            <HighlightsSection />
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box ref={productsRef}>
            <ProductsSection />
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box ref={designRef}>
            <DesignSection />
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }}>
          {/*xong, chưa review */}
          <ConsultingSection />
        </Grid>
        <Grid size={{ xs: 12 }}>
          {/*xong, sai vị trí, chưa review */}
          <MapAddressSection />
        </Grid>
        <Grid size={{ xs: 12 }}>
          {/*xong, sai vị trí, chưa review */}
          <TotalAreaSection />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box ref={sungroupRef}>
            {/*xong, chưa review */}
            <SunGroupSection />
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }}>
          {/*xong, chưa review */}
          <ReceiveInformationSection />
        </Grid>
        <Grid size={{ xs: 12 }}>
          {/*xong, chưa review */}
          <ContactSection />
        </Grid>
        {/*xong Ifram */}
        {/* <Grid size={{ xs: 12 }}>
          <Box>
            <IFrameMap />
          </Box>
        </Grid> */}
        {/* <Grid size={{ xs: 12 }}>
          <ContactWidget />
          <Footer />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
};
