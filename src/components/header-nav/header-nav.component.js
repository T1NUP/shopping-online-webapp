import React, { Component } from "react";
import { Link } from "react-router-dom";
class HeaderNavComponent extends Component {
  render() {
    return (
      <div className="header-navigation">
        <ul>
          <li className="dropdown">
            <Link
              className="dropdown-toggle"
              data-toggle="dropdown"
              data-target="#"
              to="/"
            >
              Woman
            </Link>
            {/* <!-- BEGIN DROPDOWN MENU --> */}
            <ul className="dropdown-menu">
              <li className="dropdown-submenu">
                <Link to="shop-product-list.html">
                  Hi Tops <i className="fa fa-angle-right" />
                </Link>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <Link to="shop-product-list.html">Second Level Link</Link>
                  </li>
                  <li>
                    <Link to="shop-product-list.html">Second Level Link</Link>
                  </li>
                  <li className="dropdown-submenu">
                    <Link
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      data-target="#"
                      to="/"
                    >
                      Second Level Link
                      <i className="fa fa-angle-right" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="shop-product-list.html">
                          Third Level Link
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-product-list.html">
                          Third Level Link
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-product-list.html">
                          Third Level Link
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="shop-product-list.html">Running Shoes</Link>
              </li>
              <li>
                <Link to="shop-product-list.html">Jackets and Coats</Link>
              </li>
            </ul>
            {/* <!-- END DROPDOWN MENU --> */}
          </li>
          <li className="dropdown dropdown-megamenu">
            <Link
              className="dropdown-toggle"
              data-toggle="dropdown"
              data-target="#"
              to="/"
            >
              Man
            </Link>
            <ul className="dropdown-menu">
              <li>
                <div className="header-navigation-content">
                  <div className="row">
                    <div className="col-md-4 header-navigation-col">
                      <h4>Footwear</h4>
                      <ul>
                        <li>
                          <Link to="shop-product-list.html">
                            Astro Trainers
                          </Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">
                            Basketball Shoes
                          </Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">Boots</Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">Canvas Shoes</Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">
                            Football Boots
                          </Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">Golf Shoes</Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">Hi Tops</Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">
                            Indoor and Court Trainers
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4 header-navigation-col">
                      <h4>Clothing</h4>
                      <ul>
                        <li>
                          <Link to="shop-product-list.html">Base Layer</Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">Character</Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">Chinos</Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">Combats</Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">
                            Cricket Clothing
                          </Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">Fleeces</Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">Gilets</Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">Golf Tops</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4 header-navigation-col">
                      <h4>Accessories</h4>
                      <ul>
                        <li>
                          <Link to="shop-product-list.html">Belts</Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">Caps</Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">
                            Gloves, Hats and Scarves
                          </Link>
                        </li>
                      </ul>

                      <h4>Clearance</h4>
                      <ul>
                        <li>
                          <Link to="shop-product-list.html">Jackets</Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">Bottoms</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-12 nav-brands">
                      <ul>
                        <li>
                          <Link to="shop-product-list.html">
                            <img
                              title="esprit"
                              alt="esprit"
                              src="/assets/pages/img/brands/esprit.jpg"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">
                            <img
                              title="gap"
                              alt="gap"
                              src="/assets/pages/img/brands/gap.jpg"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">
                            <img
                              title="next"
                              alt="next"
                              src="/assets/pages/img/brands/next.jpg"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">
                            <img
                              title="puma"
                              alt="puma"
                              src="/assets/pages/img/brands/puma.jpg"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="shop-product-list.html">
                            <img
                              title="zara"
                              alt="zara"
                              src="/assets/pages/img/brands/zara.jpg"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <Link to="shop-item.html">Kids</Link>
          </li>
          <li className="dropdown dropdown100 nav-catalogue">
            <Link
              className="dropdown-toggle"
              data-toggle="dropdown"
              data-target="#"
              to="/"
            >
              New
            </Link>
            <ul className="dropdown-menu">
              <li>
                <div className="header-navigation-content">
                  <div className="row">
                    <div className="col-md-3 col-sm-4 col-xs-6">
                      <div className="product-item">
                        <div className="pi-img-wrapper">
                          <Link to="shop-item.html">
                            <img
                              src="/assets/pages/img/products/model4.jpg"
                              className="img-responsive"
                              alt="Berry Lace Dress"
                            />
                          </Link>
                        </div>
                        <h3>
                          <Link to="shop-item.html">Berry Lace Dress</Link>
                        </h3>
                        <div className="pi-price">$29.00</div>
                        <Link to="/" className="btn btn-default add2cart">
                          Add to cart
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6">
                      <div className="product-item">
                        <div className="pi-img-wrapper">
                          <Link to="shop-item.html">
                            <img
                              src="/assets/pages/img/products/model3.jpg"
                              className="img-responsive"
                              alt="Berry Lace Dress"
                            />
                          </Link>
                        </div>
                        <h3>
                          <Link to="shop-item.html">Berry Lace Dress</Link>
                        </h3>
                        <div className="pi-price">$29.00</div>
                        <Link to="/" className="btn btn-default add2cart">
                          Add to cart
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6">
                      <div className="product-item">
                        <div className="pi-img-wrapper">
                          <Link to="shop-item.html">
                            <img
                              src="/assets/pages/img/products/model7.jpg"
                              className="img-responsive"
                              alt="Berry Lace Dress"
                            />
                          </Link>
                        </div>
                        <h3>
                          <Link to="shop-item.html">Berry Lace Dress</Link>
                        </h3>
                        <div className="pi-price">$29.00</div>
                        <Link to="/" className="btn btn-default add2cart">
                          Add to cart
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-6">
                      <div className="product-item">
                        <div className="pi-img-wrapper">
                          <Link to="shop-item.html">
                            <img
                              src="/assets/pages/img/products/model4.jpg"
                              className="img-responsive"
                              alt="Berry Lace Dress"
                            />
                          </Link>
                        </div>
                        <h3>
                          <Link to="shop-item.html">Berry Lace Dress</Link>
                        </h3>
                        <div className="pi-price">$29.00</div>
                        <Link to="/" className="btn btn-default add2cart">
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link
              className="dropdown-toggle"
              data-toggle="dropdown"
              data-target="#"
              to=""
            >
              Pages
            </Link>
            <ul className="dropdown-menu">
              <li className="active">
                <Link to="/">Home Default</Link>
              </li>
              <li>
                <Link to="/product_list">Product List</Link>
              </li>
              <li>
                <Link to="/cart">Shopping Cart</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contacts</Link>
              </li>
              <li>
                <Link to="/account">My account</Link>
              </li>
              <li>
                <Link to="/shop-standart-forms.html">Standart Forms</Link>
              </li>
              <li>
                <Link to="/shop-faq.html">FAQ</Link>
              </li>
              <li>
                <Link to="shop-privacy-policy.html">Privacy Policy</Link>
              </li>
              <li>
                <Link to="shop-terms-conditions-page.html">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes&amp;utm_source=download&amp;utm_medium=banner&amp;utm_campaign=metronic_frontend_freebie"
              target="_blank"
            >
              Admin theme
            </Link>
          </li>
          {/* <!-- BEGIN TOP SEARCH --> */}
          <li className="menu-search">
            <span className="sep" />
            <i className="fa fa-search search-btn" />
            <div className="search-box">
              <form action="#">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search"
                    className="form-control"
                  />
                  <button
                    className="btn btn-primary"
                    type="submit"
                    style={{ fontSize: "13px" }}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </li>
          {/* <!-- END TOP SEARCH --> */}
        </ul>
      </div>
    );
  }
}

export default HeaderNavComponent;
