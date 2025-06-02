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
interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
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
        if (window.scrollY > 650) {
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

  const handleMenuClick = (id: string) => {
    onNavigate(id);
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  return (
    <>
      <Box
        className={clsx(
          isFixed ? "fixed top-0 left-0" : "relative",
          "!w-full z-50 px-4 py-2 lg:py-0 duration-[300ms] ease-in-out !bg-white shadow-md"
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

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {menuItems.map((item) => (
                <Button
                  className="!text-[#000203] !uppercase !text-[14.4px]"
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  sx={{
                    color: scrolled ? "primary.main" : "white",
                    mx: 1,
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
            {mobileOpen ? (
              <>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    display: { sm: "none" },
                    color: scrolled ? "primary.main" : "primary.main",
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Box
                  onClick={handleDrawerToggle}
                  sx={{ display: { sm: "none" } }}
                >
                  {mobileOpen && (
                    <List>
                      {menuItems.map((item) => (
                        <ListItemButton
                          key={item.id}
                          onClick={() => handleMenuClick(item.id)}
                        >
                          <ListItemText primary={item.label} />
                        </ListItemButton>
                      ))}
                    </List>
                  )}
                </Box>
              </>
            ) : (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  display: { md: "none" },
                  color: scrolled ? "primary.main" : "primary.main",
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </Box>
      <Box
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
      >
        <Box
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
        </Box>
        <Box
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
        </Box>
      </Box>
    </>
  );
};

export default Header;
