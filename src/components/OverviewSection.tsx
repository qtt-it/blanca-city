"use client";

import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const OverviewSection = () => {
  return (
    <Box
      id="overview"
      sx={{
        py: 8,
        bgcolor: "#0e3b7c",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: "secondary.main",
              mb: 6,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Tổng Quan Dự Án
          </Typography>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              sx={{
                width: "100%",
                height: { xs: "300px", md: "500px" },
                borderRadius: 2,
                overflow: "hidden",
              }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box sx={{ color: "secondary.main", mr: 2 }}>◆</Box>
                <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                  <strong>Tên dự án:</strong> Khu đô thị Blanca City by Sun
                  Group
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box sx={{ color: "secondary.main", mr: 2 }}>◆</Box>
                <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                  <strong>Vị trí:</strong> Mặt tiền đường 3/2, Phường 10, Phường
                  11, TP Vũng Tàu, TP HCM
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
                <Box sx={{ color: "secondary.main", mr: 2, mt: 0.5 }}>◆</Box>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <strong>Quy mô:</strong>
                    <Typography
                      component="span"
                      sx={{
                        color: "secondary.main",
                        fontSize: "2.5rem",
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

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
                <Box sx={{ color: "secondary.main", mr: 2, mt: 0.5 }}>◆</Box>
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1.1rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <strong>Mật độ xây dựng:</strong>
                    <Typography
                      component="span"
                      sx={{
                        color: "secondary.main",
                        fontSize: "2.5rem",
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

              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box sx={{ color: "secondary.main", mr: 2 }}>◆</Box>
                <Typography variant="body1" sx={{ fontSize: "1.1rem" }}>
                  <strong>Tiện ích:</strong> Công viên nước Sun World, Trung tâm
                  thương mại Sun Retail, Khách sạn 5 sao
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OverviewSection;
