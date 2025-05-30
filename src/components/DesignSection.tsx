"use client";

import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const DesignSection = () => {
  return (
    <Box
      id="design"
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
            Cảm Hứng Thiết Kế
          </Typography>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="body1"
                sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}
              >
                Thành phố trắng Blanca City lấy cảm hứng từ quá trình hình thành
                và phát triển của Vũng Tàu, là cuộc gặp gỡ của phương Đông &
                phương Tây:
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}
              >
                <strong>Giao thoa văn hóa</strong> Nam bộ - Bồ Đào Nha - Pháp &{" "}
                <strong>Dấu ấn thương cảng</strong> thế kỷ 13.
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}
              >
                Quý khách hàng điền thông tin bên dưới để nhận tư vấn chi tiết
                các dòng sản phẩm đặc biệt tại dự án Blanca City by Sun Group.
              </Typography>
            </Box>

            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              elevation={0}
              sx={{
                p: 3,
                bgcolor: "rgba(255,255,255,0.1)",
                borderRadius: 2,
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Box sx={{ bgcolor: "white", borderRadius: 1, p: 1 }}>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Họ tên (*)
                  </Typography>
                </Box>

                <Box sx={{ bgcolor: "white", borderRadius: 1, p: 1 }}>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Số điện thoại (*)
                  </Typography>
                </Box>

                <Box sx={{ bgcolor: "white", borderRadius: 1, p: 1 }}>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    Email
                  </Typography>
                </Box>

                <Box
                  sx={{
                    bgcolor: "secondary.main",
                    borderRadius: 1,
                    p: 1.5,
                    textAlign: "center",
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: "secondary.dark",
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ color: "white", fontWeight: "bold" }}
                  >
                    NHẬN BẢNG GIÁ
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              sx={{
                width: "100%",
                height: { xs: "300px", md: "500px" },
                bgcolor: "red", // Placeholder for image
                borderRadius: 2,
                overflow: "hidden",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DesignSection;
