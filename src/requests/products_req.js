import { loadProducts } from "../store/reducers/products";

export const load_products = (dispatch) => {
  fetch("https://gardenshopback.onrender.com/products/all")
    .then((res) => res.json())
    .then((json) => dispatch(loadProducts(json)));
};
