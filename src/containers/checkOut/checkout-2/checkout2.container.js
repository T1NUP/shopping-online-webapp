import React from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import "../checkout1-2.scss";

const CheckOut2Form = ({ values, errors, touched }) => (
  <div>
    <Form>
      <div className="row">
        <div className="col-md-6">
          <h3>Your Personal Details</h3>
          <div className="form-group">
            <label htmlFor="accountFirstname">
              First Name <span className="red">*</span>
            </label>
            <Field
              type="text"
              className="form-control"
              id="accountFirstname"
              name="accountFirstname"
              placeholder=""
            />
            {touched.accountFirstname && errors.accountFirstname && (
              <p className="red">{errors.accountFirstname}</p>
            )}
            <div className="invalid-feedback">Pleae enter your first name</div>
          </div>
          <div className="form-group">
            <label htmlFor="accountLastName">
              Last Name <span className="red">*</span>
            </label>
            <Field
              type="text"
              className="form-control"
              id="accountLastName"
              name="accountLastName"
              placeholder=""
            />
            {touched.accountLastName && errors.accountLastName && (
              <p className="red">{errors.accountLastName}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="accountEmail">
              Email <span className="red">*</span>
            </label>
            <Field
              type="email"
              className="form-control"
              id="accountEmail"
              name="accountEmail"
              placeholder=""
            />
            {touched.accountEmail && errors.accountEmail && (
              <p className="red">{errors.accountEmail}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="accountTel">
              Telephone <span className="red">*</span>
            </label>
            <Field
              type="tel"
              className="form-control"
              id="accountTel"
              name="accountTel"
              placeholder=""
            />
            {touched.accountTel && errors.accountTel && (
              <p className="red">{errors.accountTel}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="accountFax">Fax</label>
            <Field
              type="tel"
              className="form-control"
              id="accountFax"
              name="accountFax"
              placeholder=""
            />
            {touched.accountFax && errors.accountFax && (
              <p className="red">{errors.accountFax}</p>
            )}
          </div>
          <h3>Your Password</h3>
          <div className="form-group">
            <label htmlFor="accountPw">
              Password <span className="red">*</span>
            </label>
            <Field
              type="password"
              className="form-control"
              id="accountPw"
              name="accountPw"
              placeholder=""
            />
            {errors.accountPw && touched.accountPw && (
              <p className="red">{errors.accountPw}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="accountPwConfirm">
              Password Confirm <span className="red">*</span>
            </label>
            <Field
              type="password"
              className="form-control"
              id="accountPwConfirm"
              name="accountPwConfirm"
              placeholder=""
            />
            {errors.accountPwConfirm && touched.accountPwConfirm && (
              <p className="red">{errors.accountPwConfirm}</p>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <h3>Your Address</h3>
          <div className="form-group">
            <label htmlFor="accountCompany">Company</label>
            <Field
              type="text"
              className="form-control"
              id="accountCompany"
              name="accountCompany"
              placeholder=""
            />
            {errors.accountCompany && touched.accountCompany && (
              <p className="red">{errors.accountCompany}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="accountAddress1">Address 1</label>
            <Field
              type="text"
              className="form-control"
              id="accountAddress1"
              name="accountAddress1"
              placeholder=""
            />
            {errors.accountAddress1 && touched.accountAddress1 && (
              <p className="red">{errors.accountAddress1}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="accountAddress2">Address 2</label>
            <Field
              type="text"
              className="form-control"
              id="accountAddress2"
              name="accountAddress2"
              placeholder=""
            />
            {errors.accountAddress2 && touched.accountAddress2 && (
              <p className="red">{errors.accountAddress2}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="accountCity">
              City <span className="red">*</span>
            </label>
            <Field
              type="text"
              className="form-control"
              id="accountCity"
              name="accountCity"
              placeholder=""
            />
            {errors.accountCity && touched.accountCity && (
              <p className="red">{errors.accountCity}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="accountPostCode">
              Post Code <span className="red">*</span>
            </label>
            <Field
              type="text"
              className="form-control"
              id="accountPostCode"
              name="accountPostCode"
              placeholder=""
            />
            {errors.accountPostCode && touched.accountPostCode && (
              <p className="red">{errors.accountPostCode}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="accountCountry">
              Country <span className="red">*</span>
            </label>
            <Field
              component="select"
              className="custom-select"
              id="accountCountry"
              name="accountCountry"
            >
              <option>-- Please Select --</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Field>
            {errors.accountCountry && touched.accountCountry && (
              <p className="red">{errors.accountCountry}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="accountRegion">
              Region/State <span className="red">*</span>
            </label>
            <Field
              component="select"
              className="custom-select"
              id="accountRegion"
              name="accountRegion"
            >
              <option>-- Please Select --</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Field>
            {errors.accountRegion && touched.accountRegion && (
              <p className="red">{errors.accountRegion}</p>
            )}
          </div>
        </div>
      </div>
      <hr />
      <div className="form-check">
        <Field
          type="checkbox"
          className="form-check-input"
          id="subcribeCheck"
          name="subcribeCheck"
        />
        <label className="form-check-label" htmlFor="subcribeCheck">
          I wish to subcribe to the OXY newsletter.
        </label>
      </div>

      <div className="form-check">
        <Field
          type="checkbox"
          className="form-check-input"
          id="addressCheck"
          name="addressCheck"
          checked={values.addressCheck}
        />
        <label className="form-check-label" htmlFor="addressCheck">
          My delivery and billing addresses are the same.
        </label>
      </div>
      <div className="d-flex justify-content-end align-items-center">
        <div className="d-flex flex-column pr-3 align-items-end">
          <div className="form-check">
            <Field
              type="checkbox"
              className="form-check-input"
              id="policyCheck"
              name="policyCheck"
            />
            <label className="form-check-label" htmlFor="policyCheck">
              I have to read and agree to the <a href="#">Privacy Policy</a>
            </label>
          </div>
          {errors.policyCheck && <p className="red">{errors.policyCheck}</p>}
        </div>
        <button className="btn" type="submit">
          Continue
        </button>
      </div>
    </Form>
  </div>
);

const CheckOut2 = withFormik({
  mapPropsToValues({
    accountFirstname,
    accountLastName,
    accountEmail,
    accountTel,
    accountFax,
    accountPw,
    accountPwConfirm,
    accountCompany,
    accountAddress1,
    accountAddress2,
    accountCity,
    accountPostCode,
    accountCountry,
    accountRegion,
    subcribeCheck,
    addressCheck,
    policyCheck
  }) {
    return {
      accountFirstname: accountFirstname || "",
      accountLastName: accountLastName || "",
      accountEmail: accountEmail || "",
      accountTel: accountTel || "",
      accountFax: accountFax || "",
      accountPw: accountPw || "",
      accountPwConfirm: accountPwConfirm || "",
      accountCompany: accountCompany || "",
      accountAddress1: accountAddress1 || "",
      accountAddress2: accountAddress2 || "",
      accountCity: accountCity || "",
      accountPostCode: accountPostCode || "",
      accountCountry: accountCountry || "",
      accountRegion: accountRegion || "",
      subcribeCheck: subcribeCheck || false,
      addressCheck: addressCheck || true,
      policyCheck: policyCheck || false
    };
  },
  validationSchema: yup.object().shape({
    accountEmail: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    accountPw: yup
      .string()
      .min(8, "Your password must be at least 8 chareacters")
      .required("Please enter your password"),
    accountFirstname: yup.string().required("Please enter your first name"),
    accountLastName: yup.string().required("Please enter your last name"),
    accountTel: yup.string().required("Please enter your telaphone number"),
    accountFax: yup.string(),
    accountPwConfirm: yup
      .string()
      .oneOf([yup.ref("accountPw"), null], "Passwords must match")
      .required("Please confirm your password"),
    accountCompany: yup.string(),
    accountAddress1: yup.string(),
    accountAddress2: yup.string(),
    accountCity: yup.string().required("Please enter your city"),
    accountPostCode: yup.string().required("Please enter post code"),
    accountCountry: yup.string().required("Please select your country"),
    accountRegion: yup.string().required("Please select your region/state"),
    // subcribeCheck: ,
    // addressCheck: ,
    policyCheck: yup.bool().oneOf([true], "Must agree to our policies")
  }),
  handleSubmit(values) {
    console.log(values);
  }
})(CheckOut2Form);
export default CheckOut2;
