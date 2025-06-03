"use client";

import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Container from "./container/container";
import { map } from "lodash";
import clsx from "clsx";

interface ProductLine {
  title: string[];
  subtitle: string[];
  highlights: {
    label: string;
    value: string | number;
  }[];
  imgSrc: string;
  imgAlt: string;
  isActive?: boolean; // Dòng sản phẩm nổi bật (vd: ĐANG RA MẮT)
}

const productLines: ProductLine[] = [
  {
    title: ["Căn hộ Blanca", "Căn hộ Beacon"],
    subtitle: ["ĐANG RA MẮT", "SẮP RA MẮT"],
    highlights: [
      { label: "Loại hình sản phẩm", value: "Studio, 1PN, 2PN, 2PN góc" },
      { label: "Diện tích", value: "30.6m² - 68.6m²" },
      { label: "Tiêu chuẩn bàn giao", value: "FULL nội thất" },
    ],
    imgSrc: "/product1.jpg", // Bạn thay link ảnh tương ứng
    imgAlt: "Căn hộ Blanca",
    isActive: true,
  },

  {
    title: ["Casa Villa"],
    subtitle: ["SẮP RA MẮT"],
    highlights: [
      { label: "Loại hình sản phẩm", value: "Song Lập, Đơn Lập, Grand Villa" },
      { label: "Diện tích", value: "266m² - 319m²" },
      { label: "Chiều cao", value: "3, 4 tầng + 1 tầng hầm" },
    ],
    imgSrc: "/product2.jpg",
    imgAlt: "Casa Villa",
  },
  {
    title: ["Casa Townhouse"],
    subtitle: ["SẮP RA MẮT"],
    highlights: [
      { label: "Diện tích", value: "131m² - 150m²" },
      { label: "Chiều cao", value: "4 tầng + 1 tầng hầm" },
    ],
    imgSrc: "/product3.jpg",
    imgAlt: "Casa Townhouse",
  },
];

const ProductsSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        position: "relative",
      }}
    >
      <Box className="xl:w-[39%] md:w-full  lg:w-full w-[150%] lg:h-[75%] md:h-1/2 h-3/10 absolute right-0 bottom-0">
        <img src="/decor2.png" className="w-full h-full " />
      </Box>
      <Container className="!lg:px-0 relative z-0 flex gap-x-7 flex-wrap lg:flex-nowrap items-center">
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full"
        >
          <h2
            style={{
              fontFamily: "Newsreader",
            }}
            className="xl:text-[48px] text-[44px] mb-5 lg:mt-4 lg:mb-5 font-semibold bg-gradient-to-r from-[#e16a92] to-[#f192b1] bg-clip-text text-transparent"
          >
            Các Dòng Sản Phẩm
          </h2>

          {/* List product lines */}
          {productLines.map((line, idx) => (
            <div
              key={idx}
              className="mb-8 relative w-full flex flex-col md:flex-row justify-between items-start"
            >
              <div className="flex-1">
                <h3 className="text-lg font-[600]">
                  {map(line.title, (title: string, idx: number) => {
                    return (
                      <Box
                        key={idx}
                        style={{
                          fontFamily: "Newsreader",
                        }}
                        className="!text-[#0565a8] text-[20px]"
                      >
                        <span key={idx} className={clsx()}>
                          {title}
                        </span>
                        <span className="ml-1">({line.subtitle[idx]})</span>
                      </Box>
                    );
                  })}
                </h3>

                {/* Highlights list */}
                <ul className="mt-1 list-disc  text-[#333333]">
                  {line.highlights.map((h, i) => (
                    <Box key={i} className="list-style-none">
                      <span className="mr-1 text-secondary  text-[#e16a92]">
                        ⬘
                      </span>
                      <span className="font-semibold">{h.label}:</span>{" "}
                      <span className="font-[400]">{h.value}</span>{" "}
                    </Box>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="mt-4 md:mt-0 md:ml-6 w-full md:w-[165px] md:h-[165px] lg:w-[105px] lg:h-[105px] xl:w-[150px] xl:h-[150px] rounded-lg overflow-hidden flex-shrink-0 shadow-md">
                {/* Image component */}
                <img
                  src={line.imgSrc}
                  alt={line.imgAlt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </Box>
        <Box className="lg:w-1/2 w-full">
          <Box
            sx={{
              background: "linear-gradient(to bottom, #e88da4, transparent)",
              borderRadius: 3, // ~24px

              padding: "12px",
            }}
            className="xl:mt-4 lg:mt-8 mt-1 !w-full"
          >
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                borderWidth: 0,
              }}
              className="w-full h-full"
            >
              <img src="/product-big.jpg" alt="" className="w-full h-full" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductsSection;
