import React, { Component } from 'react';
import { http } from '../../services/http.service';
import { GET_NEW_POPULAR } from '../../actions/actions';
import PopularItem from '../popular-item/popular-item.container';
import { connect } from 'react-redux';
class PopularCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPopular: []
    };
  }

  componentDidMount = () => {
    this.getNewPopular();
  };

  getNewPopular = () => {
    http.get('popular-products').then(res => {
      this.props.getNewPopular(res.data);
    });
  };
  render() {
    return (
      <div className="mt-5">
        <h5>MOST POPULAR PRODUCTS</h5>
        <div className="row margin-bottom-40">
        <div className="col-md-12 sale-product">
          <div className="owl-carousel owl-carousel5">
            {
              this.props.newPopular.map((val, i) =>
                <PopularItem inforItem={val} key={i} styleWith={'228px'} />
              )}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newPopular: state.newPopular
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getNewPopular: response =>
      dispatch({ type: GET_NEW_POPULAR, payload: { newPopular: response } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularCart);
