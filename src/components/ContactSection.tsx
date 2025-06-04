"use client";

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Divider,
  Grid,
} from "@mui/material";
// import { Oswald } from "next/font/google";
import { styled } from "@mui/material/styles";

export const InputCustom = styled("input")(({ theme }) => ({
  width: "100%",
  padding: ".375rem .75rem",
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: "1.5",
  color: "#212529",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  border: "1px solid #ced4da",
  WebkitAppearance: "none",
  MozAppearance: "none",
  appearance: "none",
  borderRadius: 0,
  borderWidth: "0 0 1px 0",
  transition: "border-color .15s ease-in-out, box-shadow .15s ease-in-out",

  "&:hover": {
    borderColor: "#155D9C",
  },

  "&:focus": {
    outline: "none",
    boxShadow: "none",
    borderColor: "#155D9C",
  },
}));

// const oswald = Oswald({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-oswald",
// });

const commentBoxStyle = {
  fontFamily: `"Krub",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  fontSize: "0.8em",
  lineHeight: "1.6",
  color: "#155D9C",
};

const ngoaiStyle = {
  display: "block",
};

const starStyle = {
  color: "red",
};

const abbrStyle = {
  textDecoration: "none",
  color: "#0e3b7c",
  cursor: "help",
};

const ContactSection = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#fff",
        color: "#333",
      }}
    >
      <Container
        style={{
          maxWidth: "1296px",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            marginTop: "2rem",
            marginBottom: "1rem",
            fontFamily: `"Oswald",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
          }}
        >
          <Typography
            sx={{
              color: "#0B3050",
              fontSize: "24px",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            Cùng thảo luận bài phân tích dự án
          </Typography>
          <Typography
            sx={{
              color: "#00578A",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: 1.2,
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            BLANCA CITY – ĐÔ THỊ "BIỂU TƯỢNG MỚI" CỦA SUN GROUP TẠI TP VŨNG TÀU
          </Typography>
        </Box>
        <Divider
          sx={{
            marginY: "1rem",
            color: "#0B3050",
          }}
        />
        <Box sx={{ mb: 6 }}>
          <Typography
            sx={{
              mb: "1rem",
              fontSize: "24px",
              fontWeight: "bold",
              color: "#0B3050",
              fontFamily: `"Oswald",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
            }}
          >
            BÌNH LUẬN
          </Typography>

          <div style={commentBoxStyle}>
            <span style={ngoaiStyle}>
              Ngoài
              <b> Họ tên (*), </b>
              <b>Số điện thoại</b>
              <abbr
                title="Cần nhập ít nhất 1 trong 2 trường này"
                style={abbrStyle}
              >
                {" "}
                hoặc{" "}
              </abbr>
              <b>Email </b>
              là trường bắt buộc.
              <br />
              Đông Tây Land tuyệt đối tôn trọng quyền riêng tư của khách hàng,
              chúng tôi <b>KHÔNG</b> công khai hoặc sử dụng thông tin liên lạc
              cho mục đích khác.
            </span>
          </div>
          <Grid container spacing={6} marginTop="8px">
            {/* Left column: Nội dung */}
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                multiline
                rows={5}
                placeholder="Nội dung ..."
                variant="outlined"
                sx={{
                  bgcolor: "white",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                    "&:hover fieldset": {
                      borderColor: "#0B3050",
                    },
                  },
                }}
              />
            </Grid>
            {/* Right column: Họ tên, Email, Số điện thoại */}
            <Grid
              size={{ xs: 12, md: 6 }}
              container
              direction="column"
              spacing={2}
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
          </Grid>
          <Box sx={{ mt: "0.5rem" }}>
            <Button
              variant="contained"
              sx={{
                width: "48%",
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
      </Container>
    </Box>
  );
};

export default ContactSection;
