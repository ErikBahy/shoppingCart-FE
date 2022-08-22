import React, { useState, useEffect } from "react";
import {
  shoppingCartRequest,
  productListRequest,
  detailsProduct,
} from "./data";
import axios from "axios";

const ProductContext = React.createContext();

function ProductProvider(props) {
  /* const [productsList, setproductsList] = useState({
    products: [],
    detailProduct: detailProduct,
  });*/
  const [detailProduct, setDetailProduct] = useState(detailsProduct);

  const [modalProduct, setmodalProduct] = useState(detailProduct);
  const [Cart, setCart] = useState([]);
  const [modalOpen, setmodalOpen] = useState(false);

  const [productsData, setProductsData] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [user, setUser] = useState([]);

  const getItem = (id) => {
    const product = productsData.find((item) => item._id === id);
    return product;
  };

  const getProductsAction = async () => {
    const products = await productListRequest();
    setProductsData(products.storeProducts);
    console.log("USERNAME :: " + products.user.attributes.email);
    setUser(products.user.attributes.email);
  };
  const getShoppingCartAction = async () => {
    const shoppingCartData = await shoppingCartRequest();
    setShoppingCart(shoppingCartData.filter((product) => product.product));
  };

  const handleDetail = (id) => {
    const product = getItem(id);
    setDetailProduct(product);
  };
  const addToCart = async (productId) => {
    const requestInfo = {
      headers: {
        Authorization: localStorage.getItem("userToken"),
      },
    };
    await axios.post(
      `https://hog7l2tne1.execute-api.eu-central-1.amazonaws.com/dev/shoppingCart/${localStorage.getItem(
        "userId"
      )}`,
      productId,
      requestInfo
    );

    // console.log("addtoCart ran", Cart);
  };

  const openModal = (product) => {
    setmodalProduct(product);
    setmodalOpen(true);
    console.log("openModal ran", productsData);
  };
  const closeModal = () => {
    setmodalOpen(false);
  };
  const increment = async (_id) => {
    const requestInfo = {
      headers: {
        Authorization: localStorage.getItem("userToken"),
      },
    };
    await axios.post(
      `https://hog7l2tne1.execute-api.eu-central-1.amazonaws.com/dev/shoppingCart/${localStorage.getItem(
        "userId"
      )}`,
      { _id },
      requestInfo
    );
    getShoppingCartAction();
  };
  const decrement = async (_id) => {
    const requestInfo = {
      headers: {
        Authorization: localStorage.getItem("userToken"),
      },
    };
    await axios.post(
      `https://hog7l2tne1.execute-api.eu-central-1.amazonaws.com/dev/shoppingCart/decrement/${localStorage.getItem(
        "userId"
      )}`,
      { _id },
      requestInfo
    );
    getShoppingCartAction();
  };
  const removeItem = async (_id) => {
    const requestInfo = {
      headers: {
        Authorization: localStorage.getItem("userToken"),
      },
    };
    await axios.delete(
      `https://hog7l2tne1.execute-api.eu-central-1.amazonaws.com/dev/shoppingCart/${_id}`,
      requestInfo
    );
    getShoppingCartAction();
  };

  const clearCart = async () => {
    const requestInfo = {
      headers: {
        Authorization: localStorage.getItem("userToken"),
      },
    };
    debugger;
    await axios.delete(
      "https://hog7l2tne1.execute-api.eu-central-1.amazonaws.com/dev/shoppingCart",
      requestInfo
    );

    getShoppingCartAction();
  };

  useEffect(() => {}, [Cart]);
  useEffect(() => {
    // setProductsData();
  }, []);
  return (
    <ProductContext.Provider
      value={{
        modalProduct,
        Cart,

        handleDetail: handleDetail,
        addToCart: addToCart,
        openModal: openModal,
        closeModal: closeModal,
        modalOpen: modalOpen,
        increment: increment,
        decrement: decrement,
        removeItem: removeItem,
        clearCart: clearCart,

        getProductsAction: getProductsAction,
        getShoppingCartAction: getShoppingCartAction,

        productsData: productsData,
        shoppingCart: shoppingCart,
        detailProduct: detailProduct,
        user: user,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
//const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductContext };
