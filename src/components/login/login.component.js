import React, { Component } from "react";
import "antd/dist/antd.css";
import { http } from "../../services/http.service";
import { LOG_IN, GET_ACCOUNT } from "../../actions/actions";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { CONFIG } from "../../services/config.service";
import { Authentication } from "../../services/authen.service";

class LoginComponent extends Component {
  constructor(props) {
    console.log("props: ", props);
    super(props);
    this.state = {
      errorAccount: "",
      isValid: false
    };
  }
  componentDidMount() {
    this.newAccounts();
  }
  newAccounts = () => {
    http.get("accounts").then(res => {
      this.props.newAccounts(res.data);
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        http.get("accounts").then(res => {
          let user = res.data.filter(account => {
            return (
              account.email === values.userName &&
              account.password === values.password
            );
          });
          if (user.length > 0) {
            Authentication.loggin();
          } else {
            this.setState({ errorAccount: "Invalid Email or Password" });
          }
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let isErr = false;
    if (this.state.errorAccount !== "") {
      isErr = true;
    }
    return (
      <div>
        <div className={isErr ? "error-account" : "d-none"}>
          {this.state.errorAccount}
        </div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item hasFeedback>
            {getFieldDecorator("userName", {
              rules: [
                {
                  required: true,
                  message: "Please input your Email!"
                },
                {
                  type: "email",
                  message: "Please input an valid email!"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
              />
            )}
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "Please input your Password!"
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <div className="disable">
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
            </div>
            <Link className="login-form-forgot" to="/forgot_password">
              Forgot password
            </Link>
            <Button
              type="primary"
              htmlType="submit"
              className="btn login-form-button"
            >
              Log in
            </Button>
            <div className="disable">
              Or <Link to="/register">register now!</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export const WrappedLoginForm = Form.create({ name: "normal_login" })(LoginComponent);
