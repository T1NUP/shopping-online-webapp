import { combineReducers } 	from "redux";
import { products } 			from "./product.reducer";
import { basket } 					from "./basket.reducer";
import { counter } 			from "./couter.reducer";
import { loading } 					from './loading.reducer';

export const rootReducer = combineReducers({
	loading,
	products,
	basket,
	counter
});
