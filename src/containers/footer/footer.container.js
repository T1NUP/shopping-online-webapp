import React, { Component } from "react";
import { Link }             from 'react-router-dom';

export class FooterContainer extends Component {

  render() {
    return(
      <>
        {/* <!-- BEGIN BRANDS --> */}
        <div className="brands">
          <div className="container">
            <div className="owl-carousel owl-carousel6-brands">
              <Link to="shop-product-list.html"><img src="assets/pages/img/brands/canon.jpg" alt="canon" title="canon" /></Link>
              <Link to="shop-product-list.html"><img src="assets/pages/img/brands/esprit.jpg" alt="esprit" title="esprit" /></Link>
              <Link to="shop-product-list.html"><img src="assets/pages/img/brands/gap.jpg" alt="gap" title="gap" /></Link>
              <Link to="shop-product-list.html"><img src="assets/pages/img/brands/next.jpg" alt="next" title="next" /></Link>
              <Link to="shop-product-list.html"><img src="assets/pages/img/brands/puma.jpg" alt="puma" title="puma" /></Link>
              <Link to="shop-product-list.html"><img src="assets/pages/img/brands/zara.jpg" alt="zara" title="zara" /></Link>
              <Link to="shop-product-list.html"><img src="assets/pages/img/brands/canon.jpg" alt="canon" title="canon" /></Link>
              <Link to="shop-product-list.html"><img src="assets/pages/img/brands/esprit.jpg" alt="esprit" title="esprit" /></Link>
              <Link to="shop-product-list.html"><img src="assets/pages/img/brands/gap.jpg" alt="gap" title="gap" /></Link>
              <Link to="shop-product-list.html"><img src="assets/pages/img/brands/next.jpg" alt="next" title="next" /></Link>
              <Link to="shop-product-list.html"><img src="assets/pages/img/brands/puma.jpg" alt="puma" title="puma" /></Link>
              <Link to="shop-product-list.html"><img src="assets/pages/img/brands/zara.jpg" alt="zara" title="zara" /></Link>
            </div>
          </div>
        </div>
        {/* <!-- END BRANDS --> */}

        {/* <!-- BEGIN STEPS --> */}
        <div className="steps-block steps-block-red">
          <div className="container">
            <div className="row">
              <div className="col-md-4 steps-block-col">
                <i className="fa fa-truck"></i>
                <div>
                  <h2>Free shipping</h2>
                  <em>Express delivery withing 3 days</em>
                </div>
                <span>&nbsp;</span>
              </div>
              <div className="col-md-4 steps-block-col">
                <i className="fa fa-gift"></i>
                <div>
                  <h2>Daily Gifts</h2>
                  <em>3 Gifts daily for lucky customers</em>
                </div>
                <span>&nbsp;</span>
              </div>
              <div className="col-md-4 steps-block-col">
                <i className="fa fa-phone"></i>
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
              <div className="col-md-3 col-sm-6 pre-footer-col">
                <h2>About us</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam sit nonummy nibh euismod tincidunt ut laoreet dolore magna aliquarm erat sit volutpat. Nostrud exerci tation ullamcorper suscipit lobortis nisl aliquip  commodo consequat. </p>
                <p>Duis autem vel eum iriure dolor vulputate velit esse molestie at dolore.</p>
              </div>
              {/* <!-- END BOTTOM ABOUT BLOCK --> */}
              {/* <!-- BEGIN BOTTOM INFO BLOCK --> */}
              <div className="col-md-3 col-sm-6 pre-footer-col">
                <h2>Information</h2>
                <ul className="list-unstyled">
                  <li><i className="fa fa-angle-right"></i> <Link to="/">Delivery Information</Link></li>
                  <li><i className="fa fa-angle-right"></i> <Link to="/">Customer Service</Link></li>
                  <li><i className="fa fa-angle-right"></i> <Link to="/">Order Tracking</Link></li>
                  <li><i className="fa fa-angle-right"></i> <Link to="/">Shipping &amp; Returns</Link></li>
                  <li><i className="fa fa-angle-right"></i> <Link to="contacts.html">Contact Us</Link></li>
                  <li><i className="fa fa-angle-right"></i> <Link to="/">Careers</Link></li>
                  <li><i className="fa fa-angle-right"></i> <Link to="/">Payment Methods</Link></li>
                </ul>
              </div>
              {/* <!-- END INFO BLOCK --> */}

              {/* <!-- BEGIN TWITTER BLOCK -->  */}
              <div className="col-md-3 col-sm-6 pre-footer-col">
                <h2 className="margin-bottom-0">Latest Tweets</h2>
                <Link className="twitter-timeline" to="https://twitter.com/twitterapi" data-tweet-limit="2" data-theme="dark" data-link-color="#57C8EB" data-widget-id="455411516829736961" data-chrome="noheader nofooter noscrollbar noborders transparent">Loading tweets by @keenthemes...</Link>      
              </div>
              {/* <!-- END TWITTER BLOCK --> */}

              {/* <!-- BEGIN BOTTOM CONTACTS --> */}
              <div className="col-md-3 col-sm-6 pre-footer-col">
                <h2>Our Contacts</h2>
                <address className="margin-bottom-40">
                  35, Lorem Lis Street, Park Ave<br />
                  California, US<br />
                  Phone: 300 323 3456<br />
                  Fax: 300 323 1456<br />
                  Email: <Link to="mailto:info@metronic.com">info@metronic.com</Link><br />
                  Skype: <Link to="skype:metronic">metronic</Link>
                </address>
              </div>
              {/* <!-- END BOTTOM CONTACTS --> */}
            </div>

            <hr />

            <div className="row">
              {/* <!-- BEGIN SOCIAL ICONS --> */}
              <div className="col-md-6 col-sm-6">
                <ul className="social-icons">
                  <li><Link className="rss" data-original-title="rss" to="/"></Link></li>
                  <li><Link className="facebook" data-original-title="facebook" to="/"></Link></li>
                  <li><Link className="twitter" data-original-title="twitter" to="/"></Link></li>
                  <li><Link className="googleplus" data-original-title="googleplus" to="/"></Link></li>
                  <li><Link className="linkedin" data-original-title="linkedin" to="/"></Link></li>
                  <li><Link className="youtube" data-original-title="youtube" to="/"></Link></li>
                  <li><Link className="vimeo" data-original-title="vimeo" to="/"></Link></li>
                  <li><Link className="skype" data-original-title="skype" to="/"></Link></li>
                </ul>
              </div>
              {/* <!-- END SOCIAL ICONS --> */}
              {/* <!-- BEGIN NEWLETTER --> */}
              <div className="col-md-6 col-sm-6">
                <div className="pre-footer-subscribe-box pull-right">
                  <h2>Newsletter</h2>
                  <form action="#">
                    <div className="input-group">
                      <input type="text" placeholder="youremail@mail.com" className="form-control" />
                      <span className="input-group-btn">
                        <button className="btn btn-primary" type="submit">Subscribe</button>
                      </span>
                    </div>
                  </form>
                </div> 
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
                  <li><img src="assets/corporate/img/payments/western-union.jpg" alt="We accept Western Union" title="We accept Western Union" /></li>
                  <li><img src="assets/corporate/img/payments/american-express.jpg" alt="We accept American Express" title="We accept American Express" /></li>
                  <li><img src="assets/corporate/img/payments/MasterCard.jpg" alt="We accept MasterCard" title="We accept MasterCard" /></li>
                  <li><img src="assets/corporate/img/payments/PayPal.jpg" alt="We accept PayPal" title="We accept PayPal" /></li>
                  <li><img src="assets/corporate/img/payments/visa.jpg" alt="We accept Visa" title="We accept Visa" /></li>
                </ul>
              </div>
              {/* <!-- END PAYMENTS --> */}
              {/* <!-- BEGIN POWERED --> */}
              <div className="col-md-4 col-sm-4 text-right">
                <p className="powered">Powered by: <Link to="http://www.keenthemes.com/">KeenThemes.com</Link></p>
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