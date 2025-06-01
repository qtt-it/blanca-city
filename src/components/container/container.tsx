"use client";
import { clsx } from "clsx";

type ContainerProps = {
  className?: string;
  isDefaultPadding?: boolean;
  children: React.ReactNode;
  style?: Object;
};
const Container = ({
  children,
  className,
  isDefaultPadding = true,
  style,
}: ContainerProps) => {
  return (
    <div
      style={style}
      className={clsx(
        `w-full mx-auto 2xl:w-[1320px] `,
        isDefaultPadding ? `px-4 lg:px-[36px] xl:px-0 xl:py-[60px] lg:py-12 ` : "",
        className,
        "pt-[60px] pb-[60px] md:pb-[100px]"
      )}
    >
      {children}
    </div>
  );
};

export default Container;
