import { ImageComponent } from "@/components/commons/ImageComponent";
import Container from "@/components/container/container";
import { FormConsultation } from "@/components/form/FormConsultation";
import { Box, Stack } from "@mui/material";
import React from "react";

export const ConsultingSection: React.FC = () => {
  return (
    <React.Fragment>
      <Stack
        sx={{
          alignItems: "center",
          paddingY: "56px",
          backgroundImage: `url("/ReceiveInfo/CTA.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container className="flex w-full lg:py-[80px] flex-col items-center">
          <Box
            sx={{
              textAlign: "center",
              fontSize: "16pt",
              fontFamily: "Newsreader",
              fontWeight: 500,
              color: "#fff",
              marginTop: "18px",
              marginBottom: "18px",
              width: "100%",
            }}
          >
            Tư vấn tiềm năng đô thị biển Blanca City by Sun Group.
          </Box>
          <Box className="w-full">
            <FormConsultation layout="grid" 
             btnClassName="!flex-1 !w-[193px] !h-[36px] !font-[600]"
            />
          </Box>
          <Stack
            flexDirection="row"
            sx={{ marginTop: "40px", color: "#f5b1bf" }}
          >
            <Box>HOTLINE: </Box>
            <Box sx={{ marginLeft: "6px", fontWeight: 700 }}>0939 37 4739</Box>
          </Stack>
        </Container>
      </Stack>
    </React.Fragment>
  );
};
