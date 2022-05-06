import ProductData from './productData.js';
import { getParam } from './utils.js';
import ProductDetails from './productDetails.js';

const dataSource = new ProductData('tents');
const productId = getParam('product');

console.log(dataSource.getData());
console.log(dataSource.findProductById(productId));
const product = new ProductDetails(productId, dataSource);
product.init();

let products = [];


function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// get tents data

// or should we do it this way?
// async function getProductsDataAwait() {
//   products = await fetch("../json/tents.json").then(convertToJson);
// }

// add to cart button event handler


// getProductsData();
// // add listener to Add to Cart button
// document.getElementById("addToCart").addEventListener("click", addToCart);

