import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './client-component/layout/Navbar'
import Dashboard from './client-component/dashboard/Dashboard'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route path='/' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App