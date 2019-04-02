import React, { Component } from 'react';

export class AccountContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInputValid: true,
      errorFullName: null,
      errorFullAddress: null,
      errorAge: null,
      errorJob: null,
      errorPhone: null
    };
  }

  onHandleChange = e => {
    var {
      errorFullName,
      errorFullAddress,
      errorAge,
      errorJob,
      errorPhone
    } = this.state;
    var target = e.target;
    var name = target.name;
    var value = target.value;

    this.setState({
      [name]: value
    });
    if (name === 'fullName') {
      if (value === '') {
        this.setState({
          errorFullName: 'Tên không được để trống',
          isInputValid: true
        });
      } else {
        this.setState({
          errorFullName: ''
        });
      }
    }
    if (name === 'address') {
      if (value === '') {
        this.setState({
          errorFullAddress: 'Địa chỉ không được để trống',
          isInputValid: true
        });
      } else {
        this.setState({
          errorFullAddress: ''
        });
      }
    }
    if (name === 'age') {
      if (value === '') {
        this.setState({
          errorAge: 'Tuổi chỉ không được để trống',
          isInputValid: true
        });
      } else {
        this.setState({
          errorAge: ''
        });
      }
    }
    if (name === 'gender') {
      if (value === '') {
        this.setState({
          isInputValid: true
        });
      }
    }
    if (name === 'job') {
      if (value === '') {
        this.setState({
          errorJob: 'Công việc không được để trống',
          isInputValid: true
        });
      } else {
        this.setState({
          errorJob: ''
        });
      }
    }
    if (name === 'phone') {
      if (value === '') {
        this.setState({
          errorPhone: 'Số điện thoại không được để trống',
          isInputValid: true
        });
      }
      if (value !== '') {
        var regexPhone = /(09|03|01[2|6|8|9])+([0-9]{8})\b/g;
        var match = regexPhone.test(value);
        console.log(match);
        if (match === false) {
          this.setState({
            errorPhone: 'Số điện thoại không hợp lệ',
            isInputValid: true
          });
        }
        if (match === true) {
          this.setState({
            errorPhone: ''
          });
        }
      }
    }
    if (
      errorFullName === '' &&
      errorFullAddress === '' &&
      errorAge === '' &&
      errorJob === '' &&
      errorPhone === ''
    ) {
      this.setState({
        isInputValid: false
      });
    }
  };
  onHandelSubmit = e => {
    e.preventDefault();
    var { fullName, address, age, job, phone, birthday, gender } = this.state;
    var account = {
      fullName: fullName,
      address: address,
      age: age,
      phone: phone,
      job: job,
      gender: gender,
      birthday: birthday
    };
    console.log(account);
  };
  render() {
    return (
      <div>
        <h2>MY ACCOUNT PAGE</h2>
        <div className="form-account container">
          <div className="row">
            <div className="col-md-8">
              <form onSubmit={this.onHandelSubmit}>
                <div className=" row">
                  <div className="col-md-8">
                    <label htmlFor="fullName">Fullname</label>
                    <input
                      type="text"
                      id="fullName"
                      className="form-control"
                      placeholder="Enter your fullname"
                      name="fullName"
                      onChange={this.onHandleChange}
                      onBlur={this.onHandleChange}
                    />
                    <div
                      className={
                        this.state.errorFullName ? 'alert alert-danger' : ''
                      }
                    >
                      {this.state.errorFullName}
                    </div>
                  </div>
                  <div className="col-md-2" />
                  <div className="col-md-2" />
                </div>

                {/* .. */}
                <div className=" row mt-2">
                  <div className="col-md-8">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      className="form-control"
                      placeholder="Enter your address"
                      name="address"
                      onChange={this.onHandleChange}
                      onBlur={this.onHandleChange}
                    />
                    <div
                      className={
                        this.state.errorFullAddress ? 'alert alert-danger' : ''
                      }
                    >
                      {this.state.errorFullAddress}
                    </div>
                  </div>
                  <div className="col-md-2" />
                  <div className="col-md-2" />
                </div>

                {/* .. */}
                <div className="row mt-2">
                  <div className="col-md-4">
                    <label htmlFor="age">Age</label>
                    <input
                      type="number"
                      id="age"
                      className="form-control"
                      placeholder="Enter your age"
                      name="age"
                      onChange={this.onHandleChange}
                      onBlur={this.onHandleChange}
                    />
                    <div
                      className={
                        this.state.errorAge ? 'alert alert-danger' : ''
                      }
                    >
                      {this.state.errorAge}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="job">Jobs</label>
                    <input
                      type="text"
                      id="job"
                      className="form-control"
                      name="job"
                      onChange={this.onHandleChange}
                      onBlur={this.onHandleChange}
                    />
                    <div
                      className={
                        this.state.errorJob ? 'alert alert-danger' : ''
                      }
                    >
                      {this.state.errorJob}
                    </div>
                  </div>
                  <div className="col-md-4" />
                </div>
                {/* .. */}
                <div className="row mt-2">
                  <div className="col-md-4">
                    <label>Gender</label> <br />
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      defaultChecked
                      onChange={this.onHandleChange}
                      defaultValue="male"
                    />
                    <label htmlFor="male" className="pr-4">
                      &nbsp; Male
                    </label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      onChange={this.onHandleChange}
                      defaultValue="female"
                    />
                    <label htmlFor="female">&nbsp; Female</label>
                  </div>
                  <div className="col-md-4" />
                  <div className="col-md-4" />
                </div>
                {/* .. */}
                <div className="row mt-2">
                  <div className="col-md-4">
                    <label htmlFor="">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control"
                      name="birthday"
                      onChange={this.onHandleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      id="phone"
                      className="form-control"
                      name="phone"
                      onChange={this.onHandleChange}
                      onBlur={this.onHandleChange}
                    />
                    <div
                      className={
                        this.state.errorPhone ? 'alert alert-danger' : ''
                      }
                    >
                      {this.state.errorPhone}
                    </div>
                  </div>
                  <div className="col-md-4" />
                </div>
                <div className="form-group mt-2">
                  <button
                    className="btn btn-primary"
                    disabled={this.state.isInputValid}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
