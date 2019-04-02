import React, { Component } from "react";
import { Link } from "react-router-dom";

export class VerticalCategory extends Component {
  render() {
    return (
      <div className="sidebar col-md-3 col-sm-4">
        {/* Start left sidebar */}
        <ul className="list-group margin-bottom-25 sidebar-menu">
          <li className="list-group-item clearfix">
            <Link to="">
              <i className="fa fa-angle-right" /> Ladies
            </Link>
          </li>
          <li className="list-group-item clearfix dropdown">
            <Link to="">
              <i className="fa fa-angle-right" />
              Mens
            </Link>
            <ul className="dropdown-menu">
              <li className="list-group-item dropdown clearfix">
                <Link to="">
                  <i className="fa fa-angle-right" /> Shoes{" "}
                </Link>
                <ul className="dropdown-menu">
                  <li className="list-group-item dropdown clearfix">
                    <Link to="">
                      <i className="fa fa-angle-right" /> classNameic{" "}
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="">
                          <i className="fa fa-angle-right" /> classNameic 1
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i className="fa fa-angle-right" /> classNameic 2
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="list-group-item dropdown clearfix">
                    <Link to="">
                      <i className="fa fa-angle-right" /> Sport{" "}
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="">
                          <i className="fa fa-angle-right" /> Sport 1
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          <i className="fa fa-angle-right" /> Sport 2
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="">
                  <i className="fa fa-angle-right" /> Trainers
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="fa fa-angle-right" /> Jeans
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="fa fa-angle-right" /> Chinos
                </Link>
              </li>
              <li>
                <Link to="">
                  <i className="fa fa-angle-right" /> T-Shirts
                </Link>
              </li>
            </ul>
          </li>
          <li className="list-group-item clearfix">
            <Link to="">
              <i className="fa fa-angle-right" /> Kids
            </Link>
          </li>
          <li className="list-group-item clearfix">
            <Link to="">
              <i className="fa fa-angle-right" /> Accessories
            </Link>
          </li>
          <li className="list-group-item clearfix">
            <Link to="">
              <i className="fa fa-angle-right" /> Sports
            </Link>
          </li>
          <li className="list-group-item clearfix">
            <Link to="">
              <i className="fa fa-angle-right" /> Brands
            </Link>
          </li>
          <li className="list-group-item clearfix">
            <Link to="">
              <i className="fa fa-angle-right" /> Electronics
            </Link>
          </li>
          <li className="list-group-item clearfix">
            <Link to="">
              <i className="fa fa-angle-right" /> Home & Garden
            </Link>
          </li>
          <li className="list-group-item clearfix">
            <Link to="">
              <i className="fa fa-angle-right" /> Custom Link
            </Link>
          </li>
        </ul>

        {/* Start other */}
        <div className="contacts text-uppercase">
          <b>our contacts</b>
          <p>35, lorem lis street, park ave</p>
          <p>california, us</p>
          <p>P: 300 323 3456</p>
          <br />

          <b>Email</b>
          <p>info@metronic.com</p>
          <p>support@metronic.com</p>

          <div className="icon">
            <i className="fa fa-facebook-square" />
            <i className="fa fa-google-plus-square" />
            <i className="fa fa fa-github-alt" />
            <i className="fab fa-linkedin-square" />
            <i className="fa fa-facebook-square" />
          </div>
        </div>
      </div>
    );
  }
}
