const defaultState = [];

const ADD_TO_CART = "ADD_TO_CART";          // sosd.tip for redus
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const INCREMENT_COUNT = "INCREMENT_COUNT";
const DECREMENT_COUNT = "DECREMENT_COUNT";
const EMPTY_CART = "EMPTY_CART";

export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });   //action for cart
export const incrementCount = (payload) => ({ type: INCREMENT_COUNT, payload });
export const decrementCount = (payload) => ({ type: DECREMENT_COUNT, payload });
export const removeFromCart = (payload) => ({
  type: REMOVE_FROM_CART,
  payload,
});
export const emptyCart = () => ({ type: EMPTY_CART });

const checkProduct = (state, payload) => {
  const productInState = state.find((el) => el.id === payload.id);
  if (productInState) {
    productInState.count += 1;
  
    return [...state];
  } else {
    
    return [...state, { ...payload, count: 1 }];
  }
};

export const cartReducer = (state = defaultState, action) => {
  if (action.type === ADD_TO_CART) {
  return checkProduct(state, action.payload);
  } else if (action.type === REMOVE_FROM_CART) {
    return state.filter((el) => el.id !== action.payload);
  } else if (action.type === INCREMENT_COUNT) {
    const productInState = state.find((el) => el.id === action.payload);
    productInState.count += 1;
    return [...state];
  } else if (action.type === DECREMENT_COUNT) {
    const productInState = state.find((el) => el.id === action.payload);
    if (productInState.count <= 1) {
      return state.filter((el) => el.id !== action.payload);
    } else {
      productInState.count -= 1;
    }
    return [...state];
  } else if (action.type === EMPTY_CART) {
    return [];
  } else {
    return state;
  }
};
