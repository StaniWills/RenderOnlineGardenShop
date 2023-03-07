const defaultState = [];
let primaryState = [];

const LOAD_PRODUCTS = "LOAD_PRODUCTS";
const SORT_PRODUCTS = "SORT_PRODUCTS";
const SEARCH_BY_PRICE = "SEARCH_BY_PRICE";

export const loadProducts = (payload) => ({
  type: LOAD_PRODUCTS,
  payload: payload,
});

export const sortProducts = (payload) => ({
  type: SORT_PRODUCTS,
  payload: payload,
});

export const searchByPrice = (payload) => ({
  type: SEARCH_BY_PRICE,
  payload: payload,
});

export const productsReducer = (state = defaultState, action) => {
  if (action.type === LOAD_PRODUCTS) {
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
    } else if (action.payload === "discont") {
      return [...state].sort((a, b) => {
        const aDiscont = Math.round(
          ((a.price - a.discont_price) / a.price) * 100
        );
        const bDiscont = Math.round(
          ((b.price - b.discont_price) / b.price) * 100
        );
        return bDiscont - aDiscont;
      });
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
