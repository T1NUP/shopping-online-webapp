import React, { Component } from "react";
import "./checkout4.container.css";
import Form from "react-validation/build/form";
import Textarea from "react-validation/build/textarea";


const maxLength = value => {
  if (value.trim().length > 200) {
    return (
      <small className="messCheckout4">
        Comment must be at less than 200 characters long !
      </small>
    );
  }
};

class CheckOut4 extends Component {
  state = {
    comment: ""
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };
  handleChangeComment = event => {
    this.setState({ comment: event.target.value });
  };

  render() {
    return (
      <Form className="container" onSubmit={this.handleSubmit}>
        <p>Pleas select the preferred shipping method to use on this order.</p>
        <h3>Flat Rate</h3>
        <div>
          <input type="radio" /> Flat Shipping Rate
        </div>
        <p className="P_last">Add Comments About Your Order</p>
        <Textarea
          className="form-control boder-text"
          rows="8"
          name={this.state.comment}
          onChange={this.handleChangeComment}
          validations={[maxLength]}
        />
        <button type="submit" value="submit" className="btn btn-checkout3">
          CONTINUE
        </button>
      </Form>
    );
  }
}

export default CheckOut4;
