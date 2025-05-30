"use client";

import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#0e3b7c",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="body1"
            sx={{ mb: 4, fontSize: "1.2rem", lineHeight: 1.8 }}
          >
            Nổi tiếng trên bản đồ du lịch Đông Nam Bộ và cả miền Nam nhưng Vũng
            Tàu chưa có một dự án đô thị đẳng cấp đúng nghĩa, chưa có các khu
            vui chơi, giải trí hoành tráng hay những công trình mang tính biểu
            tượng để "check-in".
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 4, fontSize: "1.2rem", lineHeight: 1.8 }}
          >
            Tất cả những mong đợi này sẽ xuất hiện ở{" "}
            <strong>
              BLANCA CITY - "Biểu tượng đô thị all-in-one" đầu tiên của Sun
              Group
            </strong>{" "}
            ngay trung tâm Vũng Tàu. Đó là lý do rất nhiều khách hàng, nhà đầu
            tư mong đợi về sự "bùng nổ" khi thành phố biển có Blanca City.
          </Typography>

          <Grid container spacing={3} sx={{ mt: 4 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                component={motion.div}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                sx={{
                  p: 3,
                  bgcolor: "rgba(255,255,255,0.1)",
                  borderRadius: 2,
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box sx={{ mr: 2, color: "secondary.main" }}>◆</Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "secondary.main", fontWeight: "bold" }}
                  >
                    40 phút
                  </Typography>
                </Box>
                <Typography variant="body1">đến sân bay Long Thành.</Typography>
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                component={motion.div}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                sx={{
                  p: 3,
                  bgcolor: "rgba(255,255,255,0.1)",
                  borderRadius: 2,
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Box sx={{ mr: 2, color: "secondary.main" }}>◆</Box>
                  <Typography
                    variant="h5"
                    sx={{ color: "secondary.main", fontWeight: "bold" }}
                  >
                    90 phút
                  </Typography>
                </Box>
                <Typography variant="body1">
                  kết nối trung tâm TP HCM, Tây Nam Bộ qua hệ thống cao tốc sẵn
                  sàng hoạt động vào năm sau.
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          <Typography variant="body1" sx={{ mt: 4, fontStyle: "italic" }}>
            Sun Group - Chủ đầu tư của những "biểu tượng" như Bà Nà Hills (Đà
            Nẵng), Sunset Town (Phú Quốc), Fansipan Legend (Sapa),... hứa hẹn sẽ
            tiếp tục đưa Blanca City trở thành "tâm điểm" Sống - Giải trí - Nghỉ
            dưỡng của TP HCM.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default IntroSection;
