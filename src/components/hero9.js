import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero9.css'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero9-text4">
                  Simplify Your VA Disability Claims Process
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero9-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero9-text3">
                  Let us guide you through the six-step process to help you
                  secure the VA disability benefits you deserve.
                </span>
              </Fragment>
            )}
          </p>
          <div className="hero9-actions"></div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1601857201793-a5ba29765a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDI0MzgwNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Veteran receiving assistance',
  content1: undefined,
  heading1: undefined,
}

Hero9.propTypes = {
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Hero9
