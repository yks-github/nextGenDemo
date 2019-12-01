import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './app'
import Files from './files'
import Environment from './environment'


const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/files" component={Files} />
      <Route path="/environment" component={Environment} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
