import { loadCategoryProducts } from "../store/reducers/products_from_category";

export const load_category_products = (id) => {
  return (dispatch) => {
    fetch(`https://renderonlinegardenshopback.onrender.com/categories${id}`)
      .then((response) => response.json())
      .then((data) => {
        const payload = data.map((el) => ({
          ...el,
          hide: false,
        }));
        dispatch(loadCategoryProducts(payload));
      });
  };
};
