import { loadProducts } from "../store/reducers/products";

export const load_products = (dispatch) => {
  fetch("https://gardenprojectonlineshop.onrender.com/products/all")
    .then((res) => res.json())
    .then((json) => dispatch(loadProducts(json)));
};
