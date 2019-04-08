import React, { Component } from "react";
import { WrappedRegistrationForm } from "../../components/register/register.component";
import "./register.scss";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class RegisterContainer extends Component {
  render() {
    if (this.props.isRegister) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="register">
        <WrappedRegistrationForm accounts={this.props.accounts} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { isRegister: state.register };
};

export default connect(
  mapStateToProps,
  null
)(RegisterContainer);
