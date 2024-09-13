/* eslint-disable no-unused-vars */
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CardMedia,
  Avatar,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import furniture from "../Data.json";
import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export default function Product(props) {
  const [Hover, setHover] = React.useState(false);
  const avatarColor = props.avatar === "new" ? "#2EC1AC" : "#E97171";
  const avatarDisplay = props.avatar === "None" ? "none" : "";
  const Navigate = useNavigate();

  function GoToCart() {
    console.log(props.price); // Check if id is defined
    Navigate("/addtocart", {
      state: {
        price: props.price,
        id: props.id,
        name: props.name,
        image: props.image,
        description: props.description,
        category: props.category,
      },
    });
  }
  return (
    <Card
      sx={{ position: "relative" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ backgroundColor: Hover ? "rgba(255, 255, 255, 0.1)" : "" }}
      position="relative"
    >
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "50%",
          textAlign: "center",
          transform: "translate(-50%, -50%)",
          display: Hover ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <Button
          onClick={GoToCart}
          sx={{
            backgroundColor: "white",
            color: "#B88E2F",
            display: "block",
            // position: "relative",
            // left: "50%",
            // transform: "translateX(-50%)",
          }}
          variant="contained"
        >
          Add To Cart
        </Button>
        <Box sx={{ display: "flex" }}>
          <IconButton>
            <ShareIcon sx={{ color: "white", fontSize: "16px" }} />
            <Typography fontSize={"16px"} variant="p" color="white">
              Share
            </Typography>
          </IconButton>
          <IconButton>
            <CompareArrowsIcon sx={{ color: "white", fontSize: "16px" }} />
            <Typography fontSize={"16px"} variant="p" color="white">
              Compare
            </Typography>
          </IconButton>
          <IconButton>
            <FavoriteBorderIcon sx={{ color: "white", fontSize: "16px" }} />
            <Typography fontSize={"16px"} variant="p" color="white">
              Like
            </Typography>
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component={"img"}
        alt=""
        height="200px"
        image={props.image}
        sx={{
          filter: Hover ? "grayscale(1000%)" : "none",
        }}
      />
      <Avatar
        sx={{
          display: avatarDisplay,
          bgcolor: avatarColor,
          position: "absolute",
          top: "10px",
          right: "10px",
          fontSize: "14px",
        }}
      >
        {props.avatar}
      </Avatar>

      <CardContent>
        <Typography variant="h6" fontWeight={"bold"}>
          {props.name}
        </Typography>
        <Typography variant="p" color="#898989">
          {props.category}
        </Typography>
        <Typography variant="h6" fontWeight={"bold"}>
          {props.price}$
        </Typography>
      </CardContent>
    </Card>
  );
}
