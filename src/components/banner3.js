import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner3.css'

const Banner3 = (props) => {
  return (
    <div
      className={`banner3-container1 thq-section-padding ${props.rootClassName} `}
    >
      <div className="banner3-max-width thq-section-max-width">
        <div className="banner3-container2">
          <h2 className="banner3-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner3-text2">
                  Get the Compensation You Deserve
                </span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner3-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner3-text3">
                  Sign up for a free consultation and learn about our six-step
                  process to align your conditions with the VA&apos;s rating
                  schedule.
                </span>
              </Fragment>
            )}
          </h3>
        </div>
      </div>
    </div>
  )
}

Banner3.defaultProps = {
  heading1: undefined,
  content1: undefined,
  rootClassName: '',
}

Banner3.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default Banner3
