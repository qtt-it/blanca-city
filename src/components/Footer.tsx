"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Box
      sx={{
        py: 6,
        bgcolor: "#0a2a58",
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
          <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
            LIÊN HỆ VỚI CHÚNG TÔI
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            ĐỂ ĐƯỢC TƯ VẤN VÀ HỖ TRỢ TỐT NHẤT
          </Typography>

          <Box sx={{ height: 1, bgcolor: "rgba(255,255,255,0.3)", my: 3 }} />

          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            CÔNG TY CỔ PHẦN ĐÔNG TÂY LAND
          </Typography>

          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>MST:</strong> 0312312011
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Trụ sở:</strong> 192 Trần Não, Khu phố 2, Phường An Khánh,
            TP. Thủ Đức, TP. HCM
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            <strong>Email:</strong> info@dongtayland.vn
          </Typography>

          <Box sx={{ height: 1, bgcolor: "rgba(255,255,255,0.3)", my: 3 }} />

          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "secondary.main",
                color: "white",
                px: 4,
                py: 1.5,
                "&:hover": {
                  bgcolor: "secondary.dark",
                },
              }}
            >
              HOTLINE: 0977 48 7777
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
