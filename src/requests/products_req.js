import { loadProducts } from "../store/reducers/products";

export const load_products = (dispatch) => {
  fetch("http://localhost:3333/products/all")
    .then((res) => res.json())
    .then((json) => dispatch(loadProducts(json)));
};
