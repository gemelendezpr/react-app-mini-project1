import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom/dist";
import { ProductContext } from "../context/products.context";

const AddItemPage = () => {
  const navigate = useNavigate();

  const [newItem, setnewItem] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    images: "",
  });

  const { allProducts, addNewProductToTheStore } = useContext(ProductContext);

  const handleTextInput = (e) => {
    setnewItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNumberInput = (e) => {
    setnewItem((prev) => ({
      ...prev,
      [e.target.name]: Number(e.target.value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addNewProductToTheStore(newItem);
    navigate("/explore");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newItem.title}
          onChange={handleTextInput}
          placeholder="Title"
        />

        <textarea
          name="description"
          value={newItem.description}
          onChange={handleTextInput}
          placeholder="Description"
        />

        <input
          type="number"
          name="price"
          value={newItem.price}
          onChange={handleNumberInput}
          placeholder="Price"
        />

        <input
          type="number"
          name="discountPercentage"
          value={newItem.discountPercentage}
          onChange={handleNumberInput}
          placeholder="Discount Percentage"
        />

        <input
          type="number"
          name="rating"
          value={newItem.rating}
          onChange={handleNumberInput}
          placeholder="Rating"
        />

        <input
          type="number"
          name="stock"
          value={newItem.stock}
          onChange={handleNumberInput}
          placeholder="Stock"
        />

        <input
          type="text"
          name="brand"
          value={newItem.brand}
          onChange={handleTextInput}
          placeholder="Brand"
        />

        <input
          type="text"
          name="category"
          value={newItem.category}
          onChange={handleTextInput}
          placeholder="Category"
        />

        <input
          type="text"
          name="images"
          value={newItem.images}
          onChange={handleTextInput}
          placeholder="Photo URL"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddItemPage;
