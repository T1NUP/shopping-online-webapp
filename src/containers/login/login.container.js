import React, { Component } from "react";
import "antd/dist/antd.css";
import "./login.container.scss";
import { WrappedLoginForm } from "../../components/login/login.component";

export default class LoginContainer extends Component {
  render() {
    return (
      <div className="container login">
        <WrappedLoginForm />
      </div>
    );
  }
}
