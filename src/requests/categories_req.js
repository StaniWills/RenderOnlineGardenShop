import { loadCategories } from "../store/reducers/categories";

export const load_categories = (dispatch) => {
  fetch("https://renderonlinegardenshopback.onrender.com/categories/all")
    .then((res) => res.json())
    .then((json) => dispatch(loadCategories(json)));
};
