import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import AllProductsPage from "./pages/AllProductsPage.jsx";
import WomensPage from "./pages/WomensPage.jsx";
import MensPage from "./pages/MensPage.jsx";
import LoginSignUp from "./pages/LoginSignUp";
import CartPage from "./pages/CartPage.jsx";
import AboutPage from "./components/About/AboutPage.jsx";
import Sidebar from "./components/Sidebar";
import AddItemPage from "./pages/AddItemPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import UpdateItemPage from "./pages/UpdateItemPage.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <Sidebar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/women" element={<WomensPage />}></Route>
          <Route path="/men" element={<MensPage />}></Route>
          <Route path="/explore" element={<AllProductsPage />} />
          {/* <Route path="/login" element={<LoginSignUp />} /> */}
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/product/details/:productId"
            element={<ProductDetailsPage />}
          />
          <Route path="/add_item" element={<AddItemPage />}></Route>
          <Route
            path="/item/update/:productId"
            element={<UpdateItemPage />}
          ></Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
