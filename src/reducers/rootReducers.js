import { combineReducers } from "redux";
import { productList } 			from "./productList";
import { basket } 					from "./basket";
import { incDecValue } 			from "./incDecValue";

export const rootReducer = combineReducers({
	productList,
	basket,
	incDecValue
});
