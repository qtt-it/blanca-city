"use client";

import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Container from "./container/container";
import { FormConsultation } from "./form/FormConsultation";
import BannerComponent from "./commons/HeroBannerComponent";

export const FormDesign = ({ isBorder = true }) => {
  return (
    <Paper
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      elevation={0}
      sx={
        isBorder
          ? {
              p: 3,
              bgcolor: "rgba(255,255,255,0.1)",
              borderRadius: 2,
            }
          : {}
      }
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
  );
};

const DesignSection = () => {
  return (
    <Box
      id="design"
      // sx={{
      //   bgcolor: "#0e3b7c",
      //   color: "white",
      // }}
      className="bg-gradient-to-b text-white from-[#12194f] to-[#0764a6]"
    >
      <Container className="flex flex-col-reverse lg:flex-row justify-between items-center gap-x-7">
        <Box className="lg:w-1/2 w-full mt-4 lg:mt-0">
          <Box className="rounded-lg overflow-hidden border border-solid border-[#f191b1]">
            <BannerComponent
              img="/inspiration.webp"
              imgTablet="/inspiration.webp"
              imgMb="/inspiration-mb.webp"
            />
          </Box>
        </Box>
        <Box className="lg:w-1/2 w-full text-[#E3E3E3]">
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
            style={{
              fontFamily: "Newsreader"
            }}
            className="xl:text-[48px] text-[44px] lg:mb-4 mb-8 lg:mt-4 xl:mb-5 font-semibold bg-gradient-to-r from-[#e16a92] to-[#f192b1] bg-clip-text text-transparent">
              Cảm Hứng Thiết Kế
            </h2>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              Thành phố trắng Blanca City lấy cảm hứng từ quá trình hình thành
              và phát triển của Vũng Tàu, là cuộc gặp gỡ của phương Đông &
              phương Tây: <strong>Giao thoa văn hóa</strong> Nam bộ - Bồ Đào Nha
              - Pháp & <strong>Dấu ấn thương cảng</strong> thế kỷ 13.
            </Typography>

            <Typography
              variant="body1"
              className="pt-4 py-5 border-t border-solid border-[#E3E3E3]"
              // sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              Quý khách hàng điền thông tin bên dưới để nhận tư vấn chi tiết các
              dòng sản phẩm đặc biệt tại dự án Blanca City by Sun Group.
            </Typography>
          </Box>

          {/* <FormDesign isBorder={false}/> */}
          <FormConsultation
            btnClassName="!w-max !text-[16px] !mx-auto !mt-3 !py-1 !px-[32px]"
            layout="vertical"
            isTextarea={false}
            textBtn={"NHẬN BẢNG GIÁ"}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default DesignSection;
