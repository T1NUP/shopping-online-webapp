import React, { Component } from "react";
import { connect } from "react-redux";
import "./search.component.scss";
import * as action from "./../../actions/actions";

class SearchComponent extends Component {
  state = {
    query: ""
  };

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };

  search = e => {
    this.props.onSearch({
      search: e.target.value
    });
  };

  render() {
    return (
      <div className="search-form row">
        <p className="text-uppercase">
          search result for <span className="red_text">shoes</span>
        </p>
        <div className="input-wrapper float-right">
          <input
            name="search"
            placeholder="Search again"
            onChange={this.handleInputChange}
          />
        </div>
      </div>
    );
  }
}
const mapStatesToProps = state => {
  return {
    search: state.search
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
      onSearch: response => {
        dispatch({ type: action.SEARCH, payload: { search: response.search } });
      }
  };
};
export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(SearchComponent);
