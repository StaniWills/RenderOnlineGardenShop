import { loadCategoryProducts } from "../store/reducers/products_from_category";

export const load_category_products = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3333/categories/${id}`)
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
