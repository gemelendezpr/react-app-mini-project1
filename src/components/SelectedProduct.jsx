import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom/dist";
import { ProductContext } from "../context/products.context";
import image from "./assets/no-image.png";
import { Link } from "react-router-dom/dist";

const SelectedProduct = ({ product }) => {
  const navigate = useNavigate();

  const {
    images,
    title,
    brand,
    rating,
    price,
    discountPercentage,
    description,
    stock,
  } = product;

  if (!product.images) {
    product.images = [image, image, image];
  }

  if (!product.title) {
    product.title = "Unavailable";
  }

  if (!product.brand) {
    product.brand = "Unavailable";
  }

  if (!product.description) {
    product.description = "Unavailable";
  }

  const { addProductToCart, deleteProductFromTheStore } =
    useContext(ProductContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "32px",
        marginLeft: "300px",
        width: "800px",
        fontSize: "18px",
        fontWeight: "600",
      }}
    >
      <div
        className="gallery"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              style={{ width: "200px", height: "200px", borderRadius: "5%" }}
            />
          );
        })}
      </div>

      <h1>{title}</h1>
      <div>
        <p>Brand: {brand}</p>
        <p>
          <i className="fas fa-star" style={{ paddingRight: "12px" }}></i>
          {rating}
        </p>
      </div>
      <hr></hr>
      <div>
        <p>
          Typical price:{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            ${price}
          </span>{" "}
        </p>
        <p>
          Regular price:{" "}
          <span style={{ color: "#fa6338" }}>
            ${price - ((price * discountPercentage) / 100).toFixed(0)}
          </span>{" "}
        </p>
        <p>
          You save:{" "}
          <span style={{ color: "#fa6338" }}>
            ${((price * discountPercentage) / 100).toFixed(0)} (
            {discountPercentage}
            %)
          </span>{" "}
        </p>
      </div>
      <hr></hr>
      <div>
        <div>
          <h3>About this item</h3>
          <p>{description}</p>
        </div>
      </div>
      <hr></hr>
      <div>
        <p>FREE delivery. </p>
        <p>Arrives before Christmas.</p>
        <p>Only {stock} left in stock. Order soon!</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "24px",
          }}
        >
          <button
            style={{
              backgroundColor: "#027004",
              border: "1px solid #027004",
              width: "150px",
              height: "50px",
              borderRadius: "75px",
              marginTop: "14px",
              padding: "4px 0px",
              color: "white",
              fontSize: "18px",
            }}
            onClick={() => {
              addProductToCart(product);
            }}
          >
            Add to Cart
          </button>
          <Link to={`/item/update/${product.id}`}>
            <button
              style={{
                backgroundColor: "#027004",
                border: "1px solid #027004",
                width: "150px",
                height: "50px",
                borderRadius: "75px",
                marginTop: "14px",
                padding: "4px 0px",
                color: "white",
                fontSize: "18px",
              }}
            >
              Update
            </button>
          </Link>
          <button
            style={{
              backgroundColor: "#027004",
              border: "1px solid #027004",
              width: "150px",
              height: "50px",
              borderRadius: "75px",
              marginTop: "14px",
              padding: "4px 0px",
              color: "white",
              fontSize: "18px",
            }}
            onClick={() => {
              deleteProductFromTheStore(product.id);
              navigate(-1);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
