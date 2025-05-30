"use client";

import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const ProductsSection = () => {
  return (
    <Box
      id="products"
      sx={{
        py: 8,
        bgcolor: "#f5f5f5",
        color: "#333",
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
            Các Dòng Sản Phẩm
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12 }}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              elevation={2}
              sx={{
                p: 4,
                mb: 4,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: 4,
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "30%" },
                  height: { xs: "200px", md: "250px" },
                  bgcolor: "red", // Placeholder for image
                  borderRadius: 2,
                  flexShrink: 0,
                }}
              />

              <Box>
                <Typography
                  variant="h4"
                  sx={{ mb: 2, color: "primary.main", fontWeight: "bold" }}
                >
                  Căn hộ Blanca (ĐANG RA MẮT)
                </Typography>
                <Typography variant="h5" sx={{ mb: 3, color: "primary.main" }}>
                  Căn hộ Beacon (SẮP RA MẮT)
                </Typography>

                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                  <Typography variant="body1">
                    <strong>Loại hình sản phẩm:</strong> Studio, 1PN, 2PN, 2PN
                    góc
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                  <Typography variant="body1">
                    <strong>Diện tích:</strong> 30,6m² - 68,6m²
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                  <Typography variant="body1">
                    <strong>Tiêu chuẩn bàn giao:</strong> FULL nội thất
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              elevation={2}
              sx={{
                p: 4,
                mb: 4,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: 4,
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "30%" },
                  height: { xs: "200px", md: "250px" },
                  bgcolor: "red", // Placeholder for image
                  borderRadius: 2,
                  flexShrink: 0,
                }}
              />

              <Box>
                <Typography
                  variant="h4"
                  sx={{ mb: 3, color: "primary.main", fontWeight: "bold" }}
                >
                  Casa Villa (SẮP RA MẮT)
                </Typography>

                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                  <Typography variant="body1">
                    <strong>Loại hình sản phẩm:</strong> Song Lập, Đơn Lập,
                    Grand Villa
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                  <Typography variant="body1">
                    <strong>Diện tích:</strong> 266m² - 319m²
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                  <Typography variant="body1">
                    <strong>Chiều cao:</strong> 3, 4 tầng + 1 tầng hầm
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              elevation={2}
              sx={{
                p: 4,
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: 4,
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "30%" },
                  height: { xs: "200px", md: "250px" },
                  bgcolor: "red", // Placeholder for image
                  borderRadius: 2,
                  flexShrink: 0,
                }}
              />

              <Box>
                <Typography
                  variant="h4"
                  sx={{ mb: 3, color: "primary.main", fontWeight: "bold" }}
                >
                  Casa Townhouse (SẮP RA MẮT)
                </Typography>

                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                  <Typography variant="body1">
                    <strong>Diện tích:</strong> 131m² - 150m²
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                  <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                  <Typography variant="body1">
                    <strong>Chiều cao:</strong> 4 tầng + 1 tầng hầm
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          sx={{
            mt: 6,
            width: "100%",
            height: { xs: "300px", md: "500px" },
            bgcolor: "red", // Placeholder for project overview image
            borderRadius: 2,
            overflow: "hidden",
          }}
        />
      </Container>
    </Box>
  );
};

export default ProductsSection;
