"use client";
import React, { useState, useRef, useEffect } from "react";
// import Slider from "react-slick";
import IconButton from "@mui/material/IconButton";
import {
  PlayArrow,
  ChevronLeft,
  ChevronRight,
  Close,
} from "@mui/icons-material";
import { Box, Modal } from "@mui/material";
// import Container from "../container/container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import Container from "./container/container";

interface VideoI {
  title: string;
  description: string;
  src: string;
  thumbnail: string;
}

interface VideoSliderProps {
  videos: VideoI[];
  isButton?: boolean;
}

const PrevArrow: React.FC<any> = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    className="!absolute left-2 top-[calc(50%-60px)]  !bg-white bg-opacity-70 hover:bg-opacity-100 z-10"
  >
    <ChevronLeft />
  </IconButton>
);

const NextArrow: React.FC<any> = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    className="!absolute right-2 top-[calc(50%-60px)]  !bg-white bg-opacity-70 hover:bg-opacity-100 z-10"
  >
    <ChevronRight />
  </IconButton>
);

const VideoSlider: React.FC<VideoSliderProps> = ({
  videos,
  isButton = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // open modal for a given slide index
  const handlePlay = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // ensure modal closes whenever we move slides
  useEffect(() => {
    handleCloseModal();
  }, [currentIndex]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box className="bg-[#0a254b]">
      <Container className="w-full !pt-[20px] mx-auto">
        {/* <Slider {...settings}> */}
        {[videos[0]]?.map((video: VideoI, idx: number) => (
          <div
            key={idx}
            className={clsx(
              isButton ? "max-h-[850px]" : "max-h-[750px]",
              "px-0 w-full  h-auto mx-auto md:px-1"
            )}
          >
            <div className="relative !h-full !w-full group rounded-lg overflow-hidden ">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full max-h-[750px] object-cover"
              />
              <div className="absolute inset-0  flex items-center justify-center bg-black/20 opacity-100 lg:opacity-100 group-hover:opacity-100 transition">
                <Box className="w-[68px] h-[68px] duration-500 animationScale rounded-full ">
                  <IconButton
                    onClick={() => handlePlay(idx)}
                    className="bg-opacity-70 w-16 h-16 scale-[1.2] md:scale-[1.8] hover:bg-opacity-100 opacity-100"
                  >
                    {/* <PlayArrow style={{ fill: "#fff" }} /> */}
                    <img
                      className="w-full h-full"
                      src="https://w.ladicdn.com/s450x450/65b08709018a1b00116ea9e8/asset-2-20250119031357-zve_4.png"
                    />
                  </IconButton>
                </Box>
              </div>
            </div>
            <div className="mt-3 text-center">
              <h3 className="text-lg md:px-1 text-[#f3ba5e] lg:px-2 font-bold">
                {video?.description}
              </h3>
              {/* {isButton && (
                <div className="bg-[#0B3050] cursor-pointer border border-solid border-white mt-7 mx-auto py-2 px-[30px] text-white uppercase w-max">
                  tìm hiểu ngay
                </div>
              )} */}
            </div>
          </div>
        ))}
        {/* </Slider> */}

        <Modal
          open={isModalOpen}
          onClose={handleCloseModal}
          className="flex items-center justify-center p-4 w-[100vw] overflow-hidden"
          closeAfterTransition
          BackdropProps={{ className: "bg-black/50" }}
        >
          <div className="relative w-[90%] lg:w-[70%] h-[80vh] xl:w-[60%] max-w-[630px] bg-white rounded-lg overflow-hidden">
            <Box
              onClick={handleCloseModal}
              className="absolute top-1 h-fit !right-0 bg-opacity-70 hover:bg-opacity-100 z-10"
            >
              <IconButton>
                <Close />
              </IconButton>
            </Box>
            <iframe
              src={videos[currentIndex].src}
              // src="https://www.youtube.com/embed/HjKY9iFKVEA"
              // src={`https://drive.google.com/file/d/${videos[currentIndex].src}/preview`}
              className="w-full h-full object-contain"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </Modal>
      </Container>
    </Box>
  );
};

export default VideoSlider;
