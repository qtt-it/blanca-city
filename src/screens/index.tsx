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
import React from "react";
import { ReceiveInformationSection } from "./ReceiveInformationSection";
import { TotalAreaSection } from "./TotalAreaSection";
import { MapAddressSection } from "./MapAddressSection";
import BannerComponent from "@/components/commons/HeroBannerComponent";
import { CommentSection } from "@/components/CommentSection";
import VideoSlider from "@/components/VideoSlider";
import HeaderForm from "@/components/HeaderForm";

export const MainPage: React.FC = () => {
  return (
    <Box>
      <Box>
        <Box id="#hero" className="max-w-[1920px]  relative mx-auto w-full">
          <Box className="w-full relative">
            <Box className="absolute w-full top-4 left-[50%] translate-x-[-50%] z-10">
              <HeaderForm />
            </Box>
            <BannerComponent
              img="/hero1.jpg"
              imgTablet="/hero1-tablet.jpg"
              imgMb="/hero1-mb.webp"
            />
            <Box className="absolute hidden md:flex left-[50%] translate-x-[-50%] bottom-[30px] z-10 cursor-pointer z-10 mx-auto w-full flex-col  justify-center items-center">
              <span className="border-t-2 animationInOut1 border-r-2 mt-[-4px] border-gray-300 rotate-135 transform w-7 h-7 inline-block"></span>
              <span className="border-t-2 animationInOut2 border-r-2 mt-[-4px] border-gray-300 rotate-135 transform w-7 h-7 inline-block"></span>
              <span className="border-t-2 animationInOut3 border-r-2 mt-[-4px] border-gray-300 rotate-135 transform w-7 h-7 inline-block"></span>
            </Box>
          </Box>
        </Box>
      </Box>
      <Header />
      <Grid size={{ xs: 12 }}></Grid>
      <Grid size={{ xs: 12 }}>
        <Box
        // className="lg:pt-[64px] xl:pt-[76px] pt-[80px] md:pt-[80px]"
        >
          <HeroSection />
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Box
          className="
          mt-[-56px] md:mt-[-100px] lg:mt-[-160px] !xl:mt-[-200px] relative z-[2]"
        >
          <IntroSection />
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Box>
          <LocationSection />
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        {" "}
        {/*xong, sai vị trí, chưa review */}
        <MapAddressSection />
      </Grid>

      <Grid size={{ xs: 12 }}>
        {" "}
        {/*video */}
        <VideoSlider
          videos={[
            {
              title: "Ocean Waves",
              description:
                "Blanca City - 'Cực Phẩm' đáp ứng đúng nhu cầu mà các nhà đầu tư đang tìm kiếm đầu năm 2025.",
              src: "https://www.youtube.com/embed/VFkb7z127x0?si=BluHcSgR8J2HokbG",
              thumbnail: "/video1.jpg",
            },
          ]}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        {" "}
        {/*xong, chưa review */}
        {/* <ConsultingSection /> */}
        <ReceiveInformationSection
          isLogo={false}
          text={"Tư vấn tiềm năng đô thị biển Blanca City by Sun Group."}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Box>
          <OverviewSection />
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Box>
          <HighlightsSection />
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        {" "}
        {/*xong, sai vị trí, chưa review */}
        <TotalAreaSection />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Box id="products">
          <ProductsSection />
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Box>
          <DesignSection />
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Box>
          {" "}
          {/*xong, chưa review */}
          <SunGroupSection />
        </Box>
      </Grid>

      <Grid size={{ xs: 12 }}>
        {" "}
        {/*xong, chưa review */}
        <ReceiveInformationSection />
      </Grid>
      <Grid size={{ xs: 12 }}>
        {" "}
        {/*xong, chưa review */}
        {/* <ContactSection /> */}
      </Grid>
      <Grid size={{ xs: 12 }}>
        <CommentSection />
      </Grid>
      <Grid size={{ xs: 12 }}>
        {" "}
        {/*xong Ifram */}
        <Box>
          <IFrameMap />
        </Box>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <ContactWidget />
        <Footer />
      </Grid>
    </Box>
  );
};
