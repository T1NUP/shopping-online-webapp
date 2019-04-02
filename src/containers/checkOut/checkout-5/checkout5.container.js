import React, { Component } from 'react';
import './checkout5.container.scss';
import { Link } from 'react-router-dom';

export class Checkout5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cashOnDelivery: false,
            commentOrder: null,
            agree: false
        }
    }
    handleChange = (e) => {
        var { target } = e;
        var { name, value } = target;
        this.setState({
            [name]: value === 'on' ? target.checked : value
        })
    }

    handleContinue = (e) => {
        e.preventDefault();
        this.props.paymentMethod(this.state);
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleContinue} path="/">
                    <p>Please select the preferred payment method to use on this order.</p>
                    <p>
                        <input
                            type="checkbox"
                            className="rounded-circle"
                            name="cashOnDelivery"
                            onChange={this.handleChange}
                        />
                        <span>Cash On Delivery</span>
                    </p>
                    <p>Add Comments About Your Order</p>
                    <textarea
                        className="form-control"
                        rows="8"
                        name="commentOrder"
                        onChange={this.handleChange}
                    ></textarea>
                    <div className="d-flex justify-content-end form-group my-2">
                        <div className="d-flex align-items-center">
                            <input
                                type="checkbox"
                                className="rounded-circle"
                                name="agree"
                                onChange={this.handleChange}
                            />
                            <span className="agree">I have read and agree to the <Link to="">Terms & Conditions</Link></span>
                        </div>

                        <button type="submit" className="text-uppercase btn " disabled={!this.state.agree}>continue</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Checkout5;