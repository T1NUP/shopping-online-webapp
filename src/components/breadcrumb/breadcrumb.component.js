import React, { Component } from 'react';
import './breadcrumb.component.scss';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';

function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
  );
}

export class BreadcrumbComponent extends Component {
  render() {
    return (
      <div className="breadcrumb">
        <Breadcrumb
          itemRender={itemRender}
          routes={this.props.routes}
          separator={'>'}
        />
      </div>
    );
  }
}
