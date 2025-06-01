import React from "react";

interface BannerProps {
  img: string; // Desktop
  imgTablet: string; // Tablet
  imgMb: string; // Mobile
  alt?: string;
}

const BannerComponent: React.FC<BannerProps> = ({
  img,
  imgTablet,
  imgMb,
  alt = "banner",
}) => {
  return (
    <picture className="!w-full !max-w-[1920px]">
      <source className="w-full" srcSet={imgMb} media="(max-width: 639px)" />
      <source
        className="w-full"
        srcSet={imgTablet}
        media="(max-width: 1023px)"
      />
      <img src={img} alt={alt} className="w-full h-auto object-cover" />
    </picture>
  );
};

export default BannerComponent;
