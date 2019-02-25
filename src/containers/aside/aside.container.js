import React, { Component } from "react";
import { Link, Route } from 'react-router-dom';
import { sidebarRoutes } from './sidebar.route';

export class AsideContainer extends Component {
	render() {
		return (
			<div className="aside">
				<h4>This is Sidebar</h4>
				<div>
					{
						sidebarRoutes.map((route, index) => (
							<Route key={ index } {...route} />
						))
					}
					<div><Link to="/">Home</Link></div>
					<div><Link to="/account">Account</Link></div>
					<div><Link to="/login">Login</Link></div>
				</div>
			</div>
		);
	}
}
