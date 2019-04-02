import React, { Component } from "react";
import { http } from "../../services/http.service";

class FormFooterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }
  HandleChange = e => {
    let target = e.target;
    this.setState({ email: target.value });
  };
  onSubmitHandel = e => {
    e.preventDefault();
    http.post("subcriber", this.state).then();
    this.setState({
        email: ''
    })
  };
  render() {
    return (
      <div className="pre-footer-subscribe-box pull-right">
        <h2>Newsletter</h2>
        <form onSubmit={this.onSubmitHandel}>
          <div className="input-group">
            <input
              type="email"
              placeholder="youremail@mail.com"
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.HandleChange}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormFooterComponent;
