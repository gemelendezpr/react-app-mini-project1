// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// // import ShopContextProvider from "./Context/ShopContext.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   // <ShopContextProvider>
//   //   <App />
//   // </ShopContextProvider>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
<<<<<<< HEAD
import ShopContextProvider from "./Context/ShopContext.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
=======
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context/products.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ProductProvider>
        <App />
      </ProductProvider>
    </Router>
  </React.StrictMode>
>>>>>>> 1ae844a (mini-project done)
);
