import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const options = ["Women", "Men", "Explore", "Cart", "Add Item"];

  return (
    <div className="side-bar">
      {options.map((option, index) => (
        <Link
          to={`/${option.toLowerCase().replace(" ", "_")}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <p style={{ fontSize: "20px", width: "100px" }}>{option}</p>
            {/* <i className="fas fa-arrow-right" style={{ fontSize: "20px" }}></i> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
