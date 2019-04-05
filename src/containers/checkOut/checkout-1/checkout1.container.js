import React from "react";
import "../checkout1-2.scss";
import { withFormik, Form, Field } from "formik";
import { WrappedLoginForm } from "../../../components/login/login.component";
import * as yup from "yup";

const CheckOut1Form = ({ values, errors }) => (
  <div>
    <div className="row">
      <div className="col-md-6">
        <h3>New Customer</h3>
        <p>Checkout Options:</p>
        <Form>
          <div className="form-check">
            <Field
              className="form-check-input"
              type="radio"
              name="customerRadios"
              id="customerRadios1"
              value="registerAccount"
            />
            <label className="form-check-label" htmlFor="customerRadios1">
              Register Account
            </label>
          </div>
          <div className="form-check">
            <Field
              className="form-check-input"
              type="radio"
              name="customerRadios"
              id="customerRadios2"
              value="guestCheckout"
            />
            <label className="form-check-label" htmlFor="customerRadios2">
              Guest Checkout
            </label>
          </div>
          {errors.customerRadios && (
            <p className="red">{errors.customerRadios}</p>
          )}

          <p>
            By creating an account you will be able to shop faster, be up to
            date on an other's status, and keep track of the orders you have
            privious made.
          </p>
          <button className="btn" type="submit">
            Continue
          </button>
        </Form>
      </div>
      <div className="col-md-6">
        <h3>Returning Customer</h3>
        <p>I am a reurning customer</p>
        <div className="login-checkout">
          <WrappedLoginForm />
        </div>

        <div className="login-socio mt-3">
          <p className="text-muted">or login using:</p>
          <ul className="social-icons">
            <li>
              <a
                href="javascript:;"
                data-original-title="facebook"
                className="facebook"
                title="facebook"
              />
            </li>
            <li>
              <a
                href="javascript:;"
                data-original-title="Twitter"
                className="twitter"
                title="Twitter"
              />
            </li>
            <li>
              <a
                href="javascript:;"
                data-original-title="Google Plus"
                className="googleplus"
                title="Google Plus"
              />
            </li>
            <li>
              <a
                href="javascript:;"
                data-original-title="Linkedin"
                className="linkedin"
                title="LinkedIn"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const CheckOut1 = withFormik({
  mapPropsToValues({ customerRadios }) {
    return {
      customerRadios: customerRadios || ""
    };
  },
  validationSchema: yup.object().shape({
    customerRadios: yup.string().required("You have to choose one option")
  }),
  handleSubmit(values) {
    console.log(values);
  }
})(CheckOut1Form);
export default CheckOut1;

// <form>
//           <div className="form-group">
//             <label htmlFor="customerEmail">E-Mail</label>
//             <input
//               type="email"
//               className="form-control"
//               id="customerEmail"
//               placeholder=""
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="customerPw">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="customerPw"
//               placeholder=""
//             />
//           </div>
//           <p>
//             <a href="#">Forgotten Password?</a>
//           </p>
//           <button className="btn" type="submit">
//             Login
//           </button>
//         </form>
