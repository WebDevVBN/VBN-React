import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Banner1 from '../components/banner1'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container1">
      <Helmet>
        <title>Home Page</title>
        <meta property="og:title" content="Home Page" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fbed6fab-98eb-4dfc-9747-b6027955fbc1/6ea89026-3255-402a-a11c-b23816eedd7c?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div data-role="Header" className="contact-navbar-container"></div>
      <header className="contact-container2">
        <header data-thq="thq-navbar" className="contact-navbar-interactive">
          <img
            alt="logo"
            src="/veteran%20file-1500h.png"
            className="contact-image1"
          />
          <div data-thq="thq-navbar-nav" className="contact-desktop-menu">
            <nav className="contact-links1">
              <div className="contact-buttons"></div>
              <Link to="/" className="contact-link11 thq-body-small button">
                Home
              </Link>
              <Link
                to="/services"
                className="contact-link21 thq-body-small button"
              >
                Services
              </Link>
              <Link
                to="/about-us"
                className="contact-link31 thq-body-small button"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="contact-link41 thq-body-small button"
              >
                Contact
              </Link>
              <Link
                to="/careers"
                className="contact-link51 thq-body-small button"
              >
                Careers
              </Link>
            </nav>
            <Link to="/free-consultation" className="contact-navlink button">
              Free Consultation
            </Link>
          </div>
          <div data-thq="thq-burger-menu" className="contact-burger-menu">
            <svg viewBox="0 0 1024 1024" className="contact-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="contact-mobile-menu">
            <div className="contact-nav">
              <div className="contact-top">
                <img
                  alt="logo"
                  src="/veteran%20file-1500h.png"
                  className="contact-logo"
                />
                <div data-thq="thq-close-menu" className="contact-close-menu">
                  <svg viewBox="0 0 1024 1024" className="contact-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="contact-links2">
                <Link to="/" className="contact-link12 thq-link thq-body-small">
                  Home
                </Link>
                <Link
                  to="/services"
                  className="contact-link22 thq-link thq-body-small"
                >
                  Services
                </Link>
                <Link
                  to="/about-us"
                  className="contact-link32 thq-link thq-body-small"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="contact-link42 thq-link thq-body-small"
                >
                  Contact
                </Link>
                <Link
                  to="/careers"
                  className="contact-link52 thq-link thq-body-small"
                >
                  Careers
                </Link>
                <Link
                  to="/free-consultation"
                  className="contact-link53 thq-link thq-body-small"
                >
                  Free Consultation
                </Link>
              </nav>
            </div>
          </div>
        </header>
      </header>
      <div className="contact-container3"></div>
      <Banner1
        content1={
          <Fragment>
            <span className="contact-text1">
              &quot;Veterans Serving Veterans&quot;
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="contact-text2">
              VA Disability Benefits Consulting Services
            </span>
          </Fragment>
        }
      ></Banner1>
      <div id="inspiration" className="contact-features">
        <div className="contact-heading-container">
          <h2 className="contact-text3 BigCard-Heading">
            Contact Us Coming Soon.
          </h2>
        </div>
      </div>
      <div className="contact-section-separator1"></div>
      <div className="contact-section-separator2"></div>
      <div className="contact-section-separator3"></div>
      <div className="contact-section-separator4"></div>
      <div className="contact-footer-container">
        <div className="contact-footer">
          <div className="contact-social-links">
            <svg viewBox="0 0 877.7142857142857 1024" className="contact-icon5">
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
          </div>
          <div className="contact-copyright-container">
            <svg viewBox="0 0 1024 1024" className="contact-icon7">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="Anchor">Copyright, 2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
