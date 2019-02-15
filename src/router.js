import { AccountScreen } from './containers/account/account';
import { HomeScreen }    from './containers/home/home';
import { LoginScreen }   from './containers/login/login';

import { Header }  from './containers/header/header';
import { Sidebar } from './containers/aside/aside';


export const routes = [
	{
		path:      "/",
		exact:     true,
		component: HomeScreen,
		sidebar:   Sidebar,
		header:    Header,
		showHeader: true,
		showSidebar: true
	},
	{
		path:      "/login",
		exact:     true,
		component: LoginScreen,
		sidebar:   Sidebar,
		header:    Header,
		showHeader: false,
		showSidebar: false,
	},
	{
		path:      "/account",
		exact:     true,
		component: AccountScreen,
		sidebar:   Sidebar,
		header:    Header,
		showHeader: true,
		showSidebar: true
	}
];