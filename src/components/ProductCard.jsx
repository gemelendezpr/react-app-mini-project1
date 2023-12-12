import React from "react";

const ProductCard = ({ product }) => {
  const { id, images, title, price, rating, discountPercentage } = product;

  return (
    <div
      className="product-card"
      key={id}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "24px",
      }}
    >
      <img
        src={images ? images[0] : `src/components/assets/no-image.png`}
        alt="product image"
        className="product-image"
        style={{ width: "350px", height: "250px", borderRadius: "5%" }}
      />

      <div
        className="product-rate"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "12px",
        }}
      >
        <p style={{ fontSize: "16px", fontWeight: "600" }}>{title}</p>
        <p>
          <i className="fas fa-star" style={{ paddingRight: "10px" }}></i>
          {rating}
        </p>
      </div>
      <div className="price" style={{ fontSize: "16px", fontWeight: "600" }}>
        <p>
          New Price:{" "}
          <span style={{ color: "#fa6338" }}>
            ${price - ((price * discountPercentage) / 100).toFixed(0)}
          </span>
        </p>
        <p>
          {" "}
          Regular Price:{" "}
          <span style={{ color: "gray", textDecoration: "line-through" }}>
            ${price}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
