// import React, { Component } from 'react';

// class TotalPriceCart extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     var { carts } = this.props;
//     var shipCost = 3;
//     var sum = 0;
//     if (carts.length > 0) {
//       for (var i = 0; i < carts.length; i++) {
//         sum += carts[i].cost * carts[i].quantity;
//       }
//       return sum;
//     }
//     return (
//       <div>
//         <div>
//           <p>SUB TOTAL</p>
//           <p>${sum}</p>
//         </div>
//         <div>
//           <p>SHIPPING COST</p>
//           <p>${shipCost}</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default TotalPriceCart;
import React, { Component } from 'react';

class TotalPriceCart extends Component {
  render() {
    var { carts } = this.props;
    var shipCost = 3;
    var sumCart = 0;
    var sum = 0;
    if (carts.length > 0) {
      for (var i = 0; i < carts.length; i++) {
        sumCart += carts[i].cost * carts[i].quantity;
      }
      sum = sum + sumCart + shipCost;
    }
    return (
      <div className="totalPriceCart">
        <div className="totalPriceCart__content">
          <div className="row w-100">
            <div className="col-md-8 px-0"><span className="text">SUB TOTAL</span></div>
            <div className="col-md-4 pl-0 text-right"><span className="number">${sumCart} </span></div>
          </div>
          <div className="row w-100">
            <div className="col-md-8 px-0"><span className="text">SHIPPING COST</span></div>
            <div className="col-md-4 pl-0 text-right"><span className="number">${shipCost} </span></div>
          </div>
          <div className="row w-100">
            <div className="col-md-8 px-0"><span className="text">TOTAL </span></div>
            <div className="col-md-4 pl-0 text-right"><span className="number">${sum} </span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default TotalPriceCart;
