import React from 'react'
import Hero from '../components/Hero/Hero.jsx';
import Popular from '../components/Popular/Popular.jsx';
// import ProductCard from "../components/ProductCard.jsx";
// import { products } from "../components/assets/products.js";

// const HomePage = () => {
//   return (
//     <div className="home-page">HomePage</div>
//   )
// }

// export default HomePage;

// Lisi articles + products logic visible in homepage. Use logic for individual pages category. 
// const HomePage = () => {
//     return (
//      <div>
//       <div className="home-page">
//         <h1 style={{ color: "red", textAlign: "center" }}>
//           End of the Season
//           <br />
//           UP TO 15% OFF
//         </h1>
//         <div className="products-sale">
//           {products.map((product) => {
//             return <ProductCard product={product} />;
//           })}
//         </div>
//       </div>
//       </div>
//     );
//   };
  
  // export default HomePage;

  
  const HomePage = () => {
    return (
      <div>
        <Hero/>
        <Popular/>
      </div>
    )
  }
  
  export default HomePage