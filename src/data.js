/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */
import { Auth } from "aws-amplify";
import axios from "axios";

//  const fetchData = async () => {
//   const storeData = await axios.get("http://localhost:3000/products");
// };

export const productListRequest = async () => {
  const user = await Auth.currentAuthenticatedUser();
  const token = user.signInUserSession.idToken.jwtToken;

  localStorage.setItem("userToken", token);

  console.log(user);
  const requestInfo = {
    headers: {
      Authorization: localStorage.getItem("userToken"),
    },
  };
  const res = await axios.get(
    "https://hog7l2tne1.execute-api.eu-central-1.amazonaws.com/dev/products",
    requestInfo
  );
  const storeProducts = res.data;
  return { storeProducts, user };
};
// export const productListRequest = async () => {
//   const res = await axios.get(
//     "https://hog7l2tne1.execute-api.eu-central-1.amazonaws.com/dev/products"
//   );
//   const storeProducts = res.data;
//   return storeProducts;
// };

export const shoppingCartRequest = async () => {
  const user = await Auth.currentAuthenticatedUser();
  const userId = user.attributes.sub;
  localStorage.setItem("userId", userId);
  console.log(userId, "::::user ID should be here");
  const requestInfo = {
    headers: {
      Authorization: localStorage.getItem("userToken"),
    },
  };
  const res = await axios.get(
    `https://hog7l2tne1.execute-api.eu-central-1.amazonaws.com/dev/shoppingCart/${userId}`,
    requestInfo
  );
  // const res = await axios.get(
  //   "https://hog7l2tne1.execute-api.eu-central-1.amazonaws.com/dev/shoppingCart",
  //   requestInfo
  // );
  const shoppingCart = res.data;
  console.log(shoppingCart + "datajs");
  return shoppingCart;
};

// export const storeProducts = [
//   {
//     id: 1,
//     title: "Google Pixel - Black",
//     img: "img/product-1.png",
//     price: 10,
//     company: "GOOGLE",
//     info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//     inCart: false,
//     count: 0,
//     total: 0,
//   },
//   {
//     id: 2,
//     title: "Samsung S7",
//     img: "img/product-2.png",
//     price: 16,
//     company: "SAMSUNG",
//     info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//     inCart: false,
//     count: 0,
//     total: 0,
//   },
//   {
//     id: 3,
//     title: "HTC 10 - Black",
//     img: "img/product-3.png",
//     price: 8,
//     company: "htc",
//     info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//     inCart: false,
//     count: 0,
//     total: 0,
//   },
//   {
//     id: 4,
//     title: "HTC 10 - White",
//     img: "img/product-4.png",
//     price: 18,
//     company: "htc",
//     info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//     inCart: false,
//     count: 0,
//     total: 0,
//   },
//   {
//     id: 5,
//     title: "HTC Desire 626s",
//     img: "img/product-5.png",
//     price: 24,
//     company: "htc",
//     info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//     inCart: false,
//     count: 0,
//     total: 0,
//   },
//   {
//     id: 6,
//     title: "Vintage Iphone",
//     img: "img/product-6.png",
//     price: 17,
//     company: "apple",
//     info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//     inCart: false,
//     count: 0,
//     total: 0,
//   },
//   {
//     id: 7,
//     title: "Iphone 7",
//     img: "img/product-7.png",
//     price: 30,
//     company: "apple",
//     info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//     inCart: false,
//     count: 0,
//     total: 0,
//   },
//   {
//     id: 8,
//     title: "Smashed Iphone",
//     img: "img/product-8.png",
//     price: 2,
//     company: "apple",
//     info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
//     inCart: false,
//     count: 0,
//     total: 0,
//   },
// ];

export const detailsProduct = {
  id: 1,
  title: "Google Pixel - Black",
  img: "img/product-1.png",
  price: 10,
  company: "google",
  info: "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
  inCart: false,
  count: 0,
  total: 0,
};
