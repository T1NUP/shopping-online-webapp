import React, { Component } from 'react';
import './checkout-6.container.scss';
import { GET_CART } from '../../../actions/actions';
import { connect } from 'react-redux';
import { http } from '../../../services/http.service';

export class Checkout6 extends Component {

    componentDidMount = () => {
        this.getAllCart();
    }

    getAllCart = () => {
        http.get('carts').then(res => {
            this.props.getCart(res.data)
        });
    }
    handleConfirmOrder = (e) => {
        this.props.confirmOrder(true);
        e.preventDefault();
    }


    render() {
        var { carts } = this.props;
        var shippingCost = 3.00, ecoTax = 3.00, vat = 3.00;

        var total = carts.map(i => i.cost * i.quantity);
        if (total.length) {
            total = total.reduce((a, b) => a + b);
        } else {
            total = 0;
        }
        return (
            <>
                <table className="table cart">
                    <thead>
                        <tr>
                            <th scope="col">image</th>
                            <th scope="col">description</th>
                            <th scope="col">model</th>
                            <th scope="col">quantity</th>
                            <th scope="col">price</th>
                            <th scope="col">total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.map((item, i) =>
                            <tr key={i}>
                                <td ><img src={`/assets/pages/img/products/${item.nameImage}.jpg`} alt="" /></td>
                                <td className="description">
                                    <div className="text-orange">{item.productName}</div>
                                    <div>
                                        <b>Item 1</b>
                                        <span>- Color: Green; Size: S</span>
                                    </div>
                                    <p>More info is here</p>
                                </td>
                                <td >Res.193</td>
                                <td >{item.quantity}</td>
                                <td className="text-orange">${item.cost}</td>
                                <td className="text-orange">${item.cost * item.quantity}</td>
                            </tr>
                        )}
                    </tbody>
                </table><hr />
                <div className="d-flex justify-content-end order-frame">
                    <div className="col-3">
                        <table className="order-bill table">
                            <tbody>
                                <tr>
                                    <td>sub total</td>
                                    <td>${total}</td>
                                </tr>
                                <tr>
                                    <td>shipping cost</td>
                                    <td>${shippingCost}</td>
                                </tr>
                                <tr>
                                    <td>eco tax (-2.00)</td>
                                    <td>${ecoTax}</td>
                                </tr>
                                <tr>
                                    <td>vat (17.5%)</td>
                                    <td>${vat}</td>
                                </tr>
                                <tr>
                                    <td>total</td>
                                    <td><b>${total + shippingCost + ecoTax + vat}</b></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="button">
                            <button type="button" className="btn-cancel">CANCEL</button>
                            <button className="btn-confirm" onClick={this.handleConfirmOrder}>CONFIRM ORDER</button>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        carts: state.carts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getCart: res => {
            dispatch({ type: GET_CART, payload: { carts: res } })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout6);