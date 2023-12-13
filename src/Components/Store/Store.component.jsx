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
  const { products } = useContext(ProductsContext);

  return (
    <StoreContainer>
      <StoreTitle>
        Our <StoreOrange>Store</StoreOrange>
      </StoreTitle>
      <Categories />
      <Search />
      <ProductsContainer>
        {products.map((product) => (
          <Product
            productObj={product}
            key={product.sys.id}
            title={product.fields.title}
            price={product.fields.price}
            imageUrl={product.fields.image.path}
          />
        ))}
      </ProductsContainer>
    </StoreContainer>
  );
};

export default Store;
