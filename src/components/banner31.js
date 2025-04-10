import React from 'react'

import PropTypes from 'prop-types'

import './banner31.css'

const Banner31 = (props) => {
  return (
    <div className="banner31-container1 thq-section-padding">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="banner31-image thq-img-ratio-16-9"
      />
      <div className="banner31-max-width thq-section-max-width">
        <div className="banner31-container2"></div>
      </div>
    </div>
  )
}

Banner31.defaultProps = {
  image1Alt: 'Image of a person reviewing documents',
  image1Src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

Banner31.propTypes = {
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Banner31
