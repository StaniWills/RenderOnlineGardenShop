import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { categoriesReducer } from "./reducers/categories";
import { productsReducer } from "./reducers/products";
import { categoryProductsReducer } from "./reducers/products_from_category";
import { productReducer } from "./reducers/product";
import { cartReducer } from "./reducers/cart";
import { telephoneNumbersReducer } from "./reducers/phone";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({   // sosdaju red.
  categories: categoriesReducer,
  products: productsReducer,
  categoryProducts: categoryProductsReducer,
  product: productReducer,
  cart: cartReducer,
  telephoneNumber: telephoneNumbersReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // podkluchaju reduser

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
