import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../context/products.context";

const WomensPage = () => {
  const [womensProducts, setWomensProducts] = useState([]);

  const { allProducts } = useContext(ProductContext);

  const womensCategoryProducts = () => {
    setWomensProducts(
      allProducts.filter((product) => {
        return (
          product.category.toLowerCase().includes("women") ||
          product.title.toLowerCase().includes("women")
        );
      })
    );
  };

  useEffect(() => {
    womensCategoryProducts();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src="src/components/assets/banner_womens.png"
        style={{
          paddingBottom: "24px",
          width: "1494px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingLeft: "132px",
        }}
      >
        {womensProducts.map((product) => {
          return (
            <Link
              key={product.id}
              style={{ textDecoration: "none", color: "black" }}
              to={`/product/details/${product.id}`}
            >
              <ProductCard product={product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default WomensPage;
