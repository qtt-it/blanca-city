"use client";

import { Box, Typography, Grid, Divider } from "@mui/material";
import { motion } from "framer-motion";
import Container from "./container/container";
import { useEffect, useRef, useState } from "react";

const OverviewSection = () => {
  const [isInView, setIsInView] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        py: 4,
        paddingTop: { xs: 0, md: "130px" },
        paddingBottom: 0,
        // bgcolor: "#0e3b7c",
        color: "#E3E3E3",
        overflow: "hidden",
      }}
      className="bg-gradient-to-b text-white from-[#12194f] to-[#0764a6]"
    >
      <Box
        id="overview"
        className="h-auto"
        sx={{ position: "relative", height: "100%" }}
      >
        {/* Background image with animation */}

        {/* Content */}
        {/* <Container sx={{ position: "relative", margin: 0,  zIndex: 1 }}> */}
        <Container className="relative !pt-0">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-[45%] lg:top-[64px] lg:absolute w-full lg:left-[52%]"
          >
            <h2
              style={{
                fontFamily: "Newsreader",
              }}
              className="xl:text-[48px] text-[44px] mb-5 lg:mb-5 font-semibold bg-gradient-to-r from-[#e16a92] to-[#f192b1] bg-clip-text text-transparent"
            >
              Tổng Quan Dự Án
            </h2>
          </motion.div>
          <Box className="lg:w-[45%] lg:top-[64px]  lg:absolute w-full lg:left-[52%] mt-[70px]">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <Typography
                sx={{ fontSize: "17px", padding: "4px 0", fontWeight: 500 }}
              >
                <span className="mr-1 text-secondary  text-[#e16a92] ">⬘</span>
                <strong className="text-white">Tên dự án:</strong> Khu đô thị
                Blanca City by Sun Group
              </Typography>
            </Box>
            <Divider
              sx={{
                // width: "40%",
                marginTop: "5px",
                marginBottom: "10px",
                backgroundColor: "white",
              }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <Typography
                sx={{ fontSize: "17px", padding: "4px 0", fontWeight: 500 }}
              >
                <span className="mr-1 text-secondary  text-[#e16a92] ">⬘</span>
                <strong className="text-white">Vị trí:</strong> Mặt tiền đường
                3/2, Phường 10, Phường 11, TP Vũng Tàu, TP HCM
              </Typography>
            </Box>
            <Divider
              sx={{
                // width: "70%",
                marginTop: "5px",
                marginBottom: "10px",
                backgroundColor: "white",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "32px",
                marginBottom: "8px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "17px",
                    padding: "4px 0",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <strong>
                    <span className="mr-1 text-secondary  text-[#e16a92] ">
                      ⬘
                    </span>
                    Quy mô:
                  </strong>
                  <Typography
                    component="span"
                    sx={{
                      color: "secondary.main",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      ml: 1,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Newsreader",
                        lineHeight: 1,
                      }}
                      className=" mr-1  !leading-none    font-semibold bg-gradient-to-r from-[#cd1854] to-[#f08eaf] bg-clip-text text-transparent"
                    >
                      96
                    </span>
                  </Typography>
                  ha
                </Typography>
              </Box>
            </Box>
            <Divider
              sx={{
                // width: "70%",
                marginTop: "5px",
                marginBottom: "10px",
                backgroundColor: "white",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "32px",
                marginBottom: "8px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "17px",
                    padding: "4px 0",
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span className="mr-1 text-secondary  text-[#e16a92] ">
                    ⬘
                  </span>
                  <strong className="text-white">Mật độ xây dựng:</strong>
                  <Typography
                    component="span"
                    sx={{
                      color: "secondary.main",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      mx: 1,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Newsreader",
                      }}
                      className="lg:mt-4 xl:mb-5 font-semibold bg-gradient-to-r from-[#cd1854] to-[#f08eaf] bg-clip-text text-transparent"
                    >
                      27,6
                    </span>
                  </Typography>
                  %
                </Typography>
              </Box>
            </Box>
            <Divider
              sx={{
                // width: "70%",
                marginTop: "5px",
                marginBottom: "10px",
                backgroundColor: "white",
              }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <Typography
                sx={{
                  width: "680px",
                  fontSize: "17px",
                  padding: "4px 0",
                  fontWeight: 500,
                }}
              >
                <span className="mr-1 text-secondary  text-[#e16a92] ">⬘</span>
                <strong className="text-white"> Tiện ích:</strong> Công viên
                nước Sun World, Trung tâm thương mại Sun Retail, Khách sạn 5 sao
              </Typography>
            </Box>
            <Divider
              sx={{
                // width: "70%",
                marginTop: "5px",
                marginBottom: "10px",
                backgroundColor: "white",
              }}
            />
          </Box>
        </Container>

        {/* </Grid> */}

        {/* </Container> */}
        <Box
          className=""
          sx={{
            // position: "absolute",
            top: { xs: "unset", md: 0 },
            bottom: { xs: 0, md: "unset" },
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              width: "100%",
              height: "auto",
            }}
          >
            <img
              src="/ProjectOverview/tong-quan-du-an-min.png"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "bottom center",
              }}
              className="lg:flex hidden"
            />
            <img
              src="/ProjectOverview/tong-quan-du-an-min-mb.png"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "bottom center",
              }}
              className="flex lg:hidden"
            />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default OverviewSection;
