import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import 'bulma'
import { Link } from "react-router-dom";
@inject('authStore')
@observer
class Navbar extends Component {
  loginButton() {
    return (
      <div className="buttons">
        <Link to="/signup" className="button is-primary">Sign up</Link>
        <Link to="/signin" className="button is-light">Sign in</Link>
      </div>
    )
  }

  logoutButton() {
    return (
      <div className="buttons">
        <a className="button is-primary" onClick={() => this.props.authStore.signOut() }><strong>Sign out</strong></a>
      </div>
    )
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src="fusion.png" alt="logo" width="28" height="28" />
            <strong>&nbsp;React + Firebase</strong>
          </Link>

          <a href="#" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
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