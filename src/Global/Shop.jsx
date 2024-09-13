import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Product from "./Product";
import furniture from "../Data.json";
import { useState, useEffect } from "react";
import ScreenLockLandscapeIcon from "@mui/icons-material/ScreenLockLandscape";
import AppsIcon from "@mui/icons-material/Apps";
import TuneIcon from "@mui/icons-material/Tune";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export default function Shop() {
  const [sortValue, setSortValue] = useState("");
  const [sortedProducts, setSortedProducts] = useState([...furniture]); // Initial state
  const [showValue, setShowValue] = useState(1);
  function handeShowValue(event) {
    setShowValue(event.target.value);
  }
  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };

  useEffect(() => {
    const parseDate = (dateString) => {
      const [day, month, year] = dateString.split("-");
      return new Date(year, month - 1, day); // JavaScript months are 0-indexed
    };
    let sorted = [...furniture];
    if (sortValue === "high") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortValue === "low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortValue === "newest") {
      sorted.sort((a, b) => parseDate(b.date) - parseDate(a.date));
    } else if (sortValue === "oldest") {
      sorted.sort((a, b) => parseDate(a.date) - parseDate(b.date));
    }
    setSortedProducts(sorted);
  }, [sortValue]);
  function OurProducts() {
    return sortedProducts.slice(0, showValue).map((el) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={el.name}>
        {" "}
        {/* Assuming el.name is unique */}
        <Product
          id={el.id}
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
      <Box mt="65px" position="relative">
        <img
          style={{ width: "100%", height: "300px", opacity: "0.3" }}
          src="https://th.bing.com/th/id/R.d88f85748a9be2db1472781512cc0696?rik=4BX%2bpA7HUzQsSw&riu=http%3a%2f%2fwww.ofiltd.ca%2fliving%2f5.jpg&ehk=isWLW9eX8VhJed4sn4aHngoGYyU%2feM5egKfBkta0Tc0%3d&risl=&pid=ImgRaw&r=0"
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          sx={{ transform: "translate(-50%,-50%)" }}
        >
          <Typography variant="h3">Shop</Typography>
          <Box display="flex" alignItems="center" gap={0.5}>
            <Typography variant="body1" fontWeight="bold">
              Home
            </Typography>
            <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
            <Typography variant="body1">Shop</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#F9F1E7",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Box display={"flex"} sx={{ padding: "20px" }}>
          <Typography
            variant="body1"
            display="flex"
            alignItems="center"
            gap={0.5}
            fontSize={"18px"}
          >
            <TuneIcon /> Filter
          </Typography>
          <AppsIcon sx={{ marginLeft: "20px" }} />
          <ScreenLockLandscapeIcon sx={{ marginLeft: "20px" }} />
          <Typography sx={{ marginLeft: "20px" }} variant="body1">
            Showing 1-{showValue} of {furniture.length} results
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding={1}
        >
          <Box display="flex" alignItems="center">
            <Typography variant="body1" component="div" marginRight={2}>
              Show
            </Typography>
            <TextField
              value={showValue}
              onChange={handeShowValue}
              type="number"
              InputProps={{ inputProps: { min: 1, max: furniture.length } }}
              sx={{ width: 75, height: 40 }} // Updated for visual alignment
              size="small"
              variant="outlined"
            />
          </Box>
          <Box>
            <FormControl sx={{ minWidth: 180, marginLeft: "20px" }}>
              {" "}
              {/* Adjusted for better control over width */}
              <InputLabel id="sort-by-label">Sort by</InputLabel>
              <Select
                labelId="sort-by-label"
                id="sort-by-select"
                value={sortValue}
                label="Sort by"
                onChange={handleSortChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="high">Price: Low to High</MenuItem>
                <MenuItem value="low">Price: High to Low</MenuItem>
                <MenuItem value="newest">Newest First</MenuItem>
                <MenuItem value="oldest">Oldest First</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Container sm sx={{ marginTop: "75px" }}>
        <Grid container spacing={6}>
          <OurProducts />
        </Grid>
      </Container>
    </>
  );
}
