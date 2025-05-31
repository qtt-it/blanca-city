"use client";
import { Box } from "@mui/material";
import { isEmpty } from "lodash";

export const ImageComponent = ({
  img,
  imbMb,
}: {
  img: string;
  imbMb?: string;
}) => {
  let isMobile = false;
  if (typeof window !== "undefined" && window.innerWidth < 475) {
    isMobile = true;
  }

  return (
    <Box>
      <div className="w-full max-w-[1920px]  mx-auto">
        <img
          className="w-full h-full"
          src={`${isMobile && !isEmpty(imbMb) ? imbMb : img}`}
        />
      </div>
    </Box>
  );
};
