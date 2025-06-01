import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Container from "./container/container";
import React from "react";

const LocationSection = () => {
  const transportOptions = [
    {
      title: "Đường bộ:",
      image: "/sublocation1.jpg",
      items: [
        {
          time: "90 phút:",
          desc: "Kết nối TPHCM & Đông Nam Bộ, qua 2 trục cao tốc Biên Hòa - Vũng Tàu & cao tốc TPHCM - Long Thành",
        },
        {
          time: "90 phút:",
          desc: "Kết nối Tây Nam Bộ, qua 2 trục cao tốc Bến Lức - Long Thành (hoạt động 2026) & cao tốc TPHCM - Trung Lương (sắp mở rộng lên 8 làn xe)",
        },
      ],
      delay: 0.1,
    },
    {
      title: "Đường hàng không:",
      image: "/sublocation2.jpg",

      items: [
        {
          time: "40 phút:",
          desc: "Sân bay quốc tế Long Thành, đón hàng chục triệu khách quốc tế khi vận hành năm 2026.",
        },
      ],
      delay: 0.2,
    },
    {
      title: "Đường thủy:",
      image: "/sublocation3.jpg",
      items: [
        {
          time: "5 phút:",
          desc: "Cảng Bãi Trước, siêu cảng quốc tế lớn nhất phía Nam - Top 20 thế giới",
        },
        {
          time: "45 phút:",
          desc: "Cảng Cái Mép - Thị Vải, cảng nước sâu lớn nhất Việt Nam",
        },
      ],
      delay: 0.3,
    },
    {
      title: "Đặc biệt",
      image: "/sublocation4.jpg",

      description: [
        `Tọa lạc ngay mặt tiền đường 3/2 - một trong 3  <span style="color: #0665a8; font-weight: bold">trục xương sống</span> của Vũng Tàu, kết nối đường Thùy Vân, Bãi Sau và hàng loạt các địa điểm khác của thành phố.`,
        `Đây cũng là vị trí <span style="color: #0665a8; font-weight: bold">trung tâm mới</span> của Vũng Tàu, TPHCM.`,
      ],
      delay: 0.4,
    },
  ];

  return (
    <Box
      id="location"
      sx={
        {
          // py: 8,
          // bgcolor: "#0e3b7c",
        }
      }
      className="bg-gradient-to-b text-white from-[#0f184c] to-[#0e3b7c]"
    >
      <Container>
        <Box className="flex w-full lg:gap-x-[70px] flex-wrap lg:flex-nowrap justify-between mb-3 lg:mb-12 items-end">
          <Box className="">
            <span className="text-[48px] mx-1 font-semibold bg-gradient-to-r from-[#e16a92] to-[#f190b1] bg-clip-text text-transparent">
              Vị trí
            </span>
            <Typography
              sx={{
                fontStyle: "italic",
              }}
              className="!lg:text-[32px] w-max !text-[30px] mb-[40px] lg:mb-0"
            >
              "Trung tâm của Trung tâm"
            </Typography>
          </Box>

          <Box className="!w-max !xl:max-w-[633px] !lg:max-w-[433px]">
            <p>
              Từ năm 2026, mọi trục động lực hạ tầng huyết mạch của miền Nam sẽ
              rút ngắn khoảng cách và thời gian đến Blanca City Vũng Tàu:
            </p>
          </Box>
        </Box>
        <Box className="lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 flex-wrap xl:flex-nowrap gap-4">
          {transportOptions.map((option, idx) => (
            <Box
              style={{
                backgroundImage: `url(${option.image})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="!lg:w-1/2 !xl:w-1/4 w-full rounded-lg overflow-hidden duration-500 hover:translate-y-[-10px]"
              key={idx}
            >
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: option.delay }}
                viewport={{ once: true }}
                sx={{
                  bgcolor: "rgba(255,255,255,0.8)",
                  height: "100%",
                }}
                className="rgba(255,255,255,0.1) lg:p-[24px] lg:pb-[60px] p-[20px] pb-[60px]"
              >
                <Typography
                  className="!mb-2"
                  variant="h5"
                  sx={{ color: "secondary.light" }}
                >
                  {option.title}
                </Typography>

                {/* Nếu có item dạng danh sách */}
                {option.items?.map((item, i) => (
                  <React.Fragment key={i}>
                    <p className=" font-[500] w-full mb-1 items-center leading-6">
                      <span className="mr-2 text-secondary  text-[#0665a8]">
                        ⬘
                      </span>
                      <span className="mx-1 font-semibold bg-gradient-to-r text-[#0665a8] ">
                        {item.time}
                      </span>
                      {item.desc}
                    </p>
                  </React.Fragment>
                ))}

                {/* Nếu có description dạng paragraph */}
                {option.description?.map((desc, i) => (
                  // <Typography
                  //   key={i}
                  //   variant="body2"
                  //   sx={{ mt: 2 }}
                  //   dangerouslySetInnerHTML={{ __html: desc }}
                  // />
                  <Box key={desc}>
                    <Box
                      dangerouslySetInnerHTML={{ __html: desc }}
                      className="mt-2 font-[500] items-center leading-6"
                    ></Box>
                  </Box>
                ))}
              </Paper>
            </Box>
          ))}
        </Box>

        {/* <Box
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
        /> */}
      </Container>
    </Box>
  );
};

export default LocationSection;
