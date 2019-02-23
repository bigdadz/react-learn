import React, { Component } from 'react';
import './App.css';
import 'bulma'
import { observer } from 'mobx-react'
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Welcome from './components/Welcome'

import authStore from './stores/authStore'

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

@observer
class App extends Component {
  constructor() {
    super()
    authStore.initializeStore().auth().onAuthStateChanged(function(user){
      console.log(user)
      if (user) {
        authStore.setCurrentUser(user)
      } else {
        authStore.setCurrentUser(null)
      }
    })
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar authStore={authStore} /> <br />
          <Route exact path='/' component={Welcome} />
          <Route path='/signin' component={() => <SignIn authStore={authStore} />} />
          <Route path='/signup' component={() => <SignUp authStore={authStore} />} />
        </div>
      </Router>
    );
  }
}

export default App;
