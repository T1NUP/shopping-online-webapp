import React, { Component } from "react";
import { connect } from "react-redux";
import "./contact.scss";
import { VerticalCategory } from "./vertical-category/vertical-category.container";
import { BreadcrumbComponent } from "./breadcrum/breadcrumb.component";
import GoogleMapComponent from "./google-map/google-map.container";

class ContactComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const form = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
    console.log(form);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        {/* BreadCrumb */}
        <div className="bread-crumb">
          <BreadcrumbComponent />
        </div>

        <div className="row">
          {/* Left sidebar */}
          <div className="category-sidebar col-md-3 col-sm-3">
            <VerticalCategory />

          </div>

          {/* Contact form */}
          <div className="col-md-9 col-sm-9 form-group contact-form">
            <p>CONTACT</p>
            <div className="upper-section">
              <div className="google-map-section">
              <GoogleMapComponent />
              </div>

              <p>CONTACT FORM</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                commodo rhoncus nibh eget tincidunt. Ut sed justo in elit
                gravida dapibus a non libero. Etiam bibendum mollis mi, ut
                lacinia elit convallis eget. Etiam vitae scelerisque turpis, ut
                suscipit ex. Quisque porta urna pellentesque odio pellentesque
                consequat. Nulla scelerisque id turpis ut tincidunt. Proin at
                ornare ipsum. Nam fringilla elit eu magna pretium imperdiet.
              </p>
            </div>

            <div className="lower-section">
              <form>
                <div className="form-group">
                  <p>Name</p>
                  <input
                    name="name"
                    type="text"
                    className="form-control form-control-lg"
                    value={this.state.name}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <p>Email</p>
                  <input
                    name="email"
                    type="email"
                    className="form-control form-control-lg"
                    value={this.state.email}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <p>Message</p>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    value={this.state.message}
                    onChange={e => this.handleChange(e)}
                  />
                </div>

                <button
                  className="btn btn-submit text-uppercase"
                  onClick={e => this.onSubmit(e)}
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactComponent);
