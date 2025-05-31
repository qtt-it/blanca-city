import { Button } from "@mui/material";
import React from "react";

interface IButtonComponentProps {
  children: string;
}

export const ButtonComponent: React.FC<IButtonComponentProps> = ({
  children,
}) => {
  return (
    <React.Fragment>
      <Button
        type="submit"
        sx={{
          backgroundImage: "linear-gradient(90deg, #f293b3, #df658e)",
          borderColor: "#fff",
          color: "#fff",
          fontFamily: "manrope",
          fontWeight: 700,
        }}
      >
        {children}
      </Button>
    </React.Fragment>
  );
};
