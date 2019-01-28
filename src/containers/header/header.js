import React, { Component } from "react";
import { Link }             from 'react-router-dom';

export class Header extends Component {
	render() {
		return (
			<div className="header">
				<nav class="navbar navbar-default">
					<div class="container-fluid">

						<div class="navbar-header">
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
							<Link class="navbar-brand" to="#"><img src={ process.env.PUBLIC_URL + '/assets/corporate/img/logos/logo-shop-red.png' } /></Link>
						</div>

						<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul class="nav navbar-nav">
								<li class="active"><Link to="#">Link <span class="sr-only">(current)</span></Link></li>
								<li><Link to="#">Link</Link></li>
								<li class="dropdown">
									<Link to="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></Link>
									<ul class="dropdown-menu">
										<li><Link to="#">Action</Link></li>
										<li><Link to="#">Another action</Link></li>
										<li><Link to="#">Something else here</Link></li>
										<li role="separator" class="divider"></li>
										<li><Link to="#">Separated link</Link></li>
									</ul>
								</li>
							</ul>

							<form class="navbar-form navbar-left">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Search" />
								</div>
								<button type="submit" class="btn btn-default">Submit</button>
							</form>

							<ul class="nav navbar-nav navbar-right">
								<li><Link to="#">Link</Link></li>
								<li class="dropdown">
									<Link to="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></Link>
									<ul class="dropdown-menu">
										<li><Link to="#">Action</Link></li>
										<li><Link to="#">Another action</Link></li>
										<li><Link to="#">Something else here</Link></li>
										<li role="separator" class="divider"></li>
										<li><Link to="#">Separated link</Link></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</nav>

			</div>
		);
	}
}