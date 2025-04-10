import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form11.css'

const ContactForm11 = (props) => {
  return (
    <div className="contact-form11-contact11 thq-section-padding">
      <div className="contact-form11-max-width thq-section-max-width">
        <div className="contact-form11-row thq-flex-row thq-card">
          <div className="contact-form11-content1">
            <svg
              viewBox="0 0 1024 1024"
              className="contact-form11-icon1 thq-icon-small"
            >
              <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
            </svg>
            <div className="contact-form11-contact-info1">
              <h3 className="thq-heading-3">Email</h3>
              <span className="contact-form11-email thq-body-small">
                {props.email ?? (
                  <Fragment>
                    <span className="contact-form11-text17">
                      Enter your email address
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact-form11-content2">
            <svg
              viewBox="0 0 1024 1024"
              className="contact-form11-icon3 thq-icon-small"
            >
              <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
            </svg>
            <div className="contact-form11-contact-info2">
              <h3 className="thq-heading-3">Phone</h3>
              <span className="contact-form11-phone thq-body-small">
                {props.phone ?? (
                  <Fragment>
                    <span className="contact-form11-text19">
                      Enter your phone number
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="contact-form11-content3">
            <svg
              viewBox="0 0 1024 1024"
              className="contact-form11-icon5 thq-icon-small"
            >
              <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
            </svg>
            <div className="contact-form11-contact-info3">
              <h3 className="thq-heading-3">Office</h3>
              <span className="contact-form11-address thq-body-small">
                {props.address ?? (
                  <Fragment>
                    <span className="contact-form11-text20">
                      Enter your mailing address
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="contact-form11-content4">
          <form className="contact-form11-form thq-card">
            <div className="contact-form11-container">
              <div className="contact-form11-input1">
                <label
                  htmlFor="contact-form-11-first-name"
                  className="thq-body-small"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="contact-form-11-first-name"
                  placeholder="First Name"
                  className="thq-input"
                />
              </div>
              <div className="contact-form11-input2">
                <label
                  htmlFor="contact-form-11-last-name"
                  className="thq-body-small"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="contact-form-11-last-name"
                  placeholder="Last Name"
                  className="thq-input"
                />
              </div>
            </div>
            <div className="contact-form11-input3">
              <label htmlFor="contact-form-11-email" className="thq-body-small">
                Email
              </label>
              <input
                type="text"
                id="contact-form-11-email"
                required="true"
                placeholder="Email"
                className="contact-form11-text-input3 thq-input"
              />
            </div>
            <div className="contact-form11-input4">
              <label
                htmlFor="contact-form-11-message"
                className="thq-body-small"
              >
                Message
              </label>
              <textarea
                id="contact-form-11-message"
                rows="3"
                placeholder="Enter your message"
                className="thq-input"
              ></textarea>
            </div>
            <button type="submit" className="thq-button-filled">
              <span className="thq-body-small">
                {props.submitAction ?? (
                  <Fragment>
                    <span className="contact-form11-text18">
                      Submit your inquiry
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm11.defaultProps = {
  email: undefined,
  submitAction: undefined,
  phone: undefined,
  address: undefined,
}

ContactForm11.propTypes = {
  email: PropTypes.element,
  submitAction: PropTypes.element,
  phone: PropTypes.element,
  address: PropTypes.element,
}

export default ContactForm11
