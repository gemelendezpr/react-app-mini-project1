import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/products.context";
import ProductCardInCart from "../components/ProductCardInCart";

const CartPage = () => {
  const { productsCart } = useContext(ProductContext);

  return (
    <div style={{ marginTop: "32px", marginLeft: "300px" }}>
      {productsCart.map((product) => {
        return <ProductCardInCart product={product} />;
      })}
    </div>
  );
};

export default CartPage;
