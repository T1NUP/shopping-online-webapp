import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartHeader from "../cart-header/cart-header.container";
import HeaderNavComponent from "../../components/header-nav/header-nav.component";

export class HeaderContainer extends Component {
  render() {
    return (
      <>
        {/* BEGIN TOP BAR */}
        <div className="pre-header">
          <div className="container">
            <div className="row">
              {/* <!-- BEGIN TOP BAR LEFT PART --> */}
              <div className="col-md-6 col-sm-6 additional-shop-info">
                <ul className="list-unstyled list-inline">
                  <li>
                    <i className="fa fa-phone" />
                    <span>+1 456 6717</span>
                  </li>
                  {/* <!-- BEGIN CURRENCIES --> */}
                  <li className="shop-currencies">
                    <Link to="">€</Link>
                    <Link to="">£</Link>
                    <Link to="" className="current">
                      $
                    </Link>
                  </li>
                  {/* <!-- END CURRENCIES --> */}
                  {/* <!-- BEGIN LANGS --> */}
                  <li className="langs-block">
                    <Link to="" className="current">
                      English{" "}
                    </Link>
                    <div className="langs-block-others-wrapper">
                      <div className="langs-block-others">
                        <Link to="">French</Link>
                        <Link to="">Germany</Link>
                        <Link to="">Turkish</Link>
                      </div>
                    </div>
                  </li>
                  {/* <!-- END LANGS --> */}
                </ul>
              </div>
              {/* <!-- END TOP BAR LEFT PART --> */}
              {/* <!-- BEGIN TOP BAR MENU --> */}
              <div className="col-md-6 col-sm-6 additional-nav">
                <ul className="list-unstyled list-inline pull-right">
                  <li>
                    <Link to="/account">My Account</Link>
                  </li>
                  <li>
                    <Link to="shop-wishlist.html">My Wishlist</Link>
                  </li>
                  <li>
                    <Link to="/checkout">Checkout</Link>
                  </li>
                  <li>
                    <Link to="/login">Log In</Link>
                  </li>
                </ul>
              </div>
              {/* <!-- END TOP BAR MENU --> */}
            </div>
          </div>
        </div>
        {/* <!-- END TOP BAR --> */}

        {/* <!-- BEGIN HEADER --> */}
        <div className="header">
          <div className="container">
            <Link className="site-logo" to="/">
              <img
                src="/assets/corporate/img/logos/logo-shop-red.png"
                alt="Metronic Shop UI"
              />
            </Link>

            <Link to="/" className="mobi-toggler">
              <i className="fa fa-bars" />
            </Link>

            {/* <!-- BEGIN CART --> */}
            <CartHeader />
            {/* <!--END CART --> */}

            {/* <!-- BEGIN NAVIGATION --> */}
            <HeaderNavComponent />
            {/* <!-- END NAVIGATION --> */}
          </div>
        </div>
        {/* <!-- Header END --> */}
      </>
    );
  }
}
