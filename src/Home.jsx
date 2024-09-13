/* eslint-disable jsx-a11y/alt-text */
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import Product from "./Global/Product";
import furniture from "./Data.json";
export default function Home() {
  function OurProducts() {
    return furniture.slice(0, 5).map((el) => (
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
      <Box position="relative">
        <img
          alt=""
          src="https://th.bing.com/th/id/R.a2fd0ffad14d3f479eedeed08e19d14d?rik=YjL%2ffZ8gmTztbQ&pid=ImgRaw&r=0"
          style={{ width: "100%", height: "600px", marginTop: "65px" }}
        />
        <Box
          position="absolute"
          top="50%"
          right="20px"
          width="450px"
          backgroundColor="#FFF3E3"
          py="10px"
          sx={{ transform: "translateY(-50%)" }}
        >
          <Container>
            <Typography variant="p">New Arrival</Typography>
            <Typography
              color="#B88E2F"
              fontWeight="bold"
              variant="h4"
              width="250px"
              lineHeight="40px"
              my="3px"
            >
              Discover Our New Collection
            </Typography>
            <Typography variant="p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur perferendis .
            </Typography>
            <Typography>
              <Button
                sx={{ marginTop: "20px", backgroundColor: "#B88E2F" }}
                variant="contained"
              >
                BUY NOW
              </Button>
            </Typography>
          </Container>
        </Box>
      </Box>
      <Container>
        <Box textAlign={"center"} marginTop="30px">
          <Typography variant="h5" color="black" fontWeight="Bold">
            Browse The Range
          </Typography>
          <Typography variant="p" color={"black"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Typography>
        </Box>
        <Grid container spacing={2} marginTop={"30px"}>
          <Grid item xs={4} textAlign={"center"}>
            <img
              width="100%"
              height="300px"
              style={{ borderRadius: "10px", marginBottom: "10px" }}
              src="https://d9dvmj2a7k2dc.cloudfront.net/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/m/cm3538t_1.jpg"
            />
            <Typography variant="p" color="black" fontWeight={"bold"}>
              Dining
            </Typography>
          </Grid>
          <Grid item xs={4} textAlign={"center"}>
            <img
              width="100%"
              height="300px"
              style={{ borderRadius: "10px", marginBottom: "10px" }}
              src="https://th.bing.com/th/id/R.be2a04278c20ac7f0c4bedbefab906b6?rik=NXChu9fYa6xGWw&pid=ImgRaw&r=0"
            />
            <Typography variant="p" color="black" fontWeight={"bold"}>
              Living
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box textAlign={"center"}>
              <img
                width="100%"
                height="300px"
                style={{ borderRadius: "10px", marginBottom: "10px" }}
                src="https://th.bing.com/th/id/R.08ee79eda9e3d5c4b3d047419b420780?rik=FeJQ6qyAj5ff4A&pid=ImgRaw&r=0"
              />
              <Typography
                maxWidth={"250px"}
                variant="p"
                color="black"
                fontWeight={"bold"}
              >
                Bedroom
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Typography
            variant="h5"
            color="black"
            textAlign={"center"}
            marginTop={"30px"}
            marginBottom={"30px"}
            fontWeight={"bold"}
          >
            Our Products
          </Typography>
        </Box>
        <Grid container spacing={6}>
          <OurProducts />
        </Grid>
        <Typography textAlign={"center"}>
          <Button
            sx={{
              color: "#B88E2F",
              borderColor: "#B88E2F",
              marginTop: "30px",
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
        <Box mt="30px" textAlign={"center"}>
          <Typography variant="p" fontWeight={"bold"}>
            share your setup with
          </Typography>
          <Typography mt="5px" variant="h4" fontWeight={"bold"}>
            #FuniroFurniture
          </Typography>
        </Box>
        <Box>
          <img
            style={{ width: "90%", marginLeft: "5%", marginTop: "30px" }}
            src="https://th.bing.com/th/id/R.08ee79eda9e3d5c4b3d047419b420780?rik=FeJQ6qyAj5ff4A&pid=ImgRaw&r=0"
          />
        </Box>
      </Container>
    </>
  );
}
