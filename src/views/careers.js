import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Banner1 from '../components/banner1'
import './careers.css'

const Careers = (props) => {
  return (
    <div className="careers-container10">
      <Helmet>
        <title>Home Page</title>
        <meta property="og:title" content="Home Page" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/fbed6fab-98eb-4dfc-9747-b6027955fbc1/8a98903d-6f4f-4110-bd6f-bd17c69f64f9?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div data-role="Header" className="careers-navbar-container"></div>
      <header className="careers-container11">
        <header data-thq="thq-navbar" className="careers-navbar-interactive">
          <img
            alt="logo"
            src="/veteran%20file-1500h.png"
            className="careers-image1"
          />
          <div data-thq="thq-navbar-nav" className="careers-desktop-menu">
            <nav className="careers-links1">
              <div className="careers-buttons"></div>
              <Link to="/" className="careers-link11 thq-body-small button">
                Home
              </Link>
              <Link
                to="/services"
                className="careers-link21 thq-body-small button"
              >
                Services
              </Link>
              <Link
                to="/about-us"
                className="careers-link31 thq-body-small button"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="careers-link41 thq-body-small button"
              >
                Contact
              </Link>
              <Link
                to="/careers"
                className="careers-link51 thq-body-small button"
              >
                Careers
              </Link>
            </nav>
            <Link to="/free-consultation" className="careers-navlink button">
              Free Consultation
            </Link>
          </div>
          <div data-thq="thq-burger-menu" className="careers-burger-menu">
            <svg viewBox="0 0 1024 1024" className="careers-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="careers-mobile-menu">
            <div className="careers-nav">
              <div className="careers-top">
                <img
                  alt="logo"
                  src="/veteran%20file-1500h.png"
                  className="careers-logo"
                />
                <div data-thq="thq-close-menu" className="careers-close-menu">
                  <svg viewBox="0 0 1024 1024" className="careers-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="careers-links2">
                <Link to="/" className="careers-link12 thq-link thq-body-small">
                  Home
                </Link>
                <Link
                  to="/services"
                  className="careers-link22 thq-link thq-body-small"
                >
                  Services
                </Link>
                <Link
                  to="/about-us"
                  className="careers-link32 thq-link thq-body-small"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="careers-link42 thq-link thq-body-small"
                >
                  Contact
                </Link>
                <Link
                  to="/careers"
                  className="careers-link52 thq-link thq-body-small"
                >
                  Careers
                </Link>
                <Link
                  to="/free-consultation"
                  className="careers-link53 thq-link thq-body-small"
                >
                  Free Consultation
                </Link>
              </nav>
            </div>
          </div>
        </header>
      </header>
      <div className="careers-container12"></div>
      <Banner1
        content1={
          <Fragment>
            <span className="careers-text1">
              &quot;Veterans Serving Veterans&quot;
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="careers-text2">
              Careers With Veteran Benefits Network
            </span>
          </Fragment>
        }
      ></Banner1>
      <div className="careers-section-separator1"></div>
      <div className="careers-section-separator2"></div>
      <div className="careers-section-separator3"></div>
      <div className="careers-section-separator4"></div>
      <div>
        <div className="careers-container14">
          <Script
            html={`<script>
              (function(){
    const form = document.getElementById('jobAppForm');
    const message = document.getElementById('formMessage');

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          form.reset();
          message.classList.remove('hidden');
          message.classList.add('block');
        } else {
          alert('There was a problem submitting your form.');
        }
      } catch (error) {
        alert('Submission failed. Please try again later.');
      }
    });
  })()
              </script>`}
          ></Script>
        </div>
      </div>
      <section className="px-6 text-center py-20 bg-white careers-container15">
        <h2 className="font-bold mb-4 text-blue-900 text-3xl">Apply Now</h2>
        <p className="careers-text4 mb-6 text-gray-700">
          Fill out the form and upload your resume to get started.
        </p>
        <form
          id="jobAppForm"
          action="https://formspree.io/f/xvgkdkle"
          method="POST"
          enctype="multipart/form-data"
          className="careers-form border shadow-md mx-auto max-w-2xl bg-gray-50 rounded-xl p-6"
        >
          <div className="careers-container16 text-left mb-4">
            <label
              htmlFor="full-name"
              className="careers-text5 mb-1 block font-semibold text-gray-800"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="Full Name"
              required
              className="border border-gray-300 rounded py-2 w-full px-4 input"
            />
          </div>
          <div className="careers-container17 text-left mb-4">
            <label
              htmlFor="email"
              className="careers-text6 mb-1 block font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              className="border border-gray-300 rounded py-2 w-full px-4 input"
            />
          </div>
          <div className="careers-container18 text-left mb-4">
            <label
              htmlFor="phone"
              className="careers-text7 mb-1 block font-semibold text-gray-800"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="Phone"
              className="border border-gray-300 rounded py-2 w-full px-4 input"
            />
          </div>
          <div className="careers-container19 text-left mb-4">
            <label
              htmlFor="position"
              className="careers-text8 mb-1 block font-semibold text-gray-800"
            >
              Position
            </label>
            <input
              type="text"
              id="position"
              name="Position"
              required
              className="border border-gray-300 rounded py-2 w-full px-4 input"
            />
          </div>
          <div className="careers-container20 text-left mb-4">
            <label
              htmlFor="resume"
              className="careers-text9 mb-1 block font-semibold text-gray-800"
            >
              Upload Resume (PDF, DOC)
            </label>
            <input
              type="file"
              id="resume"
              name="Resume"
              accept=".pdf,.doc,.docx"
              required
              className="border border-gray-300 rounded py-2 w-full px-4 input"
            />
          </div>
          <button
            type="submit"
            className="careers-button px-6 hover:bg-blue-900 font-semibold bg-blue-800 rounded-lg py-2 text-white button"
          >
            {' '}
            Submit Application
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </button>
        </form>
      </section>
      <div className="careers-footer-container">
        <div className="careers-footer">
          <div className="careers-social-links">
            <svg viewBox="0 0 877.7142857142857 1024" className="careers-icon5">
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
          </div>
          <div className="careers-copyright-container">
            <svg viewBox="0 0 1024 1024" className="careers-icon7">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="Anchor">Copyright, 2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers
