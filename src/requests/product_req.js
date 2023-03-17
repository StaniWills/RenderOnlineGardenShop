import { loadProduct } from "../store/reducers/product";

export const load_product = (id) => {
  return (dispatch) => {
    fetch(`https://telran-project-backend.onrender.com/${id}`)
      .then((resp) => resp.json())
      .then((json) => dispatch(loadProduct(json[0])));
  };
};
