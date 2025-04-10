import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features.css'

const Features = (props) => {
  return (
    <div id="inspiration" className="features-features">
      <div className="features-heading-container">
        <h2 className="features-text10 BigCard-Heading">
          {props.heading ?? (
            <Fragment>
              <span className="features-text25">Our Six Step Process</span>
            </Fragment>
          )}
        </h2>
      </div>
      <div className="features-cards-container">
        <div className="features-features-card1">
          <div className="features-icon-container1">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a1 1 0 0 1-.707.293Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="features-text-container1 textarea">
            <span className="features-heading1 Card-Heading">
              {props.heading1 ?? (
                <Fragment>
                  <span className="features-text24">Step 1</span>
                </Fragment>
              )}
            </span>
            <span className="features-text11 list">
              {props.text ?? (
                <Fragment>
                  <span className="features-text26">
                    Sign up for a free consultation with one of our professional
                    consultants.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="features-features-card2">
          <div className="features-icon-container2">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a1 1 0 0 1-.707.293Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="features-text-container2 textarea">
            <span className="features-heading2">
              {props.heading2 ?? (
                <Fragment>
                  <span className="features-text18">Step 2:</span>
                </Fragment>
              )}
            </span>
            <span className="features-text12 list">
              {props.text1 ?? (
                <Fragment>
                  <span className="features-text22">
                    Discover where your conditions may align with the VA&apos;s
                    rating schedule, and submit your Intent to File for
                    compensation with the VA.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="features-features-card3">
          <div className="features-icon-container3">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a1 1 0 0 1-.707.293Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="features-text-container3">
            <span className="features-heading3 Card-Heading">
              {props.heading3 ?? (
                <Fragment>
                  <span className="features-text20">Step 3:</span>
                </Fragment>
              )}
            </span>
            <span className="features-text13 list">
              {props.text2 ?? (
                <Fragment>
                  <span className="features-text28">
                    Gather important documentation with the assistance of your
                    consultant.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="features-features-card4">
          <div className="features-icon-container4">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a1 1 0 0 1-.707.293Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="features-text-container4">
            <span className="features-heading4">
              {props.heading4 ?? (
                <Fragment>
                  <span className="features-text23">Step 4:</span>
                </Fragment>
              )}
            </span>
            <span className="features-text14 list">
              {props.text3 ?? (
                <Fragment>
                  <span className="features-text27">
                    Visit one of our licensed and qualified private providers
                    that understand the VA&apos;s claims processes.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="features-features-card5">
          <div className="features-icon-container5">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a1 1 0 0 1-.707.293Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="features-text-container5">
            <span className="features-heading5">
              {props.heading5 ?? (
                <Fragment>
                  <span className="features-text21">Step 5:</span>
                </Fragment>
              )}
            </span>
            <span className="features-text15 list">
              {props.text4 ?? (
                <Fragment>
                  <span className="features-text17">
                    Receive your completed DBQ&apos;s through an encrypted
                    e-mail.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="features-features-card6">
          <div className="features-icon-container6">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a1 1 0 0 1-.707.293Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="features-text-container6">
            <span className="features-heading6">
              {props.heading6 ?? (
                <Fragment>
                  <span className="features-text29">Step 6:</span>
                </Fragment>
              )}
            </span>
            <span className="features-text16 list">
              {props.text5 ?? (
                <Fragment>
                  <span className="features-text19">
                    Submit your DBQ&apos;s and evidence to the VA. 
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features.defaultProps = {
  text4: undefined,
  heading2: undefined,
  text5: undefined,
  heading3: undefined,
  heading5: undefined,
  text1: undefined,
  heading4: undefined,
  heading1: undefined,
  heading: undefined,
  text: undefined,
  text3: undefined,
  text2: undefined,
  heading6: undefined,
}

Features.propTypes = {
  text4: PropTypes.element,
  heading2: PropTypes.element,
  text5: PropTypes.element,
  heading3: PropTypes.element,
  heading5: PropTypes.element,
  text1: PropTypes.element,
  heading4: PropTypes.element,
  heading1: PropTypes.element,
  heading: PropTypes.element,
  text: PropTypes.element,
  text3: PropTypes.element,
  text2: PropTypes.element,
  heading6: PropTypes.element,
}

export default Features
