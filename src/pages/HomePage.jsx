import React from 'react'
import ProductCard from "../components/ProductCard.jsx";
import { products } from "../products.js";

// const HomePage = () => {
//   return (
//     <div className="home-page">HomePage</div>
//   )
// }

// export default HomePage;


const HomePage = () => {
    return (
      <div className="home-page">
        <h1 style={{ color: "red", textAlign: "center" }}>
          End of the Season
          <br />
          UP TO 15% OFF
        </h1>
        <div className="products-sale">
          {products.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </div>
    );
  };
  
  export default HomePage;