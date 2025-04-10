import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Banner1 from '../components/banner1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Home Page</title>
        <meta property="og:title" content="Home Page" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fbed6fab-98eb-4dfc-9747-b6027955fbc1/bdcf8eca-6836-48a2-a24a-614aeab1fcd0?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div data-role="Header" className="home-navbar-container"></div>
      <header className="home-container2">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <img
            alt="logo"
            src="/veteran%20file-1500h.png"
            className="home-image1"
          />
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <nav className="home-links1">
              <div className="home-buttons"></div>
              <Link to="/" className="home-link11 thq-body-small button">
                Home
              </Link>
              <Link
                to="/services"
                className="home-link21 thq-body-small button"
              >
                Services
              </Link>
              <Link
                to="/about-us"
                className="home-link31 thq-body-small button"
              >
                About Us
              </Link>
              <Link to="/contact" className="home-link41 thq-body-small button">
                Contact
              </Link>
              <Link to="/careers" className="home-link51 thq-body-small button">
                Careers
              </Link>
            </nav>
            <Link to="/free-consultation" className="home-navlink button">
              Free Consultation
            </Link>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <img
                  alt="logo"
                  src="/veteran%20file-1500h.png"
                  className="home-logo"
                />
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="home-links2">
                <Link to="/" className="home-link12 thq-link thq-body-small">
                  Home
                </Link>
                <Link
                  to="/services"
                  className="home-link22 thq-link thq-body-small"
                >
                  Services
                </Link>
                <Link
                  to="/about-us"
                  className="home-link32 thq-link thq-body-small"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="home-link42 thq-link thq-body-small"
                >
                  Contact
                </Link>
                <Link
                  to="/careers"
                  className="home-link52 thq-link thq-body-small"
                >
                  <span>Careers</span>
                  <br></br>
                </Link>
                <Link
                  to="/free-consultation"
                  className="home-link53 thq-link thq-body-small"
                >
                  Free Consultation
                </Link>
              </nav>
            </div>
          </div>
        </header>
      </header>
      <div className="home-container3"></div>
      <Banner1
        content1={
          <Fragment>
            <span className="home-text12">
              &quot;Veterans Serving Veterans&quot;
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text13">
              VA Disability Benefits Consulting Services
            </span>
          </Fragment>
        }
      ></Banner1>
      <div id="inspiration" className="home-features">
        <div className="home-heading-container">
          <h2 className="home-text14 BigCard-Heading">Our Six Step Process</h2>
        </div>
        <div className="home-cards-container">
          <div className="home-features-card1">
            <div className="home-icon-container1">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a1 1 0 0 1-.707.293Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="home-text-container1 textarea">
              <span className="home-heading1 Card-Heading">Step 1</span>
              <span className="home-text15 list">
                Sign up for a free consultation with one of our professional
                consultants.
              </span>
            </div>
          </div>
          <div className="home-features-card2">
            <div className="home-icon-container2">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a1 1 0 0 1-.707.293Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="home-text-container2 textarea">
              <span className="home-heading2">Step 2:</span>
              <span className="home-text16 list">
                Discover where your conditions may align with the VA&apos;s
                rating schedule, and submit your Intent to File for compensation
                with the VA.
              </span>
            </div>
          </div>
          <div className="home-features-card3">
            <div className="home-icon-container3">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a1 1 0 0 1-.707.293Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="home-text-container3">
              <span className="home-heading3 Card-Heading">Step 3:</span>
              <span className="home-text17 list">
                Gather important documentation with the assistance of your
                consultant.
              </span>
            </div>
          </div>
          <div className="home-features-card4">
            <div className="home-icon-container4">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a1 1 0 0 1-.707.293Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="home-text-container4">
              <span className="home-heading4">Step 4:</span>
              <span className="home-text18 list">
                Visit one of our licensed and qualified private providers that
                understand the VA&apos;s claims processes.
              </span>
            </div>
          </div>
          <div className="home-features-card5">
            <div className="home-icon-container5">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a1 1 0 0 1-.707.293Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="home-text-container5">
              <span className="home-heading5">Step 5:</span>
              <span className="home-text19 list">
                Receive your completed DBQ&apos;s through an encrypted e-mail.
              </span>
            </div>
          </div>
          <div className="home-features-card6">
            <div className="home-icon-container6">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M9.172 18.657a1 1 0 0 1-.707-1.707l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.656 5.657a1 1 0 0 1 0 1.414L9.88 18.364a1 1 0 0 1-.707.293Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="home-text-container6">
              <span className="home-heading6">Step 6:</span>
              <span className="home-text20 list">
                Submit your DBQ&apos;s and evidence to the VA. 
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator1"></div>
      <div className="home-section-separator2"></div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon26">
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
          </div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon28">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="Anchor">Copyright, 2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
