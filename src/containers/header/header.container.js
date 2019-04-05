import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartHeader from "../cart-header/cart-header.container";
import HeaderNavComponent from "../../components/header-nav/header-nav.component";

class HeaderContainer extends Component {
  render() {
    return (
      <>
        <div className="pre-header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 additional-shop-info">
                <ul className="list-unstyled list-inline">
                  <li>
                    <i className="fa fa-phone" />
                    <span>+1 456 6717</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-6 additional-nav">
                <ul className="list-unstyled list-inline pull-right">
                  { this.props.isLogin ? (
                    <>
                      <li>
                        <Link to="/checkout">Checkout</Link>
                      </li>
                      <li>
                        <Link to="/account">My Account</Link>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link to="/login">Log In</Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

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

            <CartHeader />
            <HeaderNavComponent />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { isLogin: state.isLogin }
}

export default connect(mapStateToProps, null)(HeaderContainer);
