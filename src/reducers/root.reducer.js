import { combineReducers } 	from "redux";
import { products } 			from "./product.reducer";
import { basket } 					from "./basket.reducer";
import { counter } 			from "./couter.reducer";
import { loading } 					from './loading.reducer';
import { newArrivals } from './newArrivals.reducer';

export const rootReducer = combineReducers({
	loading,
	products,
	newArrivals,
	basket,
	counter
});
