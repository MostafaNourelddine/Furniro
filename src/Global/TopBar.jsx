/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCart from "./ShoppingCart";
export default function TopBar() {
  const [cart, setCart] = useState("ShoppingOff");
  function handleCart() {
    const val = cart === "ShoppingOff" ? "ShoppingOn" : "ShoppingOff";
    setCart(val);
  }
  console.log(cart);
  return (
    <Box>
      <ShoppingCart shopping={cart} />
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "white", Color: "Black" }}
      >
        <Toolbar sx={{ mx: 2 }}>
          <Typography
            variant="h6"
            flexGrow={1}
            sx={{
              color: "black",
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            Furniro
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link
              to="/home"
              underline="none"
              style={{
                color: "Black",
                cursor: "pointer",
                margin: "0 20px",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              to="/shop"
              underline="none"
              style={{
                margin: "0 20px",

                color: "Black",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Shop
            </Link>
            <Link
              underline="none"
              style={{
                margin: "0 20px",
                color: "Black",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              About
            </Link>
            <Link
              underline="none"
              style={{
                margin: "0 20px",

                color: "Black",
                cursor: "pointer",
                textDecoration: "none",
              }}
              to="/contact"
            >
              Contact
            </Link>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <IconButton sx={{ mx: 2 }}>
              <PersonOutlineIcon sx={{ color: "Black" }} />
            </IconButton>
            <IconButton sx={{ mx: 2 }}>
              <SearchIcon sx={{ color: "Black" }} />
            </IconButton>
            <IconButton sx={{ mx: 2 }}>
              <FavoriteBorderIcon sx={{ color: "Black" }} />
            </IconButton>
            <IconButton sx={{ mx: 2 }}>
              <ShoppingCartCheckoutIcon
                sx={{ color: "Black" }}
                onClick={handleCart}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
