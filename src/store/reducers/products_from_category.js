const defaultState = [];
let primaryState = [];

const LOAD_CATEGORY_PRODUCTS = "LOAD_CATEGORY_PRODUCTS";
const SORT_PRODUCTS = "SORT_PRODUCTS";
const SEARCH_BY_PRICE = "SEARCH_BY_PRICE";

export const loadCategoryProducts = (payload) => ({
  type: LOAD_CATEGORY_PRODUCTS,
  payload,
});
export const sortProducts = (payload) => ({ type: SORT_PRODUCTS, payload });
export const searchByPrice = (payload) => ({
  type: SEARCH_BY_PRICE,
  payload,
});

export const categoryProductsReducer = (state = defaultState, action) => {
  if (action.type === LOAD_CATEGORY_PRODUCTS) {
    primaryState = action.payload;
    return action.payload;
  } else if (action.type === SORT_PRODUCTS) {
    if (action.payload === "default") {
      return primaryState;
    }
    if (action.payload === "price") {
      return [...state].sort((a, b) => a.price - b.price);
    } else if (action.payload === "title") {
      return [...state].sort((a, b) => a.title.localeCompare(b.title));
    } else {
      return state;
    }
  } else if (action.type === SEARCH_BY_PRICE) {
    return [...state].map((el) => {
      if (
        el.discont_price >= action.payload.min &&
        el.discont_price <= action.payload.max
      ) {
        return { ...el, hide: false };
      } else {
        return { ...el, hide: true };
      }
    });
  } else {
    return state;
  }
};
