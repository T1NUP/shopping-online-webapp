import React, { Component } from 'react';

export class PictureCarousel extends Component {

    render() {
        return (
            <div className="col-md-6 shop-index-carousel">
                <div className="content-slider">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src="assets/pages/img/index-sliders/slide1.jpg" className="img-responsive" alt="Berry Lace Dress" />
                            </div>
                            <div className="item">
                                <img src="assets/pages/img/index-sliders/slide2.jpg" className="img-responsive" alt="Berry Lace Dress" />
                            </div>
                            <div className="item">
                                <img src="assets/pages/img/index-sliders/slide3.jpg" className="img-responsive" alt="Berry Lace Dress" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
