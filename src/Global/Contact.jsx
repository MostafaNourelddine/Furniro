import { Box, Typography, Button, Container, TextField } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Form, Link } from "react-router-dom";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HighQualityIcon from "@mui/icons-material/HighQuality";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
export default function Contact() {
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
          <Typography variant="h3">Contact</Typography>
          <Box
            display="flex"
            alignItems="center"
            gap={0.5}
            style={{
              position: "absolute",
              left: " 50%",
              transform: "translateX(-50%)",
            }}
          >
            <Typography variant="body1" fontWeight="bold">
              Home
            </Typography>
            <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
            <Typography variant="body1">Contact</Typography>
          </Box>
        </Box>
      </Box>
      <Container style={{ marginTop: "50px" }}>
        <Typography textAlign={"center"}>
          <Typography variant="h5" fontWeight={"bold"}>
            Get in Touch With Us
          </Typography>
          <Typography color="#9F9F9F" padding={"0px 150px"} mt="10px">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </Typography>
        </Typography>
        <Box
          marginTop={"60px"}
          display={"flex"}
          justifyContent={"space-around"}
        >
          <Box>
            <Box marginTop={"20px"} display={"flex"} maxWidth={"300px"}>
              <LocationOnIcon style={{ marginRight: "25px" }} />
              <Typography>
                <Typography fontSize={"20px"} fontWeight={"Bold"}>
                  Address
                </Typography>
                <Typography>
                  236 5th SE Avenue, New York NY10000, United States
                </Typography>
              </Typography>
            </Box>
            <Box marginTop={"20px"} display={"flex"} maxWidth={"300px"}>
              <LocalPhoneIcon style={{ marginRight: "25px" }} />
              <Typography>
                <Typography fontSize={"20px"} fontWeight={"Bold"}>
                  Phone
                </Typography>
                <Typography>Mobile: +(84) 546-6789</Typography>
                <Typography>Hotline: +(84) 456-6789 </Typography>
              </Typography>
            </Box>
            <Box marginTop={"20px"} display={"flex"} maxWidth={"300px"}>
              <AccessTimeIcon style={{ marginRight: "25px" }} />
              <Typography>
                <Typography fontSize={"20px"} fontWeight={"Bold"}>
                  Working Time
                </Typography>
                <Typography>Monday-Friday: 9:00 - 22:00</Typography>
                <Typography>Saturday-Sunday: 9:00 - 21:00 </Typography>
              </Typography>
            </Box>
          </Box>
          <Box>
            <TextField
              style={{ marginRight: "10px", width: "200px" }}
              variant="outlined"
              label="First Name"
            ></TextField>
            <TextField
              style={{ marginRight: "10px", width: "200px" }}
              variant="outlined"
              label="Last Name"
            ></TextField>
            <br />
            <TextField
              type="email"
              style={{ marginTop: "40px", width: "410px" }}
              variant="outlined"
              label="Email address "
            ></TextField>
            <br />
            <TextField
              style={{ marginTop: "40px", width: "410px" }}
              variant="outlined"
              label="Subject (optional)"
            ></TextField>
            <br />
            <TextField
              style={{ marginTop: "40px", width: "410px" }}
              variant="outlined"
              label="Message"
            ></TextField>
            <br />
            <Button
              variant="outlined"
              style={{
                marginTop: "40px",
                color: "white",
                borderColor: "transparent",
                padding: "10px 60px",
                backgroundColor: "#B88E2F",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
      <Box
        mt="120px"
        style={{
          backgroundColor: "#FAF3EA",
          padding: "50px 10px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box display="flex " alignItems={"center"}>
          <HighQualityIcon style={{ fontSize: "65px" }} />
          <Typography>
            <Typography fontWeight={"bold"}>High Quality</Typography>
            <Typography color="#898989">Crafted from top materials</Typography>
          </Typography>
        </Box>
        <Box display="flex " alignItems={"center"}>
          <CheckCircleOutlineIcon style={{ fontSize: "65px" }} />
          <Typography>
            <Typography fontWeight={"bold"}>Warranty Protection</Typography>
            <Typography color="#898989">Over 2 years</Typography>
          </Typography>
        </Box>
        <Box display="flex " alignItems={"center"}>
          <LocalShippingIcon style={{ fontSize: "65px" }} />
          <Typography>
            <Typography fontWeight={"bold"}>Free Shipping</Typography>
            <Typography color="#898989">Order over 150 $</Typography>
          </Typography>
        </Box>
        <Box display="flex " alignItems={"center"}>
          <SupportAgentIcon style={{ fontSize: "65px" }} />
          <Typography>
            <Typography fontWeight={"bold"}>24/7 support</Typography>
            <Typography color="#898989">Dedicated support</Typography>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
