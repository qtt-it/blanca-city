"use client";

import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";
import Container from "./container/container";
const IntroSection = () => {
  return (
    <Box
      sx={{
        // bgcolor: "#191b4f",
        color: "white",
      }}
    >
      <Container className="!lg:px-0 !py-0 flex gap-x-7 flex-wrap lg:flex-nowrap items-center">
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <p className="leading-[1.5] mb-4">
            Nổi tiếng trên bản đồ du lịch Đông Nam Bộ và cả miền Nam nhưng Vũng
            Tàu chưa có một dự án đô thị đẳng cấp đúng nghĩa, chưa có các khu
            vui chơi, giải trí hoành tráng hay những công trình mang tính biểu
            tượng để "check-in".
          </p>

          <p className="leading-[1.5] mb-4">
            Tất cả những mong đợi này sẽ xuất hiện ở{" "}
            <strong>
              BLANCA CITY - "Biểu tượng đô thị all-in-one" đầu tiên của Sun
              Group
            </strong>{" "}
            ngay trung tâm Vũng Tàu. Đó là lý do rất nhiều khách hàng, nhà đầu
            tư mong đợi về sự "bùng nổ" khi thành phố biển có Blanca City.
          </p>

          <p className="mt-4  items-center leading-6">
            <span className="mr-2 text-secondary  text-[#e16a92]">⬘</span>
            Chỉ
            <span className="text-4xl mx-1 font-semibold bg-gradient-to-r from-[#e16a92] to-[#f190b1] bg-clip-text text-transparent">
              40 phút
            </span>
            đến sân bay Long Thành.{" "}
          </p>

          <p className="mt-4  items-center leading-6">
            <span className="mr-1 text-secondary  text-[#e16a92]">⬘</span>
            Và chỉ
            <span className="text-4xl mx-2 font-semibold bg-gradient-to-r from-[#e16a92] to-[#f190b1] bg-clip-text text-transparent">
              90 phút
            </span>
            kết nối trung tâm TP HCM, Tây Nam Bộ qua hệ thống cao tốc sẵn sàng
            hoạt động vào năm sau.
          </p>

          <p className="mt-4 italic items-center leading-6">
            Sun Group - Chủ đầu tư của những "biểu tượng" như Bà Nà Hills (Đà
            Nẵng), Sunset Town (Phú Quốc), Fansipan Legend (Sapa),... hứa hẹn sẽ
            tiếp tục đưa Blanca City trở thành "tâm điểm" Sống - Giải trí - Nghỉ
            dưỡng của TP HCM.
          </p>
        </Box>
        <Box className="lg:w-1/2 w-full">
          <Box
            sx={{
              background: "linear-gradient(to bottom, #e88da4, #191b4f)",
              borderRadius: 3, // ~24px
              // height: 400,
              // maxWidth: 720,
              // mx: "auto",
              // mt: 4,
              boxShadow: "0 0 30px rgba(0, 0, 0, 0.4)",
              padding: "16px",
            }}
            className="lg:mt-4 mt-8 !w-full"
          >
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                borderWidth: 0,
              }}
              className="w-full h-full"
            >
              <img src="/banner-sub.jpg" alt="" className="w-full h-full" />
            </Box>
          </Box>
        </Box>
      </Container>
      <Container>
        <button
          // onClick={() => setShow(true)}
          className="text-white  text-[20px]  border border-solid rounded-md border-white cursor-pointer mx-auto items-center flex bg-gradient-to-l from-[#e16a92] to-[#f190b1] py-[8px] px-[30px] font-[500]"
        >
          <p className="text-md md:text-lg flex-wrap items-center flex ">
            <img
              src={"/ic_post.png"}
              className={clsx("w-6 mr-2 h-6 duration-100 blinking-image")}
            />
            Nhận trọn bộ thông tin dự án
            <strong className="mx-1">Blanca City by Sun Group</strong>
            tại đây
          </p>
        </button>
      </Container>
    </Box>
  );
};

export default IntroSection;
