import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
export default function ShoppingCart(props) {
  return (
    <Box
      sx={{
        width: "300px",
        position: "absolute",
        right: "0",
        backgroundColor: "white",
        top: "60px",
        padding: "20px",
        zIndex: "10",
        display: props.shopping === "ShoppingOff" ? "none" : "block",
      }}
    >
      <Box
        borderBottom={"1px solid gray"}
        paddingBottom="20px"
        display="flex"
        mb="80px"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h5" fontWeight={"bold"} textAlign={"center"}>
          Shopping Cart
        </Typography>
      </Box>
      <Box display={"flex"} textAlign={"center"} position="relative">
        <img
          width="100px"
          style={{ borderRadius: "10px", marginRight: "50px" }}
          src="https://th.bing.com/th/id/R.a2fd0ffad14d3f479eedeed08e19d14d?rik=YjL%2ffZ8gmTztbQ&pid=ImgRaw&r=0"
        ></img>
        <Box>
          <Typography mb={"10px"} variant="h6" fontWeight={"bold"}>
            Sofa
          </Typography>
          <Typography>1*10000$</Typography>
        </Box>
        <Typography
          style={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <ClearIcon style={{ cursor: "pointer" }} />
        </Typography>
      </Box>
      <Box>
        <Box
          display={"flex"}
          textAlign={"center"}
          position="relative"
          mt="20px"
        >
          <img
            width="100px"
            style={{ borderRadius: "10px", marginRight: "50px" }}
            src="https://th.bing.com/th/id/R.a2fd0ffad14d3f479eedeed08e19d14d?rik=YjL%2ffZ8gmTztbQ&pid=ImgRaw&r=0"
          ></img>
          <Box>
            <Typography mb={"10px"} variant="h6" fontWeight={"bold"}>
              Sofa
            </Typography>
            <Typography>1*10000$</Typography>
          </Box>
          <Typography
            style={{
              position: "absolute",
              right: "0",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <ClearIcon style={{ cursor: "pointer" }} />
          </Typography>
        </Box>
        <Box
          style={{}}
          borderBottom={"1px solid grey"}
          mt={"100px"}
          display="flex"
          justifyContent={"space-around"}
        >
          <Typography> Subtotal</Typography>
          <Typography> 2000$</Typography>
        </Box>
        <Typography my={"15px"} textAlign={"center"}>
          <Button variant="contained">
            <Link
              to="/Billing"
              style={{ textDecoration: "none", color: "white" }}
            >
              Checkouut
            </Link>
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}
