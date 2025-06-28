"use client";

import React, { useState } from "react";
import { toString } from "lodash";
import Container from "./container/container";

const HeaderForm: React.FC = () => {
  const [open, setOpen] = useState(false);
  const listNav = [
    {
      name: "BẤT ĐỘNG SẢN VIỆT NAM",
      url: "https://dongtayland.vn/du-an/",
    },
    {
      name: "BẤT ĐỘNG SẢn ÚC",
      url: "https://australia.dongtayland.vn/?_gl=1%2Axvul32%2A_gcl_au%2AODk3NzczNTI2LjE3NDQ5NTgyMzg.%2A_ga%2AMzgxNDM4NjAzLjE3NDQ5NTgyMzg.%2A_ga_BDP8GPRCJY%2AczE3NDYyNjMyNjQkbzI5JGcxJHQxNzQ2MjY1NzYxJGo0MSRsMCRoMA..",
    },
    {
      name: "TIN tức",
      url: "https://dongtayland.vn/tin-tuc/",
    },
    {
      name: "công cụ",
      icon: (
        <div className="w-2 h-2">
          <img src="/ic_down.png" className="w-full ml-1 h-full" />
        </div>
      ),
      subTitle: [
        {
          name: "360 panorama",
          url: "https://dongtayland.vn/360/",
        },
        {
          name: "tạo thiệp mời",
          url: "https://dongtayland.vn/invitation/",
        },
        {
          name: "video",
          url: "https://www.youtube.com/c/%C4%90%C3%B4ngT%C3%A2yLandChannel/playlists",
        },
        {
          name: "tài liệu",
          url: "https://tailieu.dongtayland.vn/?_gl=1%2A71hwua%2A_gcl_au%2AODk3NzczNTI2LjE3NDQ5NTgyMzg.%2A_ga%2AMzgxNDM4NjAzLjE3NDQ5NTgyMzg.%2A_ga_BDP8GPRCJY%2AczE3NDYyNjMyNjQkbzI5JGcxJHQxNzQ2MjY1NzczJGoyOSRsMCRoMA..",
        },
      ],
    },
    {
      name: "tuyển dụng",
      url: "https://dongtayland.vn/tuyen-dung/",
    },
    {
      name: "liên hệ",
      url: "https://dongtayland.vn/du-an/stc-long-thanh/#contact",
    },
    {
      name: "cổ đông",
      url: "https://dongtayland.vn/quan-he-co-dong/",
    },
    {
      name: <img src="/ic-search.png" alt="search" className="w-6 h-6 " />,
    },
  ];
  return (
    <>
      <div className="w-full mx-auto z-10 bg-transparent  top-0 left-0">
        <Container className="!py-0 xl:bg-[rgba(255,255,255,0.3)] xl:shadow-[0_0_10px_0_rgba(0,0,0,0.3)] xl:border-[2px_solid_rgba(255,255,255,0.2)]">
          <div
            style={
              {
                // transform: "translateX-[-50%]",
                // boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
                // border: "2px solid rgba(255,255,255,0.2)",
              }
            }
            className="px-4 lg:px-[30px] align-center xl:bg-transparent bg-[rgba(255,255,255,0.3)] py-2 lg:py-[4px] w-full flex justify-between "
          >
            <div className="w-[131px] h-[60px]">
              <img src="/logo_common.webp" alt="dong tay land" />
            </div>

            {/* <div className="hidden !lg:flex align-center lg:flex-row">
              {listNav.map((nav, index) => {
                return (
                  <div key={toString(index)} className="">
                    <p
                      style={{
                        textShadow: "0px 1px 3px rgba(0,0,0,0.4)",
                      }}
                      className="text-[#000203] my-0 !text-[14px] uppercase !py-4 !px-2"
                    >
                      {nav.name}
                    </p>
                  </div>
                );
              })}
            </div> */}

            {/* <div className="lg:hidden flex  justify-center items-center">
              <div
                style={{
                  color: "rgba(0, 0, 0, .55)",
                  borderColor: "rgba(0, 0, 0, .1)",
                }}
                className="md:w-8  md:h-8 w-[56px] overflow-hidden h-[40px] border border-solid  justify-center flex items-center"
                onClick={() => setOpen(!open)}
              >
                <img
                  src="/ic_nav.png"
                  alt="dong tay land"
                  className="w-6 h-6"
                />
              </div>
            </div>
            <div className="hidden lg:flex">
              {listNav.map((nav, index) => {
                const key = index.toString();
                const commonClasses =
                  "group flex relative items-center cursor-pointer !py-4 !px-2";
                const textClasses =
                  "text-[#000203] hover:text-[#062347] my-0 text-[13px] !xl:text-[14.5px] uppercase";

                const SubMenu = nav?.subTitle?.map((sub) => (
                  <Link
                    href={sub.url}
                    key={sub.name}
                    target="_blank"
                    className="font-[500] h-fit whitespace-nowrap w-full hover:bg-[#d3d3d3] py-1 hover:text-[#062347]  px-4 text-[#000203] my-0 !text-[14.5px] uppercase"
                  >
                    {sub.name}
                  </Link>
                ));

                const InnerContent = (
                  <>
                    <p
                      style={{ textShadow: "0px 1px 3px rgba(0,0,0,0.4)" }}
                      className={textClasses}
                    >
                      {nav.name}
                    </p>
                    {nav.icon && nav.icon}
                    <div className="absolute flex flex-col bg-white left-0 top-full shadow-md z-[11] opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {SubMenu}
                    </div>
                  </>
                );

                return nav.icon ? (
                  <div key={key} className={commonClasses}>
                    {InnerContent}
                  </div>
                ) : (
                  <Link
                    href={nav.url || ""}
                    key={key}
                    className={commonClasses}
                  >
                    {InnerContent}
                  </Link>
                );
              })}
            </div> */}
          </div>
          <div
            className="w-full bg-[rgba(187,106,18,0.8)] transition-all duration-1000 ease-in-out  overflow-hidden px-[30px]"
            style={{
              maxHeight: open ? "1100px" : 0,
            }}
          >
            <div
              style={
                {
                }
              }
            >
              {listNav.map((nav, index) => {
                return (
                  <div key={toString(index)} className="w-full !border-none">
                    <p
                      style={{
                        textShadow: "0px 1px 3px rgba(0,0,0,0.4)",
                      }}
                      className="text-[#000203] !border-none font-[500] !text-left my-0 !text-[14px] uppercase !py-2"
                    >
                      {nav.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
      {/* //   </Toolbar> */}
      {/* // </AppBar> */}
    </>
  );
};

export default HeaderForm;
