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
import HighQualityIcon from "@mui/icons-material/HighQuality";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
export default function Billing() {
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
          <Typography variant="h3">CheckOut</Typography>
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
            <Typography variant="body1">CheckOut</Typography>
          </Box>
        </Box>
      </Box>
      <Container
        sx={{
          marginTop: "100px",
          display: "flex",
        }}
        style={{ justifyContent: "space-around" }}
      >
        <Box mr={"100px"}>
          <Typography variant="h4" marginBottom={"20px"} fontWeight={"Bold"}>
            Billing details
          </Typography>
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
            style={{ marginTop: "40px", width: "410px" }}
            variant="outlined"
            label="Company Name (optional)"
          ></TextField>
          <br />
          <TextField
            style={{ marginTop: "40px", width: "410px" }}
            variant="outlined"
            label="Country/Region"
          ></TextField>
          <br />
          <TextField
            style={{ marginTop: "40px", width: "410px" }}
            variant="outlined"
            label="Street Address"
          ></TextField>
          <br />
          <TextField
            style={{ marginTop: "40px", width: "410px" }}
            variant="outlined"
            label="Town/City"
          ></TextField>
          <br />
          <TextField
            style={{ marginTop: "40px", width: "410px" }}
            variant="outlined"
            label="Province"
          ></TextField>
          <br />
          <TextField
            style={{ marginTop: "40px", width: "410px" }}
            variant="outlined"
            label="ZIP code"
          ></TextField>
          <br />
          <TextField
            type="number"
            style={{ marginTop: "40px", width: "410px" }}
            variant="outlined"
            label="Phone"
          ></TextField>
          <br />
          <TextField
            type="email"
            style={{ marginTop: "40px", width: "410px" }}
            variant="outlined"
            label="Email address"
          ></TextField>
          <br />
          <TextField
            style={{ marginTop: "40px", width: "410px" }}
            variant="outlined"
            label="Additional information"
          ></TextField>
        </Box>
        <Box maxWidth={"500px"}>
          <Box
            borderBottom={"1px solid #D9D9D9"}
            display={"flex"}
            justifyContent={"space-between"}
            width="100%"
            minWidth={"400px"}
          >
            <Box>
              <Typography variant="h6" mb="10px" fontWeight={"bold"}>
                Product
              </Typography>
              <Typography mb="10px" color={"#9F9F9F"}>
                Asgard sofa *1
              </Typography>
              <Typography mb="10px" color={""}>
                SubTotal
              </Typography>
              <Typography>Total</Typography>
            </Box>
            <Box>
              <Typography variant="h6" mb="10px" fontWeight={"bold"}>
                SubTotal
              </Typography>
              <Typography mb="10px" color={"#9F9F9F"}>
                1000$
              </Typography>
              <Typography mb="10px" color={""}>
                1000$
              </Typography>
              <Typography fontSize={"25px"} color="#B88E2F">
                1000$
              </Typography>
            </Box>
          </Box>
          <Box>
            <ul>
              <li>
                <Typography variant="h5" fontWeight={"bold"}>
                  Direct Bank Transfer
                </Typography>
              </li>
            </ul>
            <Typography color="#9F9F9F">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order will not be shipped
              until the funds have cleared in our account.
            </Typography>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                style={{ color: "#9F9F9F", marginTop: "10px" }}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Cash"
                  control={<Radio />}
                  label="Cash On Delivery"
                />
                <FormControlLabel
                  value="Bank"
                  control={<Radio />}
                  label="Direct Bank Transfer"
                />
              </RadioGroup>
            </FormControl>
            <Typography mt="20px">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our privacy policy.
            </Typography>
            <Typography textAlign={"center"} mt="30px">
              <Button
                variant="outlined"
                style={{
                  color: "black",
                  borderColor: "black",
                  padding: "10px 60px",
                }}
              >
                Place Order
              </Button>
            </Typography>
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
