import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeCategory from "./pages/HomeCategory";
import LoginSignUp from "./pages/LoginSignUp";
import Cart from "./pages/Cart";
import Product from "./components/assets/products.js";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="app-container">
        <Sidebar /> 

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<HomeCategory category="about" />} />
            <Route path="/mens" element={<HomeCategory category="mens" />} />
            <Route path="/womens" element={<HomeCategory category="womens" />} />
            <Route path="/explore" element={<HomeCategory category="explore" />} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignUp />} />
          </Routes>
        </div>
      </BrowserRouter>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
