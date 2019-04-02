import React, { Component } from "react";
import { Link } from "react-router-dom";
import FormFooterComponent from "../../components/form-footer/form-footer.component";
import AboutFooterComponent from "../../components/about-footer/about-footer.component";
import ContactFooterComponent from "../../components/contact-footer/contact-footer.component";
export class FooterContainer extends Component {
  render() {
    return (
      <>
        {/* <!-- BEGIN BRANDS --> */}
        <div className="brands">
          <div className="container">
            <div className="owl-carousel owl-carousel6-brands">
              <Link to="shop-product-list.html">
                <img
                  src="/assets/pages/img/brands/canon.jpg"
                  alt="canon"
                  title="canon"
                />
              </Link>
              <Link to="shop-product-list.html">
                <img
                  src="/assets/pages/img/brands/esprit.jpg"
                  alt="esprit"
                  title="esprit"
                />
              </Link>
              <Link to="shop-product-list.html">
                <img
                  src="/assets/pages/img/brands/gap.jpg"
                  alt="gap"
                  title="gap"
                />
              </Link>
              <Link to="shop-product-list.html">
                <img
                  src="/assets/pages/img/brands/next.jpg"
                  alt="next"
                  title="next"
                />
              </Link>
              <Link to="shop-product-list.html">
                <img
                  src="/assets/pages/img/brands/puma.jpg"
                  alt="puma"
                  title="puma"
                />
              </Link>
              <Link to="shop-product-list.html">
                <img
                  src="/assets/pages/img/brands/zara.jpg"
                  alt="zara"
                  title="zara"
                />
              </Link>
              <Link to="shop-product-list.html">
                <img
                  src="/assets/pages/img/brands/canon.jpg"
                  alt="canon"
                  title="canon"
                />
              </Link>
              <Link to="shop-product-list.html">
                <img
                  src="/assets/pages/img/brands/esprit.jpg"
                  alt="esprit"
                  title="esprit"
                />
              </Link>
              <Link to="shop-product-list.html">
                <img
                  src="/assets/pages/img/brands/gap.jpg"
                  alt="gap"
                  title="gap"
                />
              </Link>
              <Link to="shop-product-list.html">
                <img
                  src="/assets/pages/img/brands/next.jpg"
                  alt="next"
                  title="next"
                />
              </Link>
              <Link to="shop-product-list.html">
                <img
                  src="/assets/pages/img/brands/puma.jpg"
                  alt="puma"
                  title="puma"
                />
              </Link>
              <Link to="shop-product-list.html">
                <img
                  src="/assets/pages/img/brands/zara.jpg"
                  alt="zara"
                  title="zara"
                />
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- END BRANDS --> */}

        {/* <!-- BEGIN STEPS --> */}
        <div className="steps-block steps-block-red">
          <div className="container">
            <div className="row">
              <div className="col-md-4 steps-block-col">
                <i className="fa fa-truck" />
                <div>
                  <h2>Free shipping</h2>
                  <em>Express delivery withing 3 days</em>
                </div>
                <span>&nbsp;</span>
              </div>
              <div className="col-md-4 steps-block-col">
                <i className="fa fa-gift" />
                <div>
                  <h2>Daily Gifts</h2>
                  <em>3 Gifts daily for lucky customers</em>
                </div>
                <span>&nbsp;</span>
              </div>
              <div className="col-md-4 steps-block-col">
                <i className="fa fa-phone" />
                <div>
                  <h2>477 505 8877</h2>
                  <em>24/7 customer care available</em>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- END STEPS --> */}

        {/* <!-- BEGIN PRE-FOOTER --> */}
        <div className="pre-footer">
          <div className="container">
            <div className="row">
              {/* <!-- BEGIN BOTTOM ABOUT BLOCK --> */}
              <AboutFooterComponent />
              {/* <!-- END BOTTOM ABOUT BLOCK --> */}
              {/* <!-- BEGIN BOTTOM INFO BLOCK --> */}
              <div className="col-md-3 col-sm-6 pre-footer-col">
                <h2>Information</h2>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-angle-right" />{" "}
                    <Link to="/">Delivery Information</Link>
                  </li>
                  <li>
                    <i className="fa fa-angle-right" />{" "}
                    <Link to="/">Customer Service</Link>
                  </li>
                  <li>
                    <i className="fa fa-angle-right" />{" "}
                    <Link to="/">Order Tracking</Link>
                  </li>
                  <li>
                    <i className="fa fa-angle-right" />{" "}
                    <Link to="/">Shipping &amp; Returns</Link>
                  </li>
                  <li>
                    <i className="fa fa-angle-right" />{" "}
                    <Link to="contacts.html">Contact Us</Link>
                  </li>
                  <li>
                    <i className="fa fa-angle-right" />{" "}
                    <Link to="/">Careers</Link>
                  </li>
                  <li>
                    <i className="fa fa-angle-right" />{" "}
                    <Link to="/">Payment Methods</Link>
                  </li>
                </ul>
              </div>
              {/* <!-- END INFO BLOCK --> */}

              {/* <!-- BEGIN TWITTER BLOCK -->  */}
              <div className="col-md-3 col-sm-6 pre-footer-col">
                <h2 className="margin-bottom-0">Latest Tweets</h2>
                <blockquote class="twitter-tweet" data-lang="vi">
                  <p lang="en" dir="ltr">
                    The essential guide to Maroon 5{" "}
                    <a href="https://t.co/eOhKzyoOyR">
                      https://t.co/eOhKzyoOyR
                    </a>
                  </p>
                  &mdash; Maroon 5 (@maroon5){" "}
                  <a href="https://twitter.com/maroon5/status/1112855681382543362?ref_src=twsrc%5Etfw">
                    1 tháng 4, 2019
                  </a>
                </blockquote>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charset="utf-8"
                />
              </div>
              {/* <!-- END TWITTER BLOCK --> */}

              {/* <!-- BEGIN BOTTOM CONTACTS --> */}
              <ContactFooterComponent />
              {/* <!-- END BOTTOM CONTACTS --> */}
            </div>

            <hr />

            <div className="row">
              {/* <!-- BEGIN SOCIAL ICONS --> */}
              <div className="col-md-6 col-sm-6">
                <ul className="social-icons">
                  <li>
                    <Link className="rss" data-original-title="rss" to="/" />
                  </li>
                  <li>
                    <Link
                      className="facebook"
                      data-original-title="facebook"
                      to="/"
                    />
                  </li>
                  <li>
                    <Link
                      className="twitter"
                      data-original-title="twitter"
                      to="/"
                    />
                  </li>
                  <li>
                    <Link
                      className="googleplus"
                      data-original-title="googleplus"
                      to="/"
                    />
                  </li>
                  <li>
                    <Link
                      className="linkedin"
                      data-original-title="linkedin"
                      to="/"
                    />
                  </li>
                  <li>
                    <Link
                      className="youtube"
                      data-original-title="youtube"
                      to="/"
                    />
                  </li>
                  <li>
                    <Link
                      className="vimeo"
                      data-original-title="vimeo"
                      to="/"
                    />
                  </li>
                  <li>
                    <Link
                      className="skype"
                      data-original-title="skype"
                      to="/"
                    />
                  </li>
                </ul>
              </div>
              {/* <!-- END SOCIAL ICONS --> */}
              {/* <!-- BEGIN NEWLETTER --> */}
              <div className="col-md-6 col-sm-6">
                <FormFooterComponent />
              </div>
              {/* <!-- END NEWLETTER --> */}
            </div>
          </div>
        </div>
        {/* <!-- END PRE-FOOTER --> */}

        {/* <!-- BEGIN FOOTER --> */}
        <div className="footer">
          <div className="container">
            <div className="row">
              {/* <!-- BEGIN COPYRIGHT --> */}
              <div className="col-md-4 col-sm-4 padding-top-10">
                2015 © Keenthemes. ALL Rights Reserved.
              </div>
              {/* <!-- END COPYRIGHT --> */}
              {/* <!-- BEGIN PAYMENTS --> */}
              <div className="col-md-4 col-sm-4">
                <ul className="list-unstyled list-inline pull-right">
                  <li>
                    <img
                      src="/assets/corporate/img/payments/western-union.jpg"
                      alt="We accept Western Union"
                      title="We accept Western Union"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/corporate/img/payments/american-express.jpg"
                      alt="We accept American Express"
                      title="We accept American Express"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/corporate/img/payments/MasterCard.jpg"
                      alt="We accept MasterCard"
                      title="We accept MasterCard"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/corporate/img/payments/PayPal.jpg"
                      alt="We accept PayPal"
                      title="We accept PayPal"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/corporate/img/payments/visa.jpg"
                      alt="We accept Visa"
                      title="We accept Visa"
                    />
                  </li>
                </ul>
              </div>
              {/* <!-- END PAYMENTS --> */}
              {/* <!-- BEGIN POWERED --> */}
              <div className="col-md-4 col-sm-4 text-right">
                <p className="powered">
                  Powered by:{" "}
                  <Link to="http://www.keenthemes.com/">KeenThemes.com</Link>
                </p>
              </div>
              {/* <!-- END POWERED --> */}
            </div>
          </div>
        </div>
        {/* <!-- END FOOTER --> */}
      </>
    );
  }
}
