import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./pages/ShopCategory.jsx";
import LoginSignUp from "./pages/LoginSignUp";
import Cart from "./pages/Cart";
import Product from "./components/assets/products.js";
import Navbar from "./components/Navbar/Navbar.jsx";
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_womens.png'
import explore_banner from './components/assets/banner_explore.png'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="app-container">
        <Sidebar /> 
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<ShopCategory category="about" />} />
            <Route path="/mens" element={<ShopCategory banner={men_banner} category="mens" />} />
            <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path="/explore" element={<ShopCategory banner={explore_banner}category="explore" />} />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignUp />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
