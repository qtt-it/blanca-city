import { ImageComponent } from "@/components/commons/ImageComponent";
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
        <Box
          sx={{
            maxWidth: "924px",
            textAlign: "center",
            fontSize: "16pt",
            fontFamily: "Newsreader",
            fontWeight: 500,
            color: "#fff",
            marginTop: "18px",
            marginBottom: "18px",
          }}
        >
          Tư vấn tiềm năng đô thị biển Blanca City by Sun Group.
        </Box>
        <FormConsultation layout="grid" />
        <Stack flexDirection="row" sx={{ marginTop: "40px", color: "#f5b1bf" }}>
          <Box>HOTLINE: </Box>
          <Box sx={{ marginLeft: "6px", fontWeight: 700 }}>0977 48 7777</Box>
        </Stack>
      </Stack>
    </React.Fragment>
  );
};
