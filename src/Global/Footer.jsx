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

export default function Footer() {
  return (
    <>
      <Box
        mt="30px"
        borderTop="1px solid black"
        borderBottom="1px solid black"
        display="flex"
        padding="30px 0"
      >
        <Box>
          <Typography
            mb="30px"
            fontSize={"20px"}
            fontWeight={"bold"}
            variant="body1"
          >
            Funiro.
          </Typography>
          <Typography color="#9F9F9F" varinat="body2">
            400 university Drive suite 200 coral
          </Typography>
          <Typography color="#9F9F9F" varinat="body2">
            Gables,{" "}
          </Typography>
          <Typography color="#9F9F9F" varinat="body2">
            Fl 33134 USA{" "}
          </Typography>
        </Box>
        <Box ml="80px" textAlign={"center"}>
          <Typography
            mb="30px"
            fontWeight={"bold"}
            variant="body1"
            color="#9F9F9F"
          >
            Links{" "}
          </Typography>
          <Typography mb="25px" variant="body2">
            <Link
              to="/home"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              Home
            </Link>
          </Typography>
          <Typography variant="body2" mb="25px">
            <Link
              to="/shop"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              Shop
            </Link>
          </Typography>
          <Typography variant="body2" mb="25px">
            <Link style={{ textDecoration: "none", color: "black" }}>
              About
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link style={{ textDecoration: "none", color: "black" }}>
              Contact
            </Link>
          </Typography>
        </Box>
        <Box ml="80px" textAlign={"center"}>
          <Typography
            mb="30px"
            fontWeight={"bold"}
            variant="body1"
            color="#9F9F9F"
          >
            Help{" "}
          </Typography>
          <Typography mb="25px" variant="body2">
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              Payment Options
            </Link>
          </Typography>
          <Typography variant="body2" mb="25px">
            <Link style={{ textDecoration: "none", color: "black" }}>
              Returns
            </Link>
          </Typography>
          <Typography variant="body2" mb="25px">
            <Link style={{ textDecoration: "none", color: "black" }}>
              Privacy policies
            </Link>
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" mt="30px" paddingBottom={"100px"}>
        2023 furino. All rights reserved
      </Typography>
    </>
  );
}
