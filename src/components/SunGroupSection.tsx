"use client";

import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const SunGroupSection = () => {
  return (
    <Box
      id="sungroup"
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
              mb: 2,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Những "Biểu Tượng"
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              color: "secondary.main",
              mb: 6,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Du Lịch & Đô Thị Sun Group
          </Typography>
          <Typography
            variant="h5"
            component="h4"
            sx={{
              fontStyle: "italic",
              mb: 8,
              textAlign: "center",
            }}
          >
            Đã triển khai
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {[
            "Cầu Vàng Đà Nẵng",
            "Cáp treo Fansipan Sapa",
            "Cầu Hôn Phú Quốc",
            "Sun World Quảng Ninh",
            "Tượng Phật Bà Tây Bồ Đà Sơn Tây Ninh",
          ].map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }} key={index}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 200,
                    bgcolor: "red", // Placeholder for image
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 2,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ color: "white", fontWeight: "bold" }}
                    >
                      {project}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          sx={{
            mt: 8,
            width: "100%",
            height: { xs: "300px", md: "500px" },
            bgcolor: "red", // Placeholder for Blanca City image
            borderRadius: 2,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              p: 4,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              sx={{ color: "white", fontWeight: "bold", mb: 2 }}
            >
              Blanca City
            </Typography>
            <Typography variant="h5" sx={{ color: "white" }}>
              by Sun Group
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SunGroupSection;
