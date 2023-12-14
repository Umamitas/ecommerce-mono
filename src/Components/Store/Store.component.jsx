import { useContext } from "react";
import { ProductsContext } from "../../Context/Shop.context";
import {
  ProductsContainer,
  StoreContainer,
  StoreOrange,
  StoreTitle,
} from "./Store.style";
import Search from "./Search/Search.component";
import Product from "./Product/Product.component";
import Categories from "./Categories/Categories.component";

const Store = () => {
  const { products, filteredProducts } = useContext(ProductsContext);

  return (
    <StoreContainer id="store">
      <StoreTitle>
        Our <StoreOrange>Store</StoreOrange>
      </StoreTitle>
      <Categories />
      <Search />
      <ProductsContainer>
        {filteredProducts
          ? filteredProducts.map((product) => (
              <Product key={product.sys.id} product={product} />
            ))
          : products.map((product) => (
              <Product key={product.sys.id} product={product} />
            ))}
      </ProductsContainer>
    </StoreContainer>
  );
};

export default Store;
