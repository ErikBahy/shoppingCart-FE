import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context";

function CartItem(props) {
  console.log(props.product);
  const { _id, title, img, price, inCart } = props.product.product;
  const { quantity } = props.product;
  const cartId = props.product._id;
  const { getCartItem, increment, decrement, removeItem } =
    useContext(ProductContext);
  console.log(props, title, _id, "from cartItem");

  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          alt="Product"
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span>$ {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(_id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{quantity}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(_id)}>
              +
            </span>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(cartId)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong> item total : $ {price * quantity} </strong>
      </div>
    </div>
  );
}

export default CartItem;
