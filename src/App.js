import React, { Component } from 'react';
import './App.css';
import 'bulma'
import { inject, observer } from 'mobx-react';
import Navbar from './components/Navbar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Welcome from './components/Welcome'

import { Route, withRouter } from "react-router-dom";

@inject('authStore')
@withRouter
@observer
class App extends Component {
  constructor(props) {
    super(props)
    this.props.authStore
      .initializeStore()
      .auth()
      .onAuthStateChanged((user) => {
        console.log(user)
        if (user) {
          this.props.authStore.setCurrentUser(user)
        } else {
          this.props.authStore.setCurrentUser(null)
        }
      })
  }

  render() {
    return (
      <div className="container">
        <Navbar /> <br />
        <Route exact path='/' component={Welcome} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </div>
    );
  }
}

export default App;
