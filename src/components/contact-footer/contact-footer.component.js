import React, { Component } from "react";
import { connect } from "react-redux";
import { GET_CONTACT } from "../../actions/actions";
import { http } from "../../services/http.service";
import { Link } from "react-router-dom";
class ContactFooterComponent extends Component {
  componentDidMount = () => {
    this.getContact();
  };
  getContact = () => {
    http.get("contacts").then(res => {
      this.props.getContact(res.data);
    });
  };
  render() {
    let { contacts } = this.props;
    let elContact = contacts.map((contact, index) => {
      return (
        <address className="margin-bottom-40" key={index}>
          {contact.address}
          <br />
          {contact.country}
          <br />
          Phone: {contact.phone}
          <br />
          Fax: {contact.fax}
          <br />
          Email: <Link to="mailto:info@metronic.com">{contact.email}</Link>
          <br />
          Skype: <Link to="skype:metronic">{contact.skype}</Link>
        </address>
      );
    });
    return (
      <div className="col-md-3 col-sm-6 pre-footer-col">
        <h2>Our Contacts</h2>
        {elContact}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getContact: response =>
      dispatch({ type: GET_CONTACT, payload: { contacts: response } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactFooterComponent);
