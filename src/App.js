import React, { Component } from 'react';
import './App.css';
import 'bulma'
import { observer } from 'mobx-react'
import Navbar from './Navbar'
import Login from './Login'
import Welcome from './Welcome'

import authStore from './stores/authStore'

import firebase from 'firebase/app';
import 'firebase/auth';

@observer
class App extends Component {
  constructor() {
    super()
    var config = {
      apiKey: "AIzaSyC3VUQ1IEZ-7zczU-m4YXRMJrBNK6XpAzU",
      authDomain: "bigdad-react-learn.firebaseapp.com",
      databaseURL: "https://bigdad-react-learn.firebaseio.com",
      projectId: "bigdad-react-learn",
      storageBucket: "bigdad-react-learn.appspot.com",
      messagingSenderId: "854364423895"
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(function (user) {
      console.log(user)
      if (user) {
        authStore.setCurrentUser(user)
      } else {
        authStore.setCurrentUser(null)
      }
    });
  }

  toggleLogin() {
    if (authStore.currentUser == null) {
      return(
        <Login authStore={authStore} firebase={firebase} />
      )
    } else {
      return (
        <Welcome />
      )
    }
  }

  render() {
    return (
      <div className="container">
        <Navbar authStore={authStore} firebase={firebase} /> <br />
        {this.toggleLogin()}     
      </div>
    );
  }
}

export default App;
