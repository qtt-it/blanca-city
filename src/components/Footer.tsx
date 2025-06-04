"use client"
import React, { useState } from "react";
import Container from "../components/container/container";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Modal,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";
import { FormDesign } from "./DesignSection";
import { AddBoxTwoTone } from "@mui/icons-material";
import { InputCustom } from "./ContactSection";
import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa"; // FontAwesome
import { logosFooter } from "@/common/footer.constant";
import clsx from "clsx";
import TermsOfUse from "./TermOfUse";
import useCommentSubmit from "@/hook/useSubmit";
import { Controller, useForm } from "react-hook-form";

const Footer: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {
    loading,
    snackbarMessage,
    snackbarSeverity,
    openSnackbar,
    onSubmit: onSubmitFinal,
    handleCloseSnackbar,
  } = useCommentSubmit();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  // const [loading, setLoading] = React.useState(false);

  const onSubmit = async (data: any) => {
    console.log("data", data);
    // setLoading(true);

    // // Giả lập gọi API
    // setTimeout(() => {
    //   setLoading(false);
    //   // reset() // Nếu bạn muốn reset form sau khi gửi
    // }, 2000);

    await onSubmitFinal(data, "", () => reset());
  };
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
          {openSnackbar && (
            <Box className="z-[11] w-full relative">
              <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={openSnackbar}
                autoHideDuration={1000}
                onClose={handleCloseSnackbar}
                key={"center" + "center"}
                style={{
                  top: "100px",
                }}
              >
                <Alert
                  onClose={handleCloseSnackbar}
                  severity={snackbarSeverity}
                >
                  {snackbarMessage}
                </Alert>
              </Snackbar>
            </Box>
          )}
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
                  <span className="font-bold">Hotline: </span>
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
                  <span className="font-bold">Email: </span>
                  <strong className="font-extrabold">
                    cskh@sungroup.io.vn
                  </strong>
                </Link>
              </p>
            </Box>
            <Box className="lg:w-1/2 mt-10 lg:mt-0  w-full flex flex-col">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container direction="column" spacing={3}>
                  <Grid>
                    <Controller
                      name="name"
                      control={control}
                      rules={{ required: "Họ tên là bắt buộc" }}
                      render={({ field }) => (
                        <>
                          <InputCustom
                            {...field}
                            placeholder="Họ tên (*)"
                            // error={!!errors.name}
                          />
                          {errors.name && (
                            <p style={{ color: "red" }}>
                              {errors.name.message}
                            </p>
                          )}
                        </>
                      )}
                    />
                  </Grid>
                  <Grid>
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: "Email là bắt buộc",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Email không hợp lệ",
                        },
                      }}
                      render={({ field }) => (
                        <>
                          <InputCustom {...field} placeholder="Email" />
                          {errors.email && (
                            <p style={{ color: "red" }}>
                              {errors.email.message}
                            </p>
                          )}
                        </>
                      )}
                    />
                  </Grid>
                  <Grid>
                    <Controller
                      name="phone"
                      control={control}
                      rules={{
                        required: "Số điện thoại là bắt buộc",
                        pattern: {
                          value: /^\d{9,11}$/,
                          message: "Số điện thoại không hợp lệ",
                        },
                      }}
                      render={({ field }) => (
                        <>
                          <InputCustom
                            {...field}
                            placeholder="Số điện thoại"
                            // error={!!errors.phone}
                          />
                          {errors.phone && (
                            <p style={{ color: "red" }}>
                              {errors.phone.message}
                            </p>
                          )}
                        </>
                      )}
                    />
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
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? (
                      <CircularProgress
                        style={{ width: "28px", height: "28px" }}
                      />
                    ) : (
                      "GỬI ĐI"
                    )}
                  </Button>
                </Box>
              </form>

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
