import { AccountContainer } from './containers/account/AccountContainer';
import { HomeContainer }    from './containers/home/HomeContainer';
import { LoginContainer }   from './containers/login/LoginContainer';
import { HeaderContainer }  from './containers/header/HeaderContainer';
import { FooterContainer }  from './containers/footer/FooterContainer';
import { AsideContainer } 	from './containers/aside/AsideContainer';


export const routes = [
	{
		path       : "/",
		exact      : true,
		component  : HomeContainer,
		sidebar    : AsideContainer,
		header     : HeaderContainer,
		footer     : FooterContainer,
		showSidebar: false,
		showHeader : true,
		showFooter : true,
	},
	{
		path       : "/login",
		exact      : true,
		component  : LoginContainer,
		sidebar    : AsideContainer,
		header     : HeaderContainer,
		footer     : FooterContainer,
		showSidebar: false,
		showHeader : false,
		showFooter : false,
	},
	{
		path       : "/account",
		exact      : true,
		component  : AccountContainer,
		sidebar    : AsideContainer,
		header     : HeaderContainer,
		footer     : FooterContainer,
		showSidebar: true,
		showHeader : true,
		showFooter : true,
	}
];