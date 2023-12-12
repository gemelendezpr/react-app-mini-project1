import React from "react";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      <img
        src={props.image}
        alt=""
        style={{ width: "350px", height: "250px", borderRadius: "5%" }}
      />
      <div className="item-title">
        <p>{props.name}</p>
      </div>

      <div className="item-prices">
        <div className="item-price-new">
          New Price: <span>${props.new_price}</span>
        </div>
        <div className="item-price-old">
          Regular Price: <span>${props.old_price}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
