import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class VerticalCategory extends Component {

  render() {
    return (
      <div className="sidebar col-md-3 col-sm-4">
        <ul className="list-group margin-bottom-25 sidebar-menu">
          <li className="list-group-item clearfix"><Link to=""><i className="fa fa-angle-right"></i> Ladies</Link></li>
          <li className="list-group-item clearfix dropdown">
            <Link to="">
              <i className="fa fa-angle-right"></i>
              Mens
            </Link>
            <ul className="dropdown-menu">
              <li className="list-group-item dropdown clearfix">
                <Link to=""><i className="fa fa-angle-right"></i> Shoes </Link>
                <ul className="dropdown-menu">
                  <li className="list-group-item dropdown clearfix">
                    <Link to=""><i className="fa fa-angle-right"></i> classNameic </Link>
                    <ul className="dropdown-menu">
                      <li><Link to=""><i className="fa fa-angle-right"></i> classNameic 1</Link></li>
                      <li><Link to=""><i className="fa fa-angle-right"></i> classNameic 2</Link></li>
                    </ul>
                  </li>
                  <li className="list-group-item dropdown clearfix">
                    <Link to=""><i className="fa fa-angle-right"></i> Sport  </Link>
                    <ul className="dropdown-menu">
                      <li><Link to=""><i className="fa fa-angle-right"></i> Sport 1</Link></li>
                      <li><Link to=""><i className="fa fa-angle-right"></i> Sport 2</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><Link to=""><i className="fa fa-angle-right"></i> Trainers</Link></li>
              <li><Link to=""><i className="fa fa-angle-right"></i> Jeans</Link></li>
              <li><Link to=""><i className="fa fa-angle-right"></i> Chinos</Link></li>
              <li><Link to=""><i className="fa fa-angle-right"></i> T-Shirts</Link></li>
            </ul>
          </li>
          <li className="list-group-item clearfix"><Link to=""><i className="fa fa-angle-right"></i> Kids</Link></li>
          <li className="list-group-item clearfix"><Link to=""><i className="fa fa-angle-right"></i> Accessories</Link></li>
          <li className="list-group-item clearfix"><Link to=""><i className="fa fa-angle-right"></i> Sports</Link></li>
          <li className="list-group-item clearfix"><Link to=""><i className="fa fa-angle-right"></i> Brands</Link></li>
          <li className="list-group-item clearfix"><Link to=""><i className="fa fa-angle-right"></i> Electronics</Link></li>
          <li className="list-group-item clearfix"><Link to=""><i className="fa fa-angle-right"></i> Home & Garden</Link></li>
          <li className="list-group-item clearfix"><Link to=""><i className="fa fa-angle-right"></i> Custom Link</Link></li>
        </ul>
      </div>
    );
  }
}
