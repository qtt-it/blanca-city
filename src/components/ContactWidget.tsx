import React from "react";
import { Button, Box } from "@mui/material";
// import { Oswald } from "next/font/google";

// const oswald = Oswald({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-oswald",
// });

export const ContactWidget: React.FC = () => {
  return (
    <Box
      style={{
        fontFamily: "Oswald",
      }}
      // className={oswald.variable}
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 2,
        zIndex: 50,
        fontFamily: "var(--font-oswald)",
      }}
    >
      <Box sx={{ position: "relative" }}></Box>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          sx={{
            height: 32,
            px: "15px",
            py: 0,
            backgroundColor: "#007bff",
            textTransform: "none",
            fontSize: 22,
            fontWeight: 400,
            fontFamily: "var(--font-oswald)",
            "&:hover": {
              backgroundColor: "#0066cc",
            },
          }}
        >
          <Box
            component="img"
            src="/ic_phone.png"
            alt="dong tay land"
            sx={{ width: 20, height: 20, mr: 1 }}
          />
          0977 48 7777
        </Button>

        {/* <Box
          component="img"
          src="/ic_mess.svg"
          alt="dong tay land"
          sx={{
            width: 60,
            height: 60,
            bgcolor: "#fff",
            borderRadius: "50%",
            position: "relative",
          }}
        /> */}
      </Box>
    </Box>
  );
};
