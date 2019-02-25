import { BestSellerComponent } from '../../components/bestSeller/BestSellerComponent';
import { FilterProductComponent } from '../../components/filterProduct/FilterProductComponent';

export const sidebarRoutes = [
	{
		path:      "/",
		exact:     true,
		component: FilterProductComponent,
	},
	{
		path:      "/login",
		exact:     true,
		component: FilterProductComponent,
	},
	{
		path:      "/account",
		exact:     true,
		component: BestSellerComponent,
  },
  {
		path:      "/account",
		exact:     true,
		component: FilterProductComponent,
	}
];