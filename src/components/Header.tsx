"use client";

import {
  Box,
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Container from "./container/container";
import Link from "next/link";
// import Container from "./container/container";
interface HeaderProps {
  // onNavigate: (section: string) => void;
}

const Header = ({}: // onNavigate
HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const menuItems = [
    { label: "Vị trí", id: "location" },
    { label: "Tổng quan", id: "overview" },
    { label: "Điểm Nhấn", id: "highlights" },
    { label: "Sản phẩm", id: "products" },
    { label: "Thiết kế", id: "design" },
    { label: "Sun Group", id: "sungroup" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          // Khi người dùng cuộn qua vị trí đầu trang
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  console.log("isFixed", isFixed);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const handleMenuClick = (id: string) => {
  //   // onNavigate(id);
  //   if (mobileOpen) {
  //     setMobileOpen(false);
  //   }
  // };

  return (
    <>
      <div
        id="header"
        style={{
          position: isFixed ? "sticky" : "relative",
          left: 0,
          top: 0,
        }}
        className={clsx(
          // isFixed ? "sticky" : "relative",
          "left-0 top-0 !w-full z-50 px-4 shadow-lg py-2 lg:py-0 duration-[300ms] ease-in-out !bg-white "
        )}
      >
        <Container className="!py-0 !max-w-full">
          <Toolbar disableGutters className="flex justify-between items-center">
            <Box
              className="!w-max"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box className="w-[103px] h-[60px] ">
                <img src="/logo-main.png" className="w-full h-full" />
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              {menuItems.map((item) => (
                <Button
                  style={
                    {
                      fontFamily: "Oswald",
                    } as any
                  }
                  className="!text-[#000203] !uppercase !text-[14.4px]"
                  key={item.id}
                  sx={{
                    color: scrolled ? "primary.main" : "white",
                    // mx: 1,
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "#0e3b7c",
                    },
                  }}
                >
                    <Link href={item.id}>{item.label}</Link>
                </Button>
              ))}
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: "none" },
                color: scrolled ? "primary.main" : "primary.main",
                border: "1px solid #eee",
                borderRadius: 0,
              }}
            >
              <img src="/hamb.svg" className="w-[56px] h-[40px]" />
            </IconButton>
          </Toolbar>
        </Container>
        <div
          className="w-full absolute top-[76px] left-0  bg-[rgba(255,255,255,1)] transition-all duration-250 ease-in-out  overflow-hidden "
          style={{
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
            // border: open ? "2px solid rgba(255,255,255,0.2)" : "",
            maxHeight: mobileOpen ? "1150px" : 0,
          }}
        >
          <div className="flex flex-col items-start pl-4">
            {menuItems.map((item) => (
              <Box
                key={item.label}
                style={{
                  fontFamily: "Oswald",
                }}
                className="!text-[#000203] p-2 !text-left !uppercase !text-[14.4px]"
                sx={{
                  color: scrolled ? "primary.main" : "white",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#0e3b7c",
                  },
                }}
              >
                <Link href={item.id}>{item.label}</Link>
              </Box>
            ))}
          </div>
        </div>
      </div>

      {/* <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      > */}
      {/* <Box
          sx={{
            bgcolor: "primary.main",
            color: "white",
            p: 1,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: 3,
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          0977 48 7777
        </Box> */}
      {/* <Box
          sx={{
            bgcolor: "secondary.main",
            color: "white",
            p: 1,
            borderRadius: "50%",
            width: 50,
            height: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: 3,
            "&:hover": {
              bgcolor: "secondary.dark",
            },
          }}
        >
          Chat
        </Box> */}
      {/* </Box> */}
    </>
  );
};

export default Header;
