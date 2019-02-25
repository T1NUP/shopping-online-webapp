import { combineReducers } 	from "redux";
import { products } 			from "./ProductReducer";
import { basket } 					from "./BasketReducer";
import { counter } 			from "./CouterReducer";
import { loading } 					from './LoadingReducer';

export const rootReducer = combineReducers({
	loading,
	products,
	basket,
	counter
});
