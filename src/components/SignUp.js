import React, { Component } from 'react';
import 'bulma'
import { inject } from 'mobx-react';

@inject('authStore')
class Login extends Component {
  constructor () {
    super()
  }

  handlerSignUp () {
    this.props.authStore.signUp()
  }

  render() {
    return (
      <div className="columns is-mobile">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Sign up
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
                <button className="button is-primary" onClick={this.handlerSignUp.bind(this)}>Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;