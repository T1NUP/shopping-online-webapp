import React, { Component } from 'react';
import { http } from '../../services/http.service';
import { connect } from 'react-redux';
import { ProductItem } from '../product-item/product-item.container';
import { GET_TWO_ITEMS } from '../../actions/actions'

class TwoItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            twoItems: []
        };
    }
    componentDidMount = () => {
        this.getTwoItems();
    }

    getTwoItems() {
        http.get('two-items').then(res => {
            this.props.getTwoItems(res.data);
        });
    }
    render() {
        return (
            <div class="col-md-6 two-items-bottom-items">
                <h2>Two items</h2>
                <div class="owl-carousel owl-carousel2">
                    {
                        this.props.twoItems.map((val, i) =>
                            <ProductItem inforItem={val} key={i} styleWith={'277px'}>
                            </ProductItem>
                        )}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        twoItems: state.twoItems
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getTwoItems: (response) => dispatch({ type: GET_TWO_ITEMS, payload: { twoItems: response } })
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(TwoItems);
