import React, { Component } from "react";
import "antd/dist/antd.css";
import "./login.container.scss";
import { WrappedLoginForm } from "../../components/login/login.component";
import { Authentication } from "../../services/authen.service";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class LoginContainer extends Component {

  render() {
    if (this.props.isLogin) {
      return <Redirect to='/' />
    }
    return (
      <div className="container login">
        <WrappedLoginForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isLogin: state.isLogin }
}

export default connect(mapStateToProps, null)(LoginContainer);