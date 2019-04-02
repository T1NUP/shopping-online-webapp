import React, { Component } from 'react';
import { MainCarousel } from '../../containers/main-carousel/main-carousel.container';
import NewArrivals from '../new-arrivals/new-arrivals.container';
import { VerticalCategory } from '../vertical-category/vertical-category.container';
import { PictureCarousel } from '../picture-carousel/picture-carousel.container';
import ThreeItems from '../../containers/three-items/three-items.container';
import TwoItems from '../../containers/two-items/two-items.container';

export class HomeContainer extends Component {
  render() {
    return (
      <>
        {<MainCarousel />}
        <div className="main">
          <div className="container">
            {<NewArrivals />}
            <div className="row margin-bottom-40">
              {<VerticalCategory />}
              {<ThreeItems />}
            </div>
            <div className="row margin-bottom-35">
              {<TwoItems />}
              {<PictureCarousel />}
            </div>
          </div>
        </div>
      </>
    );
  }
}