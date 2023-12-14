import { useState, useContext, useEffect } from "react";
import { CategoriesContainer, ItemDirectory } from "./Categories.style";
import { ProductsContext } from "../../../Context/Shop.context";

const Categories = () => {
  const { products, filterProductsByCategory } = useContext(ProductsContext);

  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Extract unique categories from products
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  useEffect(() => {
    // Update filtered products when selectedCategory changes
    filterProductsByCategory(selectedCategory);
  }, [selectedCategory, filterProductsByCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) => {
      // If clicking on the same category, deselect it
      if (prevCategory === category) {
        return null;
      }
      return category;
    });
  };

  return (
    <div>
      <CategoriesContainer>
        {uniqueCategories.map((category) => (
          <ItemDirectory
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={category === selectedCategory ? "active" : ""}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </ItemDirectory>
        ))}
      </CategoriesContainer>
    </div>
  );
};

export default Categories;
