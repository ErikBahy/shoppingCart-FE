import React, { useContext, useEffect } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductContext } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { TailSpin } from "react-loader-spinner";
import "../../loader.css";
import { trackPromise } from "react-promise-tracker";
import { usePromiseTracker } from "react-promise-tracker";

function Cart() {
  const cartContext = useContext(ProductContext);
  //console.log(JSON.stringify(cartContext) + "cart context");

  const { shoppingCart } = cartContext;
  const { _id } = shoppingCart;
  // console.log(_id + "from cart");
  useEffect(() => {
    trackPromise(cartContext.getShoppingCartAction());
  }, []);
  const { promiseInProgress } = usePromiseTracker();

  if (shoppingCart.length > 0) {
    return (
      <React.Fragment>
        {promiseInProgress === true ? (
          <div className="loader">
            <TailSpin
              height="80"
              width="80"
              color="#2a2a72"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <>
            <Title name="your " title="cart" />
            <CartColumns />
            <CartList />
            <CartTotals value={cartContext} />
          </>
        )}
      </React.Fragment>
    );
  } else {
    return <EmptyCart />;
  }
}

export default Cart;
