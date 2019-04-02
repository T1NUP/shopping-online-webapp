import React, { Component } from "react";
import "./checkout3.container.css";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from "react-validation/build/select";
import CheckButton from "react-validation/build/button";
import { isEmail, isEmpty } from "validator";

const required = value => {
  if (isEmpty(value)) {
    return <small className="messCheckout3">This field is required</small>;
  }
};
const email = value => {
  if (!isEmail(value)) {
    return <small className="messCheckout3">Invalid email format</small>;
  }
};

class CheckOut3 extends Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    fax: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    postCode: "",
    country: "",
    regionState: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.form.validateAll();
    if (this.checkBtn.context._errors.length === 0) {
      console.log(this.state);
    }
    
  };

  handleChangeFname = event => {
    this.setState({ fname: event.target.value });
  };
  handleChangeLname = event => {
    this.setState({ lname: event.target.value });
  };
  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  };
  handleChangePhone = event => {
    this.setState({ phone: event.target.value });
  };
  handleChangeFax = event => {
    this.setState({ fax: event.target.value });
  };
  handleChangeCompany = event => {
    this.setState({ company: event.target.value });
  };
  handleChangeAddress1 = event => {
    this.setState({ address1: event.target.value });
  };
  handleChangeAddress2 = event => {
    this.setState({ address2: event.target.value });
  };
  handleChangeCity = event => {
    this.setState({ city: event.target.value });
  };
  handleChangePostCode = event => {
    this.setState({ postCode: event.target.value });
  };
  handleChangeCountry = event => {
    this.setState({ country: event.target.value });
  };
  handleChangeRegionState = event => {
    this.setState({ regionState: event.target.value });
  };

  render() {
    return (
      <Form
        className="container"
        onSubmit={e => this.handleSubmit(e)}
        ref={c => {
          this.form = c;
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>
                First Name <span className="star">*</span>
              </label>
              <Input
                type="text"
                className="form-control"
                name="fistName"
                onChange={this.handleChangeFname}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label>
                Last Name <span className="star">*</span>
              </label>
              <Input
                type="text"
                className="form-control"
                name="lname"
                onChange={this.handleChangeLname}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label>
                E-Mail <span className="star">*</span>
              </label>
              <Input
                type="email"
                className="form-control"
                name="email"
                onChange={this.handleChangeEmail}
                validations={[required, email]}
              />
            </div>
            <div className="form-group">
              <label>
                Telephone <span className="star">*</span>
              </label>
              <Input
                type="number"
                className="form-control"
                name="phone"
                onChange={this.handleChangePhone}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label>Fax</label>
              <Input
                type="text"
                className="form-control"
                name="fax"
                onChange={this.handleChangeFax}
              />
            </div>
            <div className="form-group">
              <label>Company</label>
              <Input
                type="text"
                className="form-control"
                name="company"
                onChange={this.handleChangeCompany}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>Address 1</label>
              <Input
                type="text"
                className="form-control"
                name="address1"
                onChange={this.handleChangeAddress1}
              />
            </div>
            <div className="form-group">
              <label>Address 2</label>
              <Input
                type="text"
                className="form-control"
                name="address2"
                onChange={this.handleChangeAddress2}
              />
            </div>
            <div className="form-group">
              <label>
                City <span className="star">*</span>
              </label>
              <Input
                type="text"
                className="form-control"
                name="city"
                onChange={this.handleChangeCity}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label>
                Post Code <span className="star">*</span>
              </label>
              <Input
                type="text"
                className="form-control"
                name="postCode"
                onChange={this.handleChangePostCode}
                validations={[required]}
              />
            </div>
            <div className="form-group">
              <label>
                Country <span className="star">*</span>
              </label>
              <Select
                className="form-control"
                name="country"
                onChange={this.handleChangeCountry}
                validations={[required]}
              >
                <option>--- Please Select ---</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Select>
            </div>
            <div className="form-group">
              <label>
                Region/State <span className="star">*</span>
              </label>
              <Select
                className="form-control"
                name="regionState"
                onChange={this.handleChangeRegionState}
                validations={[required]}
              >
                <option>--- Please Select ---</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Select>
            </div>
          </div>
        </div>
        <button type="submit" value="submit" className="btn btn-checkout3">
          CONTINUE
        </button>
        <CheckButton
          style={{ display: "none" }}
          ref={c => {
            this.checkBtn = c;
          }}
        />
      </Form>
    );
  }
}

export default CheckOut3;
