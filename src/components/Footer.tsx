import React, { useState } from "react";
import Container from "../components/container/container";
import { Box, Typography, TextField, Button, Grid, Modal } from "@mui/material";
import { FormDesign } from "./DesignSection";
import { AddBoxTwoTone } from "@mui/icons-material";
import { InputCustom } from "./ContactSection";
import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa"; // FontAwesome
import { logosFooter } from "@/common/footer.constant";
import clsx from "clsx";
import TermsOfUse from "./TermOfUse";

const Footer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box>
        <Box
          component="footer"
          sx={{
            bgcolor: "white",
            width: "100%",
            color: "white",
            // py: { xs: 4, md: 8 },
          }}
        >
          <Container className="mx-auto !py-[40px] justify-between gap-x-[20px] px-6 md:flex">
            <Box className="lg:w-1/2 w-full flex flex-col">
              <Box className="w-[103px] h-[60px] mb-5">
                <img src="/logo-main.png" className="w-full h-full" />
              </Box>

              <p className="text-[#0d3b7c] lg:w-4/5">
                Dự án Blanca Vũng Tàu là một trong những cái tên vàng trong làng
                bất động sản. Dự án được đầu tư với số vốn khủng, cung cấp cho
                cư dân tiện ích đẳng cấp. Hơn thế nữa, khách hàng còn thỏa sức
                lựa chọn nhiều dòng căn hộ khác nhau, phục vụ tốt cho nhu cầu để
                ở hoặc đầu tư.
              </p>

              <p className="mt-4  items-start text-[#0d3b7c] flex  leading-6">
                <span className="mr-1 text-secondary  text-[#e16a92] ">⬘</span>
                {/* <span className="text-4xl mx-2 font-semibold bg-gradient-to-r from-[#e16a92] to-[#f190b1] bg-clip-text text-transparent">
                  90 phút
                </span> */}
                <Link href="tel:+0977487777" className="ml-[6px] flex gap-x-1 ">
                  <p className="font-bold">Hotline: </p>
                  <strong className="font-extrabold"> 0977 48 7777</strong>
                </Link>{" "}
              </p>

              <p className="mt-4  items-start text-[#0d3b7c] flex  leading-6">
                <span className="mr-1 text-secondary text-[#e16a92] ">⬘</span>
                {/* <span className="text-4xl mx-2 font-semibold bg-gradient-to-r from-[#e16a92] to-[#f190b1] bg-clip-text text-transparent">
                  90 phút
                </span> */}
                <Link
                  href="mailto:cskh@sungroup.io.vn"
                  className="ml-[6px] flex gap-x-1 "
                >
                  <p className="font-bold">Email: </p>
                  <strong className="font-extrabold">
                    cskh@sungroup.io.vn
                  </strong>
                </Link>
              </p>

              {/* <iframe
                className="w-full h-[420px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9733.125723085335!2d107.13203545205698!3d10.382034241931608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175712d5d99d857%3A0xd35e8a83531fb0a4!2sSun%20Group%20V%C5%A9ng%20T%C3%A0u%20Sales%20Gallery!5e0!3m2!1svi!2s!4v1748751061255!5m2!1svi!2s"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe> */}
            </Box>
            <Box className="lg:w-1/2 mt-10 lg:mt-0  w-full flex flex-col">
              <Box>
                <Grid
                  size={{ xs: 12, md: 12 }}
                  container
                  direction="column"
                  spacing={3}
                >
                  <Grid>
                    <InputCustom placeholder="Họ tên (*)" />
                  </Grid>
                  <Grid>
                    <InputCustom placeholder="Email" />
                  </Grid>
                  <Grid>
                    <InputCustom placeholder="Số điện thoại " />
                  </Grid>
                </Grid>

                <Box sx={{ mt: "2rem" }} className="w-full">
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                      bgcolor: "#0B3050",
                      color: "white",
                      py: 1.5,
                      fontWeight: "bold",
                      "&:hover": {
                        bgcolor: "#092640",
                      },
                    }}
                  >
                    GỬI ĐI
                  </Button>
                </Box>
              </Box>

              <Box
                onClick={handleOpen}
                className="mt-8 flex cursor-pointer  justify-center items-center"
              >
                <FaQuestionCircle size={18} color="#0d3b7c" />
                <p className="text-[#0d3b7c] ml-3">Điểu khoản sử dụng</p>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box
          sx={{
            bgcolor: "#222123",
            borderTop: "0.5px solid #414141",
          }}
        >
          <Container className="flex !py-[40px] flex-wrap gap-4">
            {logosFooter.map((it: (typeof logosFooter)[0], index) => (
              <Box
                key={`partner/${it.url}-${index}`}
                // sx={{ listStyle: "none" }}
              >
                <Box
                  className={clsx(
                    "w-[57px] h-[34px]",
                    it.isShadow
                      ? "shadow md border border-solid border-black"
                      : ""
                  )}
                  component="img"
                  src={`partner/${it.url}`}
                  alt={`Brand commit ${index + 1}`}
                />
              </Box>
            ))}
          </Container>
        </Box>
        <Box
          sx={{
            bgcolor: "#414141",
            py: 2,
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            mx: "auto",
          }}
        >
          <Typography sx={{ color: "white", mr: 1, fontSize: 14 }}>
            Copyright 2022 ©
          </Typography>
          <Typography sx={{ color: "white", fontWeight: "600", fontSize: 14 }}>
            SunGroup
          </Typography>
        </Box>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute" as const,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            maxHeight: "80vh",
            overflowY: "auto",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            maxWidth: 800,

          }}
        >
         
          <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
            <TermsOfUse />
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Footer;
