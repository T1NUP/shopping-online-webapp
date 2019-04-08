import { combineReducers } from "redux";
import { products } from "./product.reducer";
import { basket } from "./basket.reducer";
import { counter } from "./couter.reducer";
import { loading } from "./loading.reducer";
import { newArrivals } from "./newArrivals.reducer";
import { threeItems } from "./threeItems.reducer";
import { twoItems } from "./twoItems.reducer";
import { carts } from "./cart.reducer";
import { newPopular } from "./newPopular.reducer";
import { sort } from "./sort.reducer";
import { filter } from "./filter.reducer";
import { pagination } from "./pagination.reducer";
import { productDetail } from "./product-detail.reducer";
import { accounts } from "./account.reducer";
import { isLogin } from "./login.reducer";
import { abouts } from "./aboutFooter.reducer";
import { contacts } from "./contactFooter.reducer";
import { bestSellers } from "./bestSeller.reducer";
import { register } from "./register.reducer";

export const rootReducer = combineReducers({
  loading,
  products,
  newArrivals,
  basket,
  counter,
  threeItems,
  twoItems,
  newPopular,
  carts,
  sort,
  filter,
  pagination,
  productDetail,
  accounts,
  isLogin,
  abouts,
  contacts,
  bestSellers,
  register
});
