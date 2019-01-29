import React, { Component } from 'react';
import { Route }            from 'react-router-dom';
import { createStore }			from "redux";
import { routes }           from "./router";
import { Authentication }   from "./services/authen";
import { LoginScreen }      from "./containers/login/login";
import { rootReducer } 			from "./reducers/rootReducers";
import { Loading } from './components/loading/loading';
import './App.scss';

class App extends Component {

	authen = new Authentication();

	render() {

		if (!this.authen.isLoggin()) {
			return (
				<LoginScreen></LoginScreen>
			)
		} else {
			return (
				<div className="wrapper">
					
					<div className="header">
						{ routes.map((route, index) => (
							<Route
								key={ index }
								path={ route.path }
								exact={ route.exact }
								component={ route.header }
							/>
						)) }
					</div>
					{/* END HEADER */}

					<div className="main">

						<div className="aside-block">
							{ routes.map((route, index) => (
								<Route
									key={ index }
									path={ route.path }
									exact={ route.exact }
									component={ route.sidebar }
								/>
							)) }
						</div>

						<div className="content-block">
							{ routes.map((route, index) => (
								<Route
									key={ index }
									path={ route.path }
									exact={ route.exact }
									component={ route.component }
								/>
							)) }
						</div>

					</div>
					{/* END MAIN CONTENT */}

					<Loading />

				</div>
			);
		}


	}

}

const initialState = {};

export const store = createStore(rootReducer, initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default App;
