import { AccountContainer } from "./containers/account/account.container";
import { HomeContainer } from "./containers/home/home.container";
import LoginContainer from "./containers/login/login.container";
import { HeaderContainer } from "./containers/header/header.container";
import { FooterContainer } from "./containers/footer/footer.container";
import { AsideContainer } from "./containers/aside/aside.container";
import cartContainer from "./containers/carts/cart.container";
import ProductListContainer from "./containers/productList/product-list.container";
import ProductDetail from "./containers/product-detail/product-detail.container";
import contactContainer  from "./containers/contact/contact.container";
import CheckOut from "./containers/checkOut/checkout.container";
import RegisterContainer from "./containers/register/register.container";

export const routes = [
  {
    path: "/",
    exact: true,
    component: HomeContainer,
    sidebar: AsideContainer,
    header: HeaderContainer,
    footer: FooterContainer,
    showSidebar: false,
    showHeader: true,
    showFooter: true
  },
  {
    path: "/login",
    exact: true,
    component: LoginContainer,
    sidebar: AsideContainer,
    header: HeaderContainer,
    footer: FooterContainer,
    showSidebar: false,
    showHeader: true,
    showFooter: true
  },
  {
    path: "/register",
    exact: true,
    component: RegisterContainer,
    sidebar: AsideContainer,
    header: HeaderContainer,
    footer: FooterContainer,
    showSidebar: false,
    showHeader: true,
    showFooter: true
  },
  {
    path: "/account",
    exact: true,
    component: AccountContainer,
    sidebar: AsideContainer,
    header: HeaderContainer,
    footer: FooterContainer,
    showSidebar: false,
    showHeader: true,
    showFooter: true
  },
  {
    path: "/cart",
    exact: true,
    component: cartContainer,
    sidebar: AsideContainer,
    header: HeaderContainer,
    footer: FooterContainer,
    showSidebar: false,
    showHeader: true,
    showFooter: true
  },
  {
    path: "/product_list",
    exact: true,
    component: ProductListContainer,
    sidebar: AsideContainer,
    header: HeaderContainer,
    footer: FooterContainer,
    showSidebar: false,
    showHeader: true,
    showFooter: true
  },
  {
    path: "/product-detail/:id",
    exact: true,
    component: ProductDetail,
    sidebar: AsideContainer,
    header: HeaderContainer,
    footer: FooterContainer,
    showSidebar: false,
    showHeader: true,
    showFooter: true
  },
  {
    path: "/contact",
    exact: true,
    component: contactContainer,
    sidebar: AsideContainer,
    header: HeaderContainer,
    footer: FooterContainer,
    showSidebar: false,
    showHeader: true,
    showFooter: true
  },
  {
    path: `/checkout`,
    exact: true,
    component: CheckOut,
    sidebar: AsideContainer,
    header: HeaderContainer,
    footer: FooterContainer,
    showSidebar: false,
    showHeader: true,
    showFooter: true
  }
];
