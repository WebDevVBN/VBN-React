import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <a href="#inspiration" className="component-link1 Anchor button">
        {props.link ?? (
          <Fragment>
            <span className="component-text4">Services</span>
          </Fragment>
        )}
      </a>
      <span className="component-link2 button">
        {props.link1 ?? (
          <Fragment>
            <span className="component-text2">Careers</span>
          </Fragment>
        )}
      </span>
      <span className="component-link3 Anchor button">
        {props.link2 ?? (
          <Fragment>
            <span className="component-text5">Resources</span>
          </Fragment>
        )}
      </span>
      <button className="component-cta-btn button">
        <span>
          {props.ctaBtn ?? (
            <Fragment>
              <span className="component-text3">Free Consultation</span>
            </Fragment>
          )}
        </span>
      </button>
    </div>
  )
}

AppComponent.defaultProps = {
  link1: undefined,
  ctaBtn: undefined,
  link: undefined,
  link2: undefined,
}

AppComponent.propTypes = {
  link1: PropTypes.element,
  ctaBtn: PropTypes.element,
  link: PropTypes.element,
  link2: PropTypes.element,
}

export default AppComponent
