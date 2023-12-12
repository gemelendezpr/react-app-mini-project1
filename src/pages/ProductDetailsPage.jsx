import React from "react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SelectedProduct from "../components/SelectedProduct";
import { ProductContext } from "../context/products.context";

const ProductDetailsPage = () => {
  const { allProducts } = useContext(ProductContext);
  const { productId } = useParams();
  const [thisProduct, setThisProduct] = useState(null);

  useEffect(() => {
    if (allProducts.length) {
      const selectedProduct = allProducts.find(
        (product) => product.id === parseInt(productId)
      );
      console.log("this is the selected prooduct => ", selectedProduct);
      setThisProduct(selectedProduct);
    }
  }, [productId, allProducts]);

  return (
    <div className="product-details-page">
      {thisProduct && <SelectedProduct product={thisProduct} />}
    </div>
  );
};

export default ProductDetailsPage;
