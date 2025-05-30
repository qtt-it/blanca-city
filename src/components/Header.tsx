"use client";

import {
  Box,
  AppBar,
  Toolbar,
  Container,
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

interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { label: "Vị trí", id: "location" },
    { label: "Tổng quan", id: "overview" },
    { label: "Điểm Nhấn", id: "highlights" },
    { label: "Sản phẩm", id: "products" },
    { label: "Thiết kế", id: "design" },
    { label: "Sun Group", id: "sungroup" },
  ];

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
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? "white" : "transparent",
          boxShadow: scrolled ? 1 : 0,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
              <Box
                sx={{
                  bgcolor: "red",
                  width: 150,
                  height: 60,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                LOGO
              </Box>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {menuItems.map((item) => (
                <Button
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

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: "none" },
                color: scrolled ? "primary.main" : "white",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            p: 2,
            bgcolor: "primary.main",
            color: "white",
          }}
        >
          BLANCA CITY
        </Box>
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
      </Drawer>

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
