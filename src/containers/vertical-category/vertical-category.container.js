import React, { Component } from 'react';

export class VerticalCategory extends Component {

  render() {
    return (
      <div className="sidebar col-md-3 col-sm-4">
        <ul className="list-group margin-bottom-25 sidebar-menu">
          <li className="list-group-item clearfix"><a href="shop-product-list.html"><i className="fa fa-angle-right"></i> Ladies</a></li>
          <li className="list-group-item clearfix dropdown">
            <a href="shop-product-list.html">
              <i className="fa fa-angle-right"></i>
              Mens
            </a>
            <ul className="dropdown-menu">
              <li className="list-group-item dropdown clearfix">
                <a href="shop-product-list.html"><i className="fa fa-angle-right"></i> Shoes </a>
                <ul className="dropdown-menu">
                  <li className="list-group-item dropdown clearfix">
                    <a href="shop-product-list.html"><i className="fa fa-angle-right"></i> classNameic </a>
                    <ul className="dropdown-menu">
                      <li><a href="shop-product-list.html"><i className="fa fa-angle-right"></i> classNameic 1</a></li>
                      <li><a href="shop-product-list.html"><i className="fa fa-angle-right"></i> classNameic 2</a></li>
                    </ul>
                  </li>
                  <li className="list-group-item dropdown clearfix">
                    <a href="shop-product-list.html"><i className="fa fa-angle-right"></i> Sport  </a>
                    <ul className="dropdown-menu">
                      <li><a href="shop-product-list.html"><i className="fa fa-angle-right"></i> Sport 1</a></li>
                      <li><a href="shop-product-list.html"><i className="fa fa-angle-right"></i> Sport 2</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="shop-product-list.html"><i className="fa fa-angle-right"></i> Trainers</a></li>
              <li><a href="shop-product-list.html"><i className="fa fa-angle-right"></i> Jeans</a></li>
              <li><a href="shop-product-list.html"><i className="fa fa-angle-right"></i> Chinos</a></li>
              <li><a href="shop-product-list.html"><i className="fa fa-angle-right"></i> T-Shirts</a></li>
            </ul>
          </li>
          <li className="list-group-item clearfix"><a href="shop-product-list.html"><i className="fa fa-angle-right"></i> Kids</a></li>
          <li className="list-group-item clearfix"><a href="shop-product-list.html"><i className="fa fa-angle-right"></i> Accessories</a></li>
          <li className="list-group-item clearfix"><a href="shop-product-list.html"><i className="fa fa-angle-right"></i> Sports</a></li>
          <li className="list-group-item clearfix"><a href="shop-product-list.html"><i className="fa fa-angle-right"></i> Brands</a></li>
          <li className="list-group-item clearfix"><a href="shop-product-list.html"><i className="fa fa-angle-right"></i> Electronics</a></li>
          <li className="list-group-item clearfix"><a href="shop-product-list.html"><i className="fa fa-angle-right"></i> Home & Garden</a></li>
          <li className="list-group-item clearfix"><a href="shop-product-list.html"><i className="fa fa-angle-right"></i> Custom Link</a></li>
        </ul>
      </div>
    );
  }
}
