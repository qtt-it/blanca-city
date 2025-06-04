import { Button } from "@mui/material";
import clsx from "clsx";
import React from "react";

interface IButtonComponentProps {
  children: any;
  className?: string
}

export const ButtonComponent: React.FC<IButtonComponentProps> = ({
  children,
  className
}) => {
  return (
    <React.Fragment>
      <Button
      className={clsx(
        className
      )}
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
