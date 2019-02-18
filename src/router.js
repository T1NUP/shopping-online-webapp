import { AccountScreen } from './containers/account/account';
import { HomeScreen }    from './containers/home/home';
import { LoginScreen }   from './containers/login/login';

import { Header }  from './containers/header/header';
import { Footer }  from './containers/footer/footer';
import { Sidebar } from './containers/aside/aside';


export const routes = [
	{
		path       : "/",
		exact      : true,
		component  : HomeScreen,
		sidebar    : Sidebar,
		header     : Header,
		footer     : Footer,
		showSidebar: false,
		showHeader : true,
		showFooter : true,
	},
	{
		path       : "/login",
		exact      : true,
		component  : LoginScreen,
		sidebar    : Sidebar,
		header     : Header,
		footer     : Footer,
		showSidebar: false,
		showHeader : false,
		showFooter : false,
	},
	{
		path       : "/account",
		exact      : true,
		component  : AccountScreen,
		sidebar    : Sidebar,
		header     : Header,
		footer     : Footer,
		showSidebar: true,
		showHeader : true,
		showFooter : true,
	}
];