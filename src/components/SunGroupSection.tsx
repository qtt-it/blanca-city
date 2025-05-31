"use client";

import { Box, Typography, Grid, Paper, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { ImageComponent } from "./commons/ImageComponent";

const SunGroupSection = () => {
  return (
    <Box
      id="sungroup"
      sx={{
        bgcolor: "#0e3b7c",
        color: "white",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Stack
          sx={{
            width: "50%",
            paddingX: "78px",
            background: "linear-gradient(90deg, #df658e 0, #f293b3)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: "48px",
            fontWeight: 500,
            fontFamily: "Newsreader",
          }}
        >
          <span>Những "Biểu Tượng" Du Lịch & Đô Thị Sun Group</span>
        </Stack>
        <Typography
          sx={{
            marginBottom: "70px",
            paddingX: "78px",
            fontStyle: "italic",
            fontSize: "24pt",
            fontFamily: "Newsreader",
          }}
        >
          Đã triển khai
        </Typography>
      </motion.div>

      <Grid container spacing={1} paddingX="78px">
        {[
          "/SunGroup/sungroup01.webp",
          "/SunGroup/sungroup02.webp",
          "/SunGroup/sungroup03.webp",
          "/SunGroup/sungroup04.webp",
          "/SunGroup/sungroup05.webp",
        ].map((imgSrc, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={index}>
            <Box sx={{ borderRadius: "10px", overflow: "hidden" }}>
              <ImageComponent img={imgSrc} />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          top: "-40px",
          marginBottom: "-40px",
        }}
      >
        <ImageComponent img={"/SunGroup/sungroup.png"} />
      </Box>
    </Box>
  );
};

export default SunGroupSection;
