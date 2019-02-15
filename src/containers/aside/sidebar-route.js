import { BestSeller } from '../../components/bestSeller/bestSeller';
import { FilterProduct } from '../../components/filterProduct/filterProduct';

// import { Header }  from './containers/header/header';
// import { Sidebar } from './containers/aside/aside';


export const sidebarRoutes = [
	{
		path:      "/",
		exact:     true,
		component: FilterProduct,
	},
	{
		path:      "/login",
		exact:     true,
		component: FilterProduct,
	},
	{
		path:      "/account",
		exact:     true,
		component: BestSeller,
  },
  {
		path:      "/account",
		exact:     true,
		component: FilterProduct,
	}
];