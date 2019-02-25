import { BestSellerComponent } from '../../components/bestSeller/best-seller.component';
import { FilterProductComponent } from '../../components/filterProduct/filter-product.component';

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