import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { LoginReducer, SignUpReducer } from "./user/userReducer";
import { CategoryReducer } from "./category/categoryReducer";
import { ItemReducer } from "./item/itemReducer";
import { CartReducer } from "./cart/cartReducer";

// 1 Make Reducer
const reducer = combineReducers({
  userLogin: LoginReducer,
  userRegister: SignUpReducer,
  category: CategoryReducer,
  item: ItemReducer,
  cart: CartReducer,
});

// 3 Middleware
const middleware = [thunk];

const userfromlocalstorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const cartTemFromStroage = localStorage.getItem("cartItem")
  ? JSON.parse(localStorage.getItem("cartItem"))
  : [];
// 2 Institial State
const initialState = {
  userLogin: { userInfo: userfromlocalstorage },
  cart: {
    cartItem: cartTemFromStroage,
  },
};

// 4 Create Store
const Store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
