import React, { Component } from "react";
import { connect } from "react-redux";
import { GET_ABOUT } from "../../actions/actions";
import { http } from "../../services/http.service";
class AboutFooterComponent extends Component {
  componentDidMount = () => {
    this.getAbout();
  };
  getAbout = () => {
    http.get("aboutUs").then(res => {
      this.props.getAbout(res.data);
    });
  };
  render() {
    let { abouts } = this.props;
    let elAbout = abouts.map((about, index) => {
      return <p key={index}>{about.infor}</p>;
    });
    return (
      <div className="col-md-3 col-sm-6 pre-footer-col">
        <h2>About us</h2>
        {elAbout}
        <p />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    abouts: state.abouts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAbout: response =>
      dispatch({ type: GET_ABOUT, payload: { abouts: response } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutFooterComponent);
