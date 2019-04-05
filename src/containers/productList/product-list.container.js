import React, { Component } from "react";
import { VerticalCategory } from "../vertical-category/vertical-category.container";
import "./product-list.container.scss";

import { ProductItem } from "../product-item/product-item.container";
import { http } from "../../services/http.service";
import { connect } from "react-redux";
import { GET_API, GET_CART } from "../../actions/actions";
import SortProductComponent from "../../components/sortProduct/sort-product.component";
import FilterProductComponent from "../../components/filterProduct/filter-product.component";
import BestSellerComponent from "../../components/bestSeller/best-seller.component";
import PaginationComponent from "../../components/pagination/pagination.component";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumb.component";
import SearchComponent from "../../components/search/search.component";

class ProductListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount = () => {
    this.getProducts();
  };
  fillIndex = id => {
    var { products } = this.props;
    var result = -1;
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
    return result;
  };
  addToCart = id => {
    var { products } = this.props;
    var index = this.fillIndex(id);
    if (index !== -1) {
      products[index].quantity = 1;
      http.post("carts", products[index]).then(res => {});
      http.get("carts").then(res => {
        this.props.addToCart(res.data);
      });
    }
  };
  getProducts() {
    http.get("products").then(res => {
      this.props.getProducts(res.data);
    });
  }
  filterProduct = (filter, productList) => {
    let avai = filter.not_available;
    let stock = filter.in_stock;
    let price_from = filter.price_from;
    let price_to = filter.price_to;
    let filteredProduct;

    if (!avai) {
      if (!stock) {
        filteredProduct = productList;
      } else {
        filteredProduct = productList.filter(product => {
          return product.availability === "in stock";
        });
      }
    }
    if (avai) {
      if (stock) {
        filteredProduct = productList.filter(product => {
          return (
            product.availability === "in stock" ||
            product.availability === "not available"
          );
        });
      } else {
        filteredProduct = productList.filter(product => {
          return product.availability === "not available";
        });
      }
    }
    return filteredProduct.filter(product => {
      return product.cost >= price_from && product.cost <= price_to;
    });
  };
  sortProduct = (display, productList) => {
    let sortedProduct;
    let sort = display.sort;
    if (sort === "default") {
      sortedProduct = productList.sort((a, b) => a.cost - b.cost);
    } else {
      sortedProduct = productList.sort((a, b) => b.cost - a.cost);
    }
    return sortedProduct;
  };
  showProduct = (current, pageSize, sortedProduct) => {
    return sortedProduct.slice((current - 1) * pageSize, current * pageSize);
  };
  render() {
    let productList = this.props.products;
    let filter = this.props.filter;
    let display = this.props.display;
    let current = this.props.current;
    let filteredProduct = this.filterProduct(filter, productList);
    let sortedProduct = this.sortProduct(display, filteredProduct);
    let showedProduct = this.showProduct(current, display.show, sortedProduct);
    let avai = productList.filter(product => {
      return product.availability === "not available";
    }).length;
    let stock = productList.filter(product => {
      return product.availability === "in stock";
    }).length;
    const routes = [
      {
        path: "/",
        breadcrumbName: "home"
      },
      {
        path: "/product_list",
        breadcrumbName: "Man category"
      }
    ];

    if (showedProduct.length === 0) {
      current = 1;
      showedProduct = this.showProduct(current, display.show, sortedProduct);
    }
    return (
      <div className="main product-list">
        <div className="product-list__banner">
          <img
            src="assets/pages/img/title-bg/man.jpg"
            alt=""
            className="product-list__banner__img"
          />
          <div className="product-list__banner__content">
            <div className="container">
              <div className="product-list__banner__content__title">
                <span className="product-list__banner__content__title--red">
                  man
                </span>
                category
              </div>
              <div className="product-list__banner__content__detail">
                Over 4000 Items are available here
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <BreadcrumbComponent routes={routes} />
          <div className="row margin-bottom-40">
            <div className="col-lg-3 mobile-none">
              <VerticalCategory />
              <FilterProductComponent avai={avai} stock={stock} />
              <BestSellerComponent />
            </div>
            <div className="col-lg-9 ">
              <div className="product-list__sort">
                <SearchComponent />
              </div>
            
              <div className="product-list__sort">
                <SortProductComponent />
              </div>
              <div className="product-list__wrap">
                <div className="product-list__result">
                  {showedProduct.map((val, i) => (
                    <div className="col-sm-4" key={i}>
                      <ProductItem
                        inforItem={val}
                        styleWith={"100%"}
                        addToCart={this.addToCart}
                      />
                    </div>
                  ))}
                </div>
                {sortedProduct.length === 0 ? (
                  <div className="product-list__none">
                    NHẦM DB RỒI ANH CHỊ EM ƠI, CHẠY DB.JSON NHÉ :))
                  </div>
                ) : (
                  <PaginationComponent productTotal={filteredProduct} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products,
    display: state.sort,
    filter: state.filter,
    current: state.pagination
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: response =>
      dispatch({ type: GET_API, payload: { products: response } }),
    addToCart: response =>
      dispatch({ type: GET_CART, payload: { carts: response } })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer);
