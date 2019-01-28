import { AccountScreen } from './containers/account/account';
import { HomeScreen }    from './containers/home/home';
import { LoginScreen }   from './containers/login/login';

import { Header }  from './containers/header/header';
import { Sidebar } from './containers/aside/aside';


export const routes = [
	{
		path:      "/",
		exact:     true,
		sidebar:   Sidebar,
		header:    Header,
		component: HomeScreen
	},
	{
		path:      "/login",
		exact:     true,
		sidebar:   Sidebar,
		header:    Header,
		component: LoginScreen
	},
	{
		path:      "/account",
		sidebar:   Sidebar,
		header:    Header,
		component: AccountScreen
	}
];