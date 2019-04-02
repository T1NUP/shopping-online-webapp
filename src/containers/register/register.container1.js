import React, { Component } from "react";
import { http } from "../../services/http.service";
import uuid from "uuid";
import "./register.scss";
import { GET_ACCOUNT } from "../../actions/actions";
import { connect } from "react-redux";
class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInputValid: true,
      errorFullName: null,
      errorAddress: null,
      errorAge: null,
      errorEmail: null,
      errorPhone: null,
      errorPassword: null,
      errorPasswordC: null,
      errors: null
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
  handleChange = e => {
    let {
      errorFullName,
      errorAddress,
      errorAge,
      errorEmail,
      errorPhone,
      errorPassword,
      errorPasswordC
    } = this.state;
    let { accounts } = this.props;
    let target = e.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
    if (name === "fullName") {
      if (value === "") {
        this.setState({
          isInputValid: true,
          errorFullName: "This field is required!"
        });
      } else {
        this.setState({
          errorFullName: ""
        });
      }
    }
    if (name === "birthday") {
      if (value === "") {
        this.setState({
          isInputValid: true,
          errorAge: "This field is required!"
        });
      } else {
        this.setState({
          errorAge: ""
        });
      }
    }
    if (name === "address") {
      if (value === "") {
        this.setState({
          isInputValid: true,
          errorAddress: "This field is required!"
        });
      } else {
        this.setState({
          errorAddress: ""
        });
      }
    }
    if (name === "email") {
      accounts.forEach(account => {
        if (value === "") {
          this.setState({
            isInputValid: true,
            errorEmail: "This field is required!"
          });
        }
        if (value !== "") {
          let regexEmail = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;
          let match = regexEmail.test(value);
          if (match === false) {
            this.setState({
              errorEmail: "Email is not valid",
              isInputValid: true
            });
          }
          if (value === account.email) {
            this.setState({
              errorEmail: "Email has been used, please enter another email",
              isInputValid: true
            });
          }
          if (match === true && value !== account.email) {
            this.setState({
              errorEmail: ""
            });
          }
        }
      });
    }
    if (name === "phone") {
      accounts.forEach(account => {
        if (value === "") {
          this.setState({
            isInputValid: true,
            errorPhone: "This field is required!"
          });
        }
        if (value !== "") {
          let regexPhone = /(09|03)+([0-9]{8})\b/;
          let match = regexPhone.test(value);
          if (match === false) {
            this.setState({
              errorPhone: "Phone is not valid",
              isInputValid: true
            });
          }
          if (value === account.phone) {
            this.setState({
              errorPhone:
                "Phone has been used, please enter another phone number"
            });
          }
          if (match === true && value !== account.phone) {
            this.setState({
              errorPhone: ""
            });
          }
        }
      });
    }
    if (name === "password") {
      if (value === "") {
        this.setState({
          isInputValid: true,
          errorPassword: "This field is required!"
        });
      }
      if (value !== "") {
        let regexPass = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;

        let match = regexPass.test(value);
        if (match === false) {
          this.setState({
            errorPassword:
              "Password has at least one upper case, lower case, digit, special character and minimum six in length",
            isInputValid: true
          });
        }
        if (match === true) {
          this.setState({
            errorPassword: ""
          });
        }
      }
    }
    if (name === "passwordC") {
      if (value === "") {
        this.setState({
          errorPasswordC: "This field is required!",
          isInputValid: true
        });
      }
      if (value !== "" && value !== this.state.password) {
        this.setState({
          errorPasswordC: "Password is not match",
          isInputValid: true
        });
      } else {
        this.setState({
          errorPasswordC: "",
          isInputValid: true
        });
      }
    }
    if (
      errorFullName === "" &&
      errorAddress === "" &&
      errorAge === "" &&
      errorEmail === "" &&
      errorPhone === "" &&
      errorPassword === "" &&
      errorPasswordC === ""
    ) {
      this.setState({
        isInputValid: false
      });
    }
  };

  submitHandle = e => {
    e.preventDefault();
    let {
      fullName,
      address,
      birthday,
      gender,
      phone,
      email,
      password
    } = this.state;
    let account = {
      id: uuid(),
      fullName,
      gender,
      birthday,
      address,
      email,
      phone,
      password
    };
    console.log(account);
  };

  render() {
    return (
      <div id="main-registration-container">
        <div id="register">
          <h1>Registration page</h1>
          <h3>Create a new account</h3>
          <form onSubmit={this.submitHandle}>
            <div className="form-group">
              <div className="row">
                <div className="col-md-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Fullname"
                    name="fullName"
                    onChange={this.handleChange}
                    onBlur={this.handleChange}
                  />
                  <div className="errorMsg">{this.state.errorFullName}</div>
                </div>
                <div className="col-md-4" />
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-md-4">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    defaultChecked
                    onChange={this.handleChange}
                    value="Male"
                  />
                  <label htmlFor="male" className="pr-4">
                    &nbsp; Male
                  </label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    onChange={this.handleChange}
                    value="Female"
                  />
                  <label htmlFor="female">&nbsp; Female</label>
                </div>
                <div className="col-md-8" />
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-md-4">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Date of birth"
                    name="birthday"
                    onChange={this.handleChange}
                    onBlur={this.handleChange}
                  />
                  <div className="errorMsg">{this.state.errorAge}</div>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    name="address"
                    onChange={this.handleChange}
                    onBlur={this.handleChange}
                  />
                  <div className="errorMsg">{this.state.errorAddress}</div>
                </div>
                <div className="col-md-4" />
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    onChange={this.handleChange}
                    onBlur={this.handleChange}
                  />
                  <div className="errorMsg">{this.state.errorEmail}</div>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone number"
                    name="phone"
                    onChange={this.handleChange}
                    onBlur={this.handleChange}
                  />
                  <div className="errorMsg">{this.state.errorPhone}</div>
                </div>
                <div className="col-md-4" />
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-md-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleChange}
                    onBlur={this.handleChange}
                  />
                  <div className="errorMsg">{this.state.errorPassword}</div>
                </div>
                <div className="col-md-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password comfirm"
                    name="passwordC"
                    onChange={this.handleChange}
                    onBlur={this.handleChange}
                  />
                  <div className="errorMsg">{this.state.errorPasswordC}</div>
                </div>
                <div className="col-md-4" />
              </div>
            </div>
            <div className="form-group">
              <button
                className="btn btn-success"
                disabled={this.state.isInputValid}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
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
    newAccounts: response =>
      dispatch({ type: GET_ACCOUNT, payload: { accounts: response } })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterContainer);
