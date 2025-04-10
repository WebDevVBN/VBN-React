import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero12.css'

const Hero12 = (props) => {
  return (
    <div className="hero12-header76">
      <div className="hero12-max-width thq-section-max-width">
        <div className="hero12-column1 thq-section-padding">
          <h1 className="thq-heading-1 hero12-text1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero12-text7">
                  Simplify Your VA Disability Claims Process
                </span>
              </Fragment>
            )}
          </h1>
          <p className="thq-body-large hero12-text2">
            {props.content1 ?? (
              <Fragment>
                <span className="hero12-text5">
                  Get the assistance you need to navigate the complexities of VA
                  disability claims with our streamlined six-step process.
                </span>
              </Fragment>
            )}
          </p>
          <div className="hero12-actions">
            <button className="thq-button-filled hero12-button1">
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero12-text6">Learn More</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="thq-button-outline hero12-button2">
              <span className="thq-body-small">
                {props.action2 ?? (
                  <Fragment>
                    <span className="hero12-text8">Get Started</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="hero12-content">
          <div className="hero12-column2">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero12-placeholder-image1 thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero12-placeholder-image2 thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero12-placeholder-image3 thq-img-ratio-1-1"
            />
          </div>
          <div className="hero12-column3">
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero12-placeholder-image4 thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero12-placeholder-image5 thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero12-placeholder-image6 thq-img-ratio-1-1"
            />
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero12-placeholder-image7 thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero12.defaultProps = {
  image1Alt: 'Consultation Image',
  content1: undefined,
  image7Src:
    'https://images.unsplash.com/photo-1599515421848-fde8841bf076?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDI0MzU4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  action1: undefined,
  image6Alt: 'Submitting Evidence to the VA Image',
  image2Alt: 'Aligning Conditions Image',
  image7Alt: 'Example value for image7Alt',
  image3Alt: 'Gathering Documentation Image',
  image3Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image4Alt: 'Visiting Private Providers Image',
  image2Src:
    'https://images.unsplash.com/photo-1708793559923-b1d38cdfacf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDI0MzU4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1643877325472-7dff84b21c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDI0MzU4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1622676614630-a9109126264a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDI0MzU4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  heading1: undefined,
  image5Alt: 'Receiving Completed DBQs Image',
  image6Src:
    'https://images.unsplash.com/photo-1606618742324-d836889351e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NDI0MzU4Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: undefined,
}

Hero12.propTypes = {
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
  image7Src: PropTypes.string,
  action1: PropTypes.element,
  image6Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image1Src: PropTypes.string,
  image4Src: PropTypes.string,
  image5Src: PropTypes.string,
  heading1: PropTypes.element,
  image5Alt: PropTypes.string,
  image6Src: PropTypes.string,
  action2: PropTypes.element,
}

export default Hero12
