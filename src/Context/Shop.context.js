import React, { createContext, useState, useContext } from "react";
import PRODUCTS from "../Assets/products/products.json";

export const ProductsContext = createContext({
  products: [],
  setFilteredProducts: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [originalProducts, setOriginalProducts] = useState(products);

  /* helper function to filter store in search */
  const filterProductsBySearch = (event) => {
    const searchWord = event.target.value;
    if (searchWord === "") {
      setProducts(originalProducts);
    } else {
      const newFilter = products.filter((product) =>
        product.fields.title.includes(searchWord)
      );
      setProducts(newFilter);
    }
  };

  /* helper function to filter store in category */
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
    filterProductsBySearch,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
