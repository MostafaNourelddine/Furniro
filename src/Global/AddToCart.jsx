/* eslint-disable no-unused-vars */
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Container,
  Box,
  IconButton,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import Product from "./Product";
import furniture from "../Data.json";
import { useLocation } from "react-router-dom";
import { useState } from "react";
export default function AddToCart() {
  const location = useLocation();
  const { price, id, name, image, description, category } =
    location.state || {}; // Changed here from | to ||
  console.log(location.state); // For debugging
  console.log(id); // For debugging
  const [showValue, setShowValue] = useState(1);
  function handeShowValue(event) {
    setShowValue(event.target.value);
  }
  function OurProducts() {
    return furniture.slice(0, 4).map((el) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={el.name}>
        {" "}
        {/* Assuming el.name is unique */}
        <Product
          price={el.price}
          name={el.name}
          category={el.category}
          image={el.imageUrl}
          description={el.description}
          avatar={
            el.state !== "" // Use strict inequality
              ? el.state
              : el.discount === 0
              ? "None"
              : `-${el.discount}%`
          }
        />
      </Grid>
    ));
  }
  return (
    <>
      <Box
        mt="65px"
        display="flex"
        bgcolor={"#F9F1E7"}
        style={{ padding: "20px 10px" }}
      >
        <Typography variant="Body1" color="#9F9F9F" mx="25px">
          Home
        </Typography>
        <Typography>
          <ArrowForwardIosIcon />
        </Typography>
        <Typography variant="Body1" color="#9F9F9F" mx="25px">
          Shop
        </Typography>
        <Typography mx="4">
          <ArrowForwardIosIcon />
        </Typography>
        <Typography mx="25px" variant="Body1">
          {name}
        </Typography>
      </Box>
      <Container>
        <Box mt="40px" px="30px" display={"flex"}>
          <Box>
            <img src={image} width={"400px"}></img>
          </Box>
          <Box mx="120px" textAlign={"left"}>
            <Typography variant="h3">{name}</Typography>
            <Typography variant="h4" color="#9F9F9F">
              {price}$$
            </Typography>
            <Typography my="12px" variant="body1">
              {category}
            </Typography>
            <Box display={"flex"} justifyContent={"space-around "}>
              <TextField
                value={showValue}
                onChange={handeShowValue}
                type="number"
                InputProps={{ inputProps: { min: 1, max: 100 } }}
                sx={{ width: 75, height: 40 }} // Updated for visual alignment
                size="small"
                variant="outlined"
              />
              <Button
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
            </Box>
          </Box>
        </Box>
        <Box my={"60px"}>
          <Typography variant="h6" textAlign={"center"}>
            Description
          </Typography>
          <Typography variant="body2" my="25px">
            {description}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          borderBottom={"1px solid black"}
          paddingBottom={"100px"}
        >
          <img src={image} width={"45%"}></img>
          <img src={image} width={"45%%"}></img>
        </Box>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign={"center"}
          mt="150px"
        >
          Related Prooducts
        </Typography>
        <Grid container spacing={6} mt="10px">
          <OurProducts />
        </Grid>
        <Typography textAlign={"center"}>
          {" "}
          <Button
            sx={{
              color: "#B88E2F",
              borderColor: "#B88E2F",
              marginTop: "30px",
              textAlign: "center",
            }}
            variant="outlined"
          >
            {" "}
            <Link
              style={{ textDecoration: "none", color: "#B88E2F" }}
              to="/shop"
            >
              Show More
            </Link>
          </Button>
        </Typography>
      </Container>
    </>
  );
}
