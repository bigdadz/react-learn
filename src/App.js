import React, { Component } from 'react';
import './App.css';
import 'bulma'
import Navbar from './Navbar'
import Login from './Login'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar /> <br />
        <Login />
      </div>
    );
  }
}

export default App;
