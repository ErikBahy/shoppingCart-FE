import React, { useState, useContext, useEffect } from "react";
import Product from "./Product";
import Title from "./Title.jsx";
import { ProductContext } from "../context";
import { TailSpin } from "react-loader-spinner";
import "../loader.css";
import { trackPromise } from "react-promise-tracker";
import { usePromiseTracker } from "react-promise-tracker";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function ProductList() {
  //const [products, setProducts] = useState(storeProducts);
  //console.log(products);
  const productContext = useContext(ProductContext);
  useEffect(() => {
    trackPromise(productContext.getProductsAction());
  }, []);

  const { promiseInProgress } = usePromiseTracker();

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
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              {productContext.productsData.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>

    //<Product />
  );
}

export default ProductList;
