import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './app'
import Files from './files'
import Environment from './environment'

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/app">Process</Link>
        </li>
        <li>
          <Link to="/files">Files</Link>
        </li>
        <li>
          <Link to="/environment">Environment</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/app">
          <App />
        </Route>
        <Route path="/files">
          <Files />
        </Route>
        <Route path="/environment">
          <Environment />
        </Route>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
