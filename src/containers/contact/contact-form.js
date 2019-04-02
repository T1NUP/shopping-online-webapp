import React, { Component } from 'react'

export default class ContactForm extends Component {
    render() {
        return (
            <form
                onSubmit= {event => {
                    event.preventDefault();
                    onSubmit(event);
                }}
              >
                <div className="form-group">
                  <p>Name</p>
                  <input type="text" className="form-control form-control-lg" />
                </div>
                <div className="form-group">
                  <p>Email</p>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-group">
                  <p>Name</p>
                  <textarea class="form-control" rows="5" />
                </div>

                <button class="btn btn-submit text-uppercase">submit</button>
              </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (evt) => {
            dispatch(setTextSearch(evt.target.querySelector('input').value))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(containerName)