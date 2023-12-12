import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/products.context";

const ProductCardInCart = ({ product }) => {
  const { id, images, title, price, rating, discountPercentage } = product;

  const { deleteProductInCart } = useContext(ProductContext);

  return (
    <div
      key={id}
      style={{
        border: "1px solid #f4f4f4",

        display: "flex",
        width: "850px",
        gap: "24px",
        margin: "24px",
        justifyContent: "space-around",
        boxShadow: " 0 4px 4px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <img
        src={images[0]}
        alt="product image"
        className="product-image"
        style={{ width: "200px", height: "200px", borderRadius: "5%" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "40px",
          fontSize: "18px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "12px",
          }}
        >
          <h3>{title}</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              fontSize: "600",
            }}
          >
            <p>
              New Price:{" "}
              <span style={{ color: "#fa6338" }}>
                ${price - ((price * discountPercentage) / 100).toFixed(0)}
              </span>
            </p>
            <p>
              Regular Price:{" "}
              <span style={{ color: "gray", textDecoration: "line-through" }}>
                ${price}
              </span>
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "flex-end",
            padding: "12px",
          }}
        >
          <button
            style={{
              backgroundColor: "#027004",
              border: "1px solid #027004",
              borderRadius: "75px",
              color: "white",
              width: "150px",
              height: "50px",
              fontSize: "18px",
            }}
          >
            Buy
          </button>
          <button
            style={{
              backgroundColor: "#027004",
              border: "1px solid #027004",
              borderRadius: "75px",
              color: "white",
              width: "150px",
              height: "50px",
              fontSize: "18px",
            }}
            onClick={() => deleteProductInCart(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardInCart;
