import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { routes } from './router';
import { Authentication } from './services/authen.service';
import { LOG_IN } from "./actions/actions";
import { rootReducer } from './reducers/root.reducer';
import LoadingComponent from './components/loading/loading.component';
import 'antd/dist/antd.css';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);
    if (Authentication.isLoggin()) {
      store.dispatch({
        type: LOG_IN
      });
    }
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Switch>
            {routes.map((route, index) => {
              return route.showHeader ? (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.header}
                />
              ) : null;
            })}
          </Switch>
          {/* END HEADER */}

          <div className="main">
            <div className="container">
              <Switch>
                {routes.map((route, index) => {
                  return route.showSidebar ? (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.sidebar}
                    />
                  ) : null;
                })}
              </Switch>

              <div className="content">
                <Switch>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.component}
                    />
                  ))}
                </Switch>
              </div>
            </div>
          </div>
          {/* END MAIN CONTENT */}

          <Switch>
            {routes.map((route, index) => {
              return route.showFooter ? (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.footer}
                />
              ) : null;
            })}
          </Switch>

          <LoadingComponent />
        </div>
      </Router>
    );
  }
}

const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default App;
