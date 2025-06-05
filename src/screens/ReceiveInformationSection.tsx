import { ImageComponent } from "@/components/commons/ImageComponent";
import Container from "@/components/container/container";
import { FormConsultation } from "@/components/form/FormConsultation";
import { Box, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";

export const ReceiveInformationSection = ({
  isLogo = true,
  text,
}: {
  isLogo?: boolean;
  text?: string;
}) => {
  return (
    <Box>
      <Stack
        sx={{
          // alignItems: "center",
          backgroundImage: `url("/ReceiveInfo/CTA.jpg")`,
          backgroundSize: "cover",
          // backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
        className="bg-right lg:bg-auto"
      >
        <Container className="flex w-full lg:py-[80px] flex-col items-center">
          {isLogo && (
            <Box width="184px" height="110px">
              <ImageComponent img="/ReceiveInfo/logo-blanca-city-vungtau-2.png" />
            </Box>
          )}
          <Box
            sx={{
              textAlign: "center",
              fontSize: "22px",
              fontFamily: "Newsreader",
              fontWeight: 600,
              color: "#fff",
              marginTop: "28px",
              marginBottom: "20px",
            }}
          >
            {text ||
              `Quý khách hàng điền thông tin bên dưới để nhận tư vấn chi tiết các
            dòng sản phẩm đặc biệt tại dự án Blanca City by Sun Group.`}
          </Box>
          <Box className="w-full">
            <FormConsultation
              layout="grid"
              isInputEmail={false}
              textBtn={"NHẬN THÔNG TIN"}
              btnClassName="!flex-1 !w-[193px] !h-[36px] !font-[800]"
            />
          </Box>
          <Stack
            flexDirection="row"
            sx={{ marginTop: "40px", color: "#f5b1bf" }}
          >
            <Link href="tel:+0939374739" className="ml-[6px] flex gap-x-1 ">
              <Box className="font-bold">HOTLINE: </Box>
              <strong className="font-extrabold">0939 37 4739</strong>
            </Link>
          </Stack>
        </Container>
      </Stack>
    </Box>
  );
};
