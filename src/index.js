import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Services from './views/services'
import Contact from './views/contact'
import FreeConsultation from './views/free-consultation'
import AboutUs from './views/about-us'
import Careers from './views/careers'
import Home from './views/home'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Services} exact path="/services" />
        <Route component={Contact} exact path="/contact" />
        <Route component={FreeConsultation} exact path="/free-consultation" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={Careers} exact path="/careers" />
        <Route component={Home} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
