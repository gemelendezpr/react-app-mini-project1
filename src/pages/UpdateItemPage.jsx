import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom/dist";
import { ProductContext } from "../context/products.context";

const UpdateItemPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [updatedItem, setUpdatedItem] = useState(null);
  const [thisIndex, setThisIndex] = useState(null);

  //   const [updatedItem, setUpdatedItem] = useState({
  //     id: productId,
  //     title: product.title,
  //     description: product.description,
  //     price: product.price,
  //     discountPercentage: product.discountPercentage,
  //     rating: product.rating,
  //     stock: product.stock,
  //     brand: product.brand,
  //     category: product.category,
  //     images: product.images,
  //   });

  const { allProducts, updateProductFromTheStore } = useContext(ProductContext);

  useEffect(() => {
    let thisProduct = allProducts.find((product, index) => {
      setThisIndex(index);
      return product.id == productId;
    });
    setUpdatedItem(thisProduct);

    console.log("line 29 => ", thisProduct);
  }, [productId]);

  const handleTextInput = (e) => {
    setUpdatedItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNumberInput = (e) => {
    setUpdatedItem((prev) => ({
      ...prev,
      [e.target.name]: Number(e.target.value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("line 45 updated item => ", updatedItem);
    updateProductFromTheStore(updatedItem, thisIndex);
    navigate(-1);
  };

  return (
    <div className="form-container">
      {updatedItem && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={updatedItem.title}
            onChange={handleTextInput}
            placeholder="Title"
          />

          <textarea
            name="description"
            value={updatedItem.description}
            onChange={handleTextInput}
            placeholder="Description"
          />

          <input
            type="number"
            name="price"
            value={updatedItem.price}
            onChange={handleNumberInput}
            placeholder="Price"
          />

          <input
            type="number"
            name="discountPercentage"
            value={updatedItem.discountPercentage}
            onChange={handleNumberInput}
            placeholder="Discount Percentage"
          />

          <input
            type="number"
            name="rating"
            value={updatedItem.rating}
            onChange={handleNumberInput}
            placeholder="Rating"
          />

          <input
            type="number"
            name="stock"
            value={updatedItem.stock}
            onChange={handleNumberInput}
            placeholder="Stock"
          />

          <input
            type="text"
            name="brand"
            value={updatedItem.brand}
            onChange={handleTextInput}
            placeholder="Brand"
          />

          <input
            type="text"
            name="category"
            value={updatedItem.category}
            onChange={handleTextInput}
            placeholder="Category"
          />

          <input
            type="text"
            name="images"
            value={updatedItem.images}
            onChange={handleTextInput}
            placeholder="Photo URL"
          />

          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
};

export default UpdateItemPage;
