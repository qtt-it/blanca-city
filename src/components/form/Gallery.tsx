import { Box } from "@mui/material";
import clsx from "clsx";

const Gallery = ({
  images,
  closeSlider,
  isOpen,
  setCurrentImageIndex,
  currentImageIndex,
  openSlider,
}: {
  images: string[];
  closeSlider: () => void;
  isOpen: boolean;
  currentImageIndex: number;
  setCurrentImageIndex: (index: number) => void;
  openSlider: (index: number) => void;
}) => {
  const classNameWidth = "xl:w-[640px]  aspect-[1/1]";
  return (
    <Box
      onClick={closeSlider}
      className={clsx(
        isOpen ? "opacity-[100%] visible" : "opacity-0  invisible",
        `fixed inset-0 z-10 duration-500 bg-[rgba(0,0,0,0.8)] bg-opacity-50 flex justify-center items-center z-1`
      )}
    >
      <Box className="relative w-full px-3">
        <Box className="relative overflow-hidden rounded-xs shadow-lg flex flex-col justify-center">
          <Box
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="relative w-full xl:w-[640px] z-0 mx-auto xl:h-[588px]"
          >
            {images?.map((image, index) => (
              <Box
                key={index * 3}
                className={`w-full h-full absolute top-0 left-0 z-10  duration-500
                
                ${currentImageIndex == index ? "opacity-[100%]" : "opacity-0"}`}
              >
                <img
                  src={image}
                  alt={`image-${index}`}
                  className="cursor-pointer w-full h-full"
                  onClick={() => openSlider(index)}
                />
              </Box>
            ))}
            {/* Navigation */}
            <Box className="absolute z-10 inset-y-0 left-0 flex items-center justify-start p-2 cursor-pointer text-white">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(
                    (currentImageIndex - 1 + images.length) % images.length
                  );
                }}
                className="shadow-lg rotate-360 w-10 h-10 !md:w-6 !md:h-6 bg-opacity-50  rounded-full"
              >
                <img
                  className="w-full h-full"
                  src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e"
                  alt="slider_next"
                />
              </button>
            </Box>
            <Box
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((currentImageIndex + 1) % images.length);
              }}
              className="absolute z-10 w-1/5 inset-y-0 right-0 flex items-center justify-end h-full cursor-pointer text-white"
            >
              <button className="shadow-lg rotate-180 w-10 h-10 !md:w-6 !md:h-6 bg-opacity-50  rounded-full">
                <img
                  className="w-full h-full "
                  src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e"
                  alt="slider_next"
                />
              </button>
            </Box>
          </Box>
          <Box className="flex xl:w-[640px] w-full items-center mx-auto mt-2 justify-between">
            <p className="text-[#ddd] text-sm">{`Image ${
              currentImageIndex + 1
            } of ${images.length}`}</p>
            <Box
              onClick={closeSlider}
              className=" opacity-70 hover:opacity-100 w-6 h-6 right-[0px] z-10 text-white text-xl"
            >
              <img
                src={"/ic_close_2.png"}
                alt={`close`}
                className="cursor-pointer w-full h-full"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Gallery;
