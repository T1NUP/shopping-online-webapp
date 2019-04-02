import React, { Component } from 'react';
import './breadcrumb.scss';
import { Breadcrumb } from 'antd';

export class BreadcrumbComponent extends Component {
  render() {
    return (
      <div className="breadcrumb">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="">Page</Breadcrumb.Item>
          <Breadcrumb.Item href="">Contact</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    );
  }
}
