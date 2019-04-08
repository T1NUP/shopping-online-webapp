import React, { Component } from "react";
import { Form, Input, Select, Checkbox, Button, DatePicker } from "antd";
import uuid from "uuid";
import { GET_ACCOUNT, REGISTER } from "../../actions/actions";
import { connect } from "react-redux";
import { http } from "../../services/http.service";

const { Option } = Select;

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.getAccounts();
  }
  getAccounts = () => {
    http.get("accounts").then(res => {
      this.props.getAccounts(res.data);
    });
  };
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    formLayout: "vertical"
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        http.post("accounts", values);
        this.props.register();
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };
  validateExistEmail = (rule, value, callback) => {
    const form = this.props.form;
    let accounts = this.props.accounts;
    let email = form.getFieldValue("email");
    let isExistEmail = accounts.filter(a => {
      return a.email === email;
    });
    if (isExistEmail.length > 0) {
      callback("Email is exist, please use other email or login");
    } else {
      callback();
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : null;

    const config = {
      rules: [
        { type: "object", required: true, message: "Please select one day!" }
      ]
    };
    const regexPhone = /(09|03)+([0-9]{8})\b/;
    const regexPassword = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="E-mail" hasFeedback>
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not a valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              },
              {
                validator: this.validateExistEmail
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              },
              {
                validator: this.validateToNextPassword
              },
              {
                pattern: regexPassword,
                message:
                  "Password has at least one upper case, lower case, digit, special character and minimum six in length"
              }
            ]
          })(<Input type="password" />)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item label="Full name" hasFeedback>
          {getFieldDecorator("fullname", {
            rules: [
              {
                required: true,
                message: "Please input your full name!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Phone Number" hasFeedback>
          {getFieldDecorator("phone", {
            rules: [
              {
                required: true,
                message: "Please input your phone number!"
              },
              {
                pattern: regexPhone,
                message: "Please input an valid phone"
              }
            ]
          })(<Input style={{ width: "100%" }} />)}
        </Form.Item>
        <Form.Item label="Birth day" hasFeedback>
          {getFieldDecorator("date-picker", config)(<DatePicker />)}
        </Form.Item>
        <Form.Item label="Gender" hasFeedback>
          {getFieldDecorator("gender", {
            rules: [{ required: true, message: "Please select your gender!" }]
          })(
            <Select placeholder="Select a option and change input text above">
              <Option value="male">male</Option>
              <Option value="female">female</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("agreement", {
            valuePropName: "checked"
          })(
            <Checkbox>
              I have read the <a href="/agreement">agreement</a>
            </Checkbox>
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    accounts: state.accounts
  };
};
const mapDispatchToProps = dispatch => {
  return {
    register: () => {
      dispatch({ type: REGISTER });
    },
    getAccounts: response =>
      dispatch({ type: GET_ACCOUNT, payload: { accounts: response } })
  };
};

export const WrappedRegistrationForm = Form.create({ name: "register" })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RegistrationForm)
);
