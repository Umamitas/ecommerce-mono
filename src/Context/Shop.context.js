import React, { createContext, useState, useContext } from "react";
import PRODUCTS from "../Assets/products/products.json";

export const ProductsContext = createContext({
  products: [],
  setFilteredProducts: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  const filterProductsByCategory = (category) => {
    setFilteredProducts((prevProducts) =>
      category
        ? products.filter((product) => product.category === category)
        : products
    );
  };
  

  const value = {
    products,
    filteredProducts,
    setFilteredProducts,
    filterProductsByCategory,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
