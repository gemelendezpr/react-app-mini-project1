import React, { useState } from 'react';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setselectedCategory] = useState(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const onOptionClicked = (value) => () => {
        setselectedCategory(value);
        setIsOpen(false);
    };

const options = ["Smartphones", "Laptops", "Fragrances", "Skincare", "Groceries", "Home Decoration", "Furniture", "Tops", "Dresses", "Women's Shoes", "Men's Shirts", "Men's Shoes", "Men's Watches", "Women's Watches", "Women's Bags", "Women's Jewelry", "Sunglasses", "Cars", "Motorcycles", "Lighting"];

return (
    <div>
        <button onClick={toggleDropdown}>
            {selectedCategory || "Select a Category"}
        </button>

        {isOpen && (
            <ul>
                {options.map((option) => (
                    <li key={option} onClick={onOptionClicked(option)}>
                        {option}
                    </li>
                ))}
            </ul>
        )}
    </div>
);
}

export default Dropdown;