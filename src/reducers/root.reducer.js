import { combineReducers } 	from "redux";
import { products } 			from "./product.reducer";
import { basket } 					from "./basket.reducer";
import { counter } 			from "./couter.reducer";
import { loading } 					from './loading.reducer';
import { newArrivals } from './newArrivals.reducer';
import { threeItems } from './threeItems.reducer';
import { twoItems } from './twoItems.reducer';
import { carts } from './cart.reducer';
import { newPopular } from './newPopular.reducer';

export const rootReducer = combineReducers({
	loading,
	products,
	newArrivals,
	basket,
	counter,
	threeItems,
    twoItems,
    newPopular,
    carts
});
