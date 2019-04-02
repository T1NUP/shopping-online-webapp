import React, { Component } from 'react';
import { connect } from 'react-redux';
import { http } from '../../services/http.service';
import './product-detail.css';
import { GET_NEW_POPULAR, GET_PRODUCT_DETAIL, UPDATE_PRODUCT } from '../../actions/actions';

import { VerticalCategory } from '../vertical-category/vertical-category.container';
import WriteComment from './write-comment.component';
import { ProductItem } from '../product-item/product-item.container';
import Gallery from '../../components/gallery/gallery.component';
import BestSellerComponent from '../../components/bestSeller/best-seller.component';


import RatingStar from '../../components/rating-star/rating-star.component';

function CheckStatus(props) {
  if (props.status === 'new') {
    return <div className="status-new"><img src="../assets/pages/img/new.png" alt="" /></div>
  } else {
    return <div className="status-sale"><img src="../assets/pages/img/sale.png" alt="" /></div>
  }
}

function CheckPrice(props) {
  if (props.price) {
    if (props.status === 'new') {
      return <h2 className="price-new color-oranges">${props.price}</h2>
    } else {
      var afterSale = props.price * [(100 - props.valueSale) / 100];
      return (
        <>
          <h2 className="price-sale color-oranges">${Number.parseFloat(afterSale).toFixed(2)}</h2>
          <h3 className="price-old">${props.price}</h3>
        </>
      )
    }
  }
  return <span>New</span>;
}


function CreateAt(props) {
  var time = props.date;
  var date = time.slice(0, 10).split('-');
  return (
    <p>{date[1] + '/' + date[2] + '/' + date[0]}</p>
  );
}

export class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPopular: []
    }
  }

  componentDidMount = () => {
    var path = this.props.location.pathname;
    var id = path.slice(path.lastIndexOf('/') + 1);

    this.getProductDetail(id);
    this.getNewPopular();
  }

  getProductDetail = (id) => {
    http.get('products/' + id).then(res => {
      this.props.getProductByID(res.data)
    });
  }
  updateProduct = (id, data) => {
    http.put('products/' + id, data).then(res => {
      this.props.updateProduct(res.data);
    })
  }

  getNewPopular = () => {
    http.get('popular-products').then(res => {
      this.props.getNewPopular(res.data);
    });
  }


  handleSubmit = (params) => {
    var product = this.props.productDetail;
    product.comments.push(params);
    this.updateProduct(product.id, product);
  }

  render() {
    var product = this.props.productDetail;

    // total star
    if (product.comments && product.comments.length !== 0) {
      var arrRating = product.comments.map(item => item.ratting);
      var totalRating = arrRating.reduce((a, b) => a + b);
      var tbRating = Math.round(totalRating / arrRating.length);
    }

    return (
      <div>
        <div className="main">
          <div className="container">
            <h4>HOME > STORE > COOL GREEN DRESS WITH RED BELL</h4>
            <div className="row margin-bottom-40">
              <div className="frame-left col-md-3 col-sm-4">
                <VerticalCategory />
                <BestSellerComponent />
              </div>

              <div className="col-9">
                <div className="frame-product">
                  <div className="info-product">
                    <div className="item images-product">
                      <div className="gallery d-flex h-100 flex-column">
                        <Gallery images={product.arrImage} currentImage={product.nameImage} />
                      </div>
                      <CheckStatus status={!product.type ? '' : product.type} />
                    </div>
                    <div className="item infomation">
                      <h2>{product.productName}</h2><hr />
                      <div className="cost">
                        <div className="prices">
                          <CheckPrice
                            price={product.cost}
                            status={product.type}
                            valueSale={product.valueSale}
                          />
                        </div>
                        <div className="availability">
                          <span>Availability: {product.availability}</span>
                        </div>
                      </div><hr />
                      <div className="description">{product.description}</div><hr />
                      <div className="statistical">
                        <div className="size">
                          <span>SIZE</span>
                          <select>
                            {!product.size ? '' : product.size.map(i =>
                              <option value={i} key={i.toString()}>{i}</option>
                            )}
                          </select>
                        </div>
                        <div className="color">
                          <span>COLOR</span>
                          <select>
                            {!product.color ? '' : product.color.map(i =>
                              <option value={i} key={i.toString()}>{i}</option>
                            )}
                          </select>
                        </div>
                      </div>
                      <hr />
                      <div className="add-to-cart">
                        <input type="number" style={{ width: '50px' }} />
                        <button type="submit" className=" ml-3 btn-send">Add to cart</button>
                      </div><hr />
                      <div className="reviews">
                        <div className="d-inline-block">
                          <RatingStar starActive={tbRating} />
                        </div>
                        <div className="total-review d-inline color-oranges">
                          <span className="border-right  pl-4 pr-2 ">{product.comments ? product.comments.length + ' reviews' : '0 reviews'}</span>
                          <a href="#write-review" className="color-oranges"><span className="pl-2">Write a review</span></a>
                        </div>

                      </div><hr />
                      <div className="social">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter-square"></i>
                        <i className="fab fa-google-plus-square"></i>
                        <i className="fab fa-tumblr-square"></i>
                      </div>
                    </div>

                  </div>
                  <div className="tab-bar">
                    <div className="container">
                      <ul className="nav nav-tabs">
                        <li><a data-toggle="tab" href="#description">Description</a></li>
                        <li><a data-toggle="tab" href="#information">information</a></li>
                        <li className="active"><a data-toggle="tab" href="#review">review ({product.comments ? product.comments.length : ''})</a></li>
                      </ul>

                      <div className="tab-content bg-white">
                        <div id="description" className="tab-pane ">
                          <h3>Description</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div id="information" className="tab-pane">
                          <h3>information</h3>
                          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div id="review" className="tab-pane in active">
                          <div className="comments">
                            {!product.comments ? [] : product.comments.map((item, index) =>
                              <div key={index}>
                                <div className="info-comment">
                                  <div className="infos">
                                    <b>{item.name}</b>
                                    <CreateAt date={item.createAt} />
                                    {/* <p>{item.createAt.getDate()}</p> */}
                                  </div>
                                  <div className="ratting ml-auto ">
                                    <RatingStar starActive={item.ratting} />
                                  </div>
                                </div>
                                <div className="comment">{item.review}</div><hr />
                              </div>
                            )}
                          </div>
                          <span id="write-review"></span>
                          <WriteComment product={product} handleSubmit={this.handleSubmit} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" m-auto pt-5">
                <h3>MOST POPULAR PRODUCTS</h3>
                <div className="d-flex">
                  {this.props.newPopular.map((val, i) =>
                    <ProductItem
                      inforItem={val}
                      key={i}
                      styleWith={'100%'}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

const mapStateToProps = state => {
  return {
    productDetail: state.productDetail,
    newPopular: state.newPopular
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProductByID: response =>
      dispatch({ type: GET_PRODUCT_DETAIL, payload: { product: response } }),
    updateProduct: res =>
      dispatch({ type: UPDATE_PRODUCT, payload: { product: res } }),
    getNewPopular: response =>
      dispatch({ type: GET_NEW_POPULAR, payload: { newPopular: response } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
