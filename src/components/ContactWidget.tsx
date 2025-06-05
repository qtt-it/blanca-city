import React from "react";
import { Button, Box } from "@mui/material";
import { Oswald } from "next/font/google";
import Link from "next/link";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const ContactWidget: React.FC = () => {
  return (
    <Box
      style={{
        fontFamily: "Oswald",
      }}
      className={oswald.variable}
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

      <Box sx={{ display: "flex", alignItems:"end",gap: 2 }}>
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
         0939 37 4739
        </Button>

        <Link
          href="https://zalo.me/0939374739"
          passHref
          target="_blank"
          className="w-[px] h-[50px]  rounded-lg  relative overflow-hidden"
        >
          <div className="absolute top-[2px] rounded-lg right-0 bottom-0 w-[50px] h-[42px] z-1 bg-opacity-50 bg-white">
            {/* Bạn có thể thêm nội dung vào div này nếu muốn */}
          </div>

          <img
            // src="/ic_zalo.png"
            src="/zalo-1.svg"
            // src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg"
            alt="dong tay land"
            className=" object-contain relative z-2 duration-500  hover:scale-[1.1 w-full h-full   relative"
          />
        </Link>
      </Box>
    </Box>
  );
};
