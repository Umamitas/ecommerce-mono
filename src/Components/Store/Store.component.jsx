import {StoreContainer, StoreOrange, StoreTitle} from "./Store.style"
import Search from "./Search/Search.component";
import Product from "./Product/Product.component";
import Categories from "./Categories/Categories.component";
import "./Store.style"


const Store = () => {
  return (
    <StoreContainer>
      <StoreTitle>Our <StoreOrange>Store</StoreOrange></StoreTitle>
      <Categories />
      <Search />
      <Product />
    </StoreContainer>
  );
};

export default Store;
