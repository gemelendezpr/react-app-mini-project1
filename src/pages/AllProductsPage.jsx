import ProductCard from "../components/ProductCard";
import React, { useContext } from "react";
import { ProductContext } from "../context/products.context";
import { Link } from "react-router-dom";

const AllProductsPage = () => {
  const { allProducts } = useContext(ProductContext);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src="src/components/assets/banner_explore.png"
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
        {allProducts.map((product) => {
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

export default AllProductsPage;
