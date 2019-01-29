import { combineReducers } 	from "redux";
import { productList } 			from "./productList";
import { basket } 					from "./basket";
import { incDecValue } 			from "./incDecValue";
import { loading } 					from './loading';

export const rootReducer = combineReducers({
	loading,
	productList,
	basket,
	incDecValue
});
