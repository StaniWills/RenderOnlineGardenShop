import { loadProduct } from "../store/reducers/product";

export const load_product = (id) => {
  return (dispatch) => {
    fetch(`https://renderonlinegardenshopback.onrender.com/products/${id}`)
      .then((resp) => resp.json())
      .then((json) => dispatch(loadProduct(json[0])));
  };
};
