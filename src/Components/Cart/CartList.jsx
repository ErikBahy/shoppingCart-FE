import React, { useContext, useEffect } from "react";
import CartItem from "./CartItem";
import { ProductContext } from "../../context";

function CartList() {
  const cartContext = useContext(ProductContext);
  const { shoppingCart } = cartContext;
  const { _id } = shoppingCart;

  return (
    <div className="container-fluid">
      {shoppingCart.map((product) => {
        return <CartItem key={product._id} product={product} />;
      })}
    </div>
  );
}

export default CartList;
