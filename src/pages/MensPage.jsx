import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/products.context";

const MensPage = () => {
  const [mensProducts, setMensProducts] = useState([]);

  const { allProducts } = useContext(ProductContext);

  const mensCategoryProducts = () => {
    setMensProducts(
      allProducts.filter((product) => {
        return (
          product.category.toLowerCase().includes("men") &&
          !product.category.toLowerCase().includes("women")
        );
      })
    );
  };

  useEffect(() => {
    mensCategoryProducts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src="src/components/assets/banner_mens.png"
        style={{
          marginBottom: "24px",
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
        {mensProducts.map((product) => {
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

export default MensPage;
