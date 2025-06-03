"use client";

import { Box, Typography, Grid, Paper, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { ImageComponent } from "./commons/ImageComponent";
import Container from "./container/container";

const SunGroupSection = () => {
  return (
    <Box
      id="sungroup"
      sx={{
        // bgcolor: "#0e3b7c",
        color: "white",
      }}
      className="bg-gradient-to-b text-white to-[#12194f] from-[#0764a6]"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Stack
            sx={{
              // background: "linear-gradient(90deg, #df658e 0, #f293b3)",
              // WebkitBackgroundClip: "text",
              // color: "transparent",
              fontSize: "48px",
              fontWeight: 600,
              fontFamily: "Newsreader",
            }}
            className="lg:w-1/2 w-full"
          >
            <span className="text-[#e7779c]">Những "Biểu Tượng"</span>
            <span className="text-[#f292b3]">Du Lịch & Đô Thị Sun Group</span>
          </Stack>
          <Typography
            sx={{
              marginBottom: "70px",
              fontStyle: "italic",
              fontSize: "32px",
              fontWeight: 600,
              fontFamily: "Newsreader",
            }}
          >
            Đã triển khai
          </Typography>
        </motion.div>
        <Box className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-2">
          {[
            "/SunGroup/sungroup01.webp",
            "/SunGroup/sungroup02.webp",
            "/SunGroup/sungroup03.webp",
            "/SunGroup/sungroup04.webp",
            "/SunGroup/sungroup05.webp",
          ].map((imgSrc, index) => (
            <Box sx={{ borderRadius: "10px", overflow: "hidden" }} key={index}>
              <ImageComponent img={imgSrc} />
            </Box>
          ))}
        </Box>
      </Container>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          // marginTop: "-120px",
          marginBottom: "-40px",
        }}
        className="lg:mt-[-140px] md:mt-[-120px] mt-[-40px]"
      >
        <ImageComponent img={"/SunGroup/sungroup.png"} />
      </Box>
    </Box>
  );
};

export default SunGroupSection;
