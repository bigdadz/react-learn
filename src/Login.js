import React, { Component } from 'react';
import 'bulma'
// import { observer } from 'mobx-react';

// @observer
class Login extends Component {
  constructor () {
    super()
  }

  handlerLogin () {
    this.props.firebase.auth().signInWithEmailAndPassword(this.props.authStore.email, this.props.authStore.password).catch(function (error) {
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  render() {
    return (
      <div className="columns is-mobile">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Login
              </p> 
            </header>
            <div className="card-content">
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input 
                    className="input" 
                    type="email" 
                    placeholder="Email" 
                    onChange={(e) => this.props.authStore.setEmail(e.target.value)} 
                    />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => this.props.authStore.setPassword(e.target.value)}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="has-text-right">
                <button className="button is-primary" onClick={this.handlerLogin.bind(this)}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;