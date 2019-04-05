import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { http } from "../../services/http.service";
import "./product-detail.css";
import {
  GET_NEW_POPULAR,
  GET_PRODUCT_DETAIL,
  UPDATE_PRODUCT,
  GET_CART
} from "../../actions/actions";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  TumblrShareButton,
  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  TumblrIcon
} from "react-share";

import { VerticalCategory } from "../vertical-category/vertical-category.container";
import WriteComment from "./write-comment.component";
import { ProductItem } from "../product-item/product-item.container";
import Gallery from "../../components/gallery/gallery.component";
import BestSellerComponent from "../../components/bestSeller/best-seller.component";

import RatingStar from "../../components/rating-star/rating-star.component";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";

function CheckStatus(props) {
  if (props.status === "new") {
    return (
      <div className="status-new">
        <img src="../assets/pages/img/new.png" alt="" />
      </div>
    );
  } else {
    return (
      <div className="status-sale">
        <img src="../assets/pages/img/sale.png" alt="" />
      </div>
    );
  }
}

function CheckPrice(props) {
  if (props.price) {
    if (props.status === "new") {
      return <h2 className="price-new color-oranges">${props.price}</h2>;
    } else {
      var afterSale = props.price * [(100 - props.valueSale) / 100];
      return (
        <>
          <h2 className="price-sale color-oranges">
            ${Number.parseFloat(afterSale).toFixed(2)}
          </h2>
          <h3 className="price-old">${props.price}</h3>
        </>
      );
    }
  }
  return <span>New</span>;
}

function CreateAt(props) {
  var time = props.date;
  var date = time.slice(0, 10).split("-");
  return <p>{date[1] + "/" + date[2] + "/" + date[0]}</p>;
}

function SocialPDetail(props) {
  const shareUrl = JSON.stringify(window.location);
  return (
    <div className="Demo__some-network">
      <ul className="social-icons">
        <li>
          <Link className="facebook" data-original-title="facebook" to="/">
            <FacebookShareButton
              url={shareUrl}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon size={29} round />
            </FacebookShareButton>
          </Link>
        </li>
        <li>
          <Link className="twitter" data-original-title="twitter" to="/">
            <TwitterShareButton
              url={shareUrl}
              className="Demo__some-network__share-button"
            >
              <TwitterIcon size={29} round />
            </TwitterShareButton>
          </Link>
        </li>
        <li>
          <Link
            className="googleplus"
            data-original-title="googleplus"
            to="/"
          >
            <GooglePlusShareButton
              url={shareUrl}
              className="Demo__some-network__share-button"
            >
              <GooglePlusIcon size={29} round />
            </GooglePlusShareButton>
          </Link>
        </li>
        <li>
          <Link className="tumblr" data-original-title="tumblr" to="/" >
            <TumblrShareButton
              url={shareUrl}
              className="Demo__some-network__share-button"
            >
              <TumblrIcon size={29} round />
            </TumblrShareButton>
          </Link>
        </li>
      </ul>
    </div>

  );
}

export class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPopular: [],
      productNotFound: false
    };
  }

  componentDidMount = () => {
    var path = this.props.location.pathname;
    var id = path.slice(path.lastIndexOf('/') + 1);

    this.getProductDetail(id);
    this.getNewPopular();
    this.getAllCart();
  };

  getProductDetail = (id) => {
    http.get('products/' + id).then(res => {
      this.setState({ productNotFound: false });
      this.props.getProductByID(res.data)
    }, () => this.setState({ productNotFound: true }));
  };

  updateProduct = (id, data) => {
    http.put("products/" + id, data).then(res => {
      this.props.updateProduct(res.data);
    });
  };

  getNewPopular = () => {
    http.get("popular-products").then(res => {
      this.props.getNewPopular(res.data);
    });
  };

  handleSubmit = params => {
    var product = this.props.productDetail;
    product.comments.push(params);
    this.updateProduct(product.id, product);
  };


  getAllCart = () => {
    http.get("carts").then(res => {
      this.props.getCart(res.data);
    });
  }

  addToCart = (p) => {
    http.post("carts", p).then(() => {
      alert('success');
      this.getAllCart()
    });
  }
  updateToCart = (p) => {
    http.put("carts/" + p.id, p).then(() => {
      alert('cap nhat quantity success');
      this.getAllCart()
    });
  }


  submitAddToCart = (e) => {
    e.preventDefault();
    let target = e.target;
    let size = target.size.value;
    let color = target.color.value;
    let quantity = target.quantity.value;
    let { productDetail } = this.props;
    let { carts } = this.props;
    let item = { ...productDetail };


    let index = carts.filter(cart => cart.id === productDetail.id);

    if (index.length === 0) {
      item.quantity = quantity;
      item.color = color;
      item.size = size;
      this.addToCart(item);
    } else {
      index[0].quantity = parseFloat(index[0].quantity) + parseFloat(quantity);
      this.updateToCart(index[0]);
    }
  }

  render() {
    var product = this.props.productDetail;
    let path = this.props.location.pathname;
    let pathName = product.productName;

    const routes = [
      {
        path: "/",
        breadcrumbName: "home"
      },
      {
        path: "/product_list",
        breadcrumbName: "Man category"
      },
      {
        path: path,
        breadcrumbName: pathName
      }
    ];
    // total star
    if (product.comments && product.comments.length !== 0) {
      var arrRating = product.comments.map(item => item.ratting);
      var totalRating = arrRating.reduce((a, b) => a + b);
      var tbRating = Math.round(totalRating / arrRating.length);
    }

    return (
      <>
        <div>
          <div className="main">
            <div className="container">
              <BreadcrumbComponent routes={routes} />
              <div className="row margin-bottom-40">
                <div className="frame-left col-md-3 col-sm-4">
                  <VerticalCategory />
                  <BestSellerComponent />
                </div>


                {this.state.productNotFound ?
                  (<div>Product Not Found!</div>) :

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

                          <form action="" onSubmit={this.submitAddToCart}>
                            <div className="statistical">
                              <div className="size">
                                <span>SIZE</span>
                                <select name="size" >
                                  {!product.size ? '' : product.size.map(i =>
                                    <option value={i} key={i.toString()}>{i}</option>
                                  )}
                                </select>
                              </div>
                              <div className="color">
                                <span>COLOR</span>
                                <select name="color" >
                                  {!product.color ? '' : product.color.map(i =>
                                    <option value={i} key={i.toString()}>{i}</option>
                                  )}
                                </select>
                              </div>
                            </div>
                            <hr />
                            <div className="add-to-cart">
                              <input
                                type="number"
                                name="quantity"
                                style={{ width: '50px' }}
                                defaultValue="1"
                                min="0"
                              />
                              <button type="submit" className=" ml-3 btn-send">Add to cart</button>
                            </div><hr />
                          </form>

                          <div className="reviews">
                            <div className="d-inline-block">
                              <RatingStar starActive={tbRating} />
                            </div>
                            <div className="total-review d-inline color-oranges">
                              <span className="border-right  pl-4 pr-2 ">{product.comments ? product.comments.length + ' reviews' : '0 reviews'}</span>
                              <a href="#write-review" className="color-oranges"><span className="pl-2">Write a review</span></a>
                            </div>
                          </div><hr />
                          <div>
                            <SocialPDetail />
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

                }


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
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    productDetail: state.productDetail,
    newPopular: state.newPopular,
    carts: state.carts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProductByID: response =>
      dispatch({ type: GET_PRODUCT_DETAIL, payload: { product: response } }),
    updateProduct: res =>
      dispatch({ type: UPDATE_PRODUCT, payload: { product: res } }),
    getNewPopular: response =>
      dispatch({ type: GET_NEW_POPULAR, payload: { newPopular: response } }),
    getCart: response =>
      dispatch({ type: GET_CART, payload: { carts: response } })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
