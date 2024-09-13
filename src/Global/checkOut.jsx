import { Box, Typography, Button, Container } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
export default function checkOut() {
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
          <Typography variant="h3">Cart</Typography>
          <Box display="flex" alignItems="center" gap={0.5}>
            <Typography variant="body1" fontWeight="bold">
              Home
            </Typography>
            <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
            <Typography variant="body1">Cart</Typography>
          </Box>
        </Box>
      </Box>
      <Container>
        <Button>
          <Link to="/Billing">Checkout</Link>
        </Button>
      </Container>
    </>
  );
}
