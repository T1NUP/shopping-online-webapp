import React, { Component } from 'react';
import { Rate } from 'antd';

function Star(props) {
    return (
        <div className={`star ${(props.act) ? 'active' : ''} `} >
            <i className="fas fa-star"></i>
        </div>
    )
}

export class StarRate extends Component {


    handleChange = (e) => {
        console.log(e);
        this.props.onRate(e);
    }

    render() {
        return (
            <span>
                <Rate onChange={this.handleChange} value={this.props.rated} />
            </span>
        );
    }
}

export default class RatingStar extends Component {

    renderStar(i, a) {
        return (
            <Star key={i} act={a} />
        )
    }
    render() {

        var rows = [];
        for (var i = 1; i < 6; i++) {
            if (i <= this.props.starActive) {
                rows.push(this.renderStar(i, true));
            } else {
                rows.push(this.renderStar(i, false));
            }
        }
        return (
            <div className='rating-stars'>
                {rows}
            </div>
        )
    }
}