import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class Sidebar extends Component {
	render() {
		return (
			<div className="aside">
				<h4>This is Sidebar</h4>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/account">Account</Link></li>
				</ul>
			</div>
		);
	}
}
