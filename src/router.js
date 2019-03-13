import { AccountContainer } from './containers/account/account.container';
import { HomeContainer }    from './containers/home/home.container';
import { LoginContainer }   from './containers/login/login.container';
import { HeaderContainer }  from './containers/header/header.container';
import { FooterContainer }  from './containers/footer/footer.container';
import { AsideContainer } 	from './containers/aside/aside.container';
import cartContainer from './containers/carts/cart.container';


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
		showSidebar: false,
		showHeader : true,
		showFooter : true,
    },
    {
		path       : "/cart",
		exact      : true,
		component  : cartContainer,
		sidebar    : AsideContainer,
		header     : HeaderContainer,
		footer     : FooterContainer,
		showSidebar: false,
		showHeader : true,
		showFooter : true,
    }
];