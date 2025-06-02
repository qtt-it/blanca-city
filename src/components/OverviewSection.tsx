"use client";

import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import { motion } from "framer-motion";

const OverviewSection = () => {
  return (
    <Box
      sx={{
        height: { xs: "600px", md: "910px" },
        py: 4,
        paddingTop: { xs: 0, md: "130px" },
        paddingBottom: 0,
        bgcolor: "#0e3b7c",
        color: "white",
        overflow: "hidden",
      }}
    >
      <Box id="overview" sx={{ position: "relative", height: "100%" }}>
        {/* Background image with animation */}

        {/* Content */}
        {/* <Container sx={{ position: "relative", margin: 0,  zIndex: 1 }}> */}
        <Grid container spacing={4} alignItems="center" width="100%">
          <Grid size={{ xs: 12, md: 6 }}></Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  color: "secondary.main",
                  mb: 4,
                  fontSize: "48px",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                Tổng Quan Dự Án
              </Typography>
            </motion.div>

            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <Box sx={{ color: "secondary.main", mr: "2px" }}>⬘</Box>
                <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                  <strong>Tên dự án:</strong> Khu đô thị Blanca City by Sun
                  Group
                </Typography>
              </Box>
              <Divider
                sx={{
                  width: "70%",
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
                <Box sx={{ color: "secondary.main", mr: "2px" }}>⬘</Box>
                <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                  <strong>Vị trí:</strong> Mặt tiền đường 3/2, Phường 10, Phường
                  11, TP Vũng Tàu, TP HCM
                </Typography>
              </Box>
              <Divider
                sx={{
                  width: "70%",
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
                <Box sx={{ color: "secondary.main", mr: "2px" }}>⬘</Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <strong>Quy mô:</strong>
                    <Typography
                      component="span"
                      sx={{
                        color: "secondary.main",
                        fontSize: "2rem",
                        fontWeight: "bold",
                        mx: 1,
                      }}
                    >
                      96
                    </Typography>
                    ha
                  </Typography>
                </Box>
              </Box>
              <Divider
                sx={{
                  width: "70%",
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
                <Box sx={{ color: "secondary.main", mr: "2px" }}>⬘</Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <strong>Mật độ xây dựng:</strong>
                    <Typography
                      component="span"
                      sx={{
                        color: "secondary.main",
                        fontSize: "2rem",
                        fontWeight: "bold",
                        mx: 1,
                      }}
                    >
                      27
                    </Typography>
                    %
                  </Typography>
                </Box>
              </Box>
              <Divider
                sx={{
                  width: "70%",
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
                <Box sx={{ color: "secondary.main", mr: "2px" }}>⬘</Box>
                <Typography
                  sx={{ width: "680px", fontSize: "18px", fontWeight: 500 }}
                >
                  <strong> Tiện ích:</strong> Công viên nước Sun World, Trung
                  tâm thương mại Sun Retail, Khách sạn 5 sao
                </Typography>
              </Box>
              <Divider
                sx={{
                  width: "70%",
                  marginTop: "5px",
                  marginBottom: "10px",
                  backgroundColor: "white",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        {/* </Container> */}
        <Box
          sx={{
            position: "absolute",
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
            initial={{ opacity: 0, y: 100 }}
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
                display: "block",
              }}
            />
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default OverviewSection;
