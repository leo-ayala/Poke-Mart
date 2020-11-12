import React from "react";
// import Cart from "../components/Cart";
import ItemList from "../components/ItemList";
import CategoryMenu from "../components/CategoryMenu";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ItemList />
      {/* <Cart /> */}
    </div>
  );
};

export default Home;
