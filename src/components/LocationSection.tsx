"use client";

import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const LocationSection = () => {
  return (
    <Box
      id="location"
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
              mb: 1,
              fontWeight: "bold",
            }}
          >
            Vị Trí
          </Typography>

          <Typography
            variant="h4"
            component="h3"
            sx={{
              fontStyle: "italic",
              mb: 6,
            }}
          >
            "Trung tâm của Trung tâm"
          </Typography>
        </motion.div>

        <Box sx={{ mb: 6 }}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Typography variant="body1" sx={{ mb: 4 }}>
                  Từ năm 2026, mọi trục động lực hạ tầng huyết mạch của miền Nam
                  sẽ rút ngắn khoảng cách và thời gian đến Blanca City Vũng Tàu:
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              sx={{
                p: 3,
                bgcolor: "rgba(255,255,255,0.1)",
                borderRadius: 2,
                height: "100%",
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, color: "secondary.light" }}>
                Đường bộ:
              </Typography>
              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "secondary.main" }}
                >
                  90 phút:
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2, pl: 4 }}>
                Kết nối TPHCM & Đông Nam Bộ, qua 2 trục cao tốc Biên Hòa - Vũng
                Tàu & cao tốc TPHCM - Long Thành
              </Typography>

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "secondary.main" }}
                >
                  90 phút:
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ pl: 4 }}>
                Kết nối Tây Nam Bộ, qua 2 trục cao tốc Bến Lức - Long Thành
                (hoạt động 2026) & cao tốc TPHCM - Trung Lương (sắp mở rộng lên
                8 làn xe)
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              sx={{
                p: 3,
                bgcolor: "rgba(255,255,255,0.1)",
                borderRadius: 2,
                height: "100%",
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, color: "secondary.light" }}>
                Đường hàng không:
              </Typography>
              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "secondary.main" }}
                >
                  40 phút:
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ pl: 4 }}>
                Sân bay quốc tế Long Thành, đón hàng chục triệu khách quốc tế
                khi vận hành năm 2026.
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              sx={{
                p: 3,
                bgcolor: "rgba(255,255,255,0.1)",
                borderRadius: 2,
                height: "100%",
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, color: "secondary.light" }}>
                Đường thủy:
              </Typography>
              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "secondary.main" }}
                >
                  5 phút:
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2, pl: 4 }}>
                Cảng Bãi Trước, siêu cảng quốc tế lớn nhất phía Nam - Top 20 thế
                giới
              </Typography>

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "secondary.main" }}
                >
                  45 phút:
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ pl: 4 }}>
                Cảng Cái Mép - Thị Vải, cảng nước sâu lớn nhất Việt Nam
              </Typography>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              sx={{
                p: 3,
                bgcolor: "rgba(255,255,255,0.1)",
                borderRadius: 2,
                height: "100%",
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, color: "secondary.light" }}>
                Đặc biệt
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Tọa lạc ngay mặt tiền đường 3/2 - một trong 3 "trục xương sống"
                của Vũng Tàu, kết nối đường Thùy Vân, Bãi Sau và hàng loạt các
                địa điểm khác của thành phố.
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Đây cũng là vị trí{" "}
                <span style={{ color: "#4dabf5", fontWeight: "bold" }}>
                  trung tâm mới
                </span>{" "}
                của Vũng Tàu, TPHCM.
              </Typography>
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
            bgcolor: "red", // Placeholder for map image
            borderRadius: 2,
            overflow: "hidden",
          }}
        />
      </Container>
    </Box>
  );
};

export default LocationSection;
