import React from "react";
import Container from "../components/container/container";
import { Box, Typography, TextField, Button } from "@mui/material";

const Footer: React.FC = () => {
  const listDataFooter = [
    {
      thumbnail: "/stc-longthanh/footer/1.svg",
      title: "Văn phòng đại diện:",
      link: "274-276, Trương Văn Bang, Phường Thạnh Mỹ Lợi, Thành phố Thủ Đức, Thành phố Hồ Chí Minh",
    },
    {
      thumbnail: "/stc-longthanh/footer/2.svg",
      title: "Hotline phòng kinh doanh",
      desc: "0939 374 739",
      link: (
        <a href="tel:0939374739" style={{ color: "#f1f1f1", textDecoration: "none" }}>
          0939 374 739
        </a>
      ),
    },
    {
      thumbnail: "/stc-longthanh/footer/3.svg",
      title: "Email:",
      desc: "cskh@goldcoast-holdings.com",
      link: (
        <a href="mailto:cskh@goldcoast-holdings.com" style={{ color: "#f1f1f1", textDecoration: "none" }}>
          cskh@goldcoast-holdings.com
        </a>
      ),
    },
    {
      thumbnail: "/stc-longthanh/footer/4.svg",
      title: "Website:",
      desc: "STC Long Thành",
      link: (
        <a
          href="https://www.stclongthanh.com.vn"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#f1f1f1", textDecoration: "none" }}
        >
          STC Long Thành
        </a>
      ),
    },
  ];
  const listBrandCommit = [
    { thumbnail: "/stc-longthanh/footer/footer_commit1.png" },
    { thumbnail: "/stc-longthanh/footer/footer_commit2.png" },
    { thumbnail: "/stc-longthanh/footer/footer_commit3.png" },
  ];

  return (
    <>
      <Box
        component="footer"
        sx={{
          bgcolor: "#000912",
          width: "100%",
          color: "white",
          py: { xs: 4, md: 8 },
        }}
      >
        <Container className="mx-auto px-6 md:flex">
          <Box
            sx={{
              width: "100%",
              md: { width: "50%" },
              px: 4,
              pb: "30px",
            }}
          >
            <Typography variant="h4" sx={{ textTransform: "uppercase", mb: 4, fontWeight: "600", fontSize: 24 }}>
              Thông Tin Liên Hệ
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {listDataFooter.map((it, index) => (
                <Box
                  component="li"
                  key={`${it.desc}-${index}`}
                  sx={{
                    display: "flex",
                    alignItems: { xs: "flex-start", md: "center" },
                    mt: index === 0 ? 0 : 4,
                  }}
                >
                  <Box sx={{ width: 40, height: "auto", mr: 4 }}>
                    <Box
                      component="img"
                      src={it.thumbnail}
                      alt={it.title}
                      sx={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                  <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <Typography
                      variant="body1"
                      sx={{ color: "#f1f1f1", fontSize: 16, lineHeight: 1.4 }}
                    >
                      {it.title} <br />
                      {typeof it.link === "string" ? it.link : it.link}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                alignItems: "center",
                mt: 5,
              }}
              component="ul"
            >
              {listBrandCommit.map((it, index) => (
                <Box
                  component="li"
                  key={`${it.thumbnail}-${index}`}
                  sx={{ listStyle: "none" }}
                >
                  <Box sx={{ width: 120 }}>
                    <Box
                      component="img"
                      src={it.thumbnail}
                      alt={`Brand commit ${index + 1}`}
                      sx={{ width: "100%", height: "auto" }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              width: "100%",
              md: { width: "50%" },
              px: 4,
              pb: "30px",
              mt: { xs: 4, md: 0 },
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "#f1f1f1", mb: 5, fontSize: 16, lineHeight: 1.5 }}
            >
              Bản quyền thuộc về Eco Pearl City. Tất cả các quyền được bảo hộ.
              Giấy chứng nhận đăng ký doanh nghiệp số 3502429207 do Sở Kế hoạch
              và Đầu tư Bà Rịa - Vũng Tàu cấp lần đầu ngày 06/07/2020.
            </Typography>

            <Box
              component="form"
              action="#"
              method="POST"
              sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 5 }}
            >
              <TextField
                variant="outlined"
                name="name"
                placeholder="Họ và tên"
                size="medium"
                fullWidth
                sx={{
                  bgcolor: "white",
                  "& .MuiInputBase-input": { color: "#818181" },
                }}
              />
              <TextField
                variant="outlined"
                name="phone"
                placeholder="Số điện thoại"
                size="medium"
                fullWidth
                sx={{
                  bgcolor: "white",
                  "& .MuiInputBase-input": { color: "#818181" },
                }}
              />
              <TextField
                variant="outlined"
                name="email"
                placeholder="Địa chỉ Email"
                type="email"
                size="medium"
                fullWidth
                sx={{
                  bgcolor: "white",
                  "& .MuiInputBase-input": { color: "#818181" },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: "#774a24",
                  color: "white",
                  fontWeight: "600",
                  height: 50,
                  borderRadius: 0.5,
                  "&:hover": { bgcolor: "#633f1e" },
                }}
                fullWidth
              >
                GỬI THÔNG TIN
              </Button>
            </Box>

            <Box sx={{ width: 135, height: 28, mx: "auto" }}>
              <Box
                component="img"
                src="stc-longthanh/footer/dcma.png"
                alt="dcma"
                sx={{ width: "100%", height: "100%" }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          bgcolor: "white",
          py: 4,
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          mx: "auto",
        }}
      >
        <Typography sx={{ color: "#00001D7D", mr: 1, fontSize: 14 }}>
          Copyright 2025 ©
        </Typography>
        <Typography
          sx={{ color: "#00001D7D", fontWeight: "600", fontSize: 14 }}
        >
          Gold Coast Vung Tau
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
