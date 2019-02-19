import React, { Component } from 'react';
import 'bulma'
import { observer } from 'mobx-react'

@observer
class Navbar extends Component {
  loginButton() {
    return (
      <div className="buttons">
        <a className="button is-primary"><strong>Sign up</strong></a>
        <a className="button is-light">Log in</a>
      </div>
    )
  }

  logoutButton() {
    return (
      <div className="buttons">
        <a className="button is-primary" onClick={() => this.props.firebase.auth().signOut() }><strong>Logout</strong></a>
      </div>
    )
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bigdad-react-learn.firebaseapp.com/">
            <img src="fusion.png" alt="logo" width="28" height="28" />
            <strong>&nbsp;React + Firebase</strong>
          </a>

          <a href="#" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            {/* <a className="navbar-item">Home</a>
            <a className="navbar-item">Documentation</a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div> */}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              { (this.props.authStore.currentUser == null) ? this.loginButton() : this.logoutButton() }
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;