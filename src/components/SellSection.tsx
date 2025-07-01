"use client";

import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Container from "./container/container";
import { FormConsultation } from "./form/FormConsultation";
import BannerComponent from "./commons/HeroBannerComponent";
import { SlideInAnimation } from "./commons/Animations";
import GradientText from "./form/TextGradient";
import { InfoItem } from "./OverviewSection";

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

const SellSection = () => {
  return (
    <Box
      id="price"
      className="bg-gradient-to-b text-white from-[#12194f] to-[#0764a6]"
    >
      <Container className="flex flex-col-reverse lg:flex-row justify-between items-center gap-x-7">
        <Box className="lg:w-1/2 w-full text-[#E3E3E3]">
          <Box>
            <h2
              style={{
                fontFamily: "Newsreader",
              }}
              className="xl:text-[48px] text-[44px] lg:mb-4 mb-8 lg:mt-4 xl:mb-5 font-semibold bg-gradient-to-r from-[#e16a92] to-[#f192b1] bg-clip-text text-transparent"
            >
              <SlideInAnimation type="right">
                Giá Bán <br /> & Chính Sách Thanh Toán
              </SlideInAnimation>
            </h2>
            <Typography
              variant="body1"
              sx={{ mb: 2, fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              Cơ hội sở hữu các sản phẩm trong “biểu tượng mới” của Sun Group
              tại Siêu đô thị TPHCM với giá tốt nhịp đầu khoảng
              {/* <span
          style={{ fontFamily: "Newsreader", lineHeight: 1 }}
          className="mx-1 text-[24px] !leading-none font-semibold bg-gradient-to-r from-[#d02d63] to-[#f08eaf] bg-clip-text text-transparent"
        >
       2,8 tỷ/căn
        </span> */}
              <GradientText text="2,8 tỷ/căn" />
              view biển & full nội thất.
            </Typography>
          </Box>

          {[
            {
              label: (
                <span>
                  Ưu đãi lên đến <GradientText text="17%" />
                </span>
              ),
            },
            {
              label: (
                <span>
                  Thanh toán <GradientText text="15% " />
                  ký HĐMB, chỉ
                  <GradientText text="30%" />
                  đến khi nhận nhà.
                </span>
              ),
            },
            {
              label: (
                <span>
                  Ngân hàng cho vay <GradientText text="70%" />, HTLS
                  <GradientText text="0%" />
                  đến <GradientText text="36" /> tháng.
                </span>
              ),
            },
          ].map((item, index) => (
            <InfoItem key={index} label={item.label} className={"flex"} />
          ))}
        </Box>
        <Box className="lg:w-1/2 w-full mb-4 lg:mb-0">
          <SlideInAnimation type="bottom">
            <div
              style={{
                background: "linear-gradient(to bottom, #e88da4, transparent)",
                borderRadius: 12, // ~24px
                padding: "10px",
              }}
              className="!relative w-full overflow-hidden"
            >
              <Box className="overflow-hidden rounded-md border-2 border-solid border-white">
                <BannerComponent
                  img="/inspiration.webp"
                  imgTablet="/inspiration.webp"
                  imgMb="/inspiration-mb.webp"
                />
              </Box>
            </div>
          </SlideInAnimation>
        </Box>
      </Container>
    </Box>
  );
};

export default SellSection;
