import React from "react";
import Products from "./products";
import CartCount from "./cartCount";

export default () => (
  <div className="middle">
    <CartCount />
    <Products />
  </div>
);
