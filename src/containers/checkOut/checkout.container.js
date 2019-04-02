import React, { Component } from "react";
import { Collapse } from "antd";
import "./checkOut.container.scss";

import Checkout1 from "./checkout-1/checkout1.container";
import CheckOut2 from "./checkout-2/checkout2.container";
import CheckOut3 from "./checkout-3/checkout3.container";
import CheckOut4 from "./checkout-4/checkout4.container";
import Checkout5 from "./checkout-5/checkout5.container";
import Checkout6 from "./checkout-6/checkout-6.container";

const Panel = Collapse.Panel;

export class CheckOut extends Component {
  constructor(props) {
    super(props);
  }

  paymentMethod = (params) => {
    console.log('params checkout5', params);
    this.setState({
      checkout5: params
    });

    window.location.href = "#checkout6";
  }

  confirmOrder = (params) => {
    if (params) {
      this.props.history.push("/product_list");
    }
  }

  render() {

    console.log('state render', this.state);
    return (
      <>
        <h2 className="text-uppercase">checkout</h2>
        <div className="frame-checkout my-3">
          <Collapse defaultActiveKey={["1"]}>
            <Panel
              className="title"
              id="checkout1"
              header="step 1: checkout options"
              key="1"
              showArrow={false}
            >
              <div className="contents">
                <Checkout1 />
              </div>
            </Panel>
            <Panel
              className="title"
              id="checkout2"
              header="step 2: account & billing details"
              key="2"
              showArrow={false}
            >
              <div className="contents">
                <CheckOut2 />
              </div>
            </Panel>
            <Panel
              className="title"
              id="checkout3"
              header="step 3: delivery details"
              key="3"
              showArrow={false}
            >
              <div className="contents">
                <CheckOut3 />
              </div>
            </Panel>
            <Panel
              className="title"
              id="checkout4"
              header="step 4: delivery method"
              key="4"
              showArrow={false}
            >
              <div className="contents" >
                <CheckOut4 />
              </div>
            </Panel>
            <Panel
              className="title"
              id="checkout5"
              header="step 5: payment method"
              key="5"
              showArrow={false}
            >
              <div className="contents" >
                <Checkout5 paymentMethod={this.paymentMethod} />
              </div>


            </Panel>
            <Panel
              className="title"
              id="checkout6"
              header="step 6: confirm order"
              key="6"
              showArrow={false}
            >
              <div className="contents">
                <Checkout6 confirmOrder={this.confirmOrder} />
              </div>
            </Panel>
          </Collapse>
        </div>
      </>
    );
  }
}

export default CheckOut;
