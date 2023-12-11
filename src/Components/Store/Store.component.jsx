import Search from "./Search/Search.component";
import Product from "./Product/Product.component";
import Categories from "./Categories/Categories.component";
import "./Store.style"

const Store = () => {
  return (
    <div>
      <h1>Our store</h1>
      <Categories />
      <Search />
      <Product />
    </div>
  );
};

export default Store;
