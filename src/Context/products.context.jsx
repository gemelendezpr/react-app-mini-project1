import { createContext, useEffect, useState } from "react";
import { products } from "../products";
import React from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [productsCart, setProductsCart] = useState([]);
  const [newKey, setNewKey] = useState(99);

  useEffect(() => {
    setAllProducts(products);
  }, []);

  useEffect(() => {
    setNewKey(newKey + 1);
  }, [allProducts]);

  const addProductToCart = (product) => {
    setProductsCart([product, ...productsCart]);
  };

  const deleteProductInCart = (id) => {
    let filteredProducts = productsCart.filter((product) => {
      return product.id !== Number(id);
    });

    setProductsCart(filteredProducts);
  };

  const deleteProductFromTheStore = (id) => {
    let nowProducts = allProducts.filter((product) => {
      return product.id !== Number(id);
    });

    setAllProducts(nowProducts);
  };

  const addNewProductToTheStore = (newItem) => {
    newItem.id = newKey;
    setAllProducts([newItem, ...allProducts]);
  };

  const updateProductFromTheStore = (updatedItem, index) => {
    let theseProducts = [...allProducts];
    theseProducts[index] = updatedItem;
    // const updatedProducts = allProducts.map((product) => {
    //   if (updatedItem.id === product.id) {
    //     return { ...product, ...updatedItem };
    //   }
    // });

    setAllProducts(theseProducts);
  };

  return (
    <ProductContext.Provider
      value={{
        allProducts,
        productsCart,
        addProductToCart,
        deleteProductInCart,
        deleteProductFromTheStore,
        addNewProductToTheStore,
        updateProductFromTheStore,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
