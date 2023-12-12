import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setselectedCategory] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setselectedCategory(value);
    setIsOpen(false);
  };

  //   const options = [
  //     "Smartphones",
  //     "Laptops",
  //     "Fragrances",
  //     "Skincare",
  //     "Groceries",
  //     "Home Decoration",
  //     "Furniture",
  //     "Tops",
  //     "Dresses",
  //     "Women's Shoes",
  //     "Men's Shirts",
  //     "Men's Shoes",
  //     "Men's Watches",
  //     "Women's Watches",
  //     "Women's Bags",
  //     "Women's Jewelry",
  //     "Sunglasses",
  //     "Cars",
  //     "Motorcycles",
  //     "Lighting",
  //     "All",
  //     "Cart",
  //   ];

  const options = ["Women", "Men", "Explore", "Cart", "Add Item"];

  return (
    <div>
      <button onClick={toggleDropdown}>
        {selectedCategory || "Select a Category"}
      </button>

      {isOpen && (
        <ul>
          {options.map((option) => (
            <Link to={`/${option.toLowerCase()}`}>
              <li key={option} onClick={onOptionClicked(option)}>
                {option}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
