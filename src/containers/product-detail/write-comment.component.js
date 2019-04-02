import React, { Component } from 'react';
import { v4 } from 'uuid';
import { StarRate } from '../../components/rating-star/rating-star.component';


export class WriteComment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rate: 5,
      submited: false,
      validName: false,
      validEmail: false,
      validReview: false
    };
  }
  handlechange = (e) => {
    var fieldName = e.target.name;
    var fieldValue = e.target.value;

    var regexName = /^[0-9a-zA-Z]{4,32}$/g;
    var regexEmail = /^([a-z0-9]{3,32})@([a-z]{2,}).([a-z]{2,})$/g;
    var regexReview = /\w/g;

    if (fieldName === 'nameC') {
      this.setState({
        nameC: fieldValue,
        validName: regexName.test(fieldValue)
      })
    }
    if (fieldName === 'email') {
      this.setState({
        email: fieldValue,
        validEmail: regexEmail.test(fieldValue)
      })
    }
    if (fieldName === 'review') {
      this.setState({
        review: fieldValue,
        validReview: regexReview.test(fieldValue)
      })
    }
    e.preventDefault();
  }

  writeCommentSubmit = (e) => {
    e.preventDefault();


    this.setState({
      submited: true
    })
    var { nameC, email, review, validName, validEmail, validReview } = this.state;

    if (!nameC || !email || !review) {
      alert('Moi nhap day du thong tin');
    } else {
      if (validName && validEmail && validReview) {
        var comment = {
          id: v4(),
          name: this.state.nameC,
          email: this.state.email,
          review: this.state.review,
          ratting: this.state.rate,
          createAt: new Date()
        }
        this.props.handleSubmit(comment);
        e.target.reset();
      }
    }

  }

  onRate = (params) => {
    this.setState({
      rate: params
    })
  }

  render() {

    return (
      <div className="write-commnet">
        <h3>White review</h3>
        <div className="form-write-comment">
          <form action="" onSubmit={this.writeCommentSubmit}>
            <div className="form-group">
              <label>Name <span className="color-oranges">*</span></label>
              <input
                type="text"
                className={`form-control ${(this.state.submited && !this.state.validName) ? 'border border-danger text-danger' : ''} `}
                name="nameC"
                onChange={this.handlechange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className={`form-control ${(this.state.submited && !this.state.validEmail) ? 'border border-danger text-danger' : ''} `}
                name="email"
                onChange={this.handlechange}
              />
            </div>
            <div className="form-group">
              <label>Review <span className="color-oranges">*</span></label>
              <textarea
                className={`form-control ${(this.state.submited && !this.state.validReview) ? 'border border-danger text-danger' : ''} `}
                rows="8" name="review"
                onChange={this.handlechange}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Ratting </label>
              <label className="star">
                <StarRate onRate={this.onRate} />
              </label>
            </div>
            <button type="submit" className="btn-send" >Send</button>
          </form>
        </div>
      </div>
    )
  }
}

export default WriteComment;