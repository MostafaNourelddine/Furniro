/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import TopBar from "./Global/TopBar";
import Home from "./Home";
import Shop from "./Global/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Global/Footer";
import AddToCart from "./Global/AddToCart";
import CheckOut from "./Global/checkOut";
import Billing from "./Global/Billing";
import Contact from "./Global/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/addtocart" element={<AddToCart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/Billing" element={<Billing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
