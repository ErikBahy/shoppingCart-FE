import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function CartTotals(props) {
  const { cartSubTotal, cartTax, cartTotal, clearCart, shoppingCart } =
    props.value;
  const addTotals = (shoppingCart) => {
    let subTotal = 0;
    shoppingCart.forEach(
      (item) => (subTotal += item.product.price * item.quantity)
    );

    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    return { subTotal, tax, total };
  };
  const totals = addTotals(shoppingCart);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title"> subtotal :</span>
              <strong>$ {totals.subTotal}</strong>
            </h5>
            <h5>
              <span className="text-title"> tax :</span>
              <strong>$ {totals.tax}</strong>
            </h5>
            <h5>
              <span className="text-title"> total :</span>
              <strong>$ {totals.total}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartTotals;
