"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <Box
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
            variant="h3"
            component="h2"
            sx={{
              color: "#0e3b7c",
              mb: 6,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Cùng thảo luận bài phân tích dự án
          </Typography>
          <Typography
            variant="h4"
            component="h3"
            sx={{
              color: "#0e3b7c",
              mb: 6,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            BLANCA CITY – ĐÔ THỊ "BIỂU TƯỢNG MỚI" CỦA SUN GROUP TẠI TP VŨNG TÀU
          </Typography>
        </motion.div>

        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            component="h4"
            sx={{ mb: 4, fontWeight: "bold" }}
          >
            BÌNH LUẬN
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            Ngoài Họ tên (*), Số điện thoại hoặc Email là trường bắt buộc.
          </Typography>

          <Typography variant="body2" sx={{ mb: 4 }}>
            Đông Tây Land tuyệt đối tôn trọng quyền riêng tư của khách hàng,
            chúng tôi KHÔNG công khai hoặc sử dụng thông tin liên lạc cho mục
            đích khác.
          </Typography>

          <Grid container spacing={3}>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="Nội dung ..."
                variant="outlined"
                sx={{
                  bgcolor: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                    "&:hover fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                placeholder="Họ tên (*)"
                variant="outlined"
                sx={{
                  bgcolor: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                    "&:hover fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                placeholder="Email"
                variant="outlined"
                sx={{
                  bgcolor: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                    "&:hover fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                placeholder="Số điện thoại"
                variant="outlined"
                sx={{
                  bgcolor: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                    "&:hover fieldset": {
                      borderColor: "primary.main",
                    },
                  },
                }}
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#0e3b7c",
                  color: "white",
                  py: 1.5,
                  px: 4,
                  "&:hover": {
                    bgcolor: "#0a2a58",
                  },
                }}
              >
                GỬI ĐI
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
