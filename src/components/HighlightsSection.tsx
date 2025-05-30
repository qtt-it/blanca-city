"use client";

import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const HighlightsSection = () => {
  return (
    <Box
      id="highlights"
      sx={{
        py: 8,
        bgcolor: "#ffffff",
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
              mb: 1,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Điểm Nhấn Nổi Bật
          </Typography>

          <Typography
            variant="h4"
            component="h3"
            sx={{
              color: "#0e3b7c",
              fontStyle: "italic",
              mb: 6,
              textAlign: "center",
            }}
          >
            Tại Blanca City
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              elevation={3}
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h5"
                sx={{ mb: 3, color: "#0e3b7c", fontWeight: "bold" }}
              >
                Sun World Vũng Tàu
              </Typography>

              <Typography variant="body1" sx={{ mb: 3 }}>
                Có quy mô lớn nhất của Sun Group với 15ha, 21 trò chơi đặc sắc
                tái hiện vẻ đẹp của sông nước miền Tây Nam Bộ:
              </Typography>

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                <Typography variant="body1">
                  Công viên đầu tiên ở Đông Nam Á có trò chơi tàu lượn siêu tốc
                  phiên bản nước
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                <Typography variant="body1">
                  Rally Racer 10 làn đầu tiên trên thế giới
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                <Typography variant="body1">
                  Công viên đầu tiên ở Việt Nam có bể tạo sóng đôi cao nhất
                  (1,8m & 2,4m)
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                <Typography variant="body1">
                  Bể tạo sóng và tàu lượn nước mini cho trẻ em tại công viên đầu
                  tiên ở Việt Nam
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                <Typography variant="body1">
                  Công viên đầu tiên ở Việt Nam có dòng sông thư thác Action
                  River.
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: "auto",
                  width: "100%",
                  height: 200,
                  bgcolor: "red", // Placeholder for image
                  borderRadius: 1,
                  overflow: "hidden",
                }}
              />
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              elevation={3}
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h5"
                sx={{ mb: 3, color: "#0e3b7c", fontWeight: "bold" }}
              >
                Coastal Hotel Perspective
              </Typography>

              <Typography variant="body1" sx={{ mb: 3 }}>
                Thương hiệu khách sạn 5 sao quốc tế đầu tiên tại Vũng Tàu, với
                sự góp mặt của một trong những đối tác của Sun Group: Hilton,
                Capella, Marriott, IHG, Accor, IMG...
              </Typography>

              <Box
                sx={{
                  mt: "auto",
                  width: "100%",
                  height: 200,
                  bgcolor: "red", // Placeholder for image
                  borderRadius: 1,
                  overflow: "hidden",
                }}
              />
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              elevation={3}
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h5"
                sx={{ mb: 3, color: "#0e3b7c", fontWeight: "bold" }}
              >
                Sun Retail Vũng Tàu
              </Typography>

              <Typography variant="body1" sx={{ mb: 3 }}>
                Trung tâm thương mại mặt biển lớn nhất miền Nam
              </Typography>

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                <Typography variant="body1">
                  Phố đi bộ sầm uất, nhộn nhịp, sôi động trải nghiệm mua sắm, ẩm
                  thực
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <Box sx={{ color: "secondary.main", mr: 1, mt: 0.5 }}>◆</Box>
                <Typography variant="body1">
                  Tổ hợp giải trí đẳng cấp quốc tế.
                </Typography>
              </Box>

              <Box
                sx={{
                  mt: "auto",
                  width: "100%",
                  height: 200,
                  bgcolor: "red", // Placeholder for image
                  borderRadius: 1,
                  overflow: "hidden",
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HighlightsSection;
